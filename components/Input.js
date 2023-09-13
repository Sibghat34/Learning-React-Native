import { View, TextInput, Button, StyleSheet, Modal } from "react-native";
import { useState } from "react";

function Input(props) {
  const [input, setInput] = useState("");

  function carInputHandler(input) {
    setInput(input);
  }
  function addCarHandler() {
    props.onAddCar(input);
    setInput('');    
  }

  return (
    <Modal visible = {props.visible} animationType="fade">
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputText}
        placeholder="Add your dream car"
        onChangeText={carInputHandler}
        value={input}
      />
      <Button title="ADD" onPress={addCarHandler} />
    </View>
    </Modal>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 1,
  },
  inputText: {
    borderWidth: 1,
    borderRadius: 5,
    width: "80%",
    paddingLeft: 10,
  },
});
