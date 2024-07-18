// import React, { useState } from 'react';
// import { View, TextInput, StyleSheet, Text, ImageBackground, StatusBar, ScrollView, Image, useColorScheme,TouchableOpacity,Modal,FlatList } from 'react-native';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
// import { LoanApplicationComponent } from './mobilepage';
// import { useNavigation } from '@react-navigation/native';

// const StudentpersonalDetailsScreen2 = () => {
//   const navigation = useNavigation();

//   const isDarkMode = useColorScheme() === 'dark';
//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.transparent : Colors.transparent,
//   };

//   const [loanAmount, setLoanAmount] = useState('');
//   const [pan, setPan] = useState('');
//   const [email, setEmail] = useState('');
//   const [MotherName, setMotherName] = useState('');
//   const [selectedValue, setSelectedValue] = useState(null);
//   const [modalVisible, setModalVisible] = useState(false);
//   const items = ['Private Sector', 'Public Sector', 'Government'];


//   const handleLoanAmountChange = (value) => {
//     setLoanAmount(value);
//   };
//   const handlePanChange = (value) => {  
//     setPan(value);
//     };

//   const handleEmailChange = (value) => {
//     setEmail(value);
//   };
//     const handleMotherNameChange = (value) => {
//         setMotherName(value);
//     };

//   return (
//     <ImageBackground
//       source={require('../assets/images/dashboardbg.jpg')}
//       style={styles.container}
//       resizeMode="cover"
//     >
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={backgroundStyle.backgroundColor} />
//       <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
//       <View>
//             {/* Other components or content */}
//             <LoanApplicationComponent />
//             {/* More components or content */}
//         </View>

//         <View style={styles.secondcont}>
//         <View style={styles.logoContainer}>
//             <Image source={require('../assets/images/buddyloanlogo.png')} style={styles.logo} />
//           </View>
//           <Text style={styles.prompt}>Enter Your Personal Details</Text>
//           <TextInput
//               style={styles.input}
//               placeholder="First Name"
//               placeholderTextColor="rgba(0, 0, 0, 0.51)"
//             //   keyboardType=""
//               value={pan}
//               onChangeText={handlePanChange}
//               // maxLength={10}
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Last Name"
//               placeholderTextColor="rgba(0, 0, 0, 0.51)"
//             //   keyboardType=""
//               value={loanAmount}
//               onChangeText={handleLoanAmountChange}
//               // maxLength={10}
//             />
//           <TextInput
//             style={styles.emailinput}
//             placeholder="Father Name"
//             placeholderTextColor="rgba(0, 0, 0, 0.51)"
//             // keyboardType="phone-pad"
//             value={email}
//             onChangeText={handleEmailChange}
//             // maxLength={6}
//           />
//             <TextInput
//             style={styles.mothernameinput}
//             placeholder="Mother Name"
//             placeholderTextColor="rgba(0, 0, 0, 0.51)"
//             // keyboardType="phone-pad"
//             value={MotherName}
//             onChangeText={handleMotherNameChange}
//             // maxLength={6}
//           />
          
//           <View style={styles.buttonContainer}>
//   <TouchableOpacity onPress={() => {
//     // Navigation logic for back button
//     navigation.goBack();
//   }}>
//     <Image source={require('../assets/images/backbtn.png')} style={styles.backbtn} />
//   </TouchableOpacity>

  

//   <TouchableOpacity onPress={() => {
//     navigation.navigate('StudentEducationDetailsScreen');
//   }}>
//     <Image source={require('../assets/images/forwardbtn.png')} style={styles.forwardbtn} />
//   </TouchableOpacity>
// </View>
//         </View>
//       </ScrollView>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,

//   },
//   outerContainer: {
//     borderBottomLeftRadius: 30,
//     borderBottomRightRadius: 30,
//     backgroundColor: 'white',
//     height: 100,
//     width: '100%',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   secondcont: {
//      paddingLeft: 20,
//     paddingRight: 20,
//     height: 630,
//     marginLeft: 13,
//     backgroundColor: '#F4F4F4',
//     borderRadius: 10,
//     marginTop: 20,
//     borderColor: '#49B7F2',
//     borderWidth: 1,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//     width: '93%',
//   },
  
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   greeting: {
//     fontSize: 20,
//     color: '#000',
//     paddingLeft: 11,
//   },
//   prompt: {
//     fontSize: 18,
//     color: '#007BFF',
//     textAlign: 'center',
//     marginBottom: 5,
//     fontWeight: 'bold',
//   },
//   forwardbtn: {
//     width: 130,
//     height: 130,
//     resizeMode: 'contain',
//     alignSelf: 'center',
//     marginBottom: 20,
//     // paddingRight: 90,
   
//   },
//   input: {
//     height: 55,
//     borderColor: '#F4F4F4',
//     borderWidth: 1,
//     borderRadius: 5, // Adjusted to match Flutter's BorderRadius.circular(7)
//     paddingHorizontal: 10,
//     backgroundColor: '#F4F4F4', // This matches the Flutter color closely
//     color: '#000',
//     fontSize: 17,
//     elevation: 5, // Elevation adds shadow for Android, similar to the second BoxShadow in Flutter
//     marginTop: 20,
//     shadowColor: '#000',

//     shadowOffset: {
//       width: 5, // Adjusted to match one of the Flutter shadows
//       height: 5, // Adjusted to match one of the Flutter shadows
//     },
//     shadowOpacity: 0.1, // Adjusted to match the Flutter shadow's opacity
//     shadowRadius: 5,
//   },
//   emailinput: {
//     height: 55,
//     borderColor: '#F4F4F4',
//     borderWidth: 1,
//     borderRadius: 5, // Adjusted to match Flutter's BorderRadius.circular(7)
//     paddingHorizontal: 10,
//     backgroundColor: '#F4F4F4', // This matches the Flutter color closely
//     color: '#000',
//     fontSize: 17,
//     elevation: 5, // Elevation adds shadow for Android, similar to the second BoxShadow in Flutter
//     marginTop: 25,
//     marginBottom: 5,
//     shadowColor: '#000',
    
//     shadowOffset: {
//       width: 5, // Adjusted to match one of the Flutter shadows
//       height: 5, // Adjusted to match one of the Flutter shadows
//     },
//     shadowOpacity: 0.1, // Adjusted to match the Flutter shadow's opacity
//     shadowRadius: 5,
//   },
//   mothernameinput: {
//     height: 55,
//     borderColor: '#F4F4F4',
//     borderWidth: 1,
//     borderRadius: 5, // Adjusted to match Flutter's BorderRadius.circular(7)
//     paddingHorizontal: 10,
//     backgroundColor: '#F4F4F4', // This matches the Flutter color closely
//     color: '#000',
//     fontSize: 17,
//     elevation: 5, // Elevation adds shadow for Android, similar to the second BoxShadow in Flutter
//     marginTop: 25,
//     marginBottom: 20,
//     shadowColor: '#000',
    
//     shadowOffset: {
//       width: 5, // Adjusted to match one of the Flutter shadows
//       height: 5, // Adjusted to match one of the Flutter shadows
//     },
//     shadowOpacity: 0.1, // Adjusted to match the Flutter shadow's opacity
//     shadowRadius: 5,
//   },

//   logoContainer: {
//     alignItems: 'center',
//     marginBottom: -9,
//     justifyContent: 'center',
//   },
//   prompt: {
//     fontSize: 19,
//     color: '#007BFF',
//     textAlign: 'center',
//     marginBottom: 15,
//     fontWeight: '350',

//   },
//   logo: {
//     width: 130,
//     height: 130,
//     resizeMode: 'contain',
//     marginTop: 19,
//     marginLeft: 10,
    
//   },
//   inputContainer: {
//     // backgroundColor: '#F5F5F5',
//     // borderColor: '#007BFF',
//     // elevation: 9,
//     // shadowColor: 'black',
//     // shadowOffset: {
//     //   width: 5,
//     //   height: 5,
//     // },
//     // shadowOpacity: 0.1,
//     // shadowRadius: 3,
//   },
//   gap: {
//     width: 0, // Adjust the gap between the buttons
//   },
//   buttonContainer: {
//     flexDirection: 'row', // Aligns children in a row
//     alignItems: 'center', 
//     justifyContent : 'center'// Centers children vertically in the container

//   },
//   backbtn: {
//     width: 130,
//     height: 130,
//     resizeMode: 'contain',
//     alignSelf: 'center',
//     marginBottom: 20,
//     marginRight: -39,
//   },
//   container1: {
//     // flexDirection: 'row',
//     // padding: 1,
//   },
//   dropdown: {
//     // borderWidth: 1,
//     // borderColor: 'grey',
//     // borderRadius: 5,
//     padding: 15,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     // backgroundColor: 'white',
//     // paddingHorizontal: 30,
//     // paddingVertical: 10,
//     // paddingLeft: 10,
//     // paddingRight: 10,
//     // paddingTop: 10,
//     // paddingBottom: 10,
  
   
//     borderColor: '#F4F4F4',
//     borderWidth: 1,
//     borderRadius: 5, // Adjusted to match Flutter's BorderRadius.circular(7)
//     paddingHorizontal: 10,
//     backgroundColor: '#F4F4F4', // This matches the Flutter color closely
//     color: '#000',
//     fontSize: 17,
//     elevation: 5, // Elevation adds shadow for Android, similar to the second BoxShadow in Flutter
    
    
//     shadowColor: '#000',
    
//     shadowOffset: {
//       width: 5, // Adjusted to match one of the Flutter shadows
//       height: 5, // Adjusted to match one of the Flutter shadows
//     },
//     shadowOpacity: 0.1, // Adjusted to match the Flutter shadow's opacity
//     shadowRadius: 5,
//   },
//   dropdownText: {
//     color: 'grey',
//     fontSize: 17,
    
   
//   },
//   modalOverlay: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     width: '95%',
//     backgroundColor: 'white',
//     borderRadius: 5,
//     padding: 10,
//     height: "99%"

//   },
//   modalItem: {
//     padding: 10,
   
//   },
//   modalItemText: {
//     fontSize: 16,
//   },
//   dropdownIcon: {
//     width: 15,
//     height: 15,
//     marginLeft: 10,
//    alignSelf: 'center',
    
//   },
//   closeButton: {
//     alignSelf: 'flex-end', // Align the close button to the bottom-right corner
//     marginTop: 10,
//   },
//   closeButtonText: {
//     color: 'blue', // Set the close button text color to blue
//     fontSize: 16,
//   },
//   modalTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },




// });

// export default StudentpersonalDetailsScreen2;


import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, ImageBackground, StatusBar, ScrollView, Image, useColorScheme,TouchableOpacity,Modal,FlatList } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { LoanApplicationComponent,savePartialLoanData,userArray,mobileNum } from './mobilepage';
import { useNavigation } from '@react-navigation/native';


const StudentpersonalDetailsScreen2 = () => {
  const navigation = useNavigation();

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.transparent : Colors.transparent,
  };
  inititalpan = userArray.length > 0 ? userArray[0].pan : '';
  intialFirstName = userArray.length > 0 ? userArray[0].fname : '';
  intialLastName = userArray.length > 0 ? userArray[0].lname : '';
  intialMothereName = userArray.length > 0 ? userArray[0].mothersName : '';
  intialFatherName = userArray.length > 0 ? userArray[0].fathersName : '';

  const [loanAmount, setLoanAmount] = useState(intialFirstName);
  const [pan, setPan] = useState(inititalpan);
  const [email, setEmail] = useState(intialLastName);
  const [MotherName, setMotherName] = useState(intialMothereName);
  const [FatherName, setFatherName] = useState(intialFatherName);

  const [selectedValue, setSelectedValue] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const items = ['Private Sector', 'Public Sector', 'Government'];
  const [panError, setPanError] = useState('');
const [firstNameError, setFirstNameError] = useState('');
const [lastNameError, setLastNameError] = useState('');
const [motherNameError, setMotherNameError] = useState('');
const [fatherNameError, setFatherNameError] = useState('');
const [isPanValid, setIsPanValid] = useState(false);
 [isFirstNameValid, setIsFirstNameValid] = useState(false);
 [isLastNameValid, setIsLastNameValid] = useState(false);
 [isMotherNameValid, setIsMotherNameValid] = useState(false);
 [isFatherNameValid, setIsFatherNameValid] = useState(false);

const resetValidationStates = () => {
  setIsPanValid(false);
  setIsFirstNameValid(false);
  setIsLastNameValid(false);
  setIsMotherNameValid(false);
  setIsFatherNameValid(false);
};
  const handleLoanAmountChange = (value) => {
    setLoanAmount(value);
    validateFirstName(value);
  };
  

  const handleEmailChange = (value) => {
    setEmail(value);
    validateLastName(value);
    
  };


  const handleMotherChange = (value) => {
    setMotherName(value);
    validateMotherName(value);
    
  };

  const handleFatherChange = (value) => {
    setFatherName(value);
    validateFatherName(value);
  };
  
  const validatePan = (value) => {
  
    const regex = /[A-Z]{5}[0-9]{4}[A-Z]{1}/;
    if (!regex.test(value)) {
      setPanError('Invalid PAN format');
      setIsPanValid(false);
    } else {
      setPanError('');
      setIsPanValid(true);
    }
  };
  
  const validateFirstName = (value) => {
    // Check if value is null or undefined before accessing length
    if (value == null || value.length < 2) {
      setFirstNameError('First name must be at least 2 characters');
      setIsFirstNameValid(false);
    } else {
      setFirstNameError('');
      setIsFirstNameValid(true);
    }
  };
  
  const validateLastName = (value) => {
    // Update the condition to check for length less than 2
    if (value == null || value.length < 2) {
      setLastNameError('Last name must be at least 2 characters');
      setIsLastNameValid(false);
    } else {
      setLastNameError('');
      setIsLastNameValid(true);
    }
  };

  const validateMotherName = (value) => {
    // Update the condition to check for length less than 2
    if (value == null || value.length < 2) {
      setMotherNameError('Mother name must be at least 2 characters');
      setIsMotherNameValid(false);
    } else {
      setLastNameError('');
      setIsMotherNameValid(true);
    }
  }
  const validateFatherName = (value) => {
    // Update the condition to check for length less than 2
    if (value == null || value.length < 2) {
      setFatherNameError('Father name must be at least 2 characters');
      setIsFatherNameValid(false);
    } else {
      setLastNameError('');
      setIsFatherNameValid(true);
    }
  }

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
          <Text style={styles.prompt}>Enter Your Personal Details</Text>
   
            
            <TextInput
              style={styles.input}
              placeholder="First Name"
              placeholderTextColor="rgba(0, 0, 0, 0.51)"
            //   keyboardType=""
              value={loanAmount}
              onChangeText= {handleLoanAmountChange}
              // maxLength={10}
            />
            {!isFirstNameValid && (
  <Text style={styles.errorText}>
    {firstNameError}
  </Text>
)}
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            placeholderTextColor="rgba(0, 0, 0, 0.51)"
            // keyboardType="phone-pad"
            value={email}
            onChangeText= {handleEmailChange}
            // maxLength={6}
          />
          {!isLastNameValid && (
  <Text style={styles.errorText}>
    {lastNameError}
  </Text>
)}
      <TextInput
            style={styles.input}
            placeholder="Father Name"
            placeholderTextColor="rgba(0, 0, 0, 0.51)"
            // keyboardType="phone-pad"
            value={FatherName}
            onChangeText= {handleFatherChange}
            // maxLength={6}
          />
          {!isFatherNameValid && (
  <Text style={styles.errorText}>
    {fatherNameError}
  </Text>
)}

<TextInput
            style={styles.emailinput}
            placeholder="Mother Name"
            placeholderTextColor="rgba(0, 0, 0, 0.51)"
            // keyboardType="phone-pad"
            value={MotherName}
            onChangeText= {handleMotherChange}
            // maxLength={6}
          />
          {!isMotherNameValid && (
  <Text style={styles.errorText}>
    {motherNameError}
  </Text>
)}

          
          <View style={styles.buttonContainer}>
  <TouchableOpacity onPress={() => {
    // Navigation logic for back button
    navigation.goBack();
  }}>
    <Image source={require('../assets/images/backbtn.png')} style={styles.backbtn} />
  </TouchableOpacity>

  

  <TouchableOpacity onPress={() => {
      // resetValidationStates(); // Reset states on each press

  // Validate all fields again to ensure their current states are up to date
     
  // validateFirstName(loanAmount); // Assuming loanAmount is actually the first name based on context
  // validateLastName(email);
  // validateFatherName(FatherName); // Assuming email is actually the last name based on context
  // validateMotherName(MotherName);
   // Assuming email is actually the last name based on context

    isFatherNameValid = FatherName && FatherName.length > 2;
    isMotherNameValid =  MotherName && MotherName.length > 2;
    isLastNameValid = email && email.length > 2;
    isFirstNameValid = loanAmount && loanAmount.length > 2;

  // Ensure to check isLastNameValid along with other validations
  if ( isFirstNameValid && isLastNameValid && isMotherNameValid && isFatherNameValid) {

    console.log('Valid data');


    savePartialLoanData("fname,lname", loanAmount+" , "+email, mobileNum);
    savePartialLoanData("fname", loanAmount, mobileNum);
    savePartialLoanData("lname", email, mobileNum);
    savePartialLoanData("mothers_name", MotherName, mobileNum);
    savePartialLoanData("fathers_name", FatherName, mobileNum);
    savePartialLoanData("fathers_name,mothers_name",FatherName+","+MotherName,mobileNum);
    // save_partial_loandata('fathers_name,mothers_name',fathersName+","+mothersName,user);

    // savePartialLoanData("lname", email, mobileNum);
    // Proceed to the next screen if all data is valid
    navigation.navigate('StudentEducationDetailsScreen');
  } else {
    console.log('Invalid data');
    // Optionally, show a general error message on the UI
  }
}}>
   <Image source={require('../assets/images/forwardbtn.png')} style={styles.forwardbtn} />
   </TouchableOpacity>
</View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
  },
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
   
    
    paddingLeft: 20,
    paddingRight: 20,
    height: 610,
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
    height: 55,
    borderColor: '#F4F4F4',
    borderWidth: 1,
    borderRadius: 5, // Adjusted to match Flutter's BorderRadius.circular(7)
    paddingHorizontal: 10,
    backgroundColor: '#F4F4F4', // This matches the Flutter color closely
    color: '#000',
    fontSize: 17,
    elevation: 5, // Elevation adds shadow for Android, similar to the second BoxShadow in Flutter
   
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
  
    marginLeft: 10,
    
  },
  inputContainer: {
    // backgroundColor: '#F5F5F5',
    // borderColor: '#007BFF',
    // elevation: 9,
    // shadowColor: 'black',
    // shadowOffset: {
    //   width: 5,
    //   height: 5,
    // },
    // shadowOpacity: 0.1,
    // shadowRadius: 3,
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
    width: 130,
    height: 130,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
    marginRight: -39,
  },
  container1: {
    // flexDirection: 'row',
    // padding: 1,
  },
  dropdown: {
    // borderWidth: 1,
    // borderColor: 'grey',
    // borderRadius: 5,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'white',
    // paddingHorizontal: 30,
    // paddingVertical: 10,
    // paddingLeft: 10,
    // paddingRight: 10,
    // paddingTop: 10,
    // paddingBottom: 10,
  
   
    borderColor: '#F4F4F4',
    borderWidth: 1,
    borderRadius: 5, // Adjusted to match Flutter's BorderRadius.circular(7)
    paddingHorizontal: 10,
    backgroundColor: '#F4F4F4', // This matches the Flutter color closely
    color: '#000',
    fontSize: 17,
    elevation: 5, // Elevation adds shadow for Android, similar to the second BoxShadow in Flutter
    
    
    shadowColor: '#000',
    
    shadowOffset: {
      width: 5, // Adjusted to match one of the Flutter shadows
      height: 5, // Adjusted to match one of the Flutter shadows
    },
    shadowOpacity: 0.1, // Adjusted to match the Flutter shadow's opacity
    shadowRadius: 5,
  },
  dropdownText: {
    color: 'grey',
    fontSize: 17,
    
   
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '95%',
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    height: "99%"

  },
  modalItem: {
    padding: 10,
   
  },
  modalItemText: {
    fontSize: 16,
  },
  dropdownIcon: {
    width: 15,
    height: 15,
    marginLeft: 10,
   alignSelf: 'center',
    
  },
  closeButton: {
    alignSelf: 'flex-end', // Align the close button to the bottom-right corner
    marginTop: 10,
  },
  closeButtonText: {
    color: 'blue', // Set the close button text color to blue
    fontSize: 16,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },




});

export default StudentpersonalDetailsScreen2;
