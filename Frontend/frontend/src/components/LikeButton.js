import React from 'react';
import { Button } from 'react-native';

export default function LikeButton({ onPress }) {
  return <Button title="Like" onPress={onPress} />;
}
