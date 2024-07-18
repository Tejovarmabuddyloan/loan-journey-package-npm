// import React, { useState,useEffect } from 'react';
// import { View, TextInput, StyleSheet, Text, ImageBackground, StatusBar, ScrollView, Image, useColorScheme,TouchableOpacity,Modal,FlatList } from 'react-native';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
// import { LoanApplicationComponent } from './mobilepage';
// import { useNavigation } from '@react-navigation/native';

// const StudentcommunicationDetailsScreen = () => {
//   const navigation = useNavigation();

//   const isDarkMode = useColorScheme() === 'dark';
//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.transparent : Colors.transparent,
//   };

//   const [loanAmount, setLoanAmount] = useState('');
//   const [email, setEmail] = useState('');
//   const [selectedValue, setSelectedValue] = useState(null);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [modalVisible2, setModalVisible2] = useState(false);
//   const [selectedValue2, setSelectedValue2] = useState(null);
//   const items = ['Self-Owned', 'Owned by parents', 'Owned by siblings', 'Rented'];
//   const items2 = ['0-3 months', '3-6 months', '6months-1year', '1-2 years', '2years']; 
//   const [ResidenceType, setResidenceType] = useState([]);
//   const [CurrentLivingAddress, setCurrentLivingAddress] = useState([]);         


//   const handleLoanAmountChange = (value) => {
//     setLoanAmount(value);
//   };

//   const handleEmailChange = (value) => {
//     setEmail(value);
//   };
//   useEffect(() => {
//     const fetchResidenceTypeList = async () => {
//       try {
//         const response = await fetch('https://prod.utils.buddyloan.in/master_values.php/?master_key=residence_type');
//         const json = await response.json();
//         if (json.status === 'success' && json.HTTPStatus === 200) {
//           setResidenceType(json.master_values.map(item => item.residence_type_name));
          

//         } else {
//           // Handle the error according to your app's needs
//           console.error('Failed to fetch bank list');
//         }
//       } catch (error) {
//         console.error('Error fetching bank list:', error);
//       }
//     };
//     const fetchCurrentLivingAddressList = async () => {
//       try {
//         const response = await fetch('https://prod.utils.buddyloan.in/master_values.php/?master_key=years_lived_add');
//         const json = await response.json();
//         if (json.status === 'success' && json.HTTPStatus === 200) {
//           setCurrentLivingAddress(json.master_values.map(item => item.years_lived_add_name));
          

//         } else {
//           // Handle the error according to your app's needs
//           console.error('Failed to fetch bank list');
//         }
//       } catch (error) {
//         console.error('Error fetching bank list:', error);
//       }
//     };


//     fetchResidenceTypeList();
//     fetchCurrentLivingAddressList();
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
//           <Text style={styles.prompt}>Enter Communication Details</Text>
     
           
//                  <View style={[styles.container1,styles.bottomspace]}>
//       <TouchableOpacity
//         style={styles.dropdown}
//         onPress={() => setModalVisible(true)}
//       >
//         <Text style={styles.dropdownText}>
//           {selectedValue ? selectedValue : 'Residence Type'}
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
//           <Text style={styles.modalTitle}>Select Residence Type</Text>

//             <FlatList
//               data={ResidenceType}
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
//     <View style={styles.container1}>
//       <TouchableOpacity
//         style={styles.dropdown}
//         onPress={() => setModalVisible2(true)}
//       >
//         <Text style={styles.dropdownText}>
//           {selectedValue2 ? selectedValue2: 'No.of Years Living in Current Address'}
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
//           <Text style={styles.modalTitle}>Select No.of Years Living in Current Address</Text>

//             <FlatList
//               data={CurrentLivingAddress}
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
//     </View>
//     <TextInput
//               style={styles.input}
//               placeholder="Pincode"
//               placeholderTextColor="rgba(0, 0, 0, 0.51)"
//               keyboardType="phone-pad"
//               value={loanAmount}
//               onChangeText={handleLoanAmountChange}
//               maxLength={6}
//             />
          
//           <View style={styles.buttonContainer}>
//   <TouchableOpacity onPress={() => {
//     // Navigation logic for back button
//     navigation.goBack();
//   }}>
//     <Image source={require('../assets/images/backbtn.png')} style={styles.backbtn} />
//   </TouchableOpacity>

  

//   <TouchableOpacity onPress={() => {
//     navigation.navigate('StudentBankDetailsScreen');
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
//     borderColor: '#F4F4F4',
//     borderWidth: 1,
//     borderRadius: 5, // Adjusted to match Flutter's BorderRadius.circular(7)
//     paddingHorizontal: 10,
//     backgroundColor: '#F4F4F4', // This matches the Flutter color closely
//     color: '#000',
//     fontSize: 17,
//     elevation: 5, // Elevation adds shadow for Android, similar to the second BoxShadow in Flutter
//     marginTop: 20,
//     marginBottom: 20,
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

// export default StudentcommunicationDetailsScreen;


import React, { useState,useEffect } from 'react';
import { View, TextInput, StyleSheet, Text, ImageBackground, StatusBar, ScrollView, Image, useColorScheme,TouchableOpacity,Modal,FlatList } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { LoanApplicationComponent,userArray,mobileNum,savePartialLoanData } from './mobilepage';
import { useNavigation } from '@react-navigation/native';

const StudentcommunicationDetailsScreen = () => {
  const navigation = useNavigation();
  intialPincode = userArray.length > 0 ? userArray[0].pincode : '';

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.transparent : Colors.transparent,
  };

  const [loanAmount, setLoanAmount] = useState(intialPincode);
  const [email, setEmail] = useState('');
  const [selectedValue, setSelectedValue] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [selectedValue2, setSelectedValue2] = useState(null);
  const [ResidenceType, setResidenceType] = useState([]);
  const [CurrentLivingAddress, setCurrentLivingAddress] = useState([]); 
  const [isLoading, setIsLoading] = useState(true);
  const [validpincode, setValidPincode] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [loanAmountError, setLoanAmountError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isLoanAmountValid, setIsLoanAmountValid] = useState(true);
  const [showResidenceTypeError, setShowResidenceTypeError] = useState(false);
  const [showCurrentLivingAddressError, setShowCurrentLivingAddressError] = useState(false);
  [isPincodeValid, setisPincodeValid] = useState('');
  [city, setCity] = useState('');
  [pincodestates, setpincodestate] = useState('');
 
      
const mapaccomodationtype = {
  'Self-Owned': "1",
  'Owned by parents': "2",
  'Owned by siblings': "3",
  'Rented': "4",
  
};
const mapcurrentaddrmonth = {
  '0-3 months': "1",
  '3-6 months': "2",
  '6 months -1year': "3",
  '1-2 years': "4",
  '2 years':  "5",

};


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


  // const handleLoanAmountChange = (value) => {
  //   setLoanAmount(value);
  // };

  // const handleEmailChange = (value) => {
  //   setEmail(value);
  // };
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



  const handleForwardClick = async () => { // Make the function async
    // Reset error messages at the beginning
    setLoanAmountError('');
   
  
    // Validate the loan amount
    // const pincodeRegex = /^[1-9][0-9]{5}$/;
    // const isLoanAmountValid = pincodeRegex.test(loanAmount); 

    const pincodeValidationResult = await validpincodes(loanAmount);
    console.log('dsc', isPincodeValid);
    const isSelectedValue2Valid = selectedValue2 && selectedValue2 !== "No.of Years Living in Current Address";
    const isSelectedValueValid = selectedValue && selectedValue !== "Residence Type";

    const isValid = pincodeValidationResult === "success";
  

   
    
    if (isValid && isSelectedValue2Valid  && isSelectedValueValid) {
      console.log('Loan amount and email are valid');
      const accomondationtypeid = mapaccomodationtype[selectedValue];
      const currentaddrmonthid = mapcurrentaddrmonth[selectedValue2];
      savePartialLoanData('pincode', loanAmount,mobileNum);
      savePartialLoanData('accomodation_type',accomondationtypeid,mobileNum);
      savePartialLoanData('current_addr_month',currentaddrmonthid,mobileNum);
      savePartialLoanData('city',city,mobileNum);
      savePartialLoanData('state',pincodestates,mobileNum);


      navigation.navigate('StudentBankDetailsScreen');
    } else {
      // Step 2: Update error state on validation failure
     
      if (!isValid) {
        setIsLoanAmountValid(true);
        setLoanAmountError('Enter valid pincode');
        console.log('Pincode is invalid');
       
      }

      if (!selectedValue || selectedValue == 'Residence Type') {
        console.log('Email is invalid');
        setShowResidenceTypeError(true);

        // setEmailError('Please select Residence Type');
      }
      if (!selectedValue2 || selectedValue2 == 'No.of Years Living in Current Address') {
        console.log('dropdown is invalid');
        setShowCurrentLivingAddressError(true);
        // setEmailError('Please select No.of Years Living in Current Address');
      }
    
      // Optionally, trigger the functions that handle input changes to reflect the error state
      console.log('Email:', email);
   
      handleLoanAmountChange(loanAmount);
    }
  };
  const fetchResidenceTypeList = async () => {
    try {
      const response = await fetch('https://prod.utils.buddyloan.in/master_values.php/?master_key=residence_type');
      const json = await response.json();
      if (json.status === 'success' && json.HTTPStatus === 200) {
        setResidenceType(json.master_values.map(item => item.residence_type_name));
        

      } else {
        // Handle the error according to your app's needs
        console.error('Failed to fetch bank list');
      }
    } catch (error) {
      console.error('Error fetching bank list:', error);
    }
  };
  const fetchCurrentLivingAddressList = async () => {
    try {
      const response = await fetch('https://prod.utils.buddyloan.in/master_values.php/?master_key=years_lived_add');
      const json = await response.json();
      if (json.status === 'success' && json.HTTPStatus === 200) {
        setCurrentLivingAddress(json.master_values.map(item => item.years_lived_add_name));
        

      } else {
        // Handle the error according to your app's needs
        console.error('Failed to fetch bank list');
      }
    } catch (error) {
      console.error('Error fetching bank list:', error);
    }
  };



  useEffect(() => {
    const fetchListAsync = async () => {
      try {
        // Your async data fetching logic here
        // For demonstration, assuming fetchCompanyList is an async function
        await fetchResidenceTypeList();
        await fetchCurrentLivingAddressList();
      } catch (error) {
        console.error("Failed to fetch company list:", error);
      } finally {
        setIsLoading(false); // Set loading to false once data is fetched or on error
      }
    };
  
    fetchListAsync();
  }, []); // This effect runs once on mount to fetch the company list
  
  useEffect(() => {
    // This effect runs whenever CompanyYears changes
    const index = parseInt(userArray[0].accomodationTypeId, 10) - 1;
    if (index >= 0 && index < ResidenceType.length) {
      setSelectedValue(ResidenceType[index]); // Set the selectedValue based on the index
    } else {
      setSelectedValue("ResidenceType");
    }
   
  }, [ResidenceType]); 
  useEffect(() => {
    // This effect runs whenever CompanyYears changes
   
    const index2 = parseInt(userArray[0].currentAddrMonth,10) -1;// Convert to integer and adjust index
    
    if (index2 >= 0 && index2 < CurrentLivingAddress.length) {
      setSelectedValue2(CurrentLivingAddress[index2]); // Set the selectedValue based on the index
    } else {
      setSelectedValue2("No.of Years Living in Current Address");
    }
  }, [CurrentLivingAddress]); 


  


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
          <Text style={styles.prompt}>Enter Communication Details</Text>
     
           
                 <View style={[styles.container1,styles.bottomspace]}>
      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.dropdownText}>
          {selectedValue ? selectedValue : 'Residence Type'}
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
          <Text style={styles.modalTitle}>Select Residence Type</Text>

            <FlatList
              data={ResidenceType}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={() => {
                    setSelectedValue(item);
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
      {showResidenceTypeError && (<Text style={styles.errorText}>Please select Residence Type</Text>)}
    </View>
    <View style={styles.container1}>
      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setModalVisible2(true)}
      >
        <Text style={styles.dropdownText}>
          {selectedValue2 ? selectedValue2: 'No.of Years Living in Current Address'}
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
          <Text style={styles.modalTitle}>Select No.of Years Living in Current Address</Text>

            <FlatList
              data={CurrentLivingAddress}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={() => {
                    setSelectedValue2(item);
                    setShowCurrentLivingAddressError(false)
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
      {showCurrentLivingAddressError && (<Text style={styles.errorText}>Please select No.of Years Living in Current Address</Text>)}
    </View>
    <TextInput
              style={styles.input}
              placeholder="Pincode"
              placeholderTextColor="rgba(0, 0, 0, 0.51)"
              keyboardType="phone-pad"
              value={loanAmount}
              onChangeText={handleLoanAmountChange}
              maxLength={6}
              error={ isLoanAmountValid}
            />
 {
isLoanAmountValid && <Text style={styles.errorText}>{loanAmountError}</Text>}
    
          
          <View style={styles.buttonContainer}>
  <TouchableOpacity onPress={() => {
    // Navigation logic for back button
    navigation.goBack();
  }}>
    <Image source={require('../assets/images/backbtn.png')} style={styles.backbtn} />
  </TouchableOpacity>

  

  <TouchableOpacity onPress={() => {
    handleForwardClick();
    // navigation.navigate('SalaryBankDetailsScreen');
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
    borderColor: '#F4F4F4',
    borderWidth: 1,
    borderRadius: 5, // Adjusted to match Flutter's BorderRadius.circular(7)
    paddingHorizontal: 10,
    backgroundColor: '#F4F4F4', // This matches the Flutter color closely
    color: '#000',
    fontSize: 17,
    elevation: 5, // Elevation adds shadow for Android, similar to the second BoxShadow in Flutter
    marginTop: 7,

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
  errorText: {
    color: 'red',
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

export default StudentcommunicationDetailsScreen;


