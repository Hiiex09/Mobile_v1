import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const AboutPage = () => {
  return (
    <View style={styles.container}>
      <Text>AboutPage</Text>
      <Link href="/">Go to Home Page</Link>
    </View>
  );
};

export default AboutPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
