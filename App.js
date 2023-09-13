import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [input, setInput] = useState("");
  const [carsList, setCarsList] = useState([]);

  function carInputHandler(input) {
    setInput(input);
  }
  function addCarHandler() {
    setCarsList((currentCarsList) => [...currentCarsList, input]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          placeholder="Add your dream car"
          onChangeText={carInputHandler}
        />
        <Button title="ADD" onPress={addCarHandler} />
      </View>
      <View style={styles.listContainer}>
        {carsList.map((car) => (
          <View style={styles.listItems} key={car}>
            <Text>
              {car}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 20,
  },
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
  listContainer: {
    flex: 4,
  },
  listItems: {
    margin: 10,
    padding: 10,
    backgroundColor: "lightgrey",
    borderRadius: 10,
  },
});
