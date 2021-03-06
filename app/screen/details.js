import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const Details = ({ navigation, route }) => {
  const { name, price, imageSrc, PromoInfo, Size, review } =
    route.params;
  return (
    <View style={styles.container_contents}>
      {/* left */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Image style={{ width: 120, height: 120 }} source={{ uri: imageSrc }} />
      <Text>{name}</Text>
      <Text>{price}</Text>
      <Text>{PromoInfo}</Text>
      <Text>{Size}</Text>
      <Text>{review}</Text>

      <TouchableOpacity
        onPress={() =>
          navigation.naviagte("Cart", [
            name,
            price,
            imageSrc,
            PromoInfo,
            Size,
            review,
          ])
        }
      ></TouchableOpacity>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});