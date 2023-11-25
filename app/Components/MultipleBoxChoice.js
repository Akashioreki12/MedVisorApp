import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

function MultipleBoxChoice({ leftIcon, centerLeftIcon, centerRightIcon, rightIcon }) {
  const [selectedBox, setSelectedBox] = useState('centerRight');

  const handleBoxPress = (box) => {
    setSelectedBox(box);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.box,
          { borderColor: selectedBox === 'left' ? '#1578DA' : '#F1F1F1' },
        ]}
        onPress={() => handleBoxPress('left')}
      >
              {React.cloneElement(leftIcon, { color: selectedBox === 'left' ? '#1578DA' : '#F1F1F1' })}
          </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.box,
          { borderColor: selectedBox === 'centerLeft' ? '#1578DA' : '#F1F1F1' },
        ]}
        onPress={() => handleBoxPress('centerLeft')}
      >
              {React.cloneElement(centerLeftIcon, { color: selectedBox === 'centerLeft' ? '#1578DA' : '#F1F1F1' })}
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.box,
          { borderColor: selectedBox === 'centerRight' ? '#1578DA' : '#F1F1F1' },
        ]}
        onPress={() => handleBoxPress('centerRight')}
      >
              {React.cloneElement(centerRightIcon, { color: selectedBox === 'centerRight' ? '#1578DA': '#F1F1F1' })}
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.box,
          { borderColor: selectedBox === 'right' ? '#1578DA' : '#F1F1F1' },
        ]}
        onPress={() => handleBoxPress('right')}
      >
              {React.cloneElement(rightIcon, { color: selectedBox === 'right' ? '#1578DA' : '#F1F1F1' })}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: '100%',
    paddingHorizontal: 16,
  },
  box: {
    marginRight: '2%',
    borderWidth: 2,
    height: '50%',
    width: '22%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
});

export default MultipleBoxChoice;
