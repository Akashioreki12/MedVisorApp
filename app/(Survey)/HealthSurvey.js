import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ChoiceButton from '../Components/ChoiceButton';
import MultipleBoxChoice from '../Components/MultipleBoxChoice';
import ValueInput from '../Components/ValueInput';
import BoldCrossIcon from '../assets/Icons/BoldCrossIcon';
import NoSmokeIcon from '../assets/Icons/NoSmokeIcon';
import SmokeIcon from '../assets/Icons/SmokeIcon';
import UnknownIcon from '../assets/Icons/UnknownIcon';

function HealthSurvey({heartDiseaseSetter,smokeSetter,glucoseLevelSetter,bmiLevelSetter}) {
    return (
         <View style={styles.container}>
            
            <View style={styles.surveyQuestion1}>
                <View style={styles.questionContainer}>
                    <Text style={styles.question}>Do you have a heart disease ?</Text>
                    
                </View>
                <View style={styles.answerContainer}>
                                    <ChoiceButton leftChoiceLabel={"No"} rightChoiceLabel={'Yes'} setChoice={heartDiseaseSetter}/>            
                </View>
            </View>

            <View style={styles.surveyQuestion2}>

                <View style={styles.questionContainer}>
                                                    <Text style={styles.question}>How often do you smoke ?</Text>


                </View>

                <View style={styles.answerContainer}>
                    <MultipleBoxChoice leftIcon={<BoldCrossIcon/>} centerLeftIcon={<NoSmokeIcon/>} centerRightIcon={<SmokeIcon/>} rightIcon={<UnknownIcon/>} setChoice={smokeSetter} leftLabelChoice={"never smoked"} centerLeftLabelChoice={"formerly smoked"} centerRightLabelChoice={"smokes"} rightLabelChoice={"Unknown"}/>
                </View>

            
            </View>
            <View style={styles.surveyQuestion3}>

                <View style={styles.questionContainer}>
                                                    <Text style={styles.question}>How much is your glucose level ?</Text>


                </View>
                <View style={styles.answerContainer}>
                    <ValueInput setChoice={glucoseLevelSetter}/>
                </View>            
            </View>
            <View style={styles.surveyQuestion4}>

                <View style={styles.questionContainer}>
                    <Text style={styles.question}>How much is your BMI level ?</Text>

                    

                </View>
                <View style={styles.answerContainer}>
                    
                    <ValueInput setChoice={bmiLevelSetter}/>
                </View>
            </View>
        </View>

    );
}

export default HealthSurvey;

const styles = StyleSheet.create({
    
   container: {
        height :'100%',
    },
    surveyQuestion1: {
         paddingTop : '4%',
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
        alignItems: 'center',  
                justifyContent : 'center',

    },
})