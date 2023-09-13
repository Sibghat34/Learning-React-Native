import { StyleSheet, View, Text } from "react-native";

function Items(props) {
  return (
    <View style={styles.listItems}>
      <Text>{props.text}</Text>
    </View>
  );
}

export default Items;

const styles = StyleSheet.create({
    listItems: {
        margin: 10,
        padding: 10,
        backgroundColor: "lightgrey",
        borderRadius: 10,
      },
});
