import { Text, View, FlatList , StyleSheet} from "react-native";
import { trendingMovies } from "../../data";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../constant";
import Header from "../components/home/header";
import { UseState } from "react";
import { UseRouter } from "expo-router";

export default function App() {

  
  return (
    <SafeAreaView style={styles.container}> 
     <FlatList 
      data={trendingMovies}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View className="p-4 border-b border-gray-200">
          <Text className="text-lg text-neutral font-bold">{item.title}</Text>
          </View> )}

          ListHeaderComponent={(
            <View>
            <Header />
            </View>
          )}
     />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: colors.primary,
  }
})