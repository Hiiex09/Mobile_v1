import { useState } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

const Home = () => {
  const [listItems, setListItems] = useState([
    { id: 1, name: "Park Von" },
    { id: 2, name: "Devon Jae" },
    { id: 3, name: "Jasmine Mikay" },
  ]);

  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <Text>
        {listItems.map((item) => (
          <Text
            key={item.id}
            style={{ display: "flex", flexDirection: "column" }}
          >
            {item.name}
          </Text>
        ))}
      </Text>
      <Button title="Sample Button" />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
