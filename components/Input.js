import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native";
import { useState } from "react";

function Input(props) {
  const [input, setInput] = useState("");

  function carInputHandler(input) {
    setInput(input);
  }
  function addCarHandler() {
    props.onAddCar(input);
    setInput("");
  }

  return (
    <Modal visible={props.visible} animationType="fade">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/images/logo.jpg")}/>
        <TextInput
          style={styles.inputText}
          placeholder="Add your dream car"
          onChangeText={carInputHandler}
          value={input}
        />
        <View style={styles.buttonContainer}>
          <View style= {styles.button}>
            <Button title="ADD" onPress={addCarHandler} />
          </View>
          <View style= {styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="red"/>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  inputText: {
    borderWidth: 1,
    borderRadius: 5,
    width: "90%",
    paddingLeft: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 30,
  },
  button: {
    width: "25%",
    marginHorizontal: 10,
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,

  }
});
