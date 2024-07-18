import React, { useEffect, useState } from 'react';
import { View, TextInput, StyleSheet, Text, ImageBackground, StatusBar, ScrollView, Image, useColorScheme,TouchableOpacity,Linking,Platform ,Modal} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { LoanApplicationComponent,mobileNum,savePartialLoanData,storeuservalues,userArray,userid,user_type,thankyouurl } from './mobilepage';
import { useNavigation } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
import { loanamountset } from './loanemail';

export let webviewlink;
const SubmitLoanscreen = () => {
  const navigation = useNavigation();

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.transparent : Colors.transparent,
  };
  const [userValuesObject, setUserValuesObject] = useState({});
  const [modalVisible, setModalVisible] = useState(false);



  let apicallfirsttime=false;
  let ips;
 

  useEffect(() => { 

     getipaddress();
    const newUserValuesObject = storeuservalues.reduce((acc, current) => {
      const key = Object.keys(current)[0]; // Get the key of the current object
      acc[key] = current[key]; // Assign it to the accumulator object
      return acc;
    }, {});

    setUserValuesObject(newUserValuesObject);
    console.log('User values:', newUserValuesObject);
  }, [storeuservalues]);



  const [loanAmount, setLoanAmount] = useState('');
  const [email, setEmail] = useState('');

  const handleLoanAmountChange = (value) => {
    setLoanAmount(value);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
  };
//   function timeout(ms) {
//     return new Promise((_, reject) => setTimeout(() => reject(new Error('Request timed out')), ms));
// }


//call ip api function 'https://prod.utils.buddyloan.in/retrieve_ip.php' to get ip address response = 54.86.50.139
async function getipaddress() {
  try {
    const response = await fetch('https://prod.utils.buddyloan.in/retrieve_ip.php');
    ips = await response.text();
    console.log('IP:', ips);
  } catch (error) {
    console.error('Error:', error);
  }
}
     







async function partnerapicall() {
  const fields = {
    userid: userArray[0].id == null ? "" : userArray[0].id,
    user_type: user_type == null ? "" : user_type,
    utm_source: "check_MMPBL",
    utm_medium: "BL_APP",
    loan_amount: loanamountset == null ? "" : loanamountset,
    ip: `${ips}`,
    is_icici_cust: "0",
    os: "ANDROID",
    device_type: "CPH2401",
    interest_credit_cards: "1",
    is_credit_consent: "1",
    useragent: "16.2",
    platform: "NAPP",
    loan_type: "1",
    source: "NAPP",
    IP: `${ips}`,
    platform_os: "ANDROID",
    OS: "ANDROID",
    urlparams: "null",
    version: "34.1.30",
    store_name: "IS_INSTALLED_FROM_LOCAL_SOURCE",
    appsflyer_res : " {status: success, payload: {is_first_launch: false, install_time: 2024-03-15 05:15:11.467, af_message: organic install, af_status: Organic}}, appsflyer_pid: , store_name_hardcode: IS_INSTALLED_FROM_LOCAL_SOURCE, is_app_version: 1, is_nodejs: 1, is_napp: 1, referred_by: }}"
  };

  console.log('Fields:', fields);

  const urlEncodedData = new URLSearchParams(fields).toString();
  const timeoutDuration = apicallfirsttime ? 5000 : 30000; // Adjust timeout based on the flag

  // Timeout function
  const timeoutPromise = (ms) => new Promise((_, reject) => setTimeout(() => reject(new Error('Network request failed')), ms));

  try {
    const response = await Promise.race([
      fetch('https://prod.n-api.buddyloan.in/partner_apis_app', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
          'access_token': 'KXT3BVqyt1XkdqqqcAg9cHlVFMFUdv'
        },
        body: urlEncodedData
      }),
      timeoutPromise(timeoutDuration)
    ]);

    console.log('Response status:', response.status);

    const responseText = await response.text();
    console.log('Raw Response Text:', responseText);

    // Try parsing the response as JSON
    let data;
    
    data = JSON.parse(responseText);
    if (data && data.partner && data.details) {
      if (data.partner != "kotak") {
        if (data.details.file_upload) 
          {
            webviewlink = data.details.file_upload;
          console.log('SucceSDCDss:', data);
          navigation.navigate('InAppWebView');

          // <WebView source={{ uri: data.details.file_upload }} />;
          // Linking.openURL(data.details.file_upload);
          // navigation.navigate('InAppWebView');

        } else {
          webviewlink = thankyouurl;
          console.log('ErSDCSDCror:', data);
          navigation.navigate('InAppWebView');
          navigation.navigate('InAppWebView');

          // <WebView source={{ uri: thankyouurl }} />;
          // Linking.openURL(thankyouurl); // Assuming thankyouUrl is defined elsewhere
        }
      } else {
        if (data.details.self_approved) {
          console.log('Successzdc:', data);
          webviewlink = data.details.self_approved;
          navigation.navigate('InAppWebView');
         navigation.navigate('InAppWebView');
          // <WebView source={{ uri: data.details.self_approved }} />;
          // Linking.openURL(data.details.self_approved);
        } else {
          webviewlink = thankyouurl;
          console.log('Errordcd:');
          // navigation.navigate('InAppWebView');
          navigation.navigate('InAppWebView');


          // <WebView source={{ uri: thankyouurl }} />;
          // Linking.openURL(thankyouurl); // Assuming thankyouUrl is defined elsewhere
        }
      }
    } else {
      webviewlink = thankyouurl;
      console.log('Error1:');
      navigation.navigate('InAppWebView');
      // <WebView source={{ uri: thankyouurl }} />;
      // Linking.openURL(thankyouurl); // Assuming thankyouUrl is defined elsewhere
    }

    console.log('Success:', data);
  } catch (error) {
    console.error('Error:', error.message);
    if (error.message.includes('Network request failed')) {
      console.log('Retrying due to first time call failure...');
      apicallfirsttime = true; // Update the flag after the first call
      partnerapicall(); // Retry the call
    }
    else {
      webviewlink = thankyouurl;
      console.log('Error2:');
      navigation.navigate('InAppWebView');
      // navigation.navigate('InAppWebView');

      // <WebView source={{ uri: thankyouurl }} />;
      // Linking.openURL(thankyouurl);
    }
  } finally {
    apicallfirsttime = true; // Ensure the flag is updated after the first call
  }
}




//   async function partnerapicall() {
//     const fields = {
      
//         // android_id: "a7681112e8395fb4",
//         // device_id: "e108ca48-dce3-4dda-b2a0-ce5254d5ad59",
//         // platform: "NAPP",
//         // platform_os: "ANDROID",
//         // OS:"ANDROID",
//         // loan_type:"1",
//         // utm_source: "google-playBL",
//         // urlparams: "utm_source=google-play&utm_medium=organic",
//         // version: "34.1.30",
//         // device_id: "e108ca48-dce3-4dda-b2a0-ce5254d5ad59"
//         entity: "BLoan",
//         source: "NAPP",
//         os: "Android",
//         ip: "122.172.82.11",
//         user_agent: "CPH2401",
//         id:  userArray[0].id == null ? "" : userArray[0].id,
//         monthly_income: userValuesObject.monthly_income == null ? "" : userValuesObject.monthly_income,
//         company_name: userValuesObject.company_name == null ? "" : userValuesObject.company_name,
//         fname: userValuesObject.fname == null ? "" : userValuesObject.fname,
//         lname: userValuesObject.lname == null ? "" : userValuesObject.lname,
//         gender: userValuesObject.gender == null ?"" : userValuesObject.gender,
//         marital_status: userValuesObject.marital_status == null ? "1" : userValuesObject.marital_status,
//         address1: userValuesObject.address1 == null ? "" : userValuesObject.address1,
//         address2: userValuesObject.address2 == null ? "" : userValuesObject.address2,
//         city: "BENGALURU",
//         industry_type: userValuesObject.industry_type == null ? "" : userValuesObject.industry_type,
//         office_city: userValuesObject.office_city == null ? "" : userValuesObject.office_city,
//         office_state: userValuesObject.office_state == null ? "" : userValuesObject.office_state,
//         office_pincode: userValuesObject.office_pincode == null ? "" : userValuesObject.office_pincode,
//         saving_account_bank: userValuesObject.saving_account_bank == null ? "" : userValuesObject.saving_account_bank,
//         current_account_bank: userValuesObject.current_account_bank == null ? "" : userValuesObject.current_account_bank,
//         pincode: userValuesObject.pincode == null ? "" : userValuesObject.pincode,
//         state: "Karnataka",
//         emplyoment_type:  userValuesObject.emplyoment_type == null ? "" : userValuesObject.emplyoment_type,
//         dob: userValuesObject.dob == null ? "" : userValuesObject.dob,
//         salary_mode: userValuesObject.salary_mode == null ? "" : userValuesObject.salary_mode,
//         emp_exp_month: userValuesObject.emp_exp_month == null ? "" : userValuesObject.emp_exp_month,
//         company_type: userValuesObject.company_type == null ? "" : userValuesObject.company_type,
//         mobile_no: userArray[0].mobile == null ? "" : userArray[0].mobile,
//         pan_no: userValuesObject.pan == null ? "" : userValuesObject.pan,
//         email_id: userValuesObject.email == null ? "" : userValuesObject.email,
//         utm_medium:  "OK_KAN",
//         company_location:  userValuesObject.company_location == null ? "" : userValuesObject.company_location,
//         months_at_c_adddress: userValuesObject.current_addr_month == null ? "" : userValuesObject.current_addr_month,
//         qualification: userValuesObject.qualifications == null ? "" : userValuesObject.qualifications,
//         current_addr_month: userValuesObject.noofmonthsatcuraddr == null ? "" : userValuesObject.noofmonthsatcuraddr,
//         qualifications: userValuesObject.qualification == null ? "" : userValuesObject.qualification,
//         accomodation_type: userValuesObject.accomodation_type == null ? "" : userValuesObject.accomodation_type,
//         office_address: userValuesObject.officeaddress == null ? "" : userValuesObject.officeaddress,
//         designation: userValuesObject.designation == null ? "" : userValuesObject.designation,
//         fathers_name: userValuesObject.fathers_name == null ? "" : userValuesObject.fathers_name,
//         mothers_name: userValuesObject.mothers_name == null ? "" : userValuesObject.mothers_name,
//         date_of_joining: userValuesObject.date_of_joining == null ? "" : userValuesObject.date_of_joining,
//         total_emi:  userValuesObject.total_emi == null ? "" : userValuesObject.total_emi,
//         credit_cards: userValuesObject.credit_cards == null ? "" : userValuesObject.credit_cards,
//         interest_credit_cards: "0",
//         referred_by: "",
//         is_credit_consent: "1",
//         network_type: "wifi",
//         loan_amount: "5555",
//         loan_tenure: "null",
//         is_new_journey: "1",
//         business_nature: "",
//         loan_type: "1",
//         IP: "122.172.82.11",
//         useragent: "CPH2401",
//         platform: "NAPP",
//         platform_os: "ANDROID",
//         OS: Platform.OS.toUpperCase(), 
//         utm_source: "google-playBL",
//         urlparams: "utm_source=google-play&utm_medium=organic",
//         version: "34.1.30",
//         store_name: "IS_INSTALLED_FROM_LOCAL_SOURCE",
//         userid: userArray[0].id == null ? "" : userArray[0].id,
//         appsflyer_pid: "",
//         store_name_hardcode: "IS_INSTALLED_FROM_LOCAL_SOURCE",
//         android_id: "a7681112e8395fb4",
//         device_id: "e108ca48-dce3-4dda-b2a0-ce5254d5ad59"
      






















//     };

//     console.log('Fielsdsdfsdds:', fields);

//     const urlEncodedData = new URLSearchParams(fields).toString();

//     fetch('https://prod.n-api.buddyloan.in/partner_apis_app', {
//         method: 'POST',
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/x-www-form-urlencoded',
//             'access_token': 'KXT3BVqyt1XkdqqqcAg9cHlVFMFUdv'
//         },
//         body: urlEncodedData
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log('Success:', data);
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//     });
// }
   

  async function sendUserDetails() {

    console.log('User values:', userValuesObject);
    console.log('User arrasdsdey:', userValuesObject.office_pincode);
    const fields = {
        entity: "BLoan",
        source: "NAPP",
        os: "Android",
        ip:`${ips}`,
        user_agent: "CPH2401",
        id: userArray[0].id == null ? "" : userArray[0].id,
        monthly_income: userValuesObject.monthly_income == null ? "" : userValuesObject.monthly_income,
        gross_turnover: userValuesObject.gross_turnover_id == null ? "" : userValuesObject.gross_turnover_id,
        company_name: userValuesObject.company_name == null ? "" : userValuesObject.company_name,
        fname: userValuesObject.fname == null ? "" : userValuesObject.fname,
        lname: userValuesObject.lname == null ? "" : userValuesObject.lname,
        gender: userValuesObject.gender == null ? "" : userValuesObject.gender,
        marital_status: userValuesObject.marital_status == null ? "1"  : userValuesObject.marital_status,
        address1: userValuesObject.address1 == null ? "" : userValuesObject.address1,
        address2: userValuesObject.address2 == null ? "" : userValuesObject.address2,
        city: userValuesObject.city == null ? "" : userValuesObject.city,
        industry_type: userValuesObject.industry_type == null ? "" : userValuesObject.industry_type,
        office_city: userValuesObject.office_city == null ? "" : userValuesObject.office_city,
        office_state: userValuesObject.office_state == null ? "" : userValuesObject.office_state,
        office_pincode: userValuesObject.office_pincode == null ? "" : `${userValuesObject.office_pincode}`,
        saving_account_bank: userValuesObject.saving_account_bank == null ? "" : userValuesObject.saving_account_bank,
        current_account_bank: userValuesObject.current_account_bank == null ? "" : userValuesObject.current_account_bank,
        pincode: userValuesObject.pincode == null ? "" : userValuesObject.pincode,
        state: userValuesObject.state == null ? "" : userValuesObject.state,
        emplyoment_type: userValuesObject.emplyoment_type == null ? "" : userValuesObject.emplyoment_type,
        // business_type: userValuesObject.business_type == null ? "" : userValuesObject.business_type,
        // profession_type: userValuesObject.profession_type == null ? "" : userValuesObject.profession_type,
        self_employement_type: userValuesObject.subemplyomentType == null ? "" : userValuesObject.subemplyomentType,
        dob: userValuesObject.dob == null ? "" : (() => {
          const parts = userValuesObject.dob.split('/');
          return `${parts[2]}-${parts[1]}-${parts[0]}`;
        })(),
        // ips string
        IP: `${ips}`,
        // dob: userValuesObject.dob == null ? "" : userValuesObject.dob,
        salary_mode: userValuesObject.salary_mode == null ? "" : userValuesObject.salary_mode,
        emp_exp_month: userValuesObject.emp_exp_month == null ? "" : userValuesObject.emp_exp_month,
        company_type: userValuesObject.company_type == null ? "" : userValuesObject.company_type,
        mobile_no: userArray[0].mobile == null ? "" : userArray[0].mobile ,
        pan_no: userValuesObject.pan == null ? "" : userValuesObject.pan,
        email_id: userValuesObject.email == null ? "" : userValuesObject.email,
        utm_medium: "OK_KAN",
        company_location: userValuesObject.company_location == null ? "" : userValuesObject.company_location,
        months_at_c_adddress: userValuesObject.current_addr_month == null ? "" : userValuesObject.current_addr_month,
        qualification: userValuesObject.qualifications == null ? "" : userValuesObject.qualifications,
        current_addr_month: userValuesObject.current_addr_month == null ? "" : userValuesObject.current_addr_month,
        qualifications: userValuesObject.qualifications == null ? "" : userValuesObject.qualifications,
        accomodation_type: userValuesObject.accomodation_type == null ? "" : userValuesObject.accomodation_type,
        office_pincode: userValuesObject.office_pincode == null ? "" : `${userValuesObject.office_pincode}`,
        office_address: userValuesObject.officeaddress == null ? "" : userValuesObject.officeaddress,
        designation: userValuesObject.designation == null ? "" : userValuesObject.designation,
        fathers_name: userValuesObject.fathers_name == null ? "" : userValuesObject.fathers_name,
        mothers_name: userValuesObject.mothers_name == null ? "" : userValuesObject.mothers_name,
        interest_credit_cards: userValuesObject.interestedInCreditCards == null ? 0 : userValuesObject.interestedInCreditCards,
        business_nature: userValuesObject.business_nature == null ? "" : userValuesObject.business_nature,

        // interest_credit_cards: userValuesObject.interestedInCreditCards == null ? 0 : userValuesObject.interestedInCreditCards,
        referred_by: "",
        is_credit_consent: "1",
        network_type:  "Wifi",
        loan_amount: loanamountset == null ? "" : loanamountset,
        loan_tenure: userValuesObject.loan_tenure == null ? "" : userValuesObject.loan_tenure,
        userid: userArray[0].id == null ? "" : userArray[0].id,
        store_name_hardcode:"IS_INSTALLED_FROM_LOCAL_SOURCE",
        android_id: "a7681112e8395fb4",
        device_id: "e108ca48-dce3-4dda-b2a0-ce5254d5ad59",
        platform: "NAPP",
        platform_os: "ANDROID",
        OS:"ANDROID",
        loan_type:"1",
        utm_source: "google-playBL",
        urlparams: "utm_source=google-play&utm_medium=organic",
        version: "34.1.30",
        device_id: "e108ca48-dce3-4dda-b2a0-ce5254d5ad59"






















    };

    console.log('Fielsdsdfsdds:', fields);

    const urlEncodedData = new URLSearchParams(fields).toString();

    fetch('https://prod.utils.buddyloan.in/v2/user_update_napp.php', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'access_token': 'KXT3BVqyt1XkdqqqcAg9cHlVFMFUdv'
        },
        body: urlEncodedData
    })
    .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    if (data.status === "success") {
      partnerapicall();
    }
})
    .catch((error) => {
        console.error('Error:', error);
        apicallfirsttime=true;

        if(apicallfirsttime){
          console.log('apicallfirsttime:',apicallfirsttime);
          partnerapicall();
         console.error('Error:', error);
        }
    });
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
          <Text style={styles.prompt}>Submit Loan Request</Text>

    <View style={styles.textcontainer}>
      <Text style={styles.baseText}>
        I hereby declare that I have read, understood and agree to the {' '}
        <Text
          style={styles.linkText}
          onPress={() => {
            webviewlink = 'https://www.buddyloan.com/terms-and-conditions.php?app=1'
           
            navigation.navigate('InAppWebView')
          }
       
            
          }>
          Terms & Conditions
        </Text>
        {' '}and the {' '}
        <Text
          style={styles.linkText}
          onPress={() => {
            webviewlink = 'https://www.buddyloan.com/privacy-policy.php?app=1'
            navigation.navigate('InAppWebView')
            // Linking.openURL('https://www.buddyloan.com/privacy-policy.php?app=1')
          }

          }>
          Privacy Policy
        </Text>.
        {' '}I allow Buddy Loan, its lending partners, and subsidiaries to contact me via Phone / Email or any other mode of communication in loan, credit card, or any other related matters/information/promotion. {'\n\n'}
        I hereby appoint Buddy Loan as my authorized representative to receive my Credit Information from {' '}
        <Text
          style={styles.linkText}
          onPress={() => {
            webviewlink = 'https://www.buddyloan.com/experian.php'
            navigation.navigate('InAppWebView')
            // Linking.openURL('https://www.buddyloan.com/experian.php')
          }

          }>
          Experian
        </Text>, more+
        {'\n\n'}
        <View style={styles.container}>
      <Text
        style={styles.declineText}
        onPress={() => setModalVisible(true)}>
        I decline the above Terms & Conditions
      </Text>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>Are you sure you want to decline?</Text>
            <View style={styles.row}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Image 
  source={require('../assets/images/No.png')} 
  style={{width: 55, height: 55}} // Adjust width and height as needed
/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Image 
  source={require('../assets/images/Yes.png')} 
  style={{width: 55, height: 55}} // Adjust width and height as needed
/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
      </Text>
    </View>
          
    <View style={styles.buttonContainer}>
  <TouchableOpacity onPress={() => {
    // Navigation logic for back button
    navigation.goBack();
  }}>
    <Image source={require('../assets/images/BackBtnALS.png')} style={styles.backbtn} />
  </TouchableOpacity>

  

  <TouchableOpacity onPress={() => {
    sendUserDetails();
    // navigation.navigate('SubmitLoanscreen');
  }}>
    <Image source={require('../assets/images/SubmitBtn.png')} style={styles.forwardbtn} />
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
   paddingTop : -11,
    
    paddingLeft: 20,
    paddingRight: 20,
    height: 570,
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
    // marginBottom: 20,
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
  

  logoContainer: {
    alignItems: 'center',
    marginBottom: -1,
    justifyContent: 'center',
  },
  prompt: {
    fontSize: 19,
    color: '#007BFF',
    textAlign: 'center',
   
    fontWeight: '350',

  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginTop: -19,
    marginLeft: 10,
    
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
    // marginBottom: 20,
    
  },
  baseText: {
    fontSize: 14.5,
    color: 'black',
    opacity: 0.7,
    textAlign: 'center',
    lineHeight: 20,
  },
  linkText: {
    textDecorationLine: 'underline',
    color: 'blue',
  },
  declineText: {
    textDecorationLine: 'underline',
    color: 'grey',
  },
  textcontainer: {
    alignItems: 'center',
    padding: 11,
  },
  container: {
    // Your container styles
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 21,
  },
  modalView: {
    margin: 15,
    backgroundColor: 'white',
    borderRadius: 13,
    padding: 23,
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
 
  row: {
    flexDirection: 'row',
    marginTop: 7,
    justifyContent: 'space-between',
    gap: 20,
  },
  




});

export default SubmitLoanscreen;
