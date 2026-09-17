import { Text, View, FlatList, StyleSheet } from "react-native";
import { trendingMovies } from "../../data";
import { movies } from "../../data";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../constant";
import Header from "../components/home/header";
import { useState } from "react";
import { useRouter } from "expo-router";
import MovieCard from "../components/movie/movie-card";

const tabs = [
  {
    title: "All",
    value: "all",
  },
  {
    title: "Action",
    value: "action",
  },
  {
    title: "Comedy",
    value: "comedy",
  },
  {
    title: "Drama",
    value: "drama",
  },
  {
    title: "Horror",
    value: "horror",
  },
  {
    title: "Sci-Fi",
    value: "sci-fi",
  },
];

export default function App() {
  const [activeTab, setActiveTab] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const router = useRouter();

  const filteredMovies = movies.filter((movie) => {
    if (activeTab === "All") {
      return true;
    }
    const genreMatch = movie.genre
      .map((g) => g.toLowerCase())
      .includes(activeTab.toLowerCase());
    return genreMatch;
  });

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns={3}
        columnWrapperStyle={styles.listContainer}
        data={filteredMovies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MovieCard movie={item} />}
        ListHeaderComponent={
          <View>
            <Header
              tabs={tabs}
              active={activeTab}
              setActive={setActiveTab}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              routeToSearch={() => router.push("/search")}
            />
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    padding: 10,
  },
  listContainer: {
    paddingBottom: 16,
    gap: 16,
  },
});
