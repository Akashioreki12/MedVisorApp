import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CrossMarkIcon from '../assets/Icons/CrossMarkIcon';
import StepIndicator from 'react-native-step-indicator';

function InformationSurvey(props) {
    const labels = ["Information", "Health", "Work"];
    const customStyles = {
        stepIndicatorSize: 25,
        currentStepIndicatorSize: 30,
        separatorStrokeWidth: 2,
        currentStepStrokeWidth: 3,
        stepStrokeCurrentColor: '#1578DA',
        stepStrokeWidth: 3,
        stepStrokeFinishedColor: '#1578DA',
        stepStrokeUnFinishedColor: '#aaaaaa',
        separatorFinishedColor: '#1578DA',
        separatorUnFinishedColor: '#aaaaaa',
        stepIndicatorFinishedColor: '#1578DA',
        stepIndicatorUnFinishedColor: '#ffffff',
        stepIndicatorCurrentColor: '#ffffff',
        stepIndicatorLabelFontSize: 13,
        currentStepIndicatorLabelFontSize: 13,
        stepIndicatorLabelCurrentColor: '#1578DA',
        stepIndicatorLabelFinishedColor: '#ffffff',
        stepIndicatorLabelUnFinishedColor: '#aaaaaa',
        labelColor: '#999999',
        labelSize: 13,
        currentStepLabelColor: '#1578DA'
    };

    const [currentPosition, setCurrentPosition] = useState(0);

    const onPageChange = (position) => {
        setCurrentPosition(position);
    };

    return (
        <View style={styles.container}>

            <Text>container</Text>
            
        </View>
    );
}


export default InformationSurvey;
const styles = StyleSheet.create({
   
    
});
