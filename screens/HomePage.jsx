import { StyleSheet} from 'react-native'
import React from 'react'
import CardComponent from '../components/CardComponent'
import AppNavigator from '../navigation/AppNavigator'

const HomePage = () => {
  return (
    <>
      <CardComponent />
      <AppNavigator />
    </>
  )
}

export default HomePage;

const styles = StyleSheet.create({})