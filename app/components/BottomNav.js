import React from "react";
import { StyleSheet, View } from "react-native";

import {
  MaterialCommunityIcons,
  Feather,
  SimpleLineIcons,
} from "@expo/vector-icons";

const BottomNav = ({ activeBtn, setActiveBtn, navigation }) => {
  const handleSumbit = (place) => {
    // setActiveBtn(place);
    navigation.navigate(place);
  };

  return (
    <View style={styles.container}>
      <View>
        <Feather
          onPress={() => handleSumbit("home")}
          name="home"
          size={24}
          // color={activeBtn === "home" ? "orange" : "black"}
          color="black"
        />
      </View>
      <View
        style={{
          backgroundColor: "#232323",
          borderRadius: 50,
          marginBottom: 80,
        }}
      >
        <MaterialCommunityIcons
          style={{ padding: 20 }}
          name="microphone-outline"
          size={24}
          color="#fff"
        />
      </View>
      <View>
        <SimpleLineIcons
          onPress={() => handleSumbit("cart")}
          name="handbag"
          size={24}
          // color={activeBtn === "cart" ? "orange" : "black"}
          color="black"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#d1d1d1b2",
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

export default BottomNav;
