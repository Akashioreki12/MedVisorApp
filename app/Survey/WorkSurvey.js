import React from 'react';

import { View, StyleSheet, Text } from 'react-native';
import MultipleBoxChoice from '../Components/MultipleBoxChoice';
import ValueInput from '../Components/ValueInput';
import SuitCaseIcon from '../assets/Icons/SuitCaseIcon';
import GovernmentIcon from '../assets/Icons/GovernmentIcon';
import EmployeeIcon from '../assets/Icons/EmployeeIcon';
import ChildrenIcon from '../assets/Icons/ChildrenIcon';
import ChoiceButton from '../Components/ChoiceButton';

function WorkSurvey({workSetter, hypertensionSetter}) {
    return (
         <View style={styles.container}>
            <View style={styles.surveyQuestion1}>
                <View style={styles.questionContainer}>
                    <Text style={styles.question}>What is your work type ?</Text>
                </View>
                <View style={styles.answerContainer}>
                                    <MultipleBoxChoice leftIcon={<SuitCaseIcon/>} centerLeftIcon={<GovernmentIcon/>} centerRightIcon={<EmployeeIcon/>} rightIcon={<ChildrenIcon/>} setChoice={workSetter} leftLabelChoice={"Private"} centerLeftLabelChoice={"Govt_job"} centerRightLabelChoice={"Self-employed"} rightLabelChoice={"children"}/>          
                </View>
            </View>
            <View style={styles.surveyQuestion2}>
                <View style={styles.questionContainer}>
                    <Text style={styles.question}>Do you have hypertension ?</Text>
                    
                </View>
                <View style={styles.answerContainer}>
                                    <ChoiceButton leftChoiceLabel={"No"} rightChoiceLabel={'Yes'} setChoice={hypertensionSetter}/>            
                </View>
            </View>
            <View style={styles.surveyQuestion3}>
                <View style={styles.questionContainer}>
                </View>
                <View style={styles.answerContainer}>
                </View>            
            </View>
            <View style={styles.surveyQuestion4}>
                <View style={styles.questionContainer}>
                </View>
                <View style={styles.answerContainer}>                    
                </View>
            </View>
        </View>

    );
}

export default WorkSurvey;

const styles = StyleSheet.create({
    
   container: {
        height :'100%',
    },
    surveyQuestion1: {
        height: '25%',
                paddingTop : '4%',
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
})