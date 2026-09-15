import { StatusBar } from "react-native";
import "./global.css";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (

    <>
    <StatusBar barStyle="light-content" hidden={true} />
     <Stack>
      <Stack.Screen name="(tabs)" options={{ title: "Home", headerShown: false }} />
    </Stack>
    </>
   
  );
}
