import React from 'react';

function BubbleButton(props) {
  return (
    <TouchableOpacity onPress={() => router.push("/Result")}>
      <View></View>
    </TouchableOpacity>
  );
}

export default BubbleButton;