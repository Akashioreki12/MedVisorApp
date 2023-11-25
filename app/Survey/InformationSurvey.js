import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CrossMarkIcon from '../assets/Icons/CrossMarkIcon';
import StepIndicator from 'react-native-step-indicator';
import ChoiceButton from '../Components/ChoiceButton';
import SimpleBoxChoice from '../Components/SimpleBoxChoice';
import BirthPicker from '../Components/BirthPicker';

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
            
            <View style={styles.surveyQuestion1}>
                <View style={styles.questionContainer}>
                    <Text style={styles.question}>What do you identify as ?</Text>
                    
                </View>
                <View style={styles.answerContainer}>
                                    <ChoiceButton leftChoiceLabel={"Male"} rightChoiceLabel={'Female'}/>            
                </View>
            </View>

            <View style={styles.surveyQuestion2}>

                <View style={styles.questionContainer}>
                                                    <Text style={styles.question}>What is your age ?</Text>


                </View>

                <View style={styles.answerContainer}>
                                    <BirthPicker/>          
                </View>

            
            </View>
            <View style={styles.surveyQuestion3}>

                <View style={styles.questionContainer}>
                                                    <Text style={styles.question}>Ever Married ?</Text>


                </View>
                <View style={styles.answerContainer}>
                                    <ChoiceButton leftChoiceLabel={"Yes"} rightChoiceLabel={'No'}/>            
                </View>            
            </View>
            <View style={styles.surveyQuestion4}>

                <View style={styles.questionContainer}>
                    <Text style={styles.question}>Where do you live ?</Text>

                    

                </View>
<View style={styles.answerContainer}>
                <SimpleBoxChoice/>          
                </View>
            </View>
        </View>
    );
}

export default InformationSurvey;
const styles = StyleSheet.create({


    container: {
        height :'100%',
    },
    surveyQuestion1: {
        height: '25%',
    },
    surveyQuestion2: {
        height: '25%',
    },
   surveyQuestion3: {
        height: '25%',
    },
    surveyQuestion4: {
        height: '25%',
    },

    question: {
        color: '#383838',
        fontSize : 18,
    },

    questionContainer: {
        paddingLeft: '5%',
        marginBottom : '5%',
    }, 

    answerContainer: {
      alignItems : 'center',  
    },
});
