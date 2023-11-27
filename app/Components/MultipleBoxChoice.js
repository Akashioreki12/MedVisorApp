import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

function MultipleBoxChoice({ leftIcon, centerLeftIcon, centerRightIcon, rightIcon, setChoice, leftLabelChoice, centerLeftLabelChoice,centerRightLabelChoice,rightLabelChoice }) {
  const [selectedBox, setSelectedBox] = useState(centerRightLabelChoice);

  const handleBoxPress = (box) => {
      setSelectedBox(box);
      setChoice(box);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.box,
          { borderColor: selectedBox === leftLabelChoice ? '#1578DA' : '#F1F1F1' },
        ]}
        onPress={() => handleBoxPress(leftLabelChoice)}
      >
              {React.cloneElement(leftIcon, { color: selectedBox === leftLabelChoice ? '#1578DA' : '#F1F1F1' })}
          </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.box,
          { borderColor: selectedBox === centerLeftLabelChoice ? '#1578DA' : '#F1F1F1' },
        ]}
        onPress={() => handleBoxPress(centerLeftLabelChoice)}
      >
              {React.cloneElement(centerLeftIcon, { color: selectedBox === centerLeftLabelChoice ? '#1578DA' : '#F1F1F1' })}
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.box,
          { borderColor: selectedBox === centerRightLabelChoice ? '#1578DA' : '#F1F1F1' },
        ]}
        onPress={() => handleBoxPress(centerRightLabelChoice)}
      >
              {React.cloneElement(centerRightIcon, { color: selectedBox === centerRightLabelChoice ? '#1578DA': '#F1F1F1' })}
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.box,
          { borderColor: selectedBox === rightLabelChoice ? '#1578DA' : '#F1F1F1' },
        ]}
        onPress={() => handleBoxPress(rightLabelChoice)}
      >
              {React.cloneElement(rightIcon, { color: selectedBox === rightLabelChoice ? '#1578DA' : '#F1F1F1' })}
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
