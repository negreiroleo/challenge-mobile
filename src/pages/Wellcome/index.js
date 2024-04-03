import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Wellcome({ navigation }) {
  return (
    <View style={[styles.container, { backgroundColor: '#0C79DD' }]}>
      <Text style={styles.title}>Bem vindo ao</Text>
      <Text style={styles.subtitle}>RC&P</Text>
      <TouchableOpacity style={[styles.button, { width: 172 }]} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { width: 172 }]} onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.buttonText}>CADASTRAR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Times New Roman',
    fontSize: 24,
    color: '#000000',
  },
  subtitle: {
    fontFamily: 'Times New Roman',
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000000',
  },
  button: {
    marginTop: 20,
    padding: 10,
    width: 172, // Define a largura dos botões
    backgroundColor: 'black',
    borderRadius: 5,
    alignItems: 'center', // Centraliza o texto horizontalmente
  },
  buttonText: {
    fontFamily: 'Times New Roman',
    color: '#0C79DD',
    fontSize: 16,
  },
});
