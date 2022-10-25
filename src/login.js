import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground, TextInput, SafeAreaView, TouchableOpacity } from "react-native";
import { Input } from "@rneui/themed";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('./assets/itaipu.jpg')} resizeMode="cover" style={styles.image}>
        <Text style={styles.title}>
          Energy
        </Text>

        <Input
          inputStyle={styles.input}
          onChangeText={(value) => setText(value)}
          placeholder="Digite seu usuário"
        />

        <Input
          inputStyle={styles.input}
          onChangeText={(value) => setText(value)}
          placeholder="Digite sua senha"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log(text)}>
          <Text style={{ color: "white", textAlign: "center" }}>
            ENTRAR
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  image: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "100%"
  },
  title: {
    margin: 24,
    marginTop: 0,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "white"
  },
  input: {
    width: 70,
    color: "#fff",
  },
  button: {
    display: "flex",
    backgroundColor: "red",
    width: 110,
    padding: 10,
    borderRadius: 5,
    alignSelf: "center"
  }
})