import { StyleSheet, View, Text, Pressable } from "react-native";

function Items(props) {
  return (
    <Pressable onPress={props.onDeleteCar.bind(this, props.id)}>
    <View style={styles.listItems}>
      <Text>{props.text}</Text>
    </View>
    </Pressable>
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
