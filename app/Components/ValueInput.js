import React , {useState} from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TextInput} from 'react-native';

function ValueInput({setChoice,type})
{
    const [inputText, setInputText] = useState(0);
    
  const handleIncrement = () => {
  const currentValue = parseFloat(inputText);

  if (!isNaN(currentValue) || inputText === '') {
    const newValue = isNaN(currentValue) ? 1 : currentValue + 1;
    setInputText(newValue.toString()); // Convert back to string
    setChoice(newValue);
    console.log(inputText);
    console.log(newValue);
  } else {
    // Handle the case where the input is not a valid number
    console.log('Invalid number input');
  }
};

    
const handleDecrement = () => {
  const currentValue = parseFloat(inputText.replace(',', '.'));

  if (!isNaN(currentValue) || inputText === '') {
    const newValue = isNaN(currentValue) ? 1 : currentValue - 1;
    setInputText(newValue.toString()); // Convert back to string
    setChoice(newValue);
    console.log(inputText);
    console.log(newValue);
  } else {
    // Handle the case where the input is not a valid number
    console.log('Invalid number input');
  }
};

    const handleInputChange = (text) => {
  if (text === '') {
    setInputText(''); // Set the input to an empty string
    setChoice(0);     // or setChoice('') depending on your requirements
  } else {
    const value = parseFloat(text.replace(',', '.'));

    if (!isNaN(value)) {
      const formattedValue = type === 'float' ? parseFloat(value.toFixed(2)) : value;
      setInputText(text);
      setChoice(formattedValue);
    } else {
      // Handle the case where the input is not a valid number
      console.log('Invalid number input');
    }
  }
};

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.Increment} onPress={handleIncrement}><Text style={styles.textIncrement}>+
            </Text>
            </TouchableOpacity>
            <TextInput 
                value={inputText.toString()}
                keyboardType='numeric'
                returnKeyType='done'
                style={styles.input}
                              onChangeText={handleInputChange}

            />
            <TouchableOpacity style={styles.Decrement} onPress={handleDecrement}><Text  style={styles.textIncrement}>-</Text></TouchableOpacity>
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