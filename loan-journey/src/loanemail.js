import React, { useState,useContext,useEffect } from 'react';
import { View,  StyleSheet, Text, ImageBackground, StatusBar, ScrollView, Image, useColorScheme,TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { LoanApplicationComponent,UsersProvider,userArray,savePartialLoanData ,mobileNum} from './mobilepage';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';


export let loanamountset;
const LoanDetailsScreen = () => {
  const navigation = useNavigation();
  const initialEmail = userArray.length > 0 ? userArray[0].email : '';
  const [isFocused, setIsFocused] = useState(false);





  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.transparent : Colors.transparent,
  };

  let stroreemail;
  const [loanAmount, setLoanAmount] = useState('');
  const [email, setEmail] = useState(initialEmail);
  const [text, setText] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [loanAmountError, setLoanAmountError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isLoanAmountValid, setIsLoanAmountValid] = useState(true);



  const isError = loanAmount.length > 0 && (parseInt(loanAmount) < 1000 || parseInt(loanAmount) > 1500000);



  const handleLoanAmountChange = (text) => {
    setLoanAmount(text);
    // Convert text to a number for comparison
    const amount = Number(text);
    // Check if the amount is within the valid range
    const isValid = amount >= 1000 && amount <= 1500000;
    setIsLoanAmountValid(isValid);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    validateEmail(text);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    setIsEmailValid(isValid);
    setEmailErrorMessage(isValid ? '' : 'Please enter a valid email address.');
  };

  const handleForwardClick = () => {
    // Reset error messages at the beginning
    setLoanAmountError('');
    setEmailError('');
  
    // Validate the loan amount
    const isLoanAmountValid = loanAmount.length > 0 && parseInt(loanAmount) >= 1000 && parseInt(loanAmount) <= 1500000;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(email);
    
    if (isLoanAmountValid && isEmailValid) {
      loanamountset = loanAmount.toString();
      console.log('Loan amount and email are valid',email,mobileNum);

      savePartialLoanData('email', email,mobileNum); 

      // If both loan amount and email are valid, navigate to the next page
      navigation.navigate('Loantypescreen');
    } else {
      // Step 2: Update error state on validation failure
      if (!isLoanAmountValid) {
        setLoanAmountError('Invalid loan amount. Please enter a value between $1,000 and $1,500,000.');
      }
      if (!isEmailValid) {
        setEmailError('Invalid email format. Please enter a valid email.');
      }
      // Optionally, trigger the functions that handle input changes to reflect the error state
      handleEmailChange(email);
      handleLoanAmountChange(loanAmount);
    }
  };
  


  useEffect(() => {
    console.log('LoanDetailsScreen mounted,',userArray);
 
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
          <Text style={styles.prompt}>Enter Your Loan Amount & Email</Text>
       
          <TextInput
        mode="outlined"
        // label="Loan Amount"
        label={<Text style={styles.inputLabelText}>Loan Amount</Text>}
        keyboardType="numeric"
        value={loanAmount}
        onChangeText={handleLoanAmountChange}
        style={styles.input }
        error={!isLoanAmountValid}
        
        // placeholderTextColor='grey'
        // theme={{ colors: { onSurfaceVariant: 'grey' } }}


        // theme={{ colors: { text: "#f5f5f5", accent: "#ffffff", primary: "#a3d1ff", placeholder: "#f5f5f5", background: "transparent" } }}
         // outlineColor= {isFocused ? 'blue' : 'blue'}
        // onFocus={() => setIsFocused(true)}
        // onBlur={() => setIsFocused(true)}
        outlineColor='#F4F4F4'
        activeOutlineColor='#F4F4F4'
        textColor='=black'
        cursorColor='grey'
        outlineStyle = {{borderWidth: 1, shadowColor: 'black',shadowOffset: { width: 10, height: 5 },shadowOpacity: 0.9,shadowRadius: 5.84,elevation: 9,}}
      
      />
{!isLoanAmountValid && (
  <Text style={styles.errorText}>
    Enter amount between 1,000 to 1,500,000.
  </Text>
)}

<TextInput
  mode="outlined"
  // label="Email ID"
  label={<Text style={styles.inputLabelText}>Email ID</Text>}
  keyboardType="email-address"
  value={email}
  outlineColor='transparent'
        activeOutlineColor='transparent'
        textColor='=black'
        cursorColor='grey'
  outlineStyle = {{borderWidth: 1,shadowColor: 'black',shadowOffset: { width: 10, height: 5 },shadowOpacity: 0.9,shadowRadius: 5.84,elevation: 9,}}

  onChangeText={(text) => {
    handleEmailChange(text);
    // Optionally reset email error state here if you're doing live validation
  }}
  
  style={styles.emailinput}
  error={!isEmailValid} // Adjusted to use specific validation state
/>
{!isEmailValid && (
  <Text style={styles.errorText}>
    Please enter a valid email address.
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
  inputLabelText: {
    //color light grey hex code
    color: '#A9A9A9',
    fontWeight: '400',
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

    paddingTop: 41,
    paddingLeft: 20,
    paddingRight: 20,
    // height: 510,
    marginLeft: 13,
    backgroundColor: '#F3F3F3',
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
    marginBottom: 10,
    fontWeight: 'bold',
  },
  forwardbtn: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
  
    // paddingRight: 90,
   
  },
  input: {
    height: 53,
   
   
    borderRadius: 3, // Adjusted to match Flutter's BorderRadius.circular(7)
    paddingHorizontal: 10,
    //color light white hex code
    backgroundColor: '#F3F3F3', // Light white color with ~50% opacity  
     elevation: 15, // Elevation adds shadow for Android, similar to the second BoxShadow in Flutter
    fontSize: 17,
    elevation: 35, // Elevation adds shadow for Android, similar to the second BoxShadow in Flutter
    marginTop: 1,
    shadowColor: 'white',
   

    shadowOffset: {
      width: 0, // Adjusted to match one of the Flutter shadows
      height: -13, // Adjusted to match one of the Flutter shadows
    },
    shadowOpacity: 1, // Adjusted to match the Flutter shadow's opacity
    shadowRadius: 1,
  },
  emailinput: {
    height: 53,
   
   
    borderRadius: 3, // Adjusted to match Flutter's BorderRadius.circular(7)
    paddingHorizontal: 10,
    //color light white hex code
    backgroundColor: '#F3F3F3', // Light white color with ~50% opacity  
     elevation: 15, // Elevation adds shadow for Android, similar to the second BoxShadow in Flutter
    fontSize: 17,
    elevation: 35, // Elevation adds shadow for Android, similar to the second BoxShadow in Flutter
    marginTop: 30,
  
    shadowColor: 'white',
   

    shadowOffset: {
      width: 0, // Adjusted to match one of the Flutter shadows
      height: -13, // Adjusted to match one of the Flutter shadows
    },
    shadowOpacity: 1, // Adjusted to match the Flutter shadow's opacity
    shadowRadius: 1,
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
    width: 110,
    height: 110,
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
    justifyContent : 'center',// Centers children vertically in the container
    marginTop: 15, // Add space between the input and the buttons

  },
  backbtn: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
   
    marginRight: -39,
  },
  containers: {
    margin: 16,
  },
  label: {
    position: 'absolute',
    top: -10,
    left: 10,
    backgroundColor: 'transparent',
    paddingHorizontal: 4,
    zIndex: 1,
    fontSize: 12,
    color: '#6200ee',
  },
  inputs: {
    height: 40,
    borderWidth: 1,
    borderColor: '#6200ee',
    borderRadius: 4,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#000',
  },
  errorText: {
    color: 'red', // Style the error message in red
    fontWeight: '500', // Make the error text bold
    marginTop: 3, // Add space between the input and the error message
    marginLeft : 10,
    // Add any additional styling you need for the error text
  },



});

export default LoanDetailsScreen;
