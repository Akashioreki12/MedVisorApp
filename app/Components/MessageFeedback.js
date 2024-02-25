import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { G, Path, Defs, ClipPath, Rect } from 'react-native-svg';

const MessageFeedBack = ({ isVisible, closeModal, handleSubmit,message }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={closeModal}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.checkMark}>
             <Svg
      width={81}
      height={81}
      viewBox="0 0 81 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clipPath="url(#clip0_779_908)">
        <Rect width={81} height={81} rx={40.5} fill="#D92222" />
        <Path
          d="M40.5 0a40.5 40.5 0 100 81 40.5 40.5 0 000-81zm0 74.25a33.75 33.75 0 110-67.5 33.75 33.75 0 010 67.5z"
          fill="#fff"
        />
        <Path
          d="M45.457 40.511l11.516 11.517a3.491 3.491 0 010 4.942 3.491 3.491 0 01-4.941 0L40.514 45.453 28.998 56.97a3.496 3.496 0 11-4.944-4.942l11.519-11.517-11.545-11.544A3.492 3.492 0 0126.498 23c.895 0 1.79.341 2.472 1.025l11.545 11.544 11.517-11.516a3.487 3.487 0 012.471-1.024 3.492 3.492 0 012.47 5.966L45.457 40.51z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_779_908">
          <Rect width={81} height={81} rx={40.5} fill="#fff" />
        </ClipPath>
      </Defs>
    </Svg>
          </View>
          <View style={styles.doneText}>
            <TouchableOpacity onPress={handleSubmit}>
              <Text style={styles.submitButton}>{message}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
    submitButton: {
        fontWeight: '500',
        fontSize : 20,
  },
  doneText: {
        width: '100%',
        alignItems: 'center',
        marginTop: 20,
        color : '#461066',
    },
    checkMark: {
        width: '100%',
        alignItems : 'center',
    },
    modalContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
      width: '50%',
      height : '20%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
})
export default MessageFeedBack;