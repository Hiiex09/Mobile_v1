import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const RootLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          tabBarIcon: ({ focused }) => (
            <Ionicons size={24} name={focused ? "person" : "person-outline"} />
          ),
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Ionicons size={24} name={focused ? "home" : "home-outline"} />
          ),
        }}
      />
      <Tabs.Screen
        name="books"
        options={{
          title: "Books",
          tabBarIcon: ({ focused }) => (
            <Ionicons size={24} name={focused ? "book" : "book-outline"} />
          ),
        }}
      />
    </Tabs>
  );
};

export default RootLayout;
