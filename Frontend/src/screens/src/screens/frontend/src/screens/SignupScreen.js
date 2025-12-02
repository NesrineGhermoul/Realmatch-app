import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';

export default function SignupScreen() {
  return (
    <View>
      <Text>Signup</Text>
      <TextInput placeholder="Name" />
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" secureTextEntry={true} />
      <Button title="Signup" onPress={() => {}} />
    </View>
  );
}
