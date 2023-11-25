import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import BoldCrossIcon from '../assets/Icons/BoldCrossIcon';
import NoSmokeIcon from '../assets/Icons/NoSmokeIcon';
import UnknownIcon from '../assets/Icons/UnknownIcon';
import SmokeIcon from '../assets/Icons/SmokeIcon';

function MultipleBoxChoice(props) {
  const [selectedBox, setSelectedBox] = useState(null);

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
              
              <BoldCrossIcon color={selectedBox==='left' ? '#1578DA' : '#F1F1F1'}/>
          </TouchableOpacity>



      <TouchableOpacity
        style={[
          styles.box,
          { borderColor: selectedBox === 'centerLeft' ? '#1578DA' : '#F1F1F1' },
        ]}
        onPress={() => handleBoxPress('centerLeft')}
          >
              <NoSmokeIcon color = {selectedBox === 'centerLeft' ? '#1578DA' : '#F1F1F1'}/>
                  
</TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.box,
          { borderColor: selectedBox === 'centerRight' ? '#1578DA' : '#F1F1F1' },
        ]}
        onPress={() => handleBoxPress('centerRight')}
          >
              <SmokeIcon color={selectedBox === 'centerRight' ? '#1578DA' : '#F1F1F1'}/>
     </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.box,
          { borderColor: selectedBox === 'right' ? '#1578DA' : '#F1F1F1' },
        ]}
        onPress={() => handleBoxPress('right')}
          >
              <UnknownIcon color = {selectedBox === 'right' ? '#1578DA' : '#F1F1F1'}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'space-between', 
    paddingHorizontal: 16,
  },
  box: {
    borderWidth: 2,
    height: '25%',
    width: '22%', 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
});

export default MultipleBoxChoice;
