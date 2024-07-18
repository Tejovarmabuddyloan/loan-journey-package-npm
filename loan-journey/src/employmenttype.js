import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, ImageBackground, StatusBar, ScrollView, Image, useColorScheme,TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { LoanApplicationComponent,savePartialLoanData,mobileNum } from './mobilepage';
import { useNavigation } from '@react-navigation/native';

const Employmenttypescreen = () => {
  const navigation = useNavigation();

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.transparent : Colors.transparent,
  };

  const [loanAmount, setLoanAmount] = useState('');
  const [email, setEmail] = useState('');

  const handleLoanAmountChange = (value) => {
    setLoanAmount(value);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  return (
    <ImageBackground
      source={require('../assets/images/dashboardbg.jpg')}
      style={styles.container}
      resizeMode="cover"
    >
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={backgroundStyle.backgroundColor} />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
      <View>
            {/* Other components or content */}
            <LoanApplicationComponent />
            {/* More components or content */}
        </View>

        <View style={styles.secondcont}>
        <View style={styles.logoContainer}>
            <Image source={require('../assets/images/buddyloanlogo.png')} style={styles.logo} />
          </View>
          <Text style={styles.prompt}>What is Your Employment Type</Text>
       
          <View style={styles.input}>
  <Text style={styles.inputText}>Salaried</Text>
  <TouchableOpacity onPress={() => {
    savePartialLoanData('emplyoment_type', '1',mobileNum);
    // save_partial_loandata('emplyoment_type',"1",user);
    navigation.navigate('Salarymodescreen');
  }}>
  <Image source={require('../assets/images/radiobtnalt.png')} style={styles.inputImage} />
  </TouchableOpacity>
</View>
<View style={styles.input}>
  <Text style={styles.inputText}>Self-Employed</Text>
  <TouchableOpacity onPress={() => {
    savePartialLoanData('emplyoment_type', '2',mobileNum);
    savePartialLoanData('self_employement_type', '2',mobileNum);
    savePartialLoanData('salary_mode', '2',mobileNum);
    //  save_partial_loandata('self_employement_type',"2",user);
    //  save_partial_loandata('emplyoment_type',"2",user);
    //  save_partial_loandata('salary_mode',"2",user);
    navigation.navigate('SelfEmployedpofessionTypeScreen');
  }}>
  <Image source={require('../assets/images/radiobtnalt.png')} style={styles.inputImage} />
  

  </TouchableOpacity></View>
  <View style={styles.input}>
  <Text style={styles.inputText}>Student</Text>
  <TouchableOpacity onPress={() => {
    savePartialLoanData('emplyoment_type', '3',mobileNum);
    //  save_partial_loandata('emplyoment_type',"3",user);
    navigation.navigate('StudentpersonalDetailsScreen');
  }}>
  <Image source={require('../assets/images/radiobtnalt.png')} style={styles.inputImage} />
  
  
  </TouchableOpacity></View>
  
          
          <View style={styles.buttonContainer}>
  <TouchableOpacity onPress={() => {
    // Navigation logic for back button
    navigation.goBack();
  }}>
    <Image source={require('../assets/images/backbtn.png')} style={styles.backbtn} />
  </TouchableOpacity>

  

  {/* <TouchableOpacity onPress={() => {
    navigation.navigate('LoanDetails');
  }}>
    <Image source={require('../assets/images/forwardbtn.png')} style={styles.forwardbtn} />
  </TouchableOpacity> */}
</View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  outerContainer: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: 'white',
    height: 100,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  secondcont: {
    paddingTop: 25,
    
    paddingLeft: 20,
    paddingRight: 20,
    height: 590,
    marginLeft: 13,
    backgroundColor: '#F4F4F4',
    borderRadius: 10,
    marginTop: 20,
    borderColor: '#49B7F2',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '93%',
  },
  
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  greeting: {
    fontSize: 20,
    color: '#000',
    paddingLeft: 11,
  },
  prompt: {
    fontSize: 18,
    color: '#007BFF',
    textAlign: 'center',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  forwardbtn: {
    width: 130,
    height: 130,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
    // paddingRight: 90,
   
  },
  input: {
    flexDirection: 'row',
    height: 49, 
    
    justifyContent: 'space-between', // Spaces the Text and Image apart
    alignItems: 'center',
    borderColor: '#F4F4F4',
    borderWidth: 0.3,
    borderRadius: 5, // Adjusted to match Flutter's BorderRadius.circular(7)
    // paddingHorizontal: 10,
    backgroundColor: '#F4F4F4', // This matches the Flutter color closely
    color: '#000',
   
    elevation: 5, // Elevation adds shadow for Android, similar to the second BoxShadow in Flutter
    marginTop: 20,
    shadowColor: '#000',

    shadowOffset: {
      width: 5, // Adjusted to match one of the Flutter shadows
      height: 5, // Adjusted to match one of the Flutter shadows
    },
    shadowOpacity: 0.1, // Adjusted to match the Flutter shadow's opacity
    shadowRadius: 5,
  },
  emailinput: {
    height: 55,
    borderColor: '#F4F4F4',
    borderWidth: 1,
    borderRadius: 5, // Adjusted to match Flutter's BorderRadius.circular(7)
    paddingHorizontal: 10,
    backgroundColor: '#F4F4F4', // This matches the Flutter color closely
    color: '#000',
    fontSize: 17,
    elevation: 5, // Elevation adds shadow for Android, similar to the second BoxShadow in Flutter
    marginTop: 25,
    marginBottom: 20,
    shadowColor: '#000',
    
    shadowOffset: {
      width: 5, // Adjusted to match one of the Flutter shadows
      height: 5, // Adjusted to match one of the Flutter shadows
    },
    shadowOpacity: 0.1, // Adjusted to match the Flutter shadow's opacity
    shadowRadius: 5,
  },

  logoContainer: {
    alignItems: 'center',
    marginBottom: -9,
    justifyContent: 'center',
  },
  prompt: {
    fontSize: 19,
    color: '#007BFF',
    textAlign: 'center',
    marginBottom: 15,
    fontWeight: '350',

  },
  logo: {
    width: 130,
    height: 130,
    resizeMode: 'contain',
    marginTop: 19,
    marginLeft: 10,
    
  },
  inputContainer: {
    flexDirection: 'row', // Aligns children (Text and Image) in a row
    justifyContent: 'space-between', // Spaces the Text and Image apart
    alignItems: 'center', // Centers children vertically
    backgroundColor: '#FFF', // Assuming your TextInput background is white
    // Add other styles from styles.input that affect the appearance, excluding text-specific styles
    padding: 10,
  },
  inputText: {
     fontSize: 15,
    marginLeft: 10, // Adjusted to match the space between the Text and Image
    color: 'rgba(0, 0, 0, 0.51)', // Placeholder text color for consistency
    // Add other text-specific styles here
  },
  inputImage: {
    // Style for the image, adjust as needed
    width: 90,
    height: 90,
    marginRight: -15, // Adjusted to match the space between the Text and Image
     resizeMode: "contain",// Example height, adjust as needed
    // Example margin, adjust as needed
  },
  gap: {
    width: 0, // Adjust the gap between the buttons
  },
  buttonContainer: {
    flexDirection: 'row', // Aligns children in a row
    alignItems: 'center', 
    justifyContent : 'center'// Centers children vertically in the container

  },
  backbtn: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
    // marginRight: -39,
  },




});

export default Employmenttypescreen;
