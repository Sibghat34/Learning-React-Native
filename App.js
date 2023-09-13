import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";

import Items from "./components/Items";
import Input from "./components/Input";


export default function App() {
  const [carsList, setCarsList] = useState([]);


  function addCarHandler(input) {
    setCarsList((currentCarsList) => [...currentCarsList, {text: input , id: Math.random().toString()}]);
  }

  return (
    <View style={styles.appContainer}>
      <Input onAddCar = {addCarHandler} />
      <View style={styles.listContainer}>
        <FlatList
          data={carsList}
          renderItem={(itemData) => {
            return <Items text = {itemData.item.text} />;
          }}
          keyExtractor={(item , index) =>{
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
