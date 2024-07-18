import React, { useState, useEffect } from 'react';
import { View,StyleSheet, Text, ImageBackground, StatusBar, ScrollView, Image, useColorScheme,TouchableOpacity,Modal,FlatList } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { LoanApplicationComponent,userArray,savePartialLoanData,mobileNum } from './mobilepage';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';



const SalarypersonalDetailsScreen = () => {
  const navigation = useNavigation();
  
  intialDOB = userArray.length > 0 && userArray[0].dob !== null ? 
  userArray[0].dob.split('-').reverse().join('/') : ''; 
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
  const [searchText, setSearchText] = useState('');




// Step 1: Add state for search text

// Step 2: Create the search input field inside the modal

       
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

  const handleLoanAmountChange = (value) => {
    setLoanAmount(value);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
  };


  
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
  const fetchHighestQualificationList = async () => {
    try {
      const response = await fetch('https://prod.utils.buddyloan.in/master_values.php/?master_key=qualification');
      const json = await response.json();
      if (json.status === 'success' && json.HTTPStatus === 200) {
         setHighestQualification(json.master_values.map(item => item.qualification_name));
        // wait for 1 second to set the data
        // setTimeout(() => {
        //   setIsLoading(false);
        // }, 100);
        

      } else {
        // Handle the error according to your app's needs
        console.error('Failed to fetch bank list');
      }
    } catch (error) {
      console.error('Error fetching bank list:', error);
    }
    finally {
      setIsLoading(false);
    }
   
  };
  useEffect(() => {
    const fetchGenderListAsync = async () => {
      try {
        // Your async data fetching logic here
        // For demonstration, assuming fetchCompanyList is an async function
        await Promise.all([fetchGenderList(), fetchHighestQualificationList()]);

      } catch (error) {
        console.error("Failed to fetch company list:", error);
      } finally {
     
        
        
        // Set loading to false once data is fetched or on error
      }
    };
    fetchHighestQualificationList();
    fetchGenderListAsync();
     
   
  }, []); // This effect runs once on mount to fetch the company list
  
  useEffect(() => {
    fetchHighestQualificationList();
    console.log("highest qualification",HighestQualification);
   
    // This effect runs whenever CompanyYears changes
    const index = parseInt(userArray[0].genderId, 10) - 1;
    if (index >= 0 && index < Gender.length) {

      setSelectedValue(Gender[index]); // Set the selectedValue based on the index
    } else {
      setSelectedValue("Gender");
    }
    const index2 = parseInt(userArray[0].qualifications,10);// Convert to integer and adjust index
    console.log("asdcs",index2);
    
    if (index2 >= 0 && index2 < HighestQualification.length) {
      console.log("sxs",HighestQualification[index2]);
      
      setSelectedValue2(HighestQualification[index2]); // Set the selectedValue based on the index
    } else {
      setSelectedValue2("Highest Qualification");
    }
    
   
  }, [Gender], [HighestQualification]); 

  
 

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
      <Text style={styles.modalTitle}>Select Gender</Text>
      {/* Search Input Field */}
      <View style={styles.inputContainer}>
  <Image
    source={require('../assets/images/search.png')} // Replace with your icon path
    style={styles.inputIcon}
  />
  <TextInput
    style={styles.searchInputWithIcon} // Adjust this style as needed

    value={searchText}
    onChangeText={setSearchText}
  />
</View>
      <FlatList
        data={Gender.filter(item => item.toLowerCase().includes(searchText.toLowerCase()))} // Step 3: Filter the list
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
    <View style={styles.container1}>
      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setModalVisible2(true)}
      >
        <Text style={styles.dropdownText}>
          {selectedValue2 ? selectedValue2: 'Highest Qualification'}
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
          <Text style={styles.modalTitle}>Highest Qualification</Text>

            <FlatList
              data={HighestQualification}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={() => {
                    setSelectedValue2(item);
                    setShowQualificationError(false);
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
      {showQualificationError && (
  <Text style={styles.errorMessage}>
    Please select your highest qualification.
  </Text>
)}
    </View>
          
          <View style={styles.buttonContainer}>
  <TouchableOpacity onPress={() => {
    // Navigation logic for back button
    navigation.goBack();
  }}>
    <Image source={require('../assets/images/backbtn.png')} style={styles.backbtn} />
  </TouchableOpacity>

  
<TouchableOpacity onPress={() => {
  // Reset error states


  if (!isValidDateOfBirth(loanAmount)) {
    console.log("Invalid date format. Please correct the date.");
  }
  if (!selectedValue || selectedValue == "Gender") {
    // Step 2: Check if a gender has been selected and show error if not
    setShowGenderError(true);
    console.log("Please select your gender.");
  }
  if (!selectedValue2 || selectedValue2 == "Highest Qualification") {
    setShowQualificationError(true);
  }
    

   else {
    const gendermappedvalue = mapgendervalue[selectedValue];
    const qualificationmappedvalue = mapqualificationvalue[selectedValue2];

    savePartialLoanData('dob', loanAmount, mobileNum);
    savePartialLoanData('gender', gendermappedvalue, mobileNum);
    savePartialLoanData('qualifications', qualificationmappedvalue, mobileNum);

    navigation.navigate('SalarypersonalDetailsScreen2');
    console.log("Date and gender are valid. Proceeding with forward action.");
  }
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
  inputContainer: {
    flexDirection: 'row',
    padding: 3,

 
    borderRadius: 5,
    marginTop: -11,
  
    alignItems: 'center',
  },
  inputField: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 10, // Adjust as needed to not overlap the icon
  },
  inputIcon: {
    width: 15 ,// Adjust based on your icon's size
    height: 15, // Adjust based on your icon's size
    marginRight: -9,
    marginBottom:19 // Space between icon and input text
  },
  searchInputWithIcon: {
    flex: 1,
    fontSize: 16,
   
    marginBottom: 20,
    borderWidth: 0, // Remove general border
    borderBottomWidth: 1, // Only bottom border
    borderColor: 'blue', // Bottom border color set to blue
    borderRadius: 0, // Remove borderRadius as it's not needed for bottom border only
    backgroundColor: 'transparent', // Background set to transparent
    // Other styles as needed, ensure there's enough padding or margin to not overlap the icon
  },

  searchInput: {
    fontSize: 16,
   
    marginBottom: 20,
    borderWidth: 0, // Remove general border
    borderBottomWidth: 1, // Only bottom border
    borderColor: 'blue', // Bottom border color set to blue
    borderRadius: 0, // Remove borderRadius as it's not needed for bottom border only
    backgroundColor: 'transparent', // Background set to transparent
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
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },




});

export default SalarypersonalDetailsScreen;
