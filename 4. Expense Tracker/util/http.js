import axios from 'axios';

const BACKEND_URL = 'https://expense-tracker-e1c71-default-rtdb.firebaseio.com';
export async function storeExpense(expenseData){
    const response = await axios.post(BACKEND_URL + '/expenses.json',expenseData);
    response.data.name; //name holds auto gen id by firebase
    return id;
}

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
    return expenses;
}
