// import React, { useState,useEffect } from 'react';
// import { View, TextInput, StyleSheet, Text, ImageBackground, StatusBar, ScrollView, Image, useColorScheme,TouchableOpacity,Modal,FlatList } from 'react-native';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
// import { LoanApplicationComponent } from './mobilepage';
// import { useNavigation } from '@react-navigation/native';

// const StudentEducationDetailsScreen = () => {
//   const navigation = useNavigation();

//   const isDarkMode = useColorScheme() === 'dark';
//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.transparent : Colors.transparent,
//   };

//   const [loanAmount, setLoanAmount] = useState('');
//   const [email, setEmail] = useState('');
//   const [selectedValue, setSelectedValue] = useState(null);
//   const [modalVisible, setModalVisible] = useState(false);
//   const items = ['Private Sector', 'Public Sector', 'Government'];
//   const [HighestQualification, setHighestQualification] = useState([]);



//   const handleLoanAmountChange = (value) => {
//     setLoanAmount(value);
//   };

//   const handleEmailChange = (value) => {
//     setEmail(value);
//   };
//   useEffect(() => {

//     const fetchHighestQualificationList = async () => {
//       try {
//         const response = await fetch('https://prod.utils.buddyloan.in/master_values.php/?master_key=qualification');
//         const json = await response.json();
//         if (json.status === 'success' && json.HTTPStatus === 200) {
//           setHighestQualification(json.master_values.map(item => item.qualification_name));
          

//         } else {
//           // Handle the error according to your app's needs
//           console.error('Failed to fetch bank list');
//         }
//       } catch (error) {
//         console.error('Error fetching bank list:', error);
//       }
//     };



//     fetchHighestQualificationList();
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
//           <Text style={styles.prompt}>Enter Your Education Details</Text>
//           <View style={styles.container1}>
//       <TouchableOpacity
//         style={styles.dropdown}
//         onPress={() => setModalVisible(true)}
//       >
//         <Text style={styles.dropdownText}>
//           {selectedValue ? selectedValue : 'Highest Qualification'}
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
//           <Text style={styles.modalTitle}>Highest Qualification</Text>

//             <FlatList
//               data={HighestQualification}
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
//               <TextInput
//               style={styles.input}
//               placeholder="Institution Name"
//               placeholderTextColor="rgba(0, 0, 0, 0.51)"
//             //   keyboardType=""
//               value={loanAmount}
//               onChangeText={handleLoanAmountChange}
//               // maxLength={10}
//             />
//           {/* <TextInput
//             style={styles.emailinput}
//             placeholder="Pincode"
//             placeholderTextColor="rgba(0, 0, 0, 0.51)"
//             keyboardType="phone-pad"
//             value={email}
//             onChangeText={handleEmailChange}
//             maxLength={6}
//           /> */}
          
//           <View style={styles.buttonContainer}>
//   <TouchableOpacity onPress={() => {
//     // Navigation logic for back button
//     navigation.goBack();
//   }}>
//     <Image source={require('../assets/images/backbtn.png')} style={styles.backbtn} />
//   </TouchableOpacity>

  

//   <TouchableOpacity onPress={() => {
//     navigation.navigate('StudentcommunicationDetailsScreen');
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
    
    
//     paddingLeft: 20,
//     paddingRight: 20,
//     height: 490,
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
//     fontSize: 15,
 
//     marginBottom: 10,
//   },




// });

// export default StudentEducationDetailsScreen;


import React, { useState,useEffect } from 'react';
import { View, StyleSheet, Text, ImageBackground, StatusBar, ScrollView, Image, useColorScheme,TouchableOpacity,Modal,FlatList, ActivityIndicator} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { LoanApplicationComponent ,userArray,mobileNum,savePartialLoanData} from './mobilepage';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';


const StudentEducationDetailsScreen = () => {
 let index;
  const navigation = useNavigation();
  intialDesignation = userArray.length > 0 ? userArray[0].companyName : '';

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.transparent : Colors.transparent,
  };

  const [loanAmount, setLoanAmount] = useState(intialDesignation);
  const [email, setEmail] = useState(intialDesignation);
  const [selectedValue, setSelectedValue] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const items = ['0-2 years', '2-5 years', '5-10 years', '10+ years'];
  const [CompanyYears, setCompanyYears] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [loanAmountError, setLoanAmountError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isLoanAmountValid, setIsLoanAmountValid] = useState(true);
  const [dropdownError, setDropdownError] = useState('');

  const emp_exp_monthTypeMapping = {
    'Under Graduate': '1',
    'Graduate': '2',
    'Post Graduate': '3',
    'Others': '4',
  };



  const handleLoanAmountChange = (value) => {
    setLoanAmount(value);
  };

  // const handleEmailChange = (value) => {
  //   setEmail(value);
  // };


  const handleEmailChange = (text) => {
    setEmail(text);
    validateEmail(text);
  };

  const validateEmail = (email) => {
  
    const isValid = email && email.trim() !== "";   
     setIsEmailValid(isValid);
    setEmailErrorMessage(isValid ? '' : 'Please enter a valid Designation');
  };


  const handleForwardClick = () => {
    // Reset error messages and validation states at the beginning
    setLoanAmountError('');
    setDropdownError('');
    setIsLoanAmountValid(true);
    setIsEmailValid(true); // Assuming this is meant for another validation, not shown in the provided code
   console.log('Loan amouasnt:', email);
    // Validate the loan amount (assuming it should be numeric and not just two characters)
    const isLoanAmountValid = email && email.trim() !== "";  
    // Validate the dropdown selection
    const isDropdownValid = selectedValue !== null && selectedValue.trim() !== '';
  
    if (isLoanAmountValid && isDropdownValid) {
      console.log('Loan amount and dropdown selections are valid');
      savePartialLoanData('qualifications', emp_exp_monthTypeMapping[selectedValue],mobileNum);
      savePartialLoanData('company_name', email,mobileNum);
      // Proceed with saving data and navigation
      navigation.navigate('StudentcommunicationDetailsScreen');
    } else {
      // Update error state on validation failure
      if (!isLoanAmountValid) {
        setIsEmailValid(false);
        setLoanAmountError('Please enter a valid loan amount');
      }
      if (!isDropdownValid) {
        setDropdownError('Please select the qualification');
      }
    }
  };

  const fetchCompanyList = async () => {
    try {
      const response = await fetch('https://prod.utils.buddyloan.in/master_values.php/?master_key=qualification');
      const json = await response.json();
      if (json.status === 'success' && json.HTTPStatus === 200) {
        setCompanyYears(json.master_values.map(item => item.qualification_name));
      } else {
        // Handle the error according to your app's needs
        console.error('Failed to fetch bank list');
      }
    } catch (error) {
      console.error('Error fetching bank list:', error);
    }
  };
  useEffect(() => {
    const fetchCompanyListAsync = async () => {
      try {
        // Your async data fetching logic here
        // For demonstration, assuming fetchCompanyList is an async function
        await fetchCompanyList();
      } catch (error) {
        console.error("Failed to fetch company list:", error);
      } finally {
        setIsLoading(false); // Set loading to false once data is fetched or on error
      }
    };
  
    fetchCompanyListAsync();
  }, []); // This effect runs once on mount to fetch the company list
  
  // useEffect(() => {
  //   // This effect runs whenever CompanyYears changes
  //   if (userArray && userArray.length > 0 && userArray[0]) {
  //     // Safely access currentAddrMonth if userArray[0] is not null/undefined and not empty
  //      index = parseInt(userArray[0].currentAddrMonth, 10) - 1; // Convert to integer and adjust index
  //   }
  //   if (index >= 0 && index < CompanyYears.length) {
  //     setSelectedValue(CompanyYears[index]); // Set the selectedValue based on the index
  //   } else {
  //     setSelectedValue("No. of Years In Current Company");
  //   }
  // }, [CompanyYears]); 
  useEffect(() => {
    const initialCurrentAddrMonth = userArray.length > 0 ? userArray[0].qualifications : '';
    const index2 = parseInt(initialCurrentAddrMonth, 10) - 1;
    if (index2 >= 0 && index2 < CompanyYears.length) {
      setSelectedValue(CompanyYears[index2]);
    } else {
      setSelectedValue(null); // Ensure this is null if no valid selection is found
    }
  }, [CompanyYears]);

  return (
    <ImageBackground
      source={require('../assets/images/dashboardbg.jpg')}
      style={styles.container}
      resizeMode="cover"
    >
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={backgroundStyle.backgroundColor} />
      {isLoading ? (
      <View style={styles.loaderContainer}>
        {/* Replace with your loader component */}
        <Image source={require('../assets/images/Icon.gif')} style={styles.gif} />
        </View>
    ) : (
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
          <Text style={styles.prompt}>Enter Your Education Details</Text>
          <View style={styles.container1}>
      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.dropdownText}>
          {selectedValue ? selectedValue : 'No. of Years In Current Company'}
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
          <Text style={styles.modalTitle}>No. of Years In Current Company</Text>

            <FlatList
              data={CompanyYears}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={() => {
                    setSelectedValue(item);
                    setDropdownError('');
                    
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

      {dropdownError ? <Text style={styles.errorText}>{dropdownError}</Text> : null}
    </View>
    <TextInput
  mode="outlined"
  label="Institution Name"
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
{/* {!isEmailValid && (
  <Text style={styles.errorText}>
    Please enter a valid company name.
  </Text>
)} */}
{/* {!isLoanAmountValid && (
  <Text style={styles.errorText}>
    Enter amount between 1,000 to 1,500,000.
  </Text>
)} */}
{!isEmailValid && (
  <Text style={styles.errorText}>
    Please enter a valid institution name.
  </Text>
)}
          {/* <TextInput
            style={styles.emailinput}
            placeholder="Pincode"
            placeholderTextColor="rgba(0, 0, 0, 0.51)"
            keyboardType="phone-pad"
            value={email}
            onChangeText={handleEmailChange}
            maxLength={6}
          /> */}
          
          <View style={styles.buttonContainer}>
  <TouchableOpacity onPress={() => {
    // Navigation logic for back button
    navigation.goBack();
  }}>
    <Image source={require('../assets/images/backbtn.png')} style={styles.backbtn} />
  </TouchableOpacity>

  

  <TouchableOpacity onPress={() => {
    handleForwardClick();
    // navigation.navigate('SalarypersonalDetailsScreen');
  }}>
    <Image source={require('../assets/images/forwardbtn.png')} style={styles.forwardbtn} />
  </TouchableOpacity>
</View>
        </View>
      </ScrollView>
    )}
      
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    fontSize: 15,
   marginBottom: 10,
  },
  gif: {
    width: 43,
    height: 43,
    resizeMode: 'contain',
    marginRight: 39,
    marginTop: 20,
    },
    errorText: {
      color: 'red', // Style the error message in red
      // Add any additional styling you need for the error text
    },




});

export default StudentEducationDetailsScreen;

