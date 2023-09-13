import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style = {styles.appContainer}>
    <View style = {styles.inputContainer}>
      <TextInput style = {styles.inputText} placeholder="Add your dream car" />
      <Button title="ADD" />
    </View>
    <View style = {styles.listContainer}>
      <Text>List of Cars..........!</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
 appContainer: {
  flex: 1,
  paddingTop: 70,
  paddingHorizontal: 20
 },
 inputContainer: {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 20,
  borderBottomWidth: 1,

 },
 inputText: {
  borderWidth: 1,
  borderRadius: 5,
  width: '80%',
  paddingLeft: 10
 },
 listContainer: {
  flex: 4,
 }
});
