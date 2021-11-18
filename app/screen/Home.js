import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";

//Imports of app components
import BottomNav from "../components/BottomNav";
import { statusBarConfig } from "../../Variable";

//Third party packages imports
import { Ionicons, MaterialCommunityIcons, Feather } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  const handleSubmit = (place) => {
    // setActiveBtn(place);
    navigation.navigate("cart");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexBasis: "90%", paddingHorizontal: 15 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            height: 30,
            width: "90%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <View>
            <Ionicons name="menu-outline" size={24} color="black" />
          </View>
          <View>
            <MaterialCommunityIcons name="cart" size={24} color="" />
          </View>
          <View
            style={{
              justifyContent: "space-evenly",
              alignItems: "center",
              flexDirection: "row",
              width: "20%",
            }}
          >
            <Feather name="search" size={24} color="black" />
            <Ionicons name="notifications-outline" size={24} color="black" />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            height: 40,
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "45%",
          }}
        >
          
        </View>
        <TouchableOpacity  onPress={() => navigation.goBack()} >
          <Ionicons name="arrow-back-outline" size={24} color="black" />
          </TouchableOpacity>
        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 19,
              color: "#585858",
              marginLeft: 10,
              marginTop: 10,
            }}
          >
        
            Categories
          </Text>
          <View
            style={{
              width: "100%",
              justifyContent: "space-evenly",
              alignItems: "center",
              flexDirection: "row",
              paddingHorizontal: 5,
              paddingVertical: 15,
            }}
          >
            <View
              style={[
                styles.bgcontainer,
                { paddingHorizontal: 20, paddingVertical: 8 },
              ]}
            >
              <Text style={{ color: "black" }}>All</Text>
            </View>
            <View
              style={[
                styles.bgcontainer,
                { paddingHorizontal: 20, paddingVertical: 8 },
              ]}
            >
              <Text style={{ color: "grey" }}>Summer clothes</Text>
            </View>
            <View
              style={[
                styles.bgcontainer,
                { paddingHorizontal: 20, paddingVertical: 8 },
              ]}
            >
              <Text style={{ color: "grey" }}>Winter clothes</Text>
            </View>
            <View
              style={[
                styles.bgcontainer,
                { paddingHorizontal: 20, paddingVertical: 8 },
              ]}
            >
              <Text style={{ color: "grey" }}>Casual wears</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={handleSubmit}
            style={[styles.bgcontainer, styles.productItem]}
          >
            <View
              style={{
                backgroundColor: "#f8f8f8a7",
                width: 25,
                position: "absolute",
                top: "2%",
                right: "8%",
                zIndex: 1,
              }}
            >
              <Ionicons name="heart-outline" size={24} color="red" />
            </View>
            <View
              style={{
                flexBasis: "75%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{ width: 100, height: 120 }}
                source={{
                  uri: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
                }}
              />
            </View>
            <View style={{ flex: 1, marginLeft: "auto", marginRight: "auto" }}>
              <Text style={{ color: "black" }}>Jeans</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  width: "50%",
                }}
              >
                <Text style={{ color: "black" }}>GH₵</Text>
                <Text style={{ fontWeight: "bold" }}>100.00</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleSubmit}
            style={[styles.bgcontainer, styles.productItem]}
          >
            <View
              style={{
                backgroundColor: "#f8f8f8a7",
                width: 25,
                position: "absolute",
                top: "2%",
                right: "8%",
                zIndex: 1,
              }}
            >
              <Ionicons name="heart-outline" size={24} color="grey" />
            </View>
            <View
              style={{
                flexBasis: "75%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{ width: 100, height: 120 }}
                source={{
                  uri: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80",
                }}
              />
            </View>
            <View style={{ flex: 1, marginLeft: "auto", marginRight: "auto" }}>
              <Text style={{ color: "black" }}>Boyfriend Jeans</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  width: "50%",
                }}
              >
                <Text style={{ color: "black" }}>GH₵</Text>
                <Text style={{ fontWeight: "bold" }}>170.00</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleSubmit}
            style={[styles.bgcontainer, styles.productItem]}
          >
            <View
              style={{
                backgroundColor: "#f8f8f8a7",
                width: 25,
                position: "absolute",
                top: "2%",
                right: "8%",
                zIndex: 1,
              }}
            >
              <Ionicons name="heart-outline" size={24} color="grey" />
            </View>
            <View
              style={{
                flexBasis: "75%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{ width: 100, height: 120 }}
                source={{
                  uri: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNsb3RoaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
                }}
              />
            </View>
            <View style={{ flex: 1, marginLeft: "auto", marginRight: "auto" }}>
              <Text style={{ color: "black" }}>Maxi dress</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  width: "50%",
                }}
              >
                <Text style={{ color: "black" }}>GH₵</Text>
                <Text style={{ fontWeight: "bold" }}>200.00</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleSubmit}
            style={[styles.bgcontainer, styles.productItem]}
          >
            <View
              style={{
                backgroundColor: "#f8f8f8a7",
                width: 25,
                position: "absolute",
                top: "2%",
                right: "8%",
                zIndex: 1,
              }}
            >
            <Ionicons name="heart-outline" size={24} color="grey" />
            </View>
            <View
              style={{
                flexBasis: "75%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{ width: 100, height: 120 }}
                source={{
                  uri: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNoaXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                }}
              />
            </View>
            <View style={{ flex: 1, marginLeft: "auto", marginRight: "auto" }}>
              <Text style={{ color: "black" }}>Sweater</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  width: "50%",
                }}
              >
                <Text style={{ color: "black" }}>GH₵</Text>
                <Text style={{ fontWeight: "bold" }}>70.00</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleSubmit}
            style={[styles.bgcontainer, styles.productItem]}
          >
            <View
              style={{
                backgroundColor: "#f8f8f8a7",
                width: 25,
                position: "absolute",
                top: "2%",
                right: "8%",
                zIndex: 1,
              }}
            >
              <Ionicons name="heart-outline" size={24} color="grey" />
            </View>
            <View
              style={{
                flexBasis: "75%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{ width: 100, height: 120 }}
                source={{
                  uri: "https://images.unsplash.com/photo-1571867424485-369464ed33cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNsb3RoaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
                }}
              />
            </View>
            <View style={{ flex: 1, marginLeft: "auto", marginRight: "auto" }}>
              <Text style={{ color: "black" }}>Hoodie</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  width: "50%",
                }}
              >
                <Text style={{ color: "black" }}>GH₵</Text>
                <Text style={{ fontWeight: "bold" }}>150.00</Text>
              </View>
            </View>
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
  bgcontainer: {
    backgroundColor: "#eee",
    borderRadius: 10,
  },
  productItem: {
    width: "42%",
    height: 200,
    position: "relative",
    borderRadius: 10,
    display: "flex",
    marginVertical: 10,
  },
});

export default Home;
