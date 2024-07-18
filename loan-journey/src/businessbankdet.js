// import React, { useState,useEffect } from 'react';
// import { View, TextInput, StyleSheet, Text, ImageBackground, StatusBar, ScrollView, Image, useColorScheme,TouchableOpacity,Modal,FlatList, } from 'react-native';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
// import { LoanApplicationComponent,userArray,savePartialLoanData,mobileNum } from './mobilepage';
// import { useNavigation } from '@react-navigation/native';

// const BusinessBankDetailsScreen = () => {
//   const navigation = useNavigation();
//   intialIncome = userArray.length > 0 ? userArray[0].monthlyIncome : '';
//   intialBank = userArray.length > 0 && userArray[0].savingAccountBank!=null ? userArray[0].savingAccountBank : 'Select Your Bank';

//   const isDarkMode = useColorScheme() === 'dark';
//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.transparent : Colors.transparent,
//   };

//   const [loanAmount, setLoanAmount] = useState(intialIncome);
//   const [email, setEmail] = useState('');
//   const [bankList, setBankList] = useState([]);
//   const [InterestInCreditCardList, setInterestInCreditCardList] = useState([]);

//   const [selectedValue, setSelectedValue] = useState(intialBank);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [modalVisible2, setModalVisible2] = useState(false);
//   const [selectedValue2, setSelectedValue2] = useState(null);
//   const items = ['MALE', 'FEMALE', 'OTHERS'];
//   const items2 = ['Under Graduate', 'Graduate', 'Post Graduate', 'Others']; 
//   const [isLoading, setIsLoading] = useState(true);
//   const [isLoanAmountValid, setIsLoanAmountValid] = useState(true);
//   const [loanAmountError, setLoanAmountError] = useState('');
//   const [bankError, setBankError] = useState(''); // Assuming this is for the bank dropdown
//   const [creditCardInterestError, setCreditCardInterestError] = useState('');
//   const [isbankerrorvalid, setisbankerrorvalid]  = useState(true)
//   const [iscreditcardinteresterrorvalid, setiscreditcardinteresterrorvalid]  = useState(true)
//   // Assuming this is for the credit card interest dropdown
  


       


//   const fetchBankList = async () => {
//     try {
//       const response = await fetch('https://prod.utils.buddyloan.in/bank_list.php');
//       const json = await response.json();
//       if (json.status === 'success' && json.HTTPStatus === 200) {
//         setBankList(json.banklist);
//       } else {
//         // Handle the error according to your app's needs
//         console.error('Failed to fetch bank list');
//       }
//     } catch (error) {
//       console.error('Error fetching bank list:', error);
//     }
//   };
//   const fetchInterestInCreditCardList = async () => {
//     try {
//       const response = await fetch('https://prod.utils.buddyloan.in/master_values.php/?master_key=iscredit_card');
//       const json = await response.json();
//       if (json.status === 'success' && json.HTTPStatus === 200) {
//         setInterestInCreditCardList(json.master_values.map(item => item.iscredit_card_name));
//       } else {
//         // Handle the error according to your app's needs
//         console.error('Failed to fetch bank list');
//       }
//     } catch (error) {
//       console.error('Error fetching bank list:', error);
//     }
//   };



//   useEffect(() => {
//     const fetchCompanyListAsync = async () => {
//       try {
//         // Your async data fetching logic here
//         // For demonstration, assuming fetchCompanyList is an async function
//         await fetchBankList();
//         await fetchInterestInCreditCardList();
//       } catch (error) {
//         console.error("Failed to fetch company list:", error);
//       } finally {
//         setIsLoading(false); // Set loading to false once data is fetched or on error
//       }
//     };
  
//     fetchCompanyListAsync();
//   }, []); // This effect runs once on mount to fetch the company list
  
//   useEffect(() => {
//     // This effect runs whenever CompanyYears changes
//     const index = parseInt(userArray[0].interestCreditCards, 10) - 1; // Convert to integer and adjust index
//     if (index >= 0 && index < InterestInCreditCardList.length) {
//       setSelectedValue2(InterestInCreditCardList[index]); // Set the selectedValue based on the index
//     } else {
//       setSelectedValue2("Are You Intersted In a Credit Card");
//     }
//   }, [InterestInCreditCardList]); 

//   // const handleLoanAmountChange = (value) => {
//   //   setLoanAmount(value);
//   // };
//   const handleLoanAmountChange = (text) => {
//     setLoanAmount(text);
//     // Convert text to a number for comparison
//     const amount = Number(text);
//     // Check if the amount is within the valid range
//     const pincodeRegex = /^\d{5,7}$/
//     const isValid = pincodeRegex.test(text);
//     setIsLoanAmountValid(isValid);
//   };
//  const handleForwardClick = () => {
//   // Reset error messages at the beginning
//   setLoanAmountError('');

//   // Validate the loan amount
//   const pincodeRegex = /^\d{5,7}$/;
//   const isLoanAmountValid = pincodeRegex.test(loanAmount);

//   // Define validation for dropdown selections
//   const isBankSelected = selectedValue || intialBank !== 'Select Your Bank';
//   const isCreditCardInterestSelected = selectedValue2 !== 'Are You Intersted In a Credit Card';
//   if (isLoanAmountValid && isBankSelected && isCreditCardInterestSelected) {
//     console.log('Loan amount, bank, and credit card interest selections are valid');
//     savePartialLoanData('monthly_income', loanAmount,mobileNum);
//     savePartialLoanData('saving_account_bank', selectedValue,mobileNum);
//     savePartialLoanData('interest_credit_cards', (InterestInCreditCardList.indexOf(selectedValue2) + 1).toString(), mobileNum);
//     // If all inputs are valid, navigate to the next page
//     navigation.navigate('SubmitLoanscreen');
//   } else {
//     // Update error state on validation failure
//     if (!isLoanAmountValid) {
//       console.log('Loan amount is invalid');
//       setLoanAmountError('Amount should be within 5-7 digits');
//     }
//     if (!isBankSelected) {
//       setisbankerrorvalid(false)
//       setBankError('Please select a bank');
//       console.log('Bank selection is invalid');
//       // Set an error state for bank selection here
//     }
//     if (!isCreditCardInterestSelected) {
//       setiscreditcardinteresterrorvalid(false)
//       setCreditCardInterestError('Please select an credit card option');
//       console.log('Credit card interest selection is invalid');
//       // Set an error state for credit card interest selection here
//     }

//     // Optionally, trigger the functions that handle input changes to reflect the error state
//     console.log('Email:', email);
//     handleLoanAmountChange(loanAmount);
//   }
// };

//   const handleEmailChange = (value) => {
//     setEmail(value);
//   };
  

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
//           <Text style={styles.prompt}>Enter Bank Details</Text>
     
//               <TextInput
//               style={styles.input}
//               placeholder="Monthly Income"
//               placeholderTextColor="rgba(0, 0, 0, 0.51)"
//               keyboardType="phone-pad"
//               value={loanAmount}
//               onChangeText={handleLoanAmountChange}
//               error={!isLoanAmountValid}
//               maxLength={7}
//             />
//                         {!isLoanAmountValid && (
//   <Text style={styles.errorText}>
//    Amount Should be within 5-7 digits
//   </Text>
// )}
//                  <View style={[styles.container1,styles.bottomspace]}>
//       <TouchableOpacity
//         style={styles.dropdown}
       
//         onPress={() => {
//           setModalVisible(true);
//           setisbankerrorvalid(true);
//         }}
//       >
//         <Text style={styles.dropdownText}>
//           {selectedValue ? selectedValue : intialBank}
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
//           <Text style={styles.modalTitle}>Select Your Bank</Text>

//             <FlatList
//               data={bankList}
//               keyExtractor={(item) => item}
//               renderItem={({ item }) => (
//                 <TouchableOpacity
//                   style={styles.modalItem}
//                   onPress={() => {
//                     setSelectedValue(item);
//                     console.log('Selected bank:', selectedValue);
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

//       {isbankerrorvalid ? null : <Text style={styles.errorText}>{bankError}</Text>}

//     </View>
//     <View style={styles.container1}>
//       <TouchableOpacity
//         style={styles.dropdown}
//         onPress={() => {setModalVisible2(true)
//         setiscreditcardinteresterrorvalid(true);
//         }
//         }
//       >
//         <Text style={styles.dropdownText}>
//           {selectedValue2 ? selectedValue2: 'Are You Intersted In a Credit Card'}
//         </Text>
//         {/* <Text style={styles.dropdownArrow}>▼</Text> */}
//         <Image
//           source={require('../assets/images/downarrow.png')}
//           style={styles.dropdownIcon}
//         />

//       </TouchableOpacity>
      

//       <Modal
//         transparent={true}
//         visible={modalVisible2}
//         onRequestClose={() => setModalVisible2(false)}
//       >
//         <TouchableOpacity
//           style={styles.modalOverlay}
//           onPress={() => setModalVisible2(false)}
//         >

//           <View style={styles.modalContent}>
//           <Text style={styles.modalTitle}>Select Credit Card Option</Text>

//             <FlatList
//               data={InterestInCreditCardList}
//               keyExtractor={(item) => item}
//               renderItem={({ item }) => (
//                 <TouchableOpacity
//                   style={styles.modalItem}
//                   onPress={() => {
//                     setSelectedValue2(item);
//                     setModalVisible2(false);
//                   }}
//                 >
//                   <Text style={styles.modalItemText}>{item}</Text>
//                 </TouchableOpacity>
                
//               )}
//             />
//               <TouchableOpacity
//               style={styles.closeButton}
//               onPress={() => setModalVisible2(false)}
//             >
//               <Text style={styles.closeButtonText}>Close</Text>
//             </TouchableOpacity>
//           </View>
//         </TouchableOpacity>
//       </Modal>
//       {iscreditcardinteresterrorvalid ? null : <Text style={styles.errorText}>{creditCardInterestError}</Text>}
//     </View>
          
//           <View style={styles.buttonContainer}>
//   <TouchableOpacity onPress={() => {
//     // Navigation logic for back button
//     navigation.goBack();
//   }}>
//     <Image source={require('../assets/images/backbtn.png')} style={styles.backbtn} />
//   </TouchableOpacity>

  

//   <TouchableOpacity onPress={() => {
//     handleForwardClick();
//     // navigation.navigate('SubmitLoanscreen');
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
//   errorText: {
//     color: 'red',
//     marginBottom: 10,
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
//     marginTop: 10,
//     marginBottom: 3,
//     shadowColor: '#000',

//     shadowOffset: {
//       width: 5, // Adjusted to match one of the Flutter shadows
//       height: 5, // Adjusted to match one of the Flutter shadows
//     },
//     shadowOpacity: 0.1, // Adjusted to match the Flutter shadow's opacity
//     shadowRadius: 5,
//   },
//   bottomspace:{
//     marginTop: 20,
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

// export default BusinessBankDetailsScreen;
import React, { useState,useEffect } from 'react';
import { View, TextInput, StyleSheet, Text, ImageBackground, StatusBar, ScrollView, Image, useColorScheme,TouchableOpacity,Modal,FlatList, } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { LoanApplicationComponent,userArray,savePartialLoanData,mobileNum } from './mobilepage';
import { useNavigation } from '@react-navigation/native';

const BusinessBankDetailsScreen = () => {
  const navigation = useNavigation();
  intialIncome = userArray.length > 0 ? userArray[0].monthlyIncome : '';
  intialBank = userArray.length > 0 && userArray[0].savingAccountBank!=null ? userArray[0].savingAccountBank : 'Select Your Bank';

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.transparent : Colors.transparent,
  };

  const [loanAmount, setLoanAmount] = useState(intialIncome);
  const [email, setEmail] = useState('');
  const [bankList, setBankList] = useState([]);
  const [InterestInCreditCardList, setInterestInCreditCardList] = useState([]);
  const [gross_turnover, setGrossTurnover] = useState([]);

  const [selectedValue, setSelectedValue] = useState(intialBank);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [selectedValue2, setSelectedValue2] = useState(null);
  const [selectedValue3, setSelectedValue3] = useState(null);
  const items = ['MALE', 'FEMALE', 'OTHERS'];
  const items2 = ['Under Graduate', 'Graduate', 'Post Graduate', 'Others']; 
  const [isLoading, setIsLoading] = useState(true);
  const [isLoanAmountValid, setIsLoanAmountValid] = useState(true);
  const [loanAmountError, setLoanAmountError] = useState('');
  const [bankError, setBankError] = useState(''); // Assuming this is for the bank dropdown
  const [gross_turnoverError, setGrossTurnoverError] = useState('');
  const [creditCardInterestError, setCreditCardInterestError] = useState('');
  const [isbankerrorvalid, setisbankerrorvalid]  = useState(true)
  const [iscreditcardinteresterrorvalid, setiscreditcardinteresterrorvalid]  = useState(true)
  const [isgrosserrorvalid, setisgrosserrorvalid]  = useState(true)
  // Assuming this is for the credit card interest dropdown
  


       
  const gross_turnovermapping = {
    "0-10Lacs": "1",
    "10-20Lacs": "2",
    "20-50Lacs": "3",
    "50+Lacs": "4",
   
  };
  const interestInCreditCardMapping = {
    "YES": "1",
    "NO": "0",
  };

  const fetchBankList = async () => {
    try {
      const response = await fetch('https://prod.utils.buddyloan.in/bank_list.php');
      const json = await response.json();
      if (json.status === 'success' && json.HTTPStatus === 200) {
        setBankList(json.banklist);
      } else {
        // Handle the error according to your app's needs
        console.error('Failed to fetch bank list');
      }
    } catch (error) {
      console.error('Error fetching bank list:', error);
    }
  };

  
  const fetchInterestInCreditCardList = async () => {
    try {
      const response = await fetch('https://prod.utils.buddyloan.in/master_values.php/?master_key=iscredit_card');
      const json = await response.json();
      if (json.status === 'success' && json.HTTPStatus === 200) {
        setInterestInCreditCardList(json.master_values.map(item => item.iscredit_card_name));
      } else {
        // Handle the error according to your app's needs
        console.error('Failed to fetch bank list');
      }
    } catch (error) {
      console.error('Error fetching bank list:', error);
    }
  };


  const fetchgrossturnover = async () => {
    try {
      const response = await fetch('https://prod.utils.buddyloan.in/master_values.php/?master_key=gross_turnover');
      const json = await response.json();
      if (json.status === 'success' && json.HTTPStatus === 200) {
        setGrossTurnover(json.master_values.map(item => item.gross_turnover_name));
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
        await fetchBankList();
        await fetchInterestInCreditCardList();
        await fetchgrossturnover();
      } catch (error) {
        console.error("Failed to fetch company list:", error);
      } finally {
        setIsLoading(false); // Set loading to false once data is fetched or on error
      }
    };
  
    fetchCompanyListAsync();
  }, []); // This effect runs once on mount to fetch the company list
  
  useEffect(() => {
    // This effect runs whenever CompanyYears changes
    const index = parseInt(userArray[0].interestCreditCards, 10) === 0 ? 1 : parseInt(userArray[0].interestCreditCards, 10) - 1;
     if (index >= 0 && index < InterestInCreditCardList.length) {
      setSelectedValue2(InterestInCreditCardList[index]); // Set the selectedValue based on the index
    } else {
      setSelectedValue2("Are You Intersted In a Credit Card");
    }


    const index1 = parseInt(userArray[0].grossTurnoverId,10) -1
    if (index1 >= 0 && index1 < gross_turnover.length) {
      setSelectedValue3(gross_turnover[index1]); // Set the selectedValue based on the index
    } else {
      setSelectedValue3("Enter Gross Turnover");
    }
  }, [InterestInCreditCardList],[gross_turnover]); 

  // const handleLoanAmountChange = (value) => {
  //   setLoanAmount(value);
  // };
  const handleLoanAmountChange = (text) => {
    setLoanAmount(text);
    // Convert text to a number for comparison
    const amount = Number(text);
    // Check if the amount is within the valid range
    const pincodeRegex = /^\d{5,7}$/
    const isValid = pincodeRegex.test(text);
    setIsLoanAmountValid(isValid);
  };
 const handleForwardClick = () => {
  // Reset error messages at the beginning
  setLoanAmountError('');
  const gross_turnover_mapping = gross_turnovermapping[selectedValue3];
  const creditCardValue = interestInCreditCardMapping[selectedValue2];

  // Validate the loan amount
  const pincodeRegex = /^\d{5,7}$/;
  const isLoanAmountValid = pincodeRegex.test(loanAmount);

  // Define validation for dropdown selections
  const isBankSelected = selectedValue && selectedValue !== 'Select Your Bank';
    const isCreditCardInterestSelected = selectedValue2 !== 'Are You Intersted In a Credit Card';
    const isGrossTurnoverSelected = selectedValue3 !== 'Enter Gross Turnover';
  if ( isGrossTurnoverSelected && isBankSelected && isCreditCardInterestSelected ) {
    const selectedIndex = InterestInCreditCardList.indexOf(selectedValue2);
     const valueToSend = selectedIndex === 1 ? 0 : selectedIndex;
    console.log('Loan amount, bank, and credit card interest selections are valid');
    console.log('gross_turnover_mapping',gross_turnover_mapping);
    console.log('CreditCardValue',valueToSend);
    // savePartialLoanData('monthly_income', loanAmount,mobileNum);
    savePartialLoanData('saving_account_bank', selectedValue,mobileNum);
    savePartialLoanData('interest_credit_cards', creditCardValue, mobileNum); 
    savePartialLoanData('gross_turnover_id',gross_turnover_mapping, mobileNum);
    savePartialLoanData('gross_turnover,saving_account_bank,interest_credit_cards,napp',gross_turnover_mapping + "," + selectedValue + ",",creditCardValue + "," + "1",mobileNum);
    


    // save_partial_loandata('gross_turnover,saving_account_bank,interest_credit_cards,napp',
    //   user.gross_turnover_id  + "," + user.saving_account_bank + ","
    //       + user.interestedInCreditCards +"," + "1",user);
       // If all inputs are valid, navigate to the next page
    navigation.navigate('SubmitLoanscreen');
  } else {
    // Update error state on validation failure
    if (!isLoanAmountValid) {
      console.log('Loan amount is invalid');
      setLoanAmountError('Amount should be within 5-7 digits');
    }
    if (!isBankSelected) {
      setisbankerrorvalid(false)
      setBankError('Please select a bank');
      console.log('Bank selection is invalid');
      // Set an error state for bank selection here
    }
    if (!isCreditCardInterestSelected) {
      setiscreditcardinteresterrorvalid(false)
      setCreditCardInterestError('Please select an credit card option');

      console.log('Credit card interest selection is invalid');
      // Set an error state for credit card interest selection here
    }
    if (!isGrossTurnoverSelected) {
      setisgrosserrorvalid(false)
      setGrossTurnoverError('Please select an gross turnover option');
    }
    

    // Optionally, trigger the functions that handle input changes to reflect the error state
    console.log('Email:', email);
    handleLoanAmountChange(loanAmount);
  }
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
          <Text style={styles.prompt}>Bank Details</Text>
             
          <View style={styles.container1}>
      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => {setModalVisible3(true)
          setisgrosserrorvalid(true);
        }
        }
      >
        <Text style={styles.dropdownText}>
          {selectedValue3 ? selectedValue3: 'Are You Intersted In a Credit Card'}
        </Text>
        {/* <Text style={styles.dropdownArrow}>▼</Text> */}
        <Image
          source={require('../assets/images/downarrow.png')}
          style={styles.dropdownIcon}
        />

      </TouchableOpacity>
      

      <Modal
        transparent={true}
        visible={modalVisible3}
        onRequestClose={() => setModalVisible3(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          onPress={() => setModalVisible3(false)}
        >

          <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Enter Gross Turnover</Text>

            <FlatList
              data={gross_turnover}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={() => {
                    setSelectedValue3(item);
                    setModalVisible3(false);
                  }}
                >
                  <Text style={styles.modalItemText}>{item}</Text>
                </TouchableOpacity>
                
              )}
            />
              <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible3(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
      {isgrosserrorvalid ? null : <Text style={styles.errorText}>{gross_turnoverError}</Text>}
    </View>
     
                 <View style={[styles.container1,styles.bottomspace]}>
      <TouchableOpacity
        style={styles.dropdown}
       
        onPress={() => {
          setModalVisible(true);
          setisbankerrorvalid(true);
        }}
      >
        <Text style={styles.dropdownText}>
          {selectedValue ? selectedValue : intialBank}
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
          <Text style={styles.modalTitle}>Select Your Bank</Text>

            <FlatList
              data={bankList}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={() => {
                    setSelectedValue(item);
                    setBankError('');
                    console.log('Selected bank:', selectedValue);
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

      {isbankerrorvalid ? null : <Text style={styles.errorText}>{bankError}</Text>}

    </View>
    <View style={styles.container1}>
      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => {setModalVisible2(true)
        setiscreditcardinteresterrorvalid(true);
        }
        }
      >
        <Text style={styles.dropdownText}>
          {selectedValue2 ? selectedValue2: 'Are You Intersted In a Credit Card'}
        </Text>
        {/* <Text style={styles.dropdownArrow}>▼</Text> */}
        <Image
          source={require('../assets/images/downarrow.png')}
          style={styles.dropdownIcon}
        />

      </TouchableOpacity>
      

      <Modal
        transparent={true}
        visible={modalVisible2}
        onRequestClose={() => setModalVisible2(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          onPress={() => setModalVisible2(false)}
        >

          <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Select Credit Card Option</Text>

            <FlatList
              data={InterestInCreditCardList}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={() => {
                    setSelectedValue2(item);
                    setModalVisible2(false);
                  }}
                >
                  <Text style={styles.modalItemText}>{item}</Text>
                </TouchableOpacity>
                
              )}
            />
              <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible2(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
      {iscreditcardinteresterrorvalid ? null : <Text style={styles.errorText}>{creditCardInterestError}</Text>}
    </View>
          
          <View style={styles.buttonContainer}>
  <TouchableOpacity onPress={() => {
    // Navigation logic for back button
    navigation.goBack();
  }}>
    <Image source={require('../assets/images/backbtn.png')} style={styles.backbtn} />
  </TouchableOpacity>

  

  <TouchableOpacity onPress={() => {
    handleForwardClick();
    // navigation.navigate('SubmitLoanscreen');
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
  errorText: {
    color: 'red',
    marginBottom: 10,
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
    marginTop: 10,
    marginBottom: 3,
    shadowColor: '#000',

    shadowOffset: {
      width: 5, // Adjusted to match one of the Flutter shadows
      height: 5, // Adjusted to match one of the Flutter shadows
    },
    shadowOpacity: 0.1, // Adjusted to match the Flutter shadow's opacity
    shadowRadius: 5,
  },
  bottomspace:{
    marginTop: 20,
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




});

export default BusinessBankDetailsScreen;

