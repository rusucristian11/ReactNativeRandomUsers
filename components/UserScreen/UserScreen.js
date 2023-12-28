import React from 'react'
import { View, Text, Button, Image, StyleSheet, TouchableHighlight } from 'react-native'

const UserScreen = ({ navigation, route }) => {
  const { user } = route.params

  const styles = StyleSheet.create({
        container: {
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          flex: 1,
          backgroundColor: '#EEE5E9'
        },
        button: {
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 12,
          paddingHorizontal: 32,
          borderRadius: 10,
          elevation: 3,
          backgroundColor: '#565254',
          width: 150,
          height: 50,
          marginBottom: 50
        },
        profileContainer: {
            alignItems: 'center'
        },
        imageContainer: {
            backgroundColor: '#565254',
            height: 230,
            width: 360,
            alignItems: 'center',
            marginBottom: 70,
            marginTop: 10,
            alignItems: 'center',
            borderRadius: 20
        },
        image: {
            width: 180,
            height: 180,
            borderRadius: 100,
            marginTop: 30
        },
        text: {
            marginLeft: 20,
            fontSize: 17,
            color: 'black',
            marginBottom: 13,
            fontWeight: 'bold'
        },
        buttonText: {
           fontSize: 15,
           fontWeight: 'bold',
           color: 'white',
           textAlign: 'center',
           justifyContent: 'center'
         }
      })

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
          <View style={styles.imageContainer}>
              <Image
                 source={{ uri: user.picture.large }}
                 style={styles.image}
              />
          </View>
          <View>
              <Text style={styles.text}>
                First name: {user.name.first}
              </Text>
              <Text style={styles.text}>
                Last name: {user.name.last}
              </Text>
              <Text style={styles.text}>
                Username: {user.login.username}
              </Text>
              <Text style={styles.text}>
                Full Address: {user.location.street.name} {user.location.street.number}, {user.location.city}, {user.location.postcode}
              </Text>
          </View>
      </View>
      <TouchableHighlight
         style={styles.button}
         onPress={() => navigation.goBack()}
      >
         <Text style={styles.buttonText}>Back</Text>
       </TouchableHighlight>
    </View>
  )
}

export default UserScreen
