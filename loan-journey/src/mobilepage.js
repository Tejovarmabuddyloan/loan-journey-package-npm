import React, { useState, useRef,useEffect,createContext,useContext } from 'react';
import { ScrollView, StatusBar, Modal, StyleSheet, Text, TextInput, ImageBackground, View, useColorScheme, Image, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';
import { UserSearch } from './user_search_modal.js';
import {user_search} from  './userSearch.js'
import { fetchUser, getUser } from './userState';
import { User } from "./user_search_modal";
 // Adjust the import path if needed

 // Adjust the path as necessary






 export const userArray = [];
 export let storeuservalues = [];

 export let mobileNum;

 export let resubmittimer;
 export let thankyouurl;
 export let userid;
 export let user_type;

 const UsersContext = createContext();
 
 


export const savePartialLoanData = (columnName, columnValue, mobileNumber) => {
  console.log('savePartialLoanData:', columnName, columnValue, mobileNumber);
  const index = storeuservalues.findIndex(obj => obj.hasOwnProperty(columnName));

  if (index !== -1) {
    // If the columnName exists, update its value
    storeuservalues[index][columnName] = columnValue;
  } else {
    // If the columnName does not exist, push a new object with dynamic property name
    const newObj = {};
    newObj[columnName] = columnValue;
    storeuservalues.push(newObj);
  }
  fetch('https://prod.utils.buddyloan.in/update_user_temp.php', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      'aaccess_token': 'KXT3BVqyt1XkdqqqcAg9cHlVFMFUdv'
    },
    body: `mobile_no=${encodeURIComponent(mobileNumber)}&coloumn_name=${encodeURIComponent(columnName)}&coloumn_value=${encodeURIComponent(columnValue)}`
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Check the Content-Type to ensure the response is JSON
    const contentType = response.headers.get('Content-Type');
    if (contentType && contentType.includes('application/json')) {
      return response.json(); // If JSON, parse it
    } else {
      return response.text(); // Otherwise, return as text for inspection
    }
  })
  .then(data => {
    console.log('Response:', data);
  })
  .catch(error => {
    console.error("Error sending data:", error);
  });
  console.log('storeuservalues:', storeuservalues);
};

 export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
};

export const useUsers = () => useContext(UsersContext);

 
export const LoanApplicationComponent = () => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hi <Text style={styles.name}>Buddy</Text></Text>
        <View style={styles.applyloancont}>
          <Text style={styles.applyText}>Apply for loan</Text>
          
          <Image source={require('../assets/images/Icon.gif')} style={styles.gif} />
        </View>
      
      </View>
    </View>
  );
};

const CustomAlertModal = ({ visible, onClose, message }) => {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
        <Image 
  source={require('../assets/images/warning.png')}
  style={{
    width: 70, // Set the width of the image
    height: 70, // Set the height of the image
    resizeMode: 'contain',
    marginBottom: 50 // Ensure the entire image fits within the bounds specified by width and height
  }} 
/>
          <Text style={styles.modalText}>{message}</Text>
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.textStyle}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export const LoanJourney = () => {

  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.transparent : Colors.transparent,
  };

  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [correctNumberGiven, setCorrectNumberGiven] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [message, setMessage] = useState('');
const { users = [], setUsers = () => {} } = useUsers() || {};



  const otpFocusNode = useRef(null);




  const user_search = (mobileNumber) => {
    console.log('Starting user search for:', mobileNumber); // Debugging log
    fetch('https://prod.utils.buddyloan.in/v2/user_search.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'access_token': 'KXT3BVqyt1XkdqqqcAg9cHlVFMFUdv'
      },
      body: `mobile_no=${encodeURIComponent(mobileNumber)}`,
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json(); // Parse the JSON response
    })
    .then(json => {
      console.log('Received JSON:', json); // Debugging log
      const userSearch = UserSearch.fromJson(json); // Assuming this handles the entire JSON correctly
      console.log('User Search Result:', userSearch);
  
      if (Array.isArray(json.user)) {
        const usersArray = json.user.map(userJson => User.fromJson(userJson));
        console.log('Users:', usersArray);
  
        setUsers(usersArray);
        userArray.push(...usersArray);
  // Update state with the fetched users
        console.log('User:', usersArray[0]);
        console.log('cpvalue4sdsd:',userArray );
  
        usersArray.forEach(user => {
          console.log('cpvalue4:', user.cpvalue4);
        });
      } else {
        console.error("json.user is undefined or not an array");
      }
      
      return userSearch;
    })
    .catch(error => {
      console.error("Error in user search:", error);
    });
  };


  const sendOTP = (mobileNumber) => {
    fetch('https://prod.utils.buddyloan.in/v2/sendsms_v2.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `mobile=${encodeURIComponent(mobileNumber)}`, // Ensure the mobile number is URL encoded
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => console.log('OTP sent successfully:', data))
    .catch(error => {
      console.error("Error sending OTP:", error);
      // Check if the error is related to CORS
      if (error.name === 'TypeError' && error.message.includes('Failed to fetch')) {
        console.error("This might be a CORS issue.");
      }
    });
  };

  const verifyOTP = async (inputOtp) => {
    console.log('mobilenumber', mobileNumber); // Log before the fetch call
    console.log('otp', inputOtp);

    fetch('https://prod.utils.buddyloan.in/v2/verifynewotp.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'access_token': 'KXT3BVqyt1XkdqqqcAg9cHlVFMFUdv'
      },
      body: `mobile_no=${encodeURIComponent(mobileNumber)}&mobile_otp=${encodeURIComponent(inputOtp)}&createuserid=1`})
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('OTP sent successfully:', data);
      setMessage(data.message);
      if (data.message === "OTP Match") {
        // Code to move to the next page
        userid = data.user_id;
        user_type = data.user_type;


        navigation.navigate('LoanDetails');
        console.log("Moving to the next page"); // This log is okay here since it's part of the promise chain
      } else if (data.message === "OTP Mismatch") {
        setModalMessage("Incorrect OTP\nPlease enter the correct OTP."); // Set the message
        setModalVisible(true);
      }
    })
    .catch(error => {
      console.error("Error sending OTP:", error);
      // Check if the error is related to CORS
      if (error.name === 'TypeError' && error.message.includes('Failed to fetch')) {
        console.error("This might be a CORS issue.");
      }
    });
  };

  useEffect(() => {
    appconfig();
    // Log the users state here
  }, );


  const appconfig = async () => {
   

    fetch('https://prod.utils.buddyloan.in/app_settings.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'access_token': 'KXT3BVqyt1XkdqqqcAg9cHlVFMFUdv'
      },
      body: `OS=ANDRODID`})
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('app_settings:', data);
     resubmittimer = data.resubmit_time; 
      thankyouurl = data.thank_youpage_url;

    
    })
    .catch(error => {
      console.error("Error sending OTP:", error);
      // Check if the error is related to CORS
      if (error.name === 'TypeError' && error.message.includes('Failed to fetch')) {
        console.error("This might be a CORS issue.");
      }
    });
  };

  

  // const sendSMS = () => {
  //   fetch('https://prod.utils.buddyloan.in/v2/sendsms_v2.php', {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     body: `mobile=9704233357`, // Corrected to use URL encoding
  //   })
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  //   .catch(error => {
  //     console.error("Error sending SMS:", error);
  //     // Check if the error is related to CORS
  //     if (error.name === 'TypeError' && error.message.includes('Failed to fetch')) {
  //       console.error("This might be a CORS issue.");
  //     }
  //   });
  // };

  const validateMobileNumber = (value) => {
    const alphanumeric = /^[6-9]{1}[0-9]{9}$/;
    if (value.length < 10 || !alphanumeric.test(value)) {
      setCorrectNumberGiven(false);
      return 'Please enter valid mobile number';
    }
    setCorrectNumberGiven(true);
    return null;
  };

  const handleMobileNumberChange = async (value) => {
    setMobileNumber(value);
    validateMobileNumber(value);
    if (value.length === 10 && !otpSent) {
      sendOTP(value, false);
      // user_search(value);
      // sendSMS();
      setOtpSent(true);
    }
    if (value.length === 10) {
      otpFocusNode.current?.focus();
    }
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
          <LoanApplicationComponent />
        </View>
        <View style={styles.secondcont}>
          <View style={styles.logoContainer}>
            <Image source={require('../assets/images/buddyloanlogo.png')} style={styles.logo} />
          </View>
          <Text style={styles.prompt}>Enter Mobile Number</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Mobile Number"
              placeholderTextColor="rgba(0, 0, 0, 0.51)"
              keyboardType="phone-pad"
              value={mobileNumber}
              onChangeText={handleMobileNumberChange}
              maxLength={10}
            />
            {correctNumberGiven && (
            <TextInput
              ref={otpFocusNode}
              style={[styles.input, styles.otpInput]}
              placeholder="OTP"
              keyboardType="number-pad"
              value={otp}
              onChangeText={async (text) => {
                setOtp(text);
                if (text.length === 4) { 
                  user_search(mobileNumber);
                  mobileNum = mobileNumber;
                  console.log('mobileNum:', mobileNum);

                  
                  console.log('Usersasdsc:', users); // Log the users state here
                  
                  await verifyOTP(text); // Call verifyOTP function
                }
              }}
              maxLength={4}
            />

            
            )}
          </View>
          <TouchableOpacity onPress={() => {
            if (mobileNumber.length === 0 || mobileNumber.length < 10) {
              alert("Mobile number is required and must be at least 10 digits.");
            } else if (otp.length === 0 || otp.length < 4) {
              alert("OTP is required and must be at least 4 digits.");
            } else if (message === "OTP Mismatch") {
              alert("OTP Mismatch. Please try again.");
            } else {

             
               mobileNum = mobileNumber;
               console.log('mobileNum:', mobileNum);
               console.log('thankyouurl:', thankyouurl);
                console.log('resubmittimer:', resubmittimer);
              navigation.navigate('LoanDetails');
            }
          }}>
            <Image source={require('../assets/images/forwardbtn.png')} style={styles.forwardbtn} />

          </TouchableOpacity>
        </View>
      </ScrollView>
      <CustomAlertModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        message={modalMessage}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  otpInput: {
    marginTop: 20,
  },
  outerContainer: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: 'white',
    height: 105,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    
    
  },
  secondcont: {
    padding: 20,
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
    // justifyContent: 'space-between',
  },
  welcomeText: {
    fontSize: 17,
    fontWeight: 'bold',
    // marginBottom: 10,
  },
  greeting: {
    fontSize: 17,
    color: '#000',
    paddingLeft: 11,
  },
  name: {
    fontWeight: 'bold',
  },
  applyloancont: {
    display: 'flex',
    // marginRight: 49,
    // justifyContent: 'center',
    // alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,

   
    
    
  },
  applyText: {
    fontSize: 15,
    color: '#007BFF',
    paddingRight: 57,
    marginBottom: -11,
  },
  logo: {
    width: 105,
    height: 105,
    resizeMode: 'contain',
    marginTop: 19,
    marginLeft: 10,
    
  },
  gif: {
    width: 43,
    height: 43,
    resizeMode: 'contain',
    marginRight: 39,
    marginTop: 20,
    

  
    
    
    
    
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: -9,
    justifyContent: 'center',
  },
  forwardbtn: {
    width: 130,
    height: 130,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
  },
  prompt: {
    fontSize: 18,
    color: '#007BFF',
    textAlign: 'center',
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderColor: '#F4F4F4',
    borderWidth: 1,
    borderRadius: 5, // Adjusted to match Flutter's BorderRadius.circular(7)
    paddingHorizontal: 10,
    backgroundColor: '#F4F4F4', // This matches the Flutter color closely
    color: '#000',
    fontSize: 17,
    elevation: 5, // Elevation adds shadow for Android, similar to the second BoxShadow in Flutter
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 5, // Adjusted to match one of the Flutter shadows
      height: 5, // Adjusted to match one of the Flutter shadows
    },
    shadowOpacity: 0.1, // Adjusted to match the Flutter shadow's opacity
    shadowRadius: 5,
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
  button: {
    backgroundColor: '#0ca8f2',
    height: 33,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: 100,
    marginBottom: 13,
  },
  buttonText: {
    fontSize: 25,
    color: '#FFFFFF',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 50,
    textAlign: 'center',
    color: 'black',
    fontWeight: '500',
    
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default LoanJourney;


