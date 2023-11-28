import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CrossMarkIcon from '../assets/Icons/CrossMarkIcon';
import StepIndicator from 'react-native-step-indicator';
import { Modal } from 'react-native';
import { router } from "expo-router";
// Import your different survey screens here
import InformationScreen from './InformationSurvey';
import HealthScreen from './HealthSurvey';
import WorkScreen from './WorkSurvey';
import LeftArrowIcon from '../assets/Icons/LeftArrowIcon';
import BubblesIcon from '../assets/Icons/BubblesIcon';
function SurveyForm(props)
{   
    const [gender, setGender] = useState("Male");
    const [age, setAge] = useState(0);
    const [married, setMarried] = useState("Yes");
    const [location, setLocation] = useState("Rural");
    const [heartDisease, setHeartDisease] = useState(0);
    const [smoke, setSmoke] = useState("smokes");
    const [glucoseLevel, setGlucoseLevel] = useState(0);
    const [bmiLevel, setBMIlevel] = useState(0);
    const [work, setWork] = useState("Private");
    const [hypertension, setHypertension] = useState(0);
    const handleHypertensionSelect = (hypertension) =>
    {
        setHypertension(hypertension);
    }
    const handleGenderSelect = (gender) =>
    {
        setGender(gender);
    }
    const handleAgeSelect = (Age) =>
    {
        setAge(Age);
    }
    const handleMarriedSelect = (Married) =>
    {
        setMarried(Married);
    }
    const handleLocationSelect = (Location) =>
    {
        setLocation(Location);
    }
    const handleDiseaseSelect = (Disease) =>
    {
        setHeartDisease(Disease);
    }
    const handleSmokeSelect = (Smoke) =>
    {
        setSmoke(Smoke);
    }
    const handleGlucoseLevelSelect = (GlucoseLevel) =>
    {
        setGlucoseLevel(GlucoseLevel);
    }
    const handleBMILevelSelect = (BMILevel) =>
    {
        setBMIlevel(BMILevel);
    }
    const handleWorkSelect = (Work) =>
    {
        setWork(Work);
    }

    const sendDataToApi = async () => {
        try
        {
      
        
    const apiEndpoint = 'http://172.20.10.5:8080/medicalimageprocessing/v1/surveys/create';
   
    const requestData = {
        gender: gender,
      workType: work,
      residenceType: location,
      smokingStatus: smoke,
      age: age,
      avgGlucoseLevel: glucoseLevel,
      bmi: bmiLevel,
      hypertension: hypertension === "Yes" ? 1 : 0,
      heartDisease: heartDisease === "Yes" ? 1 : 0,
      everMarried: married === "Yes" ? 1 : 0, 
}
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const responseData = await response.json();
    console.log('API Response:', responseData);
  } catch (error) {
    console.error('Error sending data to API:', error.message);
  }
};

    const submit = () =>
    {

        console.log(gender);
        console.log(age);
        console.log(work);
        console.log(married);
        console.log(hypertension);
        console.log(heartDisease);
        console.log(bmiLevel);
        console.log(smoke);
        console.log(location);
        console.log(glucoseLevel);
        sendDataToApi();
        router.push("/Result");

    }




    const [modalVisible, setModalVisible] = useState(false);
    const labels = ["Information", "Health", "Work"];
    const customStyles = {
        stepStrokeCurrentColor: '#1578DA',
        stepStrokeFinishedColor: '#1578DA',
        separatorFinishedColor: '#1578DA',
        separatorUnFinishedColor: 'rgba(70,119,238,0.3)',
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
                return <InformationScreen genderSetter={handleGenderSelect} ageSetter={handleAgeSelect} marriedSetter={handleMarriedSelect} locationSetter={handleLocationSelect}  />;
            case 1:
                return <HealthScreen heartDiseaseSetter={handleDiseaseSelect} smokeSetter={handleSmokeSelect} glucoseLevelSetter={handleGlucoseLevelSelect} bmiLevelSetter={handleBMILevelSelect} />;
            case 2:
                return <WorkScreen  workSetter={handleWorkSelect} hypertensionSetter={handleHypertensionSelect}/>;
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
                return <LeftArrowIcon/>;
            case 2:
                return <LeftArrowIcon/>;
            default:
                return null;
      }  
    };

   const onNextPress = () => {
        if (currentPosition < labels.length - 1) {
            setCurrentPosition(currentPosition + 1);
        } else if (currentPosition === labels.length - 1) {
            setModalVisible(true);
            submit();

        }
    };

    const closeModal = () => {
        setModalVisible(false);
    };


    const onPrevPress = () => {
        if (currentPosition > 0) {
            setCurrentPosition(currentPosition - 1);
        }
    };

    const renderButtonText = () => {
        if (currentPosition === 2) {
            return "Démarrer";
        } else {
            return "Suivant";
        }
    };
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <View style={styles.header}>
                <SafeAreaView>
                    <TouchableOpacity onPress={onPrevPress}>
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

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                       
                        <BubblesIcon />
                        
                        <Text style={styles.surveyComplete}>Survey Completed ! </Text>
                    </View>
                </View>
            </Modal>


            <TouchableOpacity style={styles.buttonContainer} onPress={onNextPress}>
                <Text style={styles.textButton}>{renderButtonText()}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default SurveyForm;

const styles = StyleSheet.create({
modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // semi-transparent background
    },
    modalContent: {
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
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

    surveyComplete: {
        fontSize: 15,
      marginTop : 20,  
    },
});
