import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CrossMarkIcon from '../assets/Icons/CrossMarkIcon';
import StepIndicator from 'react-native-step-indicator';

// Import your different survey screens here
import InformationScreen from './InformationSurvey';
import HealthScreen from './HealthSurvey';
import WorkScreen from './WorkSurvey';
import LeftArrowIcon from '../assets/Icons/LeftArrowIcon';

function SurveyForm(props) {
    const labels = ["Information", "Health", "Work"];
    const customStyles = {
        stepStrokeCurrentColor: '#1578DA',
        stepStrokeFinishedColor: '#1578DA',
        separatorFinishedColor: '#1578DA',
        separatorUnFinishedColor: '#aaaaaa',
        stepIndicatorFinishedColor: '#1578DA',
        stepIndicatorUnFinishedColor: '#1578DA',


        labelColor: '#aaaaaa',
        currentStepLabelColor: '#1578DA'
        

    };

    const [currentPosition, setCurrentPosition] = useState(0);

    const onPageChange = (position) => {
        setCurrentPosition(position);
    };

    const renderScreen = () => {
        switch (currentPosition) {
            case 0:
                return <InformationScreen />;
            case 1:
                return <HealthScreen />;
            case 2:
                return <WorkScreen />;
            default:
                return null;
        }
    };

    const renderIcon = () =>
    {
        switch (currentPosition)
        {
            case 0:
                return <CrossMarkIcon />;
            case 1:
                return <LeftArrowIcon />;
            case 2:
                return <LeftArrowIcon />;
            default:
                return null;
      }  
    };

    const onNextPress = () => {
        // Handle logic to move to the next step
        if (currentPosition < labels.length - 1) {
            setCurrentPosition(currentPosition + 1);
        }
    };
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <View style={styles.header}>
                <SafeAreaView>
                    <TouchableOpacity>
                        <View style={styles.iconContainer}>
                            {renderIcon()}
                        </View>
                    </TouchableOpacity>
                    <StepIndicator
                        customStyles={customStyles}
                        currentPosition={currentPosition}
                        stepCount={labels.length}
                        labels={labels}
                        onPress={onPageChange}
                    />
                </SafeAreaView>
            </View>
            <View style={styles.surveyBody}>
                {renderScreen()}
            </View>

            <TouchableOpacity style={styles.buttonContainer} onPress={onNextPress}>
                <Text style={styles.textButton}>Suivant</Text>
            </TouchableOpacity>
        </View>
    );
}

export default SurveyForm;

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#F4F4F4',
        height : '15%',
    },
    surveyBody: {
        height: '75%',
    },
    buttonContainer: {
        backgroundColor: '#1578DA',
        height: '15%',
        display: 'flex',
        alignItems: 'center',
        paddingTop : '5%',
    },

    textButton: {
        color: '#fff',
        fontSize: 20,
      fontWeight : '500',
    },

    iconContainer: {
        paddingLeft: '2%',
      paddingTop : '4%',  
    },
    


});
