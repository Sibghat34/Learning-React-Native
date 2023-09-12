import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View>
    <View>
      <TextInput placeholder="Add your dream car" />
      <Button title="ADD" />
    </View>
    <View>
      <Text>List of Cars..........!</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
 
});
