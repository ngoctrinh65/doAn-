import React from 'react';
import { View, Button } from 'react-native';

const ControlPanel = () => {
  const sendCommand = async (command) => {
    try {
      const response = await fetch('http://your-server-address/api/command', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ command }),
      });
      if (!response.ok) {
        throw new Error('Failed to send command');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
      <Button title="Start Moving" onPress={() => sendCommand('start')} />
      <Button title="Stop Moving" onPress={() => sendCommand('stop')} />
      <Button title="Reverse Moving" onPress={() => sendCommand('reverse')} />
    </View>
  );
};

export default ControlPanel;
