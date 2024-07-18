
// import React, { useState, useEffect } from 'react';
// import { View,StyleSheet, Text, ImageBackground, StatusBar, ScrollView, Image, useColorScheme,TouchableOpacity,Modal,FlatList } from 'react-native';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
// import { LoanApplicationComponent,userArray,savePartialLoanData,mobileNum } from './mobilepage';
// import { useNavigation } from '@react-navigation/native';
// import { TextInput } from 'react-native-paper';



// const StudentpersonalDetailsScreen = () => {
//   const navigation = useNavigation();
  
//   intialDOB = userArray.length > 0 && userArray[0].dob !== null ? 
//   userArray[0].dob.split('-').reverse().join('/') : ''; 
//   const isDarkMode = useColorScheme() === 'dark';
//     const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.transparent : Colors.transparent,
//   };

//   const mapgendervalue = {
//        "MALE" : "1",
//        "FEMALE" : "2",
//         "OTHERS" : "3"


//   }
//   const mapqualificationvalue = {
//     "Under Graduate" : "1",
//     "Graduate" : "2",
//     "Post Graduate" : "3",
//     "Others" : "4"
//   }

//   const [loanAmount, setLoanAmount] = useState(intialDOB);
//   const [email, setEmail] = useState('');
//   const [selectedValue, setSelectedValue] = useState(null);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [modalVisible2, setModalVisible2] = useState(false);
//   const [selectedValue2, setSelectedValue2] = useState(null);
//   const items = ['MALE', 'FEMALE', 'OTHERS'];
//   const items2 = ['Under Graduate', 'Graduate', 'Post Graduate', 'Others']; 
//   const [Gender, setGender] = useState([]);
//   const [HighestQualification, setHighestQualification] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isEmailValid, setIsEmailValid] = useState(true);
//   const [emailErrorMessage, setEmailErrorMessage] = useState('');
//   const [loanAmountError, setLoanAmountError] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [isLoanAmountValid, setIsLoanAmountValid] = useState(true);
//   const [isFocused, setIsFocused] = useState(false);
//   const [pan, setPan] = useState('');
//   const [state, setState] = useState('');
//   const [city, setCity] = useState('');
//   const [message, setMessage] = useState('');
//   const [panError, setPanError] = useState('');
// const [isPanValid, setIsPanValid] = useState(true);



       
//   function isValidDateOfBirth(dob) {
//     // Check the format first (basic validation)
//     const regex = /^\d{2}\/\d{2}\/\d{4}$/;
//     if (!dob.match(regex)) {
//       return false; // Does not match "DD/MM/YYYY" format
//     }
  
//     // Extract components
//     const parts = dob.split('/');
//     const day = parseInt(parts[0], 10);
//     const month = parseInt(parts[1], 10) - 1; // JS months are 0-based
//     const year = parseInt(parts[2], 10);
  
//     // Check if components form a valid date
//     const dateObj = new Date(year, month, day);
//     if (dateObj.getFullYear() !== year || dateObj.getMonth() !== month || dateObj.getDate() !== day) {
//       return false; // The date is not valid
//     }
  
//     // Additional checks like age limits can be implemented here
//     // Example: Check if the date is at least 18 years in the past
//     const today = new Date();
//     const age18Date = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
//     if (dateObj > age18Date) {
//       return false; // Not at least 18 years old
//     }
  
//     return true; // The date is valid
//   }

//   const handleLoanAmountChange = (value) => {
//     setLoanAmount(value);
//   };

//   const handleEmailChange = (value) => {
//     setEmail(value);
//   };
//   const handleForwardButtonClick = () => {
//     if (!isValidDateOfBirth(loanAmount)) {
//       // Handle the invalid date case (e.g., show an error message)
//       // This could involve setting a state to show the error message conditionally
//       setShowDateError(true);
//     } else {
//       // Proceed with the action for the forward button if the date is valid
//       setShowDateError(false);
//       // Your logic here
//     }
//   };
 
//   const handleDateChange = (text) => {
//     // Remove all non-digit characters
//     const cleaned = text.replace(/\D+/g, '');
//     // Automatically add slashes
//     const formatted = cleaned.split('').reduce((acc, curr, idx) => {
//       if (idx === 2 || idx === 4) {
//         return `${acc}/${curr}`;
//       } else {
//         return `${acc}${curr}`;
//       }
//     }, '');

//     // Limit the length to 10 characters to match DD/MM/YYYY format
//     setLoanAmount(formatted.slice(0, 10));
//   };

//   const fetchHighestQualificationList = async () => {
//     try {
//       const response = await fetch('https://prod.utils.buddyloan.in/master_values.php/?master_key=qualification');
//       const json = await response.json();
//       if (json.status === 'success' && json.HTTPStatus === 200) {
//         setHighestQualification(json.master_values.map(item => item.qualification_name));
        

//       } else {
//         // Handle the error according to your app's needs
//         console.error('Failed to fetch bank list');
//       }
//     } catch (error) {
//       console.error('Error fetching bank list:', error);
//     }
//   };

//   const fetchGenderList = async () => {
//     try {
//       const response = await fetch('https://prod.utils.buddyloan.in/master_values.php/?master_key=gender');
//       const json = await response.json();
//       if (json.status === 'success' && json.HTTPStatus === 200) {
//         setGender(json.master_values.map(item => item.gender_name));
//       } else {
//         // Handle the error according to your app's needs
//         console.error('Failed to fetch bank list');
//       }
//     } catch (error) {
//       console.error('Error fetching bank list:', error);
//     }
//   };



//   // const validatepincode = async (pincode) => {
//   //   try {
//   //     const response = await fetch('https://prod.utils.buddyloan.in/autopopulate_pincode_api.php');
//   //     const json = await response.json();
//   //     if (json.status === 'success' && json.HTTPStatus === 200) {
//   //       setHighestQualification(json.master_values.map(item => item.qualification_name));
        

//   //     } else {
//   //       // Handle the error according to your app's needs
//   //       console.error('Failed to fetch bank list');
//   //     }
//   //   } catch (error) {
//   //     console.error('Error fetching bank list:', error);
//   //   }
//   // };


//   function isValidPAN(pan) {
//     const regex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
//     return regex.test(pan);
//   }
  
//   // Step 2: Update the handleEmailChange function or create a new one for PAN
//   const handlePANChange = (value) => {
//     const upperValue = value.toUpperCase(); // Convert to uppercase
//     setPan(upperValue); // Use the uppercase value
//     if (!isValidPAN(upperValue)) { // Validate the uppercase value
//       // PAN is not valid
//       setPanError('Invalid PAN');
//       setIsPanValid(false);
//     } else {
//       // PAN is valid
//       setPanError('');
//       setIsPanValid(true);
//     }
//   };


//   const validatepincode = async (pincode_num) => {
//     console.log('mobilenumber', mobileNumber); // Log before the fetch call
//     console.log('otp', inputOtp);

//     fetch('https://prod.utils.buddyloan.in/autopopulate_pincode_api.php', {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/x-www-form-urlencoded',
//         'access_token': 'KXT3BVqyt1XkdqqqcAg9cHlVFMFUdv'
//       },
//       body: `pincode=${encodeURIComponent(pincode_num)}`})
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       return response.json();
//     })
//     .then(data => {
//       console.log('OTP sent successfully:', data);
//       setMessage(data.status);
//       if (data.message === "success") {
//         // Code to move to the next page
//         setCity(data.city);
//         setState(data.state);


//         navigation.navigate('LoanDetails');
//         console.log("Moving to the next page"); // This log is okay here since it's part of the promise chain
//       } else if (data.message === "failure") {
        
//       }
//     })
//     .catch(error => {
//       console.error("Error sending OTP:", error);
//       // Check if the error is related to CORS
//       if (error.name === 'TypeError' && error.message.includes('Failed to fetch')) {
//         console.error("This might be a CORS issue.");
//       }
//     });
//   };

//   useEffect(() => {
//     const fetchGenderListAsync = async () => {
//       try {
//         // Your async data fetching logic here
//         // For demonstration, assuming fetchCompanyList is an async function
//         await fetchGenderList();
//         await fetchHighestQualificationList();
//       } catch (error) {
//         console.error("Failed to fetch company list:", error);
//       } finally {
//         setIsLoading(false); // Set loading to false once data is fetched or on error
//       }
//     };
  
//     fetchGenderListAsync();
//   }, []); // This effect runs once on mount to fetch the company list
  
//   useEffect(() => {
//     // This effect runs whenever CompanyYears changes
//     const index = parseInt(userArray[0].genderId, 10) - 1;
//     if (index >= 0 && index < Gender.length) {
//       setSelectedValue(Gender[index]); // Set the selectedValue based on the index
//     } else {
//       setSelectedValue("Gender");
//     }
   
//   }, [Gender]); 
//   useEffect(() => {
//     // This effect runs whenever CompanyYears changes
   
//     const index2 = parseInt(userArray[0].qualifications,10) -1;// Convert to integer and adjust index
    
//     if (index2 >= 0 && index2 < HighestQualification.length) {
//       setSelectedValue2(HighestQualification[index2]); // Set the selectedValue based on the index
//     } else {
//       setSelectedValue2("Highest Qualification");
//     }
//   }, [HighestQualification]); 

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
//  <TextInput
//   mode="outlined"
//   label="DD/MM/YYYY"
//   focusable={false}
//   style={[styles.input, isFocused ? styles.focusedBorder : {}]}
//   placeholderTextColor="rgba(0, 0, 0, 0.51)"
//   keyboardType="numeric"
//   value={loanAmount}
//   onChangeText={handleDateChange}
//   onFocus={() => setIsFocused(true)}
//   onBlur={() => setIsFocused(false)}
//   error={!isValidDateOfBirth(loanAmount)} // Adjusted to use specific validation
// />

// {!isValidDateOfBirth(loanAmount) && (
//   <Text style={styles.errorMessage}>
//     Please enter a valid date in DD/MM/YYYY format.
//   </Text>
// )}
//                  <View style={[styles.container1,styles.bottomspace]}>
//       <TouchableOpacity
//         style={styles.dropdown}
//         onPress={() => setModalVisible(true)}
//       >
//         <Text style={styles.dropdownText}>
//           {selectedValue ? selectedValue : 'Gender'}
//         </Text>
//         {/* <Text style={styles.dropdownArrow}>▼</Text> */}
//         <Image
//           source={require('../assets/images/downarrow.png')}
//           style={styles.dropdownIcon}
//         />

//       </TouchableOpacity>
      

//       <Modal
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => setModalVisible(false)}
//       >
//         <TouchableOpacity
//           style={styles.modalOverlay}
//           onPress={() => setModalVisible(false)}
//         >

//           <View style={styles.modalContent}>
//           <Text style={styles.modalTitle}>Company Type</Text>

//             <FlatList
//               data={Gender}
//               keyExtractor={(item) => item}
//               renderItem={({ item }) => (
//                 <TouchableOpacity
//                   style={styles.modalItem}
//                   onPress={() => {
//                     setSelectedValue(item);
//                     setModalVisible(false);
//                   }}
//                 >
//                   <Text style={styles.modalItemText}>{item}</Text>
//                 </TouchableOpacity>
                
//               )}
//             />
//               <TouchableOpacity
//               style={styles.closeButton}
//               onPress={() => setModalVisible(false)}
//             >
//               <Text style={styles.closeButtonText}>Close</Text>
//             </TouchableOpacity>
//           </View>
//         </TouchableOpacity>
//       </Modal>
//     </View>
//     <TextInput
//   mode='outlined'
//   style={styles.input}
//   placeholder="PAN"
//   placeholderTextColor="rgba(0, 0, 0, 0.51)"
//   value={pan}
//   onChangeText={handlePANChange} // Updated to use the new handler
// />

// // Conditionally render the error message
// {!isPanValid && <Text style={styles.errorText}>{panError}</Text>}
          
//           <View style={styles.buttonContainer}>
//   <TouchableOpacity onPress={() => {
//     // Navigation logic for back button
//     navigation.goBack();
//   }}>
//     <Image source={require('../assets/images/backbtn.png')} style={styles.backbtn} />
//   </TouchableOpacity>

  

//   <TouchableOpacity onPress={() => {
//      if (!isValidDateOfBirth(loanAmount)) {
//       // If the date is invalid, you might want to set a state to show an error message
//       // or handle the invalid case appropriately here.
//       // Since the error message is already conditionally rendered based on the validation,
//       // you might not need to do anything extra if your UI is set up to react to validation changes.
//       console.log("Invalid date format. Please correct the date.");
//     } else {
//      const gendermappedvalue = mapgendervalue[selectedValue];
//      const  qualificationmappedvalue = mapqualificationvalue[selectedValue2];

//       savePartialLoanData('dob', loanAmount,mobileNum);
//       savePartialLoanData('gender', gendermappedvalue,mobileNum);
//       savePartialLoanData('qualifications', qualificationmappedvalue,mobileNum);



//       navigation.navigate('StudentpersonalDetailsScreen2');
//       // Proceed with the forward button action if the date is valid
//       console.log("Date is valid. Proceeding with forward action.");
//       // Your forward action logic here
//     }
    
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
//     paddingTop: 25,
    
//     paddingLeft: 20,
//     paddingRight: 20,
//     height: 550,
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
//     // borderColor: '#F4F4F4',
//     // borderWidth: 1,
//     // borderRadius: 5, // Adjusted to match Flutter's BorderRadius.circular(7)
//     paddingHorizontal: 10,
//     backgroundColor: '#F4F4F4', // This matches the Flutter color closely
//     color: '#000',
//     fontSize: 17,
//     elevation: 5, // Elevation adds shadow for Android, similar to the second BoxShadow in Flutter
//     marginTop: 10,
//     marginBottom: 9,
//     shadowColor: '#000',

//     shadowOffset: {
//       width: 5, // Adjusted to match one of the Flutter shadows
//       height: 5, // Adjusted to match one of the Flutter shadows
//     },
//     shadowOpacity: 0.1, // Adjusted to match the Flutter shadow's opacity
//     shadowRadius: 5,
//   },
//   bottomspace:{
//     marginBottom: 20,
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
//   errorMessage: {
//     color: 'red',
    
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
//     marginTop: 0,
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
//   errorText: {
//     color: 'red', // Style the error message in red
//     // Add any additional styling you need for the error text
//   },
//   focusedBorder: {
//     // borderColor: 'transparent', // Your desired focus border color
//     // borderWidth: 1, // Adjust as needed
//   },




// });

// export default StudentpersonalDetailsScreen;


import React, { useState, useEffect } from 'react';
import { View,StyleSheet, Text, ImageBackground, StatusBar, ScrollView, Image, useColorScheme,TouchableOpacity,Modal,FlatList } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { LoanApplicationComponent,userArray,savePartialLoanData,mobileNum } from './mobilepage';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';



const StudentpersonalDetailsScreen = () => {
  const navigation = useNavigation();
  
  intialDOB = userArray.length > 0 && userArray[0].dob !== null ? 
  userArray[0].dob.split('-').reverse().join('/') : ''; 
  inititalpan = userArray.length > 0 && userArray[0].pan !== null ? userArray[0].pan : 'PAN';

  const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.transparent : Colors.transparent,
  };

  const mapgendervalue = {
       "MALE" : "1",
       "FEMALE" : "2",
        "OTHERS" : "3"


  }
  const mapqualificationvalue = {
    "Under Graduate" : "1",
    "Graduate" : "2",
    "Post Graduate" : "3",
    "Others" : "4"
  }

  const [loanAmount, setLoanAmount] = useState(intialDOB);
  const [email, setEmail] = useState('');
  const [selectedValue, setSelectedValue] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [selectedValue2, setSelectedValue2] = useState(null);
  const items = ['MALE', 'FEMALE', 'OTHERS'];
  const items2 = ['Under Graduate', 'Graduate', 'Post Graduate', 'Others']; 
  const [Gender, setGender] = useState([]);
  const [HighestQualification, setHighestQualification] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [loanAmountError, setLoanAmountError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isLoanAmountValid, setIsLoanAmountValid] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [showGenderError, setShowGenderError] = useState(false);
  const [showQualificationError, setShowQualificationError] = useState(false);
  const [isPanValid, setIsPanValid] = useState(false);
   const [pan, setPan] = useState(inititalpan);
  const [panError, setPanError] = useState('');





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

  const handlePanChange = (value) => {  
    setPan(value);
    validatePan(value);
    };
       
  function isValidDateOfBirth(dob) {
    // Check the format first (basic validation)
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!dob.match(regex)) {
      return false; // Does not match "DD/MM/YYYY" format
    }
  
    // Extract components
    const parts = dob.split('/');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1; // JS months are 0-based
    const year = parseInt(parts[2], 10);
  
    // Check if components form a valid date
    const dateObj = new Date(year, month, day);
    if (dateObj.getFullYear() !== year || dateObj.getMonth() !== month || dateObj.getDate() !== day) {
      return false; // The date is not valid
    }
  
    // Additional checks like age limits can be implemented here
    // Example: Check if the date is at least 18 years in the past
    const today = new Date();
    const age18Date = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
    if (dateObj > age18Date) {
      return false; // Not at least 18 years old
    }
  
    return true; // The date is valid
  }

  
  
 


  
  // const handleForwardButtonClick = () => {
  //   if (!isValidDateOfBirth(loanAmount)) {
  //     // Handle the invalid date case (e.g., show an error message)
  //     // This could involve setting a state to show the error message conditionally
  //     setShowDateError(true);
  //   } else {
  //     // Proceed with the action for the forward button if the date is valid
  //     setShowDateError(false);
  //     // Your logic here
  //   }
  // };


 
  const handleDateChange = (text) => {
    // Remove all non-digit characters
    const cleaned = text.replace(/\D+/g, '');
    // Automatically add slashes
    const formatted = cleaned.split('').reduce((acc, curr, idx) => {
      if (idx === 2 || idx === 4) {
        return `${acc}/${curr}`;
      } else {
        return `${acc}${curr}`;
      }
    }, '');

    // Limit the length to 10 characters to match DD/MM/YYYY format
    setLoanAmount(formatted.slice(0, 10));
  };

  const fetchHighestQualificationList = async () => {
    try {
      const response = await fetch('https://prod.utils.buddyloan.in/master_values.php/?master_key=qualification');
      const json = await response.json();
      if (json.status === 'success' && json.HTTPStatus === 200) {
        setHighestQualification(json.master_values.map(item => item.qualification_name));
        

      } else {
        // Handle the error according to your app's needs
        console.error('Failed to fetch bank list');
      }
    } catch (error) {
      console.error('Error fetching bank list:', error);
    }
  };

  const fetchGenderList = async () => {
    try {
      const response = await fetch('https://prod.utils.buddyloan.in/master_values.php/?master_key=gender');
      const json = await response.json();
      if (json.status === 'success' && json.HTTPStatus === 200) {
        setGender(json.master_values.map(item => item.gender_name));
      } else {
        // Handle the error according to your app's needs
        console.error('Failed to fetch bank list');
      }
    } catch (error) {
      console.error('Error fetching bank list:', error);
    }
  };
  useEffect(() => {
    const fetchGenderListAsync = async () => {
      try {
        // Your async data fetching logic here
        // For demonstration, assuming fetchCompanyList is an async function
        await fetchGenderList();
        await fetchHighestQualificationList();
      } catch (error) {
        console.error("Failed to fetch company list:", error);
      } finally {
        setIsLoading(false); // Set loading to false once data is fetched or on error
      }
    };
  
    fetchGenderListAsync();
  }, []); // This effect runs once on mount to fetch the company list
  
  useEffect(() => {
    // This effect runs whenever CompanyYears changes
    const index = parseInt(userArray[0].genderId, 10) - 1;
    if (index >= 0 && index < Gender.length) {
      setSelectedValue(Gender[index]); // Set the selectedValue based on the index
    } else {
      setSelectedValue("Gender");
    }
   
  }, [Gender]); 
  useEffect(() => {
    // This effect runs whenever CompanyYears changes
   
    const index2 = parseInt(userArray[0].qualifications,10) -1;// Convert to integer and adjust index
    
    if (index2 >= 0 && index2 < HighestQualification.length) {
      setSelectedValue2(HighestQualification[index2]); // Set the selectedValue based on the index
    } else {
      setSelectedValue2("Highest Qualification");
    }
  }, [HighestQualification]); 

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
  mode="outlined"
  label="DD/MM/YYYY"
  focusable={false}
  style={[styles.input, isFocused ? styles.focusedBorder : {}]}
  placeholderTextColor="rgba(0, 0, 0, 0.51)"
  keyboardType="numeric"
  value={loanAmount}
  onChangeText={handleDateChange}
  onFocus={() => setIsFocused(true)}
  onBlur={() => setIsFocused(false)}
  error={!isValidDateOfBirth(loanAmount)} // Adjusted to use specific validation
/>

{!isValidDateOfBirth(loanAmount) && (
  <Text style={styles.errorMessage}>
    Please enter a valid date in DD/MM/YYYY format.
  </Text>
)}
                 <View style={[styles.container1,styles.bottomspace]}>
      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.dropdownText}>
          {selectedValue ? selectedValue : 'Gender'}
        </Text>
        {/* <Text style={styles.dropdownArrow}>▼</Text> */}
        <Image
          source={require('../assets/images/downarrow.png')}
          style={styles.dropdownIcon}
        />

      </TouchableOpacity>
      

      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          onPress={() => setModalVisible(false)}
        >

          <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Company Type</Text>

            <FlatList
              data={Gender}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={() => {
                    setSelectedValue(item);
                    setShowGenderError(false);
                    setModalVisible(false);
                  }}
                >
                  <Text style={styles.modalItemText}>{item}</Text>
                </TouchableOpacity>
                
              )}
            />
              <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
        {showGenderError && (
  <Text style={styles.errorMessage}>
    Please select your gender.
  </Text>
)}
    </View>

    <TextInput
              style={styles.input}
              placeholder="PAN"
              mode='outlined'
              placeholderTextColor="rgba(0, 0, 0, 0.51)"
            //   keyboardType=""
              value={pan}
              onChangeText= {handlePanChange}
              error={!isPanValid}


              maxLength={10}
            />
            {!isPanValid && (
  <Text style={styles.errorText}>
    {panError}
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
  // Reset error states
  validatePan(pan);

  if (!isValidDateOfBirth(loanAmount)) {
    console.log("Invalid date format. Please correct the date.");
  }
  if (!selectedValue || selectedValue == "Gender") {
    // Step 2: Check if a gender has been selected and show error if not
    setShowGenderError(true);
    console.log("Please select your gender.");
  }

  if (!isPanValid){
    console.log("Invalid PAN format. Please correct the PAN.");
  }

  // if (!selectedValue2 || selectedValue2 == "Highest Qualification") {
  //   setShowQualificationError(true);
  // }
  // if (!isValidPAN(pan)) {
  //   console.log("Invalid PAN format. Please correct the PAN.");
  // }

    

   else {
    const gendermappedvalue = mapgendervalue[selectedValue];
    const qualificationmappedvalue = mapqualificationvalue[selectedValue2];

    savePartialLoanData('dob', loanAmount, mobileNum);
    savePartialLoanData('gender', gendermappedvalue, mobileNum);
    savePartialLoanData('pan', pan, mobileNum);

    navigation.navigate('StudentpersonalDetailsScreen2');
    console.log("Date and gender are valid. Proceeding with forward action.");
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
    height: 550,
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
    // borderColor: '#F4F4F4',
    // borderWidth: 1,
    // borderRadius: 5, // Adjusted to match Flutter's BorderRadius.circular(7)
    paddingHorizontal: 10,
    backgroundColor: '#F4F4F4', // This matches the Flutter color closely
    color: '#000',
    fontSize: 17,
    elevation: 5, // Elevation adds shadow for Android, similar to the second BoxShadow in Flutter
    marginTop: 10,
    marginBottom: 9,
    shadowColor: '#000',

    shadowOffset: {
      width: 5, // Adjusted to match one of the Flutter shadows
      height: 5, // Adjusted to match one of the Flutter shadows
    },
    shadowOpacity: 0.1, // Adjusted to match the Flutter shadow's opacity
    shadowRadius: 5,
  },
  bottomspace:{
    marginBottom: 20,
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
  errorMessage: {
    color: 'red',
    
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
    marginTop: 0,
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
  errorText: {
    color: 'red', // Style the error message in red
    // Add any additional styling you need for the error text
  },
  focusedBorder: {
    // borderColor: 'transparent', // Your desired focus border color
    // borderWidth: 1, // Adjust as needed
  },




});

export default StudentpersonalDetailsScreen;


