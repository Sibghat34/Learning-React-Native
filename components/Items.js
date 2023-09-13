import { StyleSheet, View, Text, Pressable } from "react-native";

function Items(props) {
  return (
   
      <View style={styles.listItems}>
         <Pressable
    //   android_ripple={{ color: "darkgry" }}
      onPress={props.onDeleteCar.bind(this, props.id)}
      style = {({pressed}) => pressed && styles.itemPressed}
    >
        <Text style = {styles.itemText}>{props.text}</Text>
        </Pressable>
      </View>
    
  );
}

export default Items;

const styles = StyleSheet.create({
  listItems: {
    margin: 10,
    backgroundColor: "lightgrey",
    borderRadius: 10,
  },
  itemText: {
    padding: 10,
  },
  itemPressed: {
    opacity: 0.2
  }
});
