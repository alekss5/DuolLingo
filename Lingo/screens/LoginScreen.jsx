import React, { useState,useContext } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

import {BSON} from 'realm';
import {useRealm} from '@realm/react';
import { UserSchema } from '../realm/UserSchema';

 import { RealmContext } from "../realm/UserSchema";

export default function LoginScreen({navigation}) {
    const realm = useRealm();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = () => {
    realm.write(() => {
        realm.create('User', {
          _id: new BSON.ObjectId(),
          email: email,
          password: password
        });
      // realm.deleteAll()
      });




    // Here you can implement your login logic, for demonstration purposes, let's just show an alert with the entered credentials
    // Alert.alert('Login', `Username: ${email}\nPassword: ${password}`);
    navigation.navigate('BottomTabs')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter you details</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
