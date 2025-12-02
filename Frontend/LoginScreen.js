import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';

export default function LoginScreen() {
  return (
    <View>
      <Text>Login</Text>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" secureTextEntry={true} />
      <Button title="Login" onPress={() => {}} />
    </View>
  );
}
