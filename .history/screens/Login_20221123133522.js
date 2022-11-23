import { View, Text, Button, TextInput} from 'react-native';
import React from 'react';

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import auth from '../firebase/firebaseConfig.js';

export default function Login({navigation}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const CreateUser = async () => {
        const user = await createUserWithEmailAndPassword(auth, email, password);
        console.log("created user", user);
    }
    return <View>
        <Text>Hello I am on the login page</Text>
        <TextInput onChangeText={(text) => setEmail(text)} placeholder="Email..."/>
        <TextInput onChangeText={(text) => setPassword(text)} placeholder="Password..."/>
        <Button onPress={() => {
            CreateUser()
        }}
        title="Register"/>
        
        <Button 
        title="Go to details"
        onPress={() => navigation.navigate('Camera')}/>
    </View>
}