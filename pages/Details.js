import React, { useState } from 'react';
import { View, Text } from "react-native";
import { Button, Overlay } from 'react-native-elements';

const Details = () => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View>
      <Button title="Open Overlay" onPress={toggleOverlay} />

      <Overlay
        overlayStyle={{ backgroundColor: "red"}}
        isVisible={visible}
        onBackdropPress={toggleOverlay}
      >
        <View style={{ width: 500, height: 600}}>
          <Text>Hello from Overlay!</Text>
        </View>
      </Overlay>
    </View>
  );
};

export default Details;
