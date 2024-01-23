import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
} from 'react-native';
import { StatusBar  as ExpoStatusBar} from 'expo-status-bar';

import {MaterialIcons} from '@expo/vector-icons';

const CardComponent = () => {
  return (
    <View style={styles.container}>
      <ExpoStatusBar style="light" />
      <View style={styles.header}>
        <Text style={styles.title}>Professional</Text>
        <Text style={styles.title}>Rendezvous</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search here" />
        <Pressable style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Search</Text>
        </Pressable>
      </View>
      <View style={styles.iconContainer}>
        <MaterialIcons name="message" size={24} color="white" />
        <MaterialIcons name="account-circle" size={24} color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex:1, // Expand to fill available space
    backgroundColor: '#4E91FD',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16, // Consistent padding around content
    flexDirection: 'row',
    borderColor: '#ccc'
  },
  header: {
    alignItems: 'flex-start',
    paddingRight: 12,
    justifyContent: 'center'
  },
  title: {
    fontSize: 12, // Adjust font size for better readability
    color: '#fff'
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#4E91FD',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#ccc',

    padding: 12,
    width: 216,
    height: 25
  },
  searchInput: {
    color: '#ccc',
    padding: 8,
  },
  searchButton: {
    backgroundColor: '#fff', // Use a more distinct color
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    width: 55,
    height: 17,
    padding: 12,

  },
  searchButtonText: {
    color: '#263238',
    fontSize: 12,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default CardComponent;
