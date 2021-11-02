import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";

//imports of third party packages
import { Ionicons } from "@expo/vector-icons";

const Login = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate("home");
  };

  return (
    <SafeAreaView style={{
      backgroundColor: '#fffacd'
    }} >
      <View style={styles.login}>
        <View>
          <Image
            style={{
              width: 150,
              height: 120,
              marginTop: 10,
              marginBottom: 20,
              transform: [{ rotate: "0deg" }],
            }}
            source={{
              uri: "https://media.istockphoto.com/photos/fashion-clothes-on-a-rack-in-a-light-background-indoors-place-for-picture-id1257563298?b=1&k=20&m=1257563298&s=170667a&w=0&h=Hhf0-AsQp7Z7k9q8XKHfQUY86uPJvE8vmmGHXihWS_M=",
            }}
          />
        </View>
        <View>
          <Text style={{ fontSize: 30, textAlign: "center" }}>Welcome to</Text>
          <Text style={{ fontWeight: "bold", fontSize: 30 }}>
          </Text>
        </View>
        <View
          style={{
            justifyContent: "space-evenly",
            alignItems: "center",
            flex: 0.3,
          }}
        >
          <TouchableOpacity
            onPress={handleLogin}
            style={[
              styles.horizontalCenter,
              styles.buttons,
              { backgroundColor: "#e7e7e7" },
            ]}
          >
            <Ionicons name="logo-google" color="#DB4437" size={20} />
            <Text>Login with gmail</Text>
          </TouchableOpacity>
          <Text style={{paddingTop:20}}></Text>
          <TouchableOpacity
            onPress={handleLogin}
            style={[
              styles.horizontalCenter,
              styles.buttons,
              { backgroundColor: "#161414" },
            ]}
          >
            <Ionicons name="logo-apple" color="#fff" size={20} />
            <Text style={{ color: "#fff" }}>Login with Apple</Text>
          </TouchableOpacity>
          
        </View>
        <Text style={{paddingTop:20}}></Text>
        <View style={styles.horizontalCenter}
           style={{
            justifyContent: "space-evenly",
            alignItems: "center",
            flex: 1.0,
          }}
        >
          <Text style={{ color: "#a1a1a1" }}>Not a member?</Text>
          <TouchableOpacity>
            <Text style={{ color: "orange", fontWeight: "bold" }}>
              {" "}
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  login: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  horizontalCenter: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  buttons: { paddingHorizontal: 40, paddingVertical: 15, borderRadius: 20 },
});

export default Login;
