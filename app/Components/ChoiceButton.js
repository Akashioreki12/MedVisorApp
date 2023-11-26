import React, { useState } from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';

function ChoiceButton({ leftChoiceLabel, rightChoiceLabel, setChoice }) {
  const [selectedChoice, setSelectedChoice] = useState(leftChoiceLabel);

  const handleChoicePress = (choice) => {
      setSelectedChoice(choice);
      setChoice(choice);
  };

    return (
            <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.leftChoice,
          { backgroundColor: selectedChoice === leftChoiceLabel ? '#1A7DDE' : 'transparent' },
        ]}
        onPress={() => handleChoicePress(leftChoiceLabel)}
      >
        <Text
          style={[
            styles.choiceText,
            { color: selectedChoice === leftChoiceLabel ? '#fff' : '#1A7DDE' },
          ]}
        >
          {leftChoiceLabel}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.rightChoice,
          { backgroundColor: selectedChoice === rightChoiceLabel ? '#1A7DDE' : 'transparent' },
        ]}
        onPress={() => handleChoicePress(rightChoiceLabel)}
      >
        <Text
          style={[
            styles.choiceText,
            { color: selectedChoice === rightChoiceLabel ? '#fff' : '#1A7DDE' },
          ]}
        >
          {rightChoiceLabel}
        </Text>
      </TouchableOpacity>
    </View>   
  );
}
export default ChoiceButton;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(70,119,238,0.3)',
    flexDirection: 'row',
    width: '70%',
    height: '55%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 100,
    paddingLeft: '2%',
    paddingRight: '2%',
  },
  choiceText: {
    fontSize: 20,
  },
  leftChoice: {
    width: '50%',
    height: '80%',
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  rightChoice: {
    width: '50%',
    height: '80%',
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    },
  
    button: {
        flex : 1,
        alignItems: 'center',
        backgroundColor : 'red',  
  },
});
