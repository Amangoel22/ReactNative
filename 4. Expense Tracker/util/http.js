import axios from 'axios';

const BACKEND_URL = 'https://expense-tracker-e1c71-default-rtdb.firebaseio.com';

//post
export async function storeExpense(expenseData){
    const response = await axios.post(BACKEND_URL + '/expenses.json',expenseData);
    response.data.name; //name holds auto gen id by firebase
    return id;
}

//get
export async function getExpense(){
    const response = await axios.get(BACKEND_URL + '/expenses.json');

    const expenses = [];

    for (const key in response.data){
        const expenseObj = {
            id: key,
            amount: response.data[key].amount,
            date: new Date(response.data[key].date),
            description: response.data[key].description,
        };
        expenses.push();
    }
    return expenses;$
}

//update
export function updateExpense(id, expenseData){
    return axios.put(BACKEND_URL + `/expenses/${id}.json`, expenseData);  //no need for async await as we dont need immediate output, the caller next time can see and wait
}

//delete
export async function deleteExpense(){
    return axios.delete(BACKEND_URL + `/expenses/${id}.json`);  //url differs from first two as we need to pass specific id
}
