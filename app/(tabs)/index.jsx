import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../constant";
import { movies } from "../../data";
import Header from "../components/home/header";
import MovieCard from "../components/movie/movie-card";
import EmptyState from "../components/ui/empty-state";

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
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [stateMovies, setStateMovies] = useState(movies);

  const filterFn = (movie) => {
    const filteredMovies = movies.filter((movie) => {
      if (activeTab === "All") {
        return true;
      }
      const genreMatch = movie.genre
        .map((g) => g.toLowerCase())
        .includes(activeTab.toLowerCase());
      return genreMatch;
    });
    setStateMovies(filteredMovies);
  };

  useEffect(() => {
    filterFn(movies);
  }, [activeTab]);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns={3}
        columnWrapperStyle={styles.listContainer}
        data={stateMovies}
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
            />
          </View>
        }
        ListEmptyComponent={
          <EmptyState
            title="No Movies Found"
            description="We couldn't find any movies matching your search or selected genre. Please try again with different criteria."
          />
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
