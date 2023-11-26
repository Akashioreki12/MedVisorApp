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
      setChoice(date);
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
