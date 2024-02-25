import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ValueInput from '../Components/ValueInput';


function WorkSurvey({bmiLevelSetter,glucoseLevelSetter,weightSetter}) {
    return (
        <View style={styles.container}>
            
             <View style={styles.surveyQuestion4}>

                <View style={styles.questionContainer}>
                    <Text style={styles.question}>How much is your height ?</Text>
                    <Text style={styles.unity}>Height measured in (m) (1.4m-2.2m)</Text>

                    

                </View>
                <View style={styles.answerContainer}>
                    
                    <ValueInput setChoice={bmiLevelSetter} type="float"/>
                </View>
            </View>

            <View style={styles.surveyQuestion4}>

                <View style={styles.questionContainer}>
                    <Text style={styles.question}>How much is your weight ?</Text>
                    <Text style={styles.unity}>Weight measured in (kg) (40kg-200kg)</Text>

                    

                </View>
                <View style={styles.answerContainer}>
                    
                    <ValueInput setChoice={weightSetter} type="float"/>
                </View>
            </View>


        
            <View style={styles.surveyQuestion3}>

                <View style={styles.questionContainer}>
                    <Text style={styles.question}>How much is your glucose level ?</Text>
                    <Text style={styles.unity}>Glucose measured in g/dL (70g/dL-140g/dL)</Text>

                </View>
                <View style={styles.answerContainer}>
                    <ValueInput setChoice={glucoseLevelSetter} type="float"/>
                </View>            
            </View>
        </View>

    );
}

export default WorkSurvey;

const styles = StyleSheet.create({

    unity: {
        color : 'rgba(70,119,238,0.7)',
    },
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
         marginLeft : 30,
    },
       textDetails3: {
         fontSize: 15,
         marginLeft : 30,
    },
        textDetails4: {
         fontSize: 15,
         marginLeft : 60,
    },
})