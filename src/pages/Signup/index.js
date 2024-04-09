import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function Signup({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = () => {
    try {
      // Valide os dados do usuário
      if (email && password) {
        // Armazene os detalhes do usuário no localStorage
        localStorage.setItem('userData', JSON.stringify({ email, password }));
        // Navegue de volta para a página de Signin após o cadastro
        navigation.navigate('Signin');
      } else {
        setError('Por favor, preencha todos os campos.');
      }
    } catch (error) {
      console.log('Erro ao cadastrar:', error);
      setError('Erro ao cadastrar. Por favor, tente novamente.');
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: '#0C79DD' }]}>
      <Text style={styles.title}>CADASTRO</Text>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>E-MAIL</Text>
        <TextInput
          placeholder="Digite seu e-mail"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>SENHA</Text>
        <TextInput
          placeholder="Digite sua senha"
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>CADASTRAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000080',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Times New Roman',
    fontSize: 24,
    color: '#000000',
    marginBottom: 30,
  },
  errorText: {
    fontFamily: 'Times New Roman',
    fontSize: 16,
    color: 'red',
    marginBottom: 10,
  },
  inputContainer: {
    marginBottom: 30,
  },
  inputLabel: {
    fontFamily: 'Times New Roman',
    fontSize: 16,
    color: '#000000',
    marginBottom: 10,
  },
  input: {
    width: 300,
    backgroundColor: 'transparent',
    padding: 0,
    height: 'auto',
    color: '#000000',
    borderBottomColor: '#000000',
    borderBottomWidth: 2,
  },
  button: {
    marginTop: 20,
    padding: 10,
    width: 172,
    backgroundColor: 'black',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Times New Roman',
    color: '#0C79DD',
    fontSize: 16,
  },
});
