import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoanJourney from './mobilepage';
import LoanDetailsScreen from './loanemail';
import Loantypescreen from './loantype';
import Employmenttypescreen from './employmenttype';
import Salarymodescreen from './salarymode';
import SalaryworkDetailsScreen from './salaryworkdet1';
import SalaryworkDetailsScreen2 from './salaryworkdet2';
import SalarypersonalDetailsScreen from './salarypers1';
import SalarypersonalDetailsScreen2 from './salaryper2';
import SalarycommunicationDetailsScreen from './salarycom';
import SalaryBankDetailsScreen from './salarybankdet';
import BusinessProofscreen from './Buisnessproof';
import BusinessDetailsScreen from './Businessdetails';
import BusineesDetailsScreen2 from './businessdetails2';
import BusinesspersonalDetailsScreen from './businespersonalsdet';
import BusinesspersonalDetailsScreen2 from './businesspers2';
import BusinesscommunicationDetailsScreen from './businesscommunidet';
import BusinessBankDetailsScreen  from  './businessbankdet';
import SelfEmployedpofessionTypeScreen from './self-employprofesty';
import SelfemployedpersonalDetailsScreen from  './selfemploypersonaldet11'
import SelfemploypersonalDetailsScreen2 from './selfemployperdet2'
import SelfEmployedcommunicationDetailsScreen from './selfemployedcommunicationdet';
import SelfEmployedBankDetailsScreen from './selfemplybankdet';
import StudentpersonalDetailsScreen from './studentperdet';
import StudentpersonalDetailsScreen2 from './studentperdet2';
import StudentEducationDetailsScreen from './studenteducationdet';
import StudentcommunicationDetailsScreen from './studentcommunicationdet';
import StudentBankDetailsScreen from './studentbankdet';
import SubmitLoanscreen from './submitloan';
import InAppWebView from './webview';
const Stack = createStackNavigator(); // Create the Stack navigator

function Loanpages() { // Changed to function component
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoanJourney">
        <Stack.Screen name="LoanJourney" component={LoanJourney} options={{ headerShown: false }}
         />
        <Stack.Screen name="LoanDetails" component={LoanDetailsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Loantypescreen" component={Loantypescreen} options={{ headerShown: false }} />
        <Stack.Screen name="Employmenttypescreen" component={Employmenttypescreen} options={{ headerShown: false }} />
        <Stack.Screen name="Salarymodescreen" component={Salarymodescreen} options={{ headerShown: false }} />
        <Stack.Screen name="SalaryworkDetailsScreen" component={SalaryworkDetailsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SalaryworkDetailsScreen2" component={SalaryworkDetailsScreen2} options={{ headerShown: false }} />
        <Stack.Screen name="SalarypersonalDetailsScreen" component={SalarypersonalDetailsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SalarypersonalDetailsScreen2" component={SalarypersonalDetailsScreen2} options={{ headerShown: false }} />
        <Stack.Screen name="SalarycommunicationDetailsScreen" component={SalarycommunicationDetailsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SalaryBankDetailsScreen" component={SalaryBankDetailsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="BusinessProofscreen" component={BusinessProofscreen} options={{ headerShown: false }} />
        <Stack.Screen name="BusinessDetailsScreen" component={BusinessDetailsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="BusineesDetailsScreen2" component={BusineesDetailsScreen2} options={{ headerShown: false }} />
        <Stack.Screen name="BusinesspersonalDetailsScreen" component={BusinesspersonalDetailsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="BusinesspersonalDetailsScreen2" component={BusinesspersonalDetailsScreen2} options={{ headerShown: false }} />
        <Stack.Screen name="BusinesscommunicationDetailsScreen" component={BusinesscommunicationDetailsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="BusinessBankDetailsScreen" component={BusinessBankDetailsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SelfEmployedpofessionTypeScreen" component={SelfEmployedpofessionTypeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SelfemployedpersonalDetailsScreen" component={SelfemployedpersonalDetailsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SelfemploypersonalDetailsScreen2" component={SelfemploypersonalDetailsScreen2} options={{ headerShown: false }} />
        <Stack.Screen name="SelfEmployedcommunicationDetailsScreen" component={SelfEmployedcommunicationDetailsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SelfEmployedBankDetailsScreen" component={SelfEmployedBankDetailsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="StudentpersonalDetailsScreen" component={StudentpersonalDetailsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="StudentpersonalDetailsScreen2" component={StudentpersonalDetailsScreen2} options={{ headerShown: false }} />
        <Stack.Screen name="StudentEducationDetailsScreen" component={StudentEducationDetailsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="StudentcommunicationDetailsScreen" component={StudentcommunicationDetailsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="StudentBankDetailsScreen" component={StudentBankDetailsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SubmitLoanscreen" component={SubmitLoanscreen} options={{ headerShown: false }} />
        <Stack.Screen name="InAppWebView" component={InAppWebView} options={{ headerShown: false }} />












        {/* Salarymodescreen */}
        {/* SalaryworkDetailsScreen */}

        


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Loanpages; 






// export const LoanJourney = () => {
//   const isDarkMode = useColorScheme() === 'dark';
//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.transparent,
//   };

//   const [mobileNumber, setMobileNumber] = useState('');
//   const [otp, setOtp] = useState('');
//   const [otpSent, setOtpSent] = useState(false);
//   const [correctNumberGiven, setCorrectNumberGiven] = useState(false);
//   const otpFocusNode = useRef(null);

//   const sendOTP = async (mobileNumber, resendotp = false) => {
//     console.log(`Sending OTP to ${mobileNumber}`);
//   };

//   const validateMobileNumber = (value) => {
//     const alphanumeric = /^[6-9]{1}[0-9]{9}$/;
//     if (value.length < 10 || !alphanumeric.test(value)) {
//       setCorrectNumberGiven(false);
//       return 'Please enter valid mobile number';
//     }
//     setCorrectNumberGiven(true);
//     return null;
//   };

//   const handleMobileNumberChange = async (value) => {
//     setMobileNumber(value);
//     validateMobileNumber(value);
//     if (value.length === 10 && !otpSent) {
//       await sendOTP(value, false);
//       setOtpSent(true);
//     }
//     if (value.length === 10) {
//       otpFocusNode.current?.focus();
//     }
//   };

//   return (
//     <ImageBackground
//       source={require('../assets/images/dashboardbg.jpg')}
//       style={styles.container}
//       resizeMode="cover"
//     >
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={backgroundStyle.backgroundColor} />
//       <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
//         <View style={styles.outerContainer}>
//           <View style={styles.header}>
//             <Text style={styles.greeting}>Hi <Text style={styles.name}>Buddy</Text></Text>
//             <View style={styles.applyloancont}>
//               <Text style={styles.applyText}>Apply for loan</Text>
//               <Image source={require('../assets/images/Icon.gif')} style={{ width: 100, height: 100, resizeMode: 'contain', marginTop: 0, marginLeft: 0, opacity: 0.9 }} />
//             </View>
//           </View>
//         </View>
//         <View style={styles.secondcont}>
//           <View style={styles.logoContainer}>
//             <Image source={require('../assets/images/buddyloanlogo.png')} style={styles.logo} />
//           </View>
//           <Text style={styles.prompt}>Enter Mobile Number</Text>
//           <View style={styles.inputContainer}>
//             <TextInput
//               style={styles.input}
//               placeholder="Mobile Number"
//               keyboardType="phone-pad"
//               value={mobileNumber}
//               onChangeText={handleMobileNumberChange}
//               maxLength={10}
//             />
//             {correctNumberGiven && (
//               <TextInput
//                 ref={otpFocusNode}
//                 style={[styles.input, styles.otpInput]}
//                 placeholder="OTP"
//                 keyboardType="number-pad"
//                 value={otp}
//                 onChangeText={(text) => setOtp(text)}
//                 maxLength={4}
//               />
//             )}
//           </View>
//           <Image source={require('../assets/images/forwardbtn.png')} style={styles.forwardbtn} />
//         </View>
//       </ScrollView>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   otpInput: {
//     marginTop: 20,
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
//     padding: 20,
//     height: 630,
//     marginLeft: 13,
//     backgroundColor: 'white',
//     borderRadius: 10,
//     marginTop: 20,
//     borderColor: '#007BFF',
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
//   welcomeText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   greeting: {
//     fontSize: 20,
//     color: '#000',
//     paddingLeft: 11,
//   },
//   name: {
//     fontWeight: 'bold',
//   },
//   applyloancont: {
//     flexDirection: 'column',
//     marginRight: 20,
//     padding: 0,
//   },
//   applyText: {
//     fontSize: 17,
//     color: '#007BFF',
//     paddingRight: 15,
//     marginBottom: -15,
//   },
//   logo: {
//     width: 100,
//     height: 100,
//     resizeMode: 'contain',
//     marginTop: 0,
//   },
//   gif: {},
//   logoContainer: {
//     alignItems: 'center',
//     marginBottom: -9,
//   },
//   forwardbtn: {
//     width: 100,
//     height: 100,
//     resizeMode: 'contain',
//     alignSelf: 'center',
//     marginBottom: 20,
//   },
//   prompt: {
//     fontSize: 18,
//     color: '#007BFF',
//     textAlign: 'center',
//     marginBottom: 10,
//   },
//   input: {
//     height: 50,
//     borderColor: '#F4F4F4',
//     borderWidth: 1,
//     borderRadius: 7,
//     paddingHorizontal: 10,
//     backgroundColor: 'white',
//     color: '#000',
//     fontSize: 17,
//   },
//   inputContainer: {
//     backgroundColor: 'white',
//   },
//   button: {
//     backgroundColor: '#007BFF',
//     height: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 10,
//   },
//   buttonText: {
//     fontSize: 20,
//     color: '#FFFFFF',
//   },
// });
// export default LoanJourney;

