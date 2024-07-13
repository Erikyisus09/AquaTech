import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Alert } from 'react-native';

const PaymentScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [amount, setAmount] = useState<string>('');
  const [cardNumber, setCardNumber] = useState<string>('');
  const [expiryDate, setExpiryDate] = useState<string>('');
  const [cvv, setCvv] = useState<string>('');

  const handlePay = () => {
    // Aquí puedes implementar la lógica para procesar el pago
    Alert.alert('Payment processed', `Paid amount: $${amount}`);
  };

  return (
    <ImageBackground
      source={{ uri: 'https://www.xtrafondos.com/wallpapers/degradado-difuminado-azul-7935.jpg' }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Payment</Text>
        <View style={styles.paymentBox}>
          <Text style={styles.currencySymbol}>$</Text>
          <TextInput
            style={styles.amountInput}
            placeholder="Amount"
            placeholderTextColor="#888"
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmount}
          />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Card Number"
          placeholderTextColor="#888"
          keyboardType="numeric"
          value={cardNumber}
          onChangeText={setCardNumber}
        />
        <View style={styles.row}>
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="MM/YY"
            placeholderTextColor="#888"
            value={expiryDate}
            onChangeText={setExpiryDate}
          />
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="CVV"
            placeholderTextColor="#888"
            keyboardType="numeric"
            value={cvv}
            onChangeText={setCvv}
          />
        </View>
        <TouchableOpacity style={styles.payButton} onPress={handlePay}>
          <Text style={styles.payButtonText}>Pay</Text>
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  title: {
    fontSize: 32,
    color: '#000',
    marginBottom: 30,
  },
  paymentBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Opacity
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  currencySymbol: {
    fontSize: 20,
    color: '#000',
    marginRight: 10,
  },
  amountInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#000',
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Opacity
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  halfInput: {
    flex: 1,
    marginRight: 10,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  payButton: {
    width: '100%',
    height: 40,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 10,
  },
  payButtonText: {
    color: '#000',
    fontSize: 16,
  },
});

export default PaymentScreen;
