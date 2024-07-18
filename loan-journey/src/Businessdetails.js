// import React, { useState,useEffect } from 'react';
// import { View, TextInput, StyleSheet, Text, ImageBackground, StatusBar, ScrollView, Image, useColorScheme,TouchableOpacity,Modal,FlatList } from 'react-native';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
// import { LoanApplicationComponent,userArray,mobileNum } from './mobilepage';
// import { useNavigation } from '@react-navigation/native';

// const BusinessDetailsScreen = () => {
//   const navigation = useNavigation();

//   const isDarkMode = useColorScheme() === 'dark';
//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.transparent : Colors.transparent,
//   };

//   const [loanAmount, setLoanAmount] = useState('');
//   const [email, setEmail] = useState('');
//   const [selectedValue, setSelectedValue] = useState(null);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [CompanyTypeBusinessList, setCompanyTypeBusinessList] = useState([]);
//   const [loanAmountError, setLoanAmountError] = useState('');
// const [emailError, setEmailError] = useState('');
// const [companyTypeError, setCompanyTypeError] = useState('');


//   const items = ['Private Sector', 'Public Sector', 'Government'];


//   const handleLoanAmountChange = (value) => {
//     setLoanAmount(value);
//   };

//   const handleEmailChange = (value) => {
//     setEmail(value);
//   };
//   const validateLoanAmount = () => {
//     if (!loanAmount) {
//       setLoanAmountError('Please enter a valid company name.');
//       return false;
//     } else {
//       setLoanAmountError('');
//       return true;
//     }
//   };
//   const validateEmail = () => {
//     const emailRegex =  /^[1-9][0-9]{5}$/;
//     if (!emailRegex.test(email)) {
//       setEmailError('Please enter a valid pincode.');
//       return false;
//     } else {
//       setEmailError('');
//       return true;
//     }
//   };

// const validateCompanyType = () => {
//   if (!selectedValue) {
//     setCompanyTypeError('Please select a company type.');
//     return false;
//   } else {
//     setCompanyTypeError('');
//     return true;
//   }
// };
// const handleForwardPress = () => {
//   const isLoanAmountValid = validateLoanAmount();
//   const isEmailValid = validateEmail();
//   const isCompanyTypeValid = validateCompanyType();

//   if (isLoanAmountValid && isEmailValid && isCompanyTypeValid) {
//     navigation.navigate('BusineesDetailsScreen2');
//   }
// };

//   useEffect(() => {
  
//     const fetchCompanyTypeBusinessList = async () => {
//       try {
//         const response = await fetch('https://prod.utils.buddyloan.in/master_values.php/?master_key=company_type_business');
//         const json = await response.json();
//         if (json.status === 'success' && json.HTTPStatus === 200) {
//           setCompanyTypeBusinessList(json.master_values.map(item => item.company_type_business_name));
//         } else {
//           // Handle the error according to your app's needs
//           console.error('Failed to fetch bank list');
//         }
//       } catch (error) {
//         console.error('Error fetching bank list:', error);
//       }
//     };


//     fetchCompanyTypeBusinessList();
//   }, []); 

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
//           <Text style={styles.prompt}>Enter Your Business Details</Text>
//           <View style={styles.container1}>
//       <TouchableOpacity
//         style={styles.dropdown}
//         onPress={() => setModalVisible(true)}
//       >
//         <Text style={styles.dropdownText}>
//           {selectedValue ? selectedValue : 'Select Company Type'}
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
//               data={CompanyTypeBusinessList}
//               keyExtractor={(item) => item}
//               renderItem={({ item }) => (
//                 <TouchableOpacity
//                   style={styles.modalItem}
//                   onPress={() => {
//                     setSelectedValue(item);
//                     setModalVisible(false);
//                     setCompanyTypeError('');
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

//       {companyTypeError ? <Text style={styles.errorText}>{companyTypeError}</Text> : null}
//     </View>
//               <TextInput
//               style={styles.input}
//               placeholder="Company Name"
//               placeholderTextColor="rgba(0, 0, 0, 0.51)"
//             //   keyboardType=""
//               value={loanAmount}
//               onChangeText={(value) => {
//                 setLoanAmount(value);
//                 validateLoanAmount(); // Optionally validate on change
//               }}

//               // maxLength={10}
//             />
//               {loanAmountError ? <Text style={styles.errorText}>{loanAmountError}</Text> : null}

//           <TextInput
//             style={styles.emailinput}
//             placeholder="Pincode"
//             placeholderTextColor="rgba(0, 0, 0, 0.51)"
//             keyboardType="phone-pad"
//             value={email}
//             onChangeText={(value) => {
//               setEmail(value);
//               validateEmail(); // Optionally validate on change
//             }}
//             maxLength={6}
//           />
//           {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
          
//           <View style={styles.buttonContainer}>
//   <TouchableOpacity onPress={() => {
//     // Navigation logic for back button
//     navigation.goBack();
//   }}>
//     <Image source={require('../assets/images/backbtn.png')} style={styles.backbtn} />
//   </TouchableOpacity>

  

//   <TouchableOpacity onPress={() => {
//     handleForwardPress();
//     // navigation.navigate('BusineesDetailsScreen2');
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
//   errorText: {
//     color: 'red',
//   },
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

// export default BusinessDetailsScreen;
import React, { useState,useEffect } from 'react';
import { View,  StyleSheet, Text, ImageBackground, StatusBar, ScrollView, Image, useColorScheme,TouchableOpacity,Modal,FlatList } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { LoanApplicationComponent,userArray,savePartialLoanData,mobileNum } from './mobilepage';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';


const BusinessDetailsScreen = () => {
  const navigation = useNavigation();
  const initialCompany = userArray.length > 0 ? userArray[0].companyName : '';
  const intialPincode = userArray.length > 0 ? userArray[0].officePincode : '';
  const companyType = userArray.length > 0 && userArray[0].companyType!= null ? userArray[0].companyType : 'Select Company Type';
  



  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.transparent : Colors.transparent,
  };

  const [loanAmount, setLoanAmount] = useState(intialPincode);
  const [email, setEmail] = useState(initialCompany);
   const [modalVisible, setModalVisible] = useState(false);
  const items = ['Private Sector', 'Public Sector', 'Government'];
  const [CompanyList, setCompanyList] = useState([]);
  const CompanyLists = ['Private Sector', 'Public Sector', 'Government'];
  const [validpincode, setValidPincode] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [loanAmountError, setLoanAmountError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isLoanAmountValid, setIsLoanAmountValid] = useState(true);
  const [companyTypeError, setCompanyTypeError] = useState('');
  const [isValidCompanyType, setIsValidCompanyType] = useState(true);
   [isPincodeValid, setisPincodeValid] = useState('');
   [city, setCity] = useState('');
   [pincodestates, setpincodestate] = useState('');



 
  const [selectedValue, setSelectedValue] = useState(
    companyType
  )

  


  const validpincodes = (pincode_num) => {
    return new Promise((resolve, reject) => {
      fetch('https://utils.buddyloan.in/autopopulate_pincode_api.php', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `pincode=${encodeURIComponent(pincode_num)}`,
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        if (data.status === "success") {
          setisPincodeValid(data.status);
          setCity(data.data.city);
          setpincodestate(data.data.state);
          resolve(data.status); // Resolve the promise with the status
        } else {
          setisPincodeValid("error");
          resolve("error"); // Resolve the promise with "error"
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setisPincodeValid("error");
        reject(error); // Reject the promise on error
      });
    });
  };


  const handleLoanAmountChange = (text) => {
    setLoanAmount(text);
    validpincodes(text);
    // Convert text to a number for comparison
    const amount = Number(text);
    // Check if the amount is within the valid range
    const pincodeRegex = /^[1-9][0-9]{5}$/;
    const isValid = isPincodeValid === "success";
    setIsLoanAmountValid(!isValid);
  };
  const companyTypeMapping = {
    "Private Sector": "1",
    "Public Sector": "2",
    "Government": "3",
    "Proprietorship": "4",
    "Others": "5"
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    validateEmail(text);
  };

  const validateEmail = (email) => {
    
  
    const isValid = email && email.trim() !== "";  
     setIsEmailValid(isValid);
    setEmailErrorMessage(isValid ? '' : 'Please enter a valid Company name.');
  };

  // const handleForwardClick = () => {
  //   // Reset error messages at the beginning
  //   setLoanAmountError('');
  //   setEmailError('');
  
  //   // Validate the loan amount
  //   const pincodeRegex = /^[1-9][0-9]{5}$/;
  //   const isLoanAmountValid = pincodeRegex.test(loanAmount); 
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   const isEmailValid = email.trim() !== "";  
    
  //   if (isLoanAmountValid && isEmailValid) {
  //     console.log('Loan amount and email are valid');
  //     // If both loan amount and email are valid, navigate to the next page
  //     navigation.navigate('SalaryworkDetailsScreen2');
  //   } else {
  //     // Step 2: Update error state on validation failure
  //     if (!isLoanAmountValid) {
  //       console.log('Loan amount is invalid');
  //       setLoanAmountError('Please Enter valid company name');
  //     }
  //     if (!isEmailValid) {
  //       console.log('Email is invalid');
  //       setEmailError('Enter valid pincode'); 
  //     }
  //     // Optionally, trigger the functions that handle input changes to reflect the error state
  //     console.log('Email:', email);
  //     handleEmailChange(email);
  //     handleLoanAmountChange(loanAmount);
  //   }
  // };
  // Step 1: Define a state for the dropdown error message

  const handleForwardClick = async () => { // Make the function async
    console.log('dsc', loanAmount);
    console.log('dsc', email);
    console.log('dsc', selectedValue);
  
    // Await the result of validpincodes before proceeding
    const pincodeValidationResult = await validpincodes(loanAmount);
    console.log('dsc', isPincodeValid);
  
    // Reset error messages at the beginning
    setLoanAmountError('');
    setEmailError('');
    setCompanyTypeError(''); // Reset company type error message
  
    // Validate pincode
    const isValid = pincodeValidationResult === "success";
    if (!isValid) {
      setLoanAmountError('Enter valid pincode');
    }
  
    // Validate company name
    const isCompanyNameValid = email && email.trim() !== "";
    if (!isCompanyNameValid) {
      setEmailError('Please Enter valid company name');
    }
  
    // Validate company type selection
    const isValidCompanyType = selectedValue && selectedValue !== 'Select Company Type';
    if (!isValidCompanyType) {
      setCompanyTypeError('Please select a valid company type');
    }
  
    // Proceed if all validations pass
    if (isValid && isCompanyNameValid && isValidCompanyType) {
      console.log('city', city);
      console.log('state', pincodestates);
      console.log('Pincode, company name, and company type are valid');
      // Proceed to save data and navigate
      savePartialLoanData('business_type', companyTypeMapping[selectedValue], mobileNum);
      savePartialLoanData('company_name', email, mobileNum);
      savePartialLoanData('office_pincode', loanAmount, mobileNum);
      savePartialLoanData('office_city', city, mobileNum);
      savePartialLoanData('office_state', pincodestates, mobileNum);
  
      navigation.navigate('BusineesDetailsScreen2');
    } else {
      // Log and handle invalid inputs
      if (!isValid) {
        console.log('Pincode is invalid');
        setIsLoanAmountValid(false);
      }
      if (!isCompanyNameValid) {
        console.log('Company name is invalid');
        setIsEmailValid(false);
      }
      if (!isValidCompanyType) {
        console.log('Company type is invalid');
        setIsValidCompanyType(false);
      }
    }
  };

// Step 3: Display the error message for the dropdown if there is one
// This should be done in the JSX where the dropdown is rendered
// Example:
// {!isValidCompanyType && (
//   <Text style={styles.errorText}>
//     {companyTypeError}
//   </Text>
// )}



  // const handleLoanAmountChange = (value) => {
  //   setLoanAmount(value);
  // };

  // const handleEmailChange = (value) => {
  //   setEmail(value);
  // };

  consthandleCompanyChange = (value) => {
    setCompany(value);
  };

 useEffect(() => {
  const fetchCompanyList = () => {
    console.log('Fetching company list...');
    console.log('CompanyList before fetching:', companyType);
    console.log('CompanyList before fetching:', userArray[0].companyType);

    fetch('https://prod.utils.buddyloan.in/master_values.php/?master_key=company_type_salaried')
      .then(response => response.json())
      .then(json => {
        if (json.status === 'success' && json.HTTPStatus === 200) {
          return json.master_values.map(item => item.company_type_salaried_name);
        } else {
          console.error('Failed to fetch company list');
          return [];
        }
      })
      .then(data => {
        setCompanyList(data);
        console.log('CompanyList after fetching:', data);
      })
      .catch(error => {
        console.error('Error fetching company list:', error);
      });
  };

  fetchCompanyList();
}, []);



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
          <Text style={styles.prompt}>Enter Your Business Details</Text>
          <View style={styles.container1}>
      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.dropdownText}>
          {selectedValue ? selectedValue : companyType}
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
              data={CompanyList}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={() => {
                    setSelectedValue(item);
                    setCompanyTypeError('');
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
       {!isValidCompanyType && (
  <Text style={styles.errorText}>
    {companyTypeError}
  </Text>
)}
    </View>

              {/* <TextInput
              style={styles.input}
              placeholder="Company Name"
              placeholderTextColor="rgba(0, 0, 0, 0.51)"
            //   keyboardType=""
              value={email}
              onChangeText={handleEmailChange}
              // maxLength={10}
            />
          <TextInput
            style={styles.emailinput}
            placeholder="Pincode"
            placeholderTextColor="rgba(0, 0, 0, 0.51)"
            keyboardType="phone-pad"
            value={loanAmount}
            onChangeText={handleLoanAmountChange}
            maxLength={6}
          /> */}
           <TextInput
  mode="outlined"
  label="Company Name"
  value={email}
  // onChangeText={(text) => {
  //   handleLoanAmountChange(text);
  //   // Optionally reset loan amount error state here if you're doing live validation
  // }}
  onChangeText={handleEmailChange}
  style={styles.input}
  error={!isEmailValid} // Adjusted to use specific validation state
/>
{/* {!isLoanAmountValid && (
  <Text style={styles.errorText}>
    Enter amount between 1,000 to 1,500,000.
  </Text>
)} */}
{!isEmailValid && (
  <Text style={styles.errorText}>
    {emailError}
  </Text>
)}

<TextInput
  mode="outlined"
  label="Pincode"
  keyboardType="phone-pad"
  value={loanAmount}
  maxLength={6}
  // onChangeText={(text) => {
  //   handleEmailChange(text);
  //   // Optionally reset email error state here if you're doing live validation
  // }}
  onChangeText={handleLoanAmountChange}
  style={styles.emailinput}
  error={!isLoanAmountValid} // Adjusted to use specific validation state
/>
{/* {!isEmailValid && (
  <Text style={styles.errorText}>
    Please enter a valid email address.
  </Text>
)} */}
{!isLoanAmountValid && (
  <Text style={styles.errorText}>
   {loanAmountError}
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
   
    handleForwardClick();
    
    // navigation.navigate('SalaryworkDetailsScreen2');
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
  errorText: {
    color: 'red', // Style the error message in red
    // Add any additional styling you need for the error text
  },




});

export default BusinessDetailsScreen;

