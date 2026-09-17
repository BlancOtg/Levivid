import React from "react";
import { FlatList, ScrollView, Text, View, Pressable } from "react-native";
import { trendingMovies } from "../../../data";
import SearchInput from "../ui/search-input";
import TabButton from "../ui/tab-button";
import TrendingMovieCard from "../movie/trending-movie-card";


const Header = ({
  tabs,
  active,
  setActive,
  searchTerm,
  setSearchTerm,
  routeToSearch,
}) => {
  return (
    <View className="mb-4">
      <Text className="text-xl font-bold text-neutral">
        What do you want to watch?
      </Text>

      {/* Search Input Input */}
      <Pressable onPress={routeToSearch} className="mt-4 relative">
        <SearchInput
          initialValue={searchTerm}
          onSearch={setSearchTerm}
          onSubmit={routeToSearch}
          editable={false} // Add this prop
        />
      </Pressable>

      {/* Horizontal Carousel Section 1 */}
      <View className="pt-2">
        <Text className="text-xl text-neutral font-semibold mb-2">
          Top Movies for the week
        </Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={trendingMovies}
          keyExtractor={(item) => `trending-top-${item.id}`}
          renderItem={({ item, index }) => (
            <TrendingMovieCard movie={item} index={index} />
          )}
          contentContainerClassName="gap-4 pb-2"
        />
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerClassName="gap-2 mt-4"
      >
        {tabs.map((tab) => (
          <TabButton
            key={tab.value}
            title={tab.title}
            activeTab={active}
            onPress={() => setActive(tab.value)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Header;
