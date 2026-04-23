import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Onboarding({ navigation }) {
  return (
    <ImageBackground
      source={{ uri: 'https://i.imgur.com/8Km9tLL.jpg' }}
      style={styles.container}
    >
      {/* Overlay gradient giống ảnh */}
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.8)']}
        style={styles.overlay}
      >
        <View>
          <Text style={styles.title}>
            Fall in Love with Coffee in Blissful Delight!
          </Text>

          <Text style={styles.subtitle}>
            Welcome to our cozy coffee corner
          </Text>

          <TouchableOpacity
            onPress={() => navigation.replace('Main')}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  overlay: {
    padding: 25
  },
  title: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold'
  },
  subtitle: {
    color: '#ccc',
    marginTop: 10
  },
  button: {
    marginTop: 20,
    backgroundColor: '#C67C4E',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});