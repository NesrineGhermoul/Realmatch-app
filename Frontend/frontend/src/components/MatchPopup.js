import React from 'react';
import { View, Text } from 'react-native';

export default function MatchPopup({ matchName }) {
  return (
    <View>
      <Text>It's a match with {matchName}!</Text>
    </View>
  );
}
