import React from 'react';

import { View, StyleSheet, Text } from 'react-native';
import ChoiceButton from '../Components/ChoiceButton';

function HealthSurvey(props) {
    return (
         <View style={styles.container}>
            
            <View style={styles.surveyQuestion1}>
                <View style={styles.questionContainer}>
                    <Text style={styles.question}>Do you have a heart disease ?</Text>
                    
                </View>
                <View style={styles.answerContainer}>
                                    <ChoiceButton leftChoiceLabel={"No"} rightChoiceLabel={'Yes'}/>            
                </View>
            </View>

            <View style={styles.surveyQuestion2}>

                <View style={styles.questionContainer}>
                                                    <Text style={styles.question}>How often do you smoke ?</Text>


                </View>

                <View style={styles.answerContainer}>
                </View>

            
            </View>
            <View style={styles.surveyQuestion3}>

                <View style={styles.questionContainer}>
                                                    <Text style={styles.question}>How much is your glucose level ?</Text>


                </View>
                <View style={styles.answerContainer}>
                                    <ChoiceButton leftChoiceLabel={"Yes"} rightChoiceLabel={'No'}/>            
                </View>            
            </View>
            <View style={styles.surveyQuestion4}>

                <View style={styles.questionContainer}>
                    <Text style={styles.question}>How much is your BMI level ?</Text>

                    

                </View>
<View style={styles.answerContainer}>
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
})