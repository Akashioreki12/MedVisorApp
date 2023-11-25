import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TextInput} from 'react-native';

function ValueInput(props) {
    return (
        <View style={styles.container}>
            
            <TouchableOpacity style={styles.Increment}><Text style={styles.textIncrement}>+
            </Text>
                
            
            </TouchableOpacity>

            <TextInput
              placeholder="55.26"
              style={styles.input}
            />
            <TouchableOpacity style={styles.Decrement}><Text  style={styles.textIncrement}>-</Text></TouchableOpacity>


            


        </View>
    );
}

export default ValueInput;
const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',  
        backgroundColor: '#1A7DDE',
        width: '70%',
        borderRadius: '50%',
        height: '55%',
        alignItems : 'center',
    },
    input: {
        backgroundColor : '#fff',
        width: '60%',
        height: '90%',
        textAlign : 'center',

   
    },

    Increment: {
        width: '20%',
        justifyContent: 'center',
        alignItems : 'center',
    },

    Decrement: {
        width: '20%',
        
         justifyContent: 'center',
        alignItems : 'center',
        
    },

    textIncrement: {
        color: '#fff',  
        fontSize : 25,
    },

   

   
})