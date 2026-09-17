import { View, Text, StyleSheet, Image, Pressable, Alert } from "react-native";
import { colors, icons } from "../../constant";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const search = () => {
  const router = useRouter();

  const handleBackPress = () => {
    router.back();
  };
  const handleNoteActionPress = () => {
    Alert.alert("Note Action", "please Search for a movie", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "destructive",
      },
      {
        text: "OK",
        onPress: () => console.log("OK Pressed"),
        style: "default",
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View className="flex-row items-center justify-between px-4 py-2">
        <Pressable onPress={handleBackPress}>
          <Image source={icons.back} className="w-8 h-8" />
        </Pressable>
        <Pressable>
          <Text className="text-xl font-bold text-neutral">Search</Text>
        </Pressable>
        <Pressable onPress={handleNoteActionPress}>
          <Image source={icons.noteAction} className="w-12 h-12" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    padding: 2,
  },
  listContainer: {
    paddingBottom: 16,
    gap: 16,
  },
});

export default search;
