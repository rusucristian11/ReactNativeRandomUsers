import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, Button, TextInput, Image, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native'

const UsersScreen = ({ navigation, route }) => {
  const { users } = route.params
  const [filteredUsers, setFilteredUsers] = useState([])
  const [searchText, setSearchText] = useState('')
  const [alternateBackground, setAlternateBackground] = useState(false)

  useEffect(() => {
    setFilteredUsers(users)
  }, [users])

  useEffect(() => {
    const filtered = users.filter(
      (user) =>
        user.name.first.toLowerCase().includes(searchText.toLowerCase()) ||
        user.location.city.toLowerCase().includes(searchText.toLowerCase())
    )
    setFilteredUsers(filtered)
  }, [searchText, users])

  const changeBackgroundColor = (index) => {
    return alternateBackground && index % 2 === 1 ? { backgroundColor: 'orange' } : {}
  }

  const toggleBackgroundColor = () => {
      setAlternateBackground((prevValue) => !prevValue);
  }

  const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#EEE5E9'
    },
    box: {
        marginHorizontal: 20,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: {
          height: 1,
          width: -2,
        },
        elevation: 2,
    },
    image: {
        width: 60,
        height: 60,
        marginRight: 10
    },
    profile: {
        flexDirection: 'row'
    },
    info: {
        flexDirection: 'column'
    },
    infoText: {
        fontWeight: 'bold'
    },
    buttons: {
        flexDirection: 'row'
    },
    button: {
         alignItems: 'center',
         justifyContent: 'center',
         paddingVertical: 12,
         paddingHorizontal: 32,
         backgroundColor: '#565254',
         height: 50,
         width: '50%',
         borderWidth: 1
    },
    text: {
        color: 'white'
    }
  })

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search by first name or city"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      <FlatList
        data={filteredUsers}
        keyExtractor={(item) => item.login.uuid}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('User', { user: item })}
            style={changeBackgroundColor(index)}
          >
              <View
                style={changeBackgroundColor(index), styles.box}
              >
                <Image
                   source={{ uri: item.picture.thumbnail }}
                   style={styles.image}
                />
                <View style={styles.info}>
                    <Text style={styles.infoText}>Name: {item.name.first} {item.name.last}</Text>
                    <Text style={styles.infoText}>City: {item.location.city}</Text>
                    <Text style={styles.infoText}>E-mail: {item.email}</Text>
                </View>
              </View>
          </TouchableOpacity>
        )}
      />
      <View style={styles.buttons}>
          <TouchableHighlight style={styles.button} onPress={toggleBackgroundColor}>
               <Text style={styles.text}>Toggle Background</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={() => navigation.goBack()}>
               <Text style={styles.text}>Back</Text>
          </TouchableHighlight>
      </View>
    </View>
  )
}

export default UsersScreen
