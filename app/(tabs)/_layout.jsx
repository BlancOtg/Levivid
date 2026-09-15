import React from "react";
import { StyleSheet } from "react-native";
import { Tabs } from "expo-router";
import { tabIcons, colors } from "../../constant";
import TabBarIcon from "../components/ui/tab-bar-icon"

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: colors.accent,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabTitle: "none",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              title="Home"
              icon={tabIcons.home.default}
              activeIcon={tabIcons.home.active}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              title="Search"
              icon={tabIcons.search.default}
              activeIcon={tabIcons.search.active}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="watchlist"
        options={{
          title: "Watchlist",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              title="Watchlist"
              icon={tabIcons.watchlist.default}
              activeIcon={tabIcons.watchlist.active}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: colors.primary,
    borderTopWidth: 3,
    borderTopColor: colors.accent,
    height: 70,
    paddingBottom: 10,
  },
});