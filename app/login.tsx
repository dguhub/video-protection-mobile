/** @format */

import { router } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (email === "" || password === "") {
      setError("Email and password are required");
      return;
    }

    if (!email.includes("@")) {
      setError("Invalid email");
      return;
    }

    if (email === "user@gmail.com" && password === "123123") {
      router.replace("/home");
    } else {
      setError("Username or password is incorrect");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <TouchableOpacity onPress={() => {}} style={styles.forgotPassword}>
          <Text>Forgot Password?</Text>
        </TouchableOpacity>
        {error && <Text style={styles.error}>{error}</Text>}

        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Text style={styles.buttonText}>Sign in with Google</Text>
        </TouchableOpacity>
        <View style={styles.dontHaveAccount}>
          <Text style={styles.dontHaveAccountText}>
            You don't have an account?
          </Text>
          <TouchableOpacity onPress={() => router.push("/sign-up")}>
            <Text style={styles.signUpText}> Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    display: "flex",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
  },
  form: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 16,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
  },
  error: {
    color: "red",
    marginBottom: 16,
  },
  input: {
    width: "100%",
    padding: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
    textAlign: "left",
  },
  forgotPassword: {
    marginBottom: 16,
  },
  button: {
    marginBottom: 16,
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 5,
    color: "#fff",
    textAlign: "center",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  dontHaveAccount: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },
  dontHaveAccountText: {
    color: "#9ca3af",
  },
  signUpText: {
    color: "#000",
  },
});
