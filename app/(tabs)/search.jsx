import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, icons } from "../../constant";
import { movies } from "../../data";
import InlineMovieCard from "../components/movie/inline-movie-card";
import EmptyState from "../components/ui/empty-state";
import SearchInput from "../components/ui/search-input";

const search = () => {
  const router = useRouter();
  const { searchTerms: params } = useLocalSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);

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

  const renderEmptyState = () => {
    if (filteredMovies.length === 0) {
      return (
        <EmptyState
          title="No Movies Found"
          description="Try searching for something else"
          icon={icons.search_2}
        />
      );
    }
    return null;
  };

  const runSearch = (term) => {
    const clean = term.toLowerCase().trim();
    setFilteredMovies(
      movies.filter((m) => m.title.toLowerCase().includes(clean)),
    );
  };

  useEffect(() => {
  setSearchTerm(params);
  }, [params]);

  const handleSearch = () => {
    runSearch(searchTerm);
  };

  const handleClear = () => {
    setSearchTerm("");
    setFilteredMovies([]);
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
      <View>
        <SearchInput
          initialValue={searchTerm}
          onSearch={setSearchTerm}
          onSubmit={handleSearch}
          onClear={handleClear}
          editable={true}
        />
        <FlatList
          data={filteredMovies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <InlineMovieCard movie={item} />}
          ListEmptyComponent={renderEmptyState()}
        />
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
