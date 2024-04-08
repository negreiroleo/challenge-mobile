import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native';

export default function Signin({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Verifique se existem detalhes de login armazenados
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const userToken = await AsyncStorage.getItem('userToken');
      // Se o token do usuário existir, navegue para a tela principal
      if (userToken !== null) {
        navigation.navigate('Home');
      }
    } catch (error) {
      console.log('Erro ao verificar o status de login:', error);
    }
  };

  const handleLogin = async () => {
    try {
      // Valide o login do usuário (pode ser uma chamada de API)
      // Simule um login bem-sucedido usando um email e senha fixos
      if (email === 'usuario@email.com' && password === '123456') {
        // Armazene os detalhes de login
        await AsyncStorage.setItem('userToken', 'token-de-autenticacao-do-usuario');
        // Navegue para a tela principal
        navigation.navigate('Home');
      } else {
        // Exiba uma mensagem de erro se as credenciais forem inválidas
        alert('Credenciais inválidas. Por favor, tente novamente.');
      }
    } catch (error) {
      console.log('Erro ao fazer login:', error);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: '#0C79DD' }]}>
      <Text style={styles.title}>ENTRAR</Text>
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
