// index.tsx
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking, ImageBackground, Alert } from 'react-native';

const LoginScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://10.0.2.2:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      console.log('Response data:', data);

      if (response.ok) {
        Alert.alert('Login successful', `Token: ${data.token}`);
        navigation.navigate('Index2'); // Redirigir a la pantalla de inicio exitoso después del login
      } else {
        Alert.alert('Login failed', data.message);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error('Login error:', error);
        Alert.alert('An error occurred', error.message);
      } else {
        console.error('Unknown error:', error);
        Alert.alert('An error occurred', 'An unknown error occurred');
      }
    }
  };

  const handleCreateAccount = () => {
    navigation.navigate('Register'); // Redirigir a la pantalla de registro al presionar
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
        <Text style={styles.title}>Welcome!</Text>
      </View>
      <View style={styles.formContainer}>
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
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.createButton} onPress={handleCreateAccount}>
          <Text style={styles.createButtonText}>Create</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('#')}>
          <Text style={styles.forgotPasswordText}>Forgot Password</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't Have an Account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.footerLink}>Sign Up</Text>
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
  loginButton: {
    width: '100%',
    height: 40,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 10,
  },
  loginButtonText: {
    color: '#000',
    fontSize: 16,
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
  forgotPasswordText: {
    color: '#87ceeb',
    marginTop: 10,
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

export default LoginScreen;
