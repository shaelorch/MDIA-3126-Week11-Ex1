import { View, Text, Button, TextInput} from 'react-native';
import React from 'react';

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import auth from '../firebase/firebaseConfig';

export default function Login({navigation}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const CreateUser = async () => {
        const user = await createUserWithEmailAndPassword(auth, email, password);
        console.log(user);
    }
    return <View>
        <Text>Hello I am on the login page</Text>
        <Button 
        title="Go to details"
        onPress={() => navigation.navigate('Camera')}/>
    </View>
}