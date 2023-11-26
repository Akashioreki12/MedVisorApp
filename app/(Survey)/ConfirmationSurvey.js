import React from 'react';
import { View, StyleSheet } from 'react-native';

function ConfirmationSurvey(props) {
    return (
        <View>
            

            <View style={styles.part1}></View>
                        <View style={styles.part2}></View>
            <View style={styles.part3}></View>

        </View>
    );
}

export default ConfirmationSurvey;

const styles = StyleSheet.create({
    part1: {

        height: '20%',
        backgroundColor : 'red',
        
    },

    part2: {

        height: '50%',
        backgroundColor : 'blue',
        
    },

    part3: {

         height: '40%',
        backgroundColor : 'red',
        
    },
})