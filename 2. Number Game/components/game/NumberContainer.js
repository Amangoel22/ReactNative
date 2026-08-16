import {View, Text, StyleSheet} from 'react-native';
import colors from "../../util/colors"

function NumberContainer({children}){
    return (
        <View style = {styles.container}>
            <Text style = {styles.numberText}>{children}</Text>
        </View>
    )
}

export default NumberContainer;

const styles = StyleSheet.create({
    container:{
        borderWidth: 4,
        borderColor: colors.headers,
        padding: 24,
        borderRadius: 8,
        margin: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText:{
        color: colors.headers,
        fontSize: 36,
        fontWeight: 'bold',
    }
})
//needed view as border radius wont work on text
