import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

import Items from "./components/Items";
import Input from "./components/Input";

export default function App() {
  const [carsList, setCarsList] = useState([]);
  const [modelvisibility, setModelVisibility] = useState(false);

  function addCarHandler(input) {
    setCarsList((currentCarsList) => [
      ...currentCarsList,
      { text: input, id: Math.random().toString() },
    ]);
    endAddCarHandler();
  }

  function deleteCarHandler(id) {
    setCarsList((currentCarsList) => {
      return currentCarsList.filter((car) => car.id !== id);
    });
  }

  function startAddCarHandler() {
    setModelVisibility(true);
  }

  function endAddCarHandler() {
    setModelVisibility(false);
  }

  return (
    <View style={styles.appContainer}>
      <Button title="Add New Car" color="black" onPress={startAddCarHandler} />
      <Input visible={modelvisibility} onAddCar={addCarHandler} onCancel={endAddCarHandler} />
      <View style={styles.listContainer}>
        <FlatList
          data={carsList}
          renderItem={(itemData) => {
            return (
              <Items
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteCar={deleteCarHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
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

  listContainer: {
    flex: 4,
  },
});
