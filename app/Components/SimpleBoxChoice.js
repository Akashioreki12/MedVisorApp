import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import CountrySideIcon from '../assets/Icons/CountrySideIcon';
import CityIcon from '../assets/Icons/CityIcon';

function SimpleBoxChoice(props) {
  const [selectedBox, setSelectedBox] = useState('left');

  const handleBoxPress = (box) => {
    setSelectedBox(box);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.leftBox,
          { borderColor: selectedBox === 'left' ? '#1578DA' : '#F1F1F1' },
        ]}
        onPress={() => handleBoxPress('left')}
      >
              <CountrySideIcon color={selectedBox === 'left' ? '#1578DA' : '#F1F1F1'} />
          </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.rightBox,
          { borderColor: selectedBox === 'right' ? '#1578DA' : '#F1F1F1' },
        ]}
        onPress={() => handleBoxPress('right')}
      >
              <CityIcon color={selectedBox === 'right' ? '#1578DA' : '#F1F1F1'} />
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
    height: '8%',
    width: '30%',
    marginRight: '2%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  rightBox: {
    borderWidth: 2,
    height: '8%',
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
});
