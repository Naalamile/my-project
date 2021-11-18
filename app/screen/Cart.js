  import React,{ useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";

import { Ionicons, MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { statusBarConfig } from "../../Variable";
import BottomNav from "../components/BottomNav";

const Cart = ({ navigation }) => {
  const handleGoBack = () => {
    navigation.goback();
  };
  const [count, setCount] = useState(1);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexBasis: "90%", marginHorizontal: 10 }}>
        <View
          style={{
            flexBasis: "10%",
            alignItems: "center",
            flexDirection: "row",
            marginHorizontal: 20,
            width: "50%",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity  onPress={() => navigation.goBack()} >
          <Ionicons name="arrow-back-outline" size={24} color="black" />
          </TouchableOpacity>
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>Cart list</Text>
            <Text style={{ color: "grey" }}>(3 Items)</Text>
          </View>
        </View>
        <View
          style={{
            flexBasis: "40%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "100%",
            }}
          >
            <View
              style={{
                flexBasis: "20%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{ width: "100%", height: 150, borderRadius: 10 }}
                source={{
                  uri: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
                }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
              }}
            >
              <View style={{ flexBasis: "40%" }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                    jeans
                </Text>
                <Text style={{ fontSize: 13, color: "#a1a1a1" }}>
                  
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <Text style={{ color: "orange" }}>GH</Text>
                  <Text style={{ fontWeight: "bold" }}>0.00</Text>
                </View>
              </View>
              <View style={{ flex: 1 }}>
                <View
                  style={{
                    flexDirection: "row",
                    width: "100%",
                  }}
                >
                  <MaterialCommunityIcons
                    style={{
                      borderRadius: 40,
                      borderWidth: 1,
                      borderColor: "grey",
                    }}
                    name="delete-outline"
                    size={24}
                    color="black"
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    width: "100%",
                  }}
                >
                  <Feather
                    style={styles.iconBg}
                    name="minus"
                    size={24}
                    color="#fff"
                  />
                  <Text>1</Text>
                  <Feather
                    style={styles.iconBg}
                    name="plus"
                    size={24}
                    color="white"
                  />
                </View>
              </View>
            </View>
            <View>
              <View></View>
              <View></View>
            </View>
          </View>
        </View>
        <View style={{ flexBasis: "30%" }}></View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              paddingHorizontal: 45,
              borderRadius: 15,
              paddingVertical: 20,
            }}
          >
            <Text style={{ color: "black", fontSize: 16 }}>
              Proceed to Checkout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <BottomNav
        // activeBtn={activeBtn}
        // setActiveBtn={setActiveBtn}
        navigation={navigation}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: statusBarConfig,
  iconBg: {
    backgroundColor: "#313131",
    borderRadius: 50,
  },
});

export default Cart;
