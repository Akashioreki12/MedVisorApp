import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import CountrySideIcon from '../assets/Icons/CountrySideIcon';
import CityIcon from '../assets/Icons/CityIcon';

function SimpleBoxChoice({setChoice, leftChoiceLabel,rightChoiceLabel}) {
  const [selectedBox, setSelectedBox] = useState(leftChoiceLabel);

  const handleBoxPress = (box) => {
      setSelectedBox(box);
      setChoice(box);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.leftBox,
          { borderColor: selectedBox === leftChoiceLabel ? '#1578DA' : '#F1F1F1' },
        ]}
        onPress={() => handleBoxPress(leftChoiceLabel)}
      >
              <CountrySideIcon color={selectedBox === leftChoiceLabel ? '#1578DA' : '#F1F1F1'} />
          </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.rightBox,
          { borderColor: selectedBox === rightChoiceLabel ? '#1578DA' : '#F1F1F1' },
        ]}
        onPress={() => handleBoxPress(rightChoiceLabel)}
      >
              <CityIcon color={selectedBox === rightChoiceLabel ? '#1578DA' : '#F1F1F1'} />
          </TouchableOpacity>
    </View>
  );
}

export default SimpleBoxChoice;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'center',
  },

  leftBox: {
    borderWidth: 2,
    height: '50%',
    width: '30%',
    marginRight: '2%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  rightBox: {
    borderWidth: 2,
    height: '50%',
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
});
