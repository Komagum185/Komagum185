import React, { FC, useState } from 'react';
import {
  SafeAreaView,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  Text,
  TextInput,
  View,
  Pressable,
  Image,
  StatusBar,
  Dimensions,
  Alert
} from 'react-native';
import { StatusBar  as ExpoStatusBar} from 'expo-status-bar';
import Feather from '@expo/vector-icons/Feather';
import { authenticate } from '../utils/authProvider';

export const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const SignInPage = ({navigation, route}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleResetPassword = () => {
    console.log('Reset password');
  };

  
  const handleSignIn = async () => {
    try {
      const { success } = await authenticate(email, password);

      if (success) {
        // Call the onSignIn function passed from AppNavigator
        route.params.onSignIn(navigation.navigate("MainNavigator"));
      } else {
        Alert.alert('Authentication Failed', 'Invalid email or password.');
      }
    } catch (error) {
      console.error('Authentication error:', error);
      Alert.alert('Error', 'An error occurred during authentication.');
    }
  };
  const handleSocialSignIn = (provider) => {
    console.log(`Signing in with ${provider}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ExpoStatusBar style="light" />
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Professional Rendezvous</Text>
          <Image source={require('../assets/adaptive-icon.png')} style={styles.logo} />
          <Text style={styles.welcomeText}>Welcome back, sign in to continue</Text>
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.label}>Email address</Text>
          <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Enter your e-mail address here" />
          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.input} value={password} onChangeText={setPassword} placeholder="Enter your password here" secureTextEntry />
          <Pressable style={styles.forgotPasswordButton} onPress={handleResetPassword}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </Pressable>
          <Pressable style={styles.signInButton} onPress={handleSignIn}>
            <Text style={styles.signInButtonText}>Sign In</Text>
          </Pressable>
        </View>
        <View style={styles.socialLinksContainer}>
          <Text style={styles.socialLinksText}>Or sign up using</Text>
          <View style={styles.socialButtonsContainer}>
            <Pressable style={styles.socialButton} onPress={() => handleSocialSignIn('Facebook')}>
              <Feather name="facebook" size={14} color="#575757" />
              <Text style={styles.socialButtonText}>Facebook</Text>
            </Pressable>
            <Pressable style={styles.socialButton} onPress={() => handleSocialSignIn('Twitter')}>
              <Feather name="twitter" size={14} color="#575757" />
              <Text style={styles.socialButtonText}>Twitter</Text>
            </Pressable>
            <Pressable style={styles.socialButton} onPress={() => handleSocialSignIn('LinkedIn')}>
              <Feather name="linkedin" size={14} color="#575757" />
              <Text style={styles.socialButtonText}>LinkedIn</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account? </Text>
          <Pressable style={styles.signUpButton}>
            <Text style={styles.signUpButtonText}>Sign Up</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight,
  },
  header: {
    paddingBottom: 24,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#263238',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
  welcomeText: {
    fontSize: 18,
    color: '#4A4848',
    marginBottom: 16,
  },
  formContainer: {
    marginHorizontal: 16,
  },
  label: {
    fontSize: 16,
    color: '#263238',
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderRadius: 40,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 16,
    fontSize: 14,
    color: '#4A4848',
  },
  forgotPasswordButton: {
    alignSelf: 'flex-end',
    marginTop: 8,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#12B2E4',
  },
  signInButton: {
    backgroundColor: '#12B2E4',
    borderRadius: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  signInButtonText: {
    fontSize: 16,
    color: '#fff',
  },
  socialLinksContainer: {
    marginTop: 32,
    alignItems: 'center',
  },
  socialLinksText: {
    fontSize: 16,
    color: '#4A4848',
    marginBottom: 8,
  },
  socialButtonsContainer: {
    width: windowWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E6E6E6',
    borderRadius: 40,
    height: 28,
    right: 10,
    // gap: 2,
    marginHorizontal: 8,
    width: 104
  },
  socialButtonText: {
    fontSize: 12,
    color: '#4A4848',
    marginHorizontal: 8,
    
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
  },
  footerText: {
    fontSize: 16,
    color: '#4A4848',
    left: 16
  },
  signUpButton: {
    marginLeft: 8,
  },
  signUpButtonText: {
    fontSize: 16,
    color: '#12B2E4',
    fontWeight: 'bold',
    left: 8
  },
});


export default SignInPage;