import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ChoiceButton from '../Components/ChoiceButton';
import MultipleBoxChoice from '../Components/MultipleBoxChoice';
import BoldCrossIcon from '../assets/Icons/BoldCrossIcon';
import NoSmokeIcon from '../assets/Icons/NoSmokeIcon';
import SmokeIcon from '../assets/Icons/SmokeIcon';
import UnknownIcon from '../assets/Icons/UnknownIcon';
import SuitCaseIcon from '../assets/Icons/SuitCaseIcon';
import GovernmentIcon from '../assets/Icons/GovernmentIcon';
import EmployeeIcon from '../assets/Icons/EmployeeIcon';
import ChildrenIcon from '../assets/Icons/ChildrenIcon';

function HealthSurvey({heartDiseaseSetter,smokeSetter,hypertensionSetter,workSetter}) {
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
                    <View style={styles.textDetailsContainer}>
                        <Text style={styles.textDetails1}>Never</Text>
                        <Text style={styles.textDetails2}>Formerly</Text>
                        <Text style={styles.textDetails3}>Smokes</Text>
                        <Text style={styles.textDetails4}>Unknown</Text>
                    </View>
                </View>

                <View style={styles.answerContainer}>
                    <MultipleBoxChoice leftIcon={<BoldCrossIcon/>} centerLeftIcon={<NoSmokeIcon/>} centerRightIcon={<SmokeIcon/>} rightIcon={<UnknownIcon/>} setChoice={smokeSetter} leftLabelChoice={"never smoked"} centerLeftLabelChoice={"formerly smoked"} centerRightLabelChoice={"smokes"} rightLabelChoice={"Unknown"}/>
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
            
           

             <View style={styles.surveyQuestion1}>
                <View style={styles.questionContainer}>
                    <Text style={styles.question}>What is your work type ?</Text>
                     <View style={styles.textDetailsContainer}>
                        <Text style={styles.textDetails1}>Private</Text>
                        <Text style={styles.textDetails2}>Government</Text>
                        <Text style={styles.textDetails3}>Self</Text>
                        <Text style={styles.textDetails4}>Children</Text>
                    </View>
                </View>
                <View style={styles.answerContainer}>
                                    <MultipleBoxChoice leftIcon={<SuitCaseIcon/>} centerLeftIcon={<GovernmentIcon/>} centerRightIcon={<EmployeeIcon/>} rightIcon={<ChildrenIcon/>} setChoice={workSetter} leftLabelChoice={"Private"} centerLeftLabelChoice={"Govt_job"} centerRightLabelChoice={"Self-employed"} rightLabelChoice={"children"}/>          
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

    textDetailsContainer: {
        marginTop : 10,
        display: 'flex',
        flexDirection: 'row',
    },

     textDetails1: {
         fontSize: 15,
         marginLeft : 30,
    },
     
      textDetails2: {
         fontSize: 15,
         marginLeft : 40,
    },
      
       textDetails3: {
         fontSize: 15,
         marginLeft : 40,
    },
        textDetails4: {
         fontSize: 15,
         marginLeft : 40,
    },
        
    unity: {

        color: '#979797',
        marginTop : 5,
        
    },
})