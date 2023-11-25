import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ChoiceButton from '../Components/ChoiceButton';
import SimpleBoxChoice from '../Components/SimpleBoxChoice';
import BirthPicker from '../Components/BirthPicker';

function InformationSurvey({genderSetter,ageSetter,marriedSetter,locationSetter}) {
    return (
        <View style={styles.container}>
            
            <View style={styles.surveyQuestion1}>
                <View style={styles.questionContainer}>
                    <Text style={styles.question}>What do you identify as ?</Text>
                    
                </View>
                <View style={styles.answerContainer}>
                                    <ChoiceButton leftChoiceLabel={"Male"} rightChoiceLabel={'Female'} setChoice={genderSetter} />            
                </View>
            </View>

            <View style={styles.surveyQuestion2}>

                <View style={styles.questionContainer}>
                                                    <Text style={styles.question}>What is your age ?</Text>


                </View>

                <View style={styles.answerContainer}>
                                    <BirthPicker setChoice={ageSetter}/>          
                </View>

            
            </View>
            <View style={styles.surveyQuestion3}>

                <View style={styles.questionContainer}>
                                                    <Text style={styles.question}>Ever Married ?</Text>


                </View>
                <View style={styles.answerContainer}>
                                    <ChoiceButton leftChoiceLabel={"Yes"} rightChoiceLabel={'No'} setChoice={marriedSetter}/>            
                </View>            
            </View>
            <View style={styles.surveyQuestion4}>

                <View style={styles.questionContainer}>
                    <Text style={styles.question}>Where do you live ?</Text>

                    

                </View>
<View style={styles.answerContainer}>
                <SimpleBoxChoice setChoice={locationSetter}/>          
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
});
