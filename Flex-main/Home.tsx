import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Footer from './Footer';
import Profile from './Profile';
import Water from './Water';
import Food from './Food';
import Fitness from './Fitness';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('home');

  const navigateToFitness = () => {
    setCurrentScreen('fitness');
  };

  const navigateToWater = () => {
    setCurrentScreen('water');
  };

  const navigateToProfile = () => {
    setCurrentScreen('profile');
  };

  const navigateToFood = () => {
    setCurrentScreen('food');
  };


  if (currentScreen === 'water') {
    return <Water />;
  }

  if (currentScreen === 'profile') {
    return <Profile />;
  }

  if (currentScreen === 'food') {
    return <Food />;
  }

  if (currentScreen === 'fitness') {
    return <Fitness />;
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.icon}>&times;</Text>
        <Text style={styles.headerTitle}>Get Started</Text>
      </View>

      {/* Content */}
      <ScrollView>
        {/* Card 1 */}
        <View style={styles.card}>
          <ImageBackground
            source={{
              uri: 'https://cdn.usegalileo.ai/sdxl10/d4fffdc9-1630-4915-8967-4fbf8a7facd1.png',
            }}
            style={styles.cardImage}
          />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Exercise Recommendation</Text>
            <View style={styles.cardFooter}>
              <Text style={styles.cardSubtitle}>Suggested for you</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={navigateToFitness}
              >
                <Text style={styles.buttonText}>Start Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Card 2 */}
        <View style={styles.card}>
          <ImageBackground
            source={{
              uri: 'https://cdn.usegalileo.ai/sdxl10/3b926b72-a863-4b83-b7d2-6e8dbd09ecb4.png',
            }}
            style={styles.cardImage}
          />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Calorie Tracker</Text>
            <View style={styles.cardFooter}>
              <Text style={styles.cardSubtitle}>Suggested for you</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={navigateToFood}
              >
                <Text style={styles.buttonText}>Track Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Card 3 */}
        <View style={styles.card}>
          <ImageBackground
            source={{
              uri: 'https://cdn.usegalileo.ai/sdxl10/820cb682-8838-4114-a28f-70c5f7b0359c.png',
            }}
            style={styles.cardImage}
          />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Water Intake</Text>
            <View style={styles.cardFooter}>
              <Text style={styles.cardSubtitle}>Suggested for you</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={navigateToWater}
              >
                <Text style={styles.buttonText}>Track Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <ImageBackground
            source={{
              uri: 'https://cdn.usegalileo.ai/sdxl10/820cb682-8838-4114-a28f-70c5f7b0359c.png',
            }}
            style={styles.cardImage}
          />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Profile</Text>
            <View style={styles.cardFooter}>
              <Text style={styles.cardSubtitle}>Suggested for you</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={navigateToProfile}
              >
                <Text style={styles.buttonText}>Track Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
 
      </ScrollView>

      

      {/* Footer */}
      {/* <Footer /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141118',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#141118',
  },
  icon: {
    color: '#fff',
    fontSize: 24,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  card: {
    margin: 16,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#211c26',
  },
  cardImage: {
    width: '100%',
    height: 200,
  },
  cardContent: {
    padding: 16,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardSubtitle: {
    color: '#ab9db8',
    fontSize: 14,
  },
  button: {
    backgroundColor: '#8019e6',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#211c26',
    borderTopWidth: 1,
    borderColor: '#302938',
  },
});

export default App;
