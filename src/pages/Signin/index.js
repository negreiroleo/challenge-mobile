import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function Signin({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Valide o login do usuário
    const userData = localStorage.getItem('userData');
    if (userData) {
      const { email: storedEmail, password: storedPassword } = JSON.parse(userData);
      if (email === storedEmail && password === storedPassword) {
        // Navegue para a página de Home após o login bem-sucedido
        navigation.navigate('Homepage');
      } else {
        setError('Credenciais inválidas. Por favor, tente novamente.');
      }
    } else {
      setError('Nenhum usuário cadastrado. Por favor, cadastre-se primeiro.');
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: '#0C79DD' }]}>
      <Text style={styles.title}>ENTRAR</Text>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>E-MAIL</Text>
        <TextInput
          placeholder=""
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>SENHA</Text>
        <TextInput
          placeholder=""
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>ENTRAR</Text>
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
