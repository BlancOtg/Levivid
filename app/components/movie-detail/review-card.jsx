import React from "react";
import { View, Text, Image } from "react-native";
import { icons } from "../../../constant";

const ReviewCard = (data) => {
  const { icon, name, review, rating } = data.review;
  return (
    <View className="flex-row items-start gap-4 mb-4">
      <View>
        <Image
          source={icon || icons.avatar}
          className="rounded-xl"
          width={60}
          height={60}
        />
      </View>
      <View className="">
        <Text className="text-neutral text-lg font-bold">{name}</Text>
        <Text className="text-light-secondary text-base">{review}</Text>
        <Text className="text-accent text-base font-bold">
          {rating.toFixed(1)}
        </Text>
      </View>
    </View>
  );
};

export default ReviewCard;
