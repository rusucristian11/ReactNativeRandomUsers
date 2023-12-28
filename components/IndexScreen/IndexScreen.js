import React, { useState, useEffect } from 'react'
import { View, StyleSheet, TouchableHighlight, Text } from 'react-native'

const IndexScreen = ({ navigation }) => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=200')
      .then((response) => response.json())
      .then((data) => setUsers(data.results))
      .catch((error) => console.error('Error fetching users:', error))
  }, [])

  const handleRandomizeUser = () => {
      if (users.length > 0) {
        const randomUser = users[Math.floor(Math.random() * users.length)]
        navigation.navigate('User', { user: randomUser })
      }
    }

    const styles = StyleSheet.create({
      container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#EEE5E9'
      },
      button: {
         alignItems: 'center',
         justifyContent: 'center',
         paddingVertical: 12,
         paddingHorizontal: 32,
         borderRadius: 30,
         elevation: 3,
         backgroundColor: '#565254',
         width: 270,
         height: 100,
         margin: 50
      },
      text: {
         fontSize: 20,
         lineHeight: 21,
         fontWeight: 'bold',
         letterSpacing: 0.25,
         color: 'white'
       }
    })
  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.button} onPress={() => navigation.navigate('Users', { users })}>
        <Text style={styles.text}>Users List</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.button} onPress={handleRandomizeUser}>
        <Text style={styles.text}>Randomize User</Text>
      </TouchableHighlight>
    </View>
  )
}

export default IndexScreen
