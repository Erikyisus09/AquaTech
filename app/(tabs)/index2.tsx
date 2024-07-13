import React from 'react';
import { StyleSheet, Text, View, Pressable, ProgressBarAndroid, Platform } from 'react-native';

const Index2Screen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>BIENVENIDO, Alex</Text>
      <View style={styles.paymentContainer}>  
        <Text style={styles.paymentText}>Total a pagar:</Text>
        <Text style={styles.amountText}>$550</Text>
        <Text style={styles.dueDateText}>Pagar antes de 6 de Agosto del 2024</Text>
        <Pressable style={styles.payButton}>
          <Text style={styles.payButtonText}>Pagar</Text>
        </Pressable>
      </View>
      <View style={styles.usageContainer}>
        <Text style={styles.usageTitle}>Tu consumo semanal es:</Text>
        <View style={styles.progressContainer}>
          {Platform.OS === 'android' ? (
            <ProgressBarAndroid
              styleAttr="Horizontal"
              indeterminate={false}
              progress={0.24}
              color="#5DADE2"
              style={styles.progressBar}
            />
          ) : (
            // Add an alternative ProgressBar for iOS if needed
            <View style={styles.progressBar} />
          )}
          <Text style={styles.usageText}>Ha consumido</Text>
          <Text style={styles.dataText}>4 mts cubicos de agua</Text>
          <Text style={styles.dataText}>de su limite impuesto de 6 mts cubicos de agua al mes</Text>
          <Text style={styles.percentageText}>66.67 % del limite Consumido</Text>
          <Text style={styles.availableText}>33.33 % del limite Disponible</Text>
        </View>
      </View>
      <View style={styles.navContainer}>
        <Text style={styles.navItem}>🏠</Text>
        <Text style={styles.navItem}>⚙️</Text>
        <Text style={styles.navItemSelected}>💸</Text>
        <Text style={styles.navItem}>🧳</Text>
        <Text style={styles.navItem}>🎧</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F7FA',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50,
    color: '#1A5276',
  },
  paymentContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    width: '90%',
    alignItems: 'center',
  },
  paymentText: {
    fontSize: 18,
    color: '#1A5276',
  },
  amountText: {
    fontSize: 36,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#1A5276',
  },
  dueDateText: {
    fontSize: 14,
    marginBottom: 20,
    color: '#1A5276',
  },
  payButton: {
    backgroundColor: '#5DADE2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  payButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  usageContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    width: '90%',
  },
  usageTitle: {
    fontSize: 18,
    marginBottom: 10,
    color: '#1A5276',
  },
  progressContainer: {
    alignItems: 'center',
  },
  progressBar: {
    width: '100%',
    height: 10, // Adjust the height for iOS if needed
    backgroundColor: '#5DADE2', // Fallback color for iOS
  },
  usageText: {
    fontSize: 14,
    color: '#1A5276',
    marginTop: 10,
  },
  dataText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1A5276',
  },
  percentageText: {
    fontSize: 14,
    color: '#1A5276',
    marginTop: 10,
  },
  availableText: {
    fontSize: 14,
    color: '#1A5276',
    marginTop: 10,
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '90%',
    padding: 10,
    marginTop: 20,
    position: 'absolute',
    bottom: 20,
  },
  navItem: {
    fontSize: 30,
    color: '#1A5276',
  },
  navItemSelected: {
    fontSize: 30,
    color: '#5DADE2',
  },
});

export default Index2Screen;
