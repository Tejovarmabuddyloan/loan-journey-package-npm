import React from 'react';
import { SafeAreaView, View, Text, StyleSheet,Image } from 'react-native';
import { WebView } from 'react-native-webview';
import { useNavigation } from '@react-navigation/native';
import { mobileNum ,thankyouurl,userArray} from './mobilepage';
import { webviewlink } from './submitloan';

const InAppWebView = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appBar}>
        {/* <Text style={styles.appBarText}>My In-App Browser</Text> */}
        <Image source={require('../assets/images/webviewlogo.png')} style={styles.logo} />
      </View>
      <WebView
        source={{ uri: webviewlink }}
        style={styles.webView}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 109,
    height: 39,
    resizeMode: 'contain',
  },
  appBar: {
    height: 50, // Adjust the height as needed
    backgroundColor: '#2196f3', // AppBar color
    justifyContent: 'center',
    alignItems: 'center',
  },
  appBarText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  webView: {
    flex: 1, // Takes up all available space after the AppBar
  },
});

export default InAppWebView;