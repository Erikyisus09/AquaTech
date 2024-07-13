import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ImageBackground, Alert } from 'react-native';

const RegisterScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [fullName, setFullName] = useState<string>(''); // Nuevo estado para el nombre completo del usuario

  const handleRegister = async () => {
    try {
      const response = await fetch('http://10.0.2.2:3000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, fullName }), // Incluir fullName en el cuerpo de la solicitud
      });

      const data = await response.json();
      console.log('Response data:', data);

      if (response.ok) {
        Alert.alert('Registration successful', 'You can now log in');
        navigation.navigate('Login', { fullName }); // Redirigir a la pantalla de inicio de sesión con fullName
      } else {
        Alert.alert('Registration failed', data.message);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error('Registration error:', error);
        Alert.alert('An error occurred', error.message);
      } else {
        console.error('Unknown error:', error);
        Alert.alert('An error occurred', 'An unknown error occurred');
      }
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://www.xtrafondos.com/wallpapers/degradado-difuminado-azul-7935.jpg' }}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image
          source={{ uri: 'https://www.lafrenchfab.fr/storage/sites/2/2024/01/Logo_large_AquaTech_baseline.png' }}
          style={styles.logo}
        />
        <Text style={styles.title}>Create Account</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Full Name" // Campo para el nombre completo
          placeholderTextColor="#888"
          value={fullName}
          onChangeText={setFullName}
        />
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#888"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.createButton} onPress={handleRegister}>
          <Text style={styles.createButtonText}>Create Account</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.footerLink}>Log In</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    color: '#000',
  },
  formContainer: {
    width: '80%',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  createButton: {
    width: '100%',
    height: 40,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 10,
  },
  createButtonText: {
    color: '#000',
    fontSize: 16,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    alignItems: 'center',
  },
  footerText: {
    color: '#696969',
  },
  footerLink: {
    color: '#87ceeb',
    marginTop: 5,
  },
});

export default RegisterScreen;
