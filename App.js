import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style = {styles.appContainer}>
    <View style = {styles.inputContainer}>
      <TextInput style = {styles.inputText} placeholder="Add your dream car" />
      <Button title="ADD" />
    </View>
    <View>
      <Text>List of Cars..........!</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
 appContainer: {
  padding: 50
 },
 inputContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between'
 },
 inputText: {
  borderWidth: 1,
  borderRadius: 5,
  width: '80%',
  paddingLeft: 10
 }
});
