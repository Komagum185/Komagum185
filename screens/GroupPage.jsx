
import React, { useState } from 'react';
import { FlatList, Text, View, StyleSheet, Pressable, Image } from 'react-native';
import { items } from '../components/data';
import { windowWidth } from './SigninPage';

const GroupPage = () => {

//   const Separator = () => {
//   return <View style={styles.separator} />;
// };

  return (

    <View style={styles.container}>
      <Text style={styles.title}>Groups</Text>
      <FlatList
       //ItemSeparatorComponent={Separator}
       showsVerticalScrollIndicator={false}
        data={items}
        renderItem={({ item }) => (
          <View style={styles.listView}>
            <Pressable style={styles.pressable}>
              <View >
                <Image source={require('../assets/adaptive-icon.png')} style={styles.logo} />
              </View>
              <View style={styles.itemView}>
                <Text style={styles.item}>{item.name}</Text>
                <View style={styles.footer}>
                  <Text style={styles.followers}>{item.followers}</Text>
                  <Text style={styles.posts}>{item.posts}</Text>
                </View>
              </View>
            </Pressable>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  // Styles for container and title
container: {
  flex: 1,
  backgroundColor: '#fff',
  justifyContent: 'center',
  alignItems:'flex-start',
},
title: {
  color: '#000000',
  fontSize: 24,
  padding: 15, // Add padding for spacing
},
item: {
  fontSize: 16,
  fontWeight: 'bold'
},
// Styles for pressable button
pressable: {
  flexDirection: 'row',
  width: windowWidth,
  // borderRadius: 10, // Add rounded corners
  //elevation: 3, // Add subtle shadow for depth
  //shadowOpacity: 0.2, // Adjust opacity if needed
  backgroundColor: '#eee', // Adjust color if needed
  margin: 8
},

// Styles for footer items
footer: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'stretch',
  fontSize: 12, // Adjust font size if needed
  color: '#666', // Adjust color for lighter text
  paddingHorizontal: 15
},

});

export default GroupPage;
