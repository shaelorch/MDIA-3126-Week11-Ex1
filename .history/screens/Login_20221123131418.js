import { View, Text, Button, TextInput} from 'react-native';
import React from 'react';

export default function Login({navigation}) {
    return <View>
        <Text>Hello I am on the login page</Text>
        <Button 
        title="Go to details"
        onPress={() => navigation.navigate('Camera')}/>
    </View>
}