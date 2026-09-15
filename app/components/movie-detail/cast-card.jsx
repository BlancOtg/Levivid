import React from "react";
import { View, Text, Image } from "react-native";
import { avatars } from "../../../constant";


const CastCard = (props) => {
  const { image, name, role } = props.cast;
  return (
    <View className="justify-center items-center">
      <Image
        source={typeof image === "number" ? image : avatars.benedict}
        className="w-32 h-32 rounded-full"
        resizeMode="cover"
      />
      <Text className="text-neutral text-xl text-center font-semibold mt-2">
        {name}
      </Text>
    </View>
  );
};

export default CastCard;
