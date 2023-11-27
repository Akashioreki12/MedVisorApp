import React, { useState } from 'react';
import { View , StyleSheet} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
function BirthPicker({setChoice}) {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
    

    const currentDateObject = new Date();
    const selected = new Date(currentDate)
    const ageSeconds = currentDateObject - selected;
    const age = Math.floor(ageSeconds / (365.25 * 24 * 60 * 60 * 1000));
      setChoice(age);
    // Additional logic if needed with the selected date
  };
  return (
    <View>
          <DateTimePicker
              style={styles.dateTimePicker}
        value={date}
        mode="date"
        is24Hour={true}
        display="default"
        onChange={onChange}
      />
    </View>
  );
}

export default BirthPicker;

const styles = StyleSheet.create({
    dateTimePicker: {
    borderRadius: 8, // Set border radius
        marginTop: 20,
  },
})
