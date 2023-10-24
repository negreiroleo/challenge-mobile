import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./logo.png')} style={styles.logo} />
      <Text style={styles.title}>Bem vindo ao Rapidex - C&P</Text>
      <Text style={styles.label}>Enter CNPJ</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        placeholderTextColor="black"
      />
      <Text style={styles.label}>Enter Password</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        placeholderTextColor="black"
        secureTextEntry={true}
      />
      <Text style={styles.passwordWarning}>Your password is between 4 and 12 characters</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EFEFEF',
  },
  logo: {
    width: 150, // Ajuste o tamanho do logotipo conforme necessário
    height: 150, // Ajuste o tamanho do logotipo conforme necessário
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: '10%',
    marginBottom: 5,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    paddingLeft: 10,
  },
  passwordWarning: {
    color: 'red',
    alignSelf: 'flex-start',
    marginLeft: '10%',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'black',
    width: '80%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
  },
});

export default LoginScreen;
