import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

//imports of third party packages
import { Ionicons } from "@expo/vector-icons";

const image = { uri: "https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" };

const Login = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate("home");
  };

  return (
    <SafeAreaView style={styles.container} >
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>

      <View style={styles.login}>

        
        <View>
          <Text style={{ fontSize: 30, textAlign: "center", fontWeight: "bold", fontSize: 30 , marginBottom:25, color:"black" }}> Welcome to Gigi's Clothing</Text>
          
        </View>
        <View
          style={{
            justifyContent: "space-evenly",
            alignItems: "center",
            flex: 1,
          }}
        >
          <TouchableOpacity
            onPress={handleLogin}
            style={[
              styles.horizontalCenter,
              styles.buttons,
              { backgroundColor: "white" },
            ]}
          >
            <Ionicons name="logo-google" color="#DB4437" size={20} />
            <Text>Login with gmail</Text>
          </TouchableOpacity>
          <Text style={{paddingTop:5,
                        paddingBottom:15 
                        }}>
           </Text>
          <TouchableOpacity
            onPress={handleLogin}
            style={[
              styles.horizontalCenter,
              styles.buttons,
              { backgroundColor: "black" },
            ]}
          >
            <Ionicons name="logo-apple" color="white" size={20} />
            <Text style={{ color: "white" }}>Login with apple</Text>
          </TouchableOpacity>
          
        </View>
        <Text style={{paddingTop:10}}></Text>
        <View style={styles.horizontalCenter}
           style={{
            justifyContent: "space-evenly",
            alignItems: "center",
            flex: 1.0,
          }}
        >
          <Text style={{ color: "white" }}>Not a member?</Text>
          <TouchableOpacity>
            <Text style={{ color: "black", fontWeight: "bold" }}>
              
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems:'center',
    paddingHorizontal:50, 
    paddingVertical: 100,
    resizeMode:'center',
    
  },
  
  login: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "50%",
  },
  horizontalCenter: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  buttons: { paddingHorizontal:30, paddingVertical: 10, borderRadius: 30 },
});

export default Login;
