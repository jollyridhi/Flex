import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { useForm } from './FormContext'; // Import useForm to interact with the context

interface GoalProps {
  onContinue: () => void; // Function to navigate to the next screen
}

const Goal: React.FC<GoalProps> = ({ onContinue }) => {
  const [selectedGoal, setSelectedGoal] = useState<string>(''); // State to store the selected goal
  const { addStepData } = useForm(); // Use context to save data

  const handleNext = () => {
    if (selectedGoal !== '') {
      addStepData(6, 'goal', selectedGoal); // Save goal data to context
      onContinue(); // Navigate to the next screen
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconContainer}>
          <Text style={styles.icon}>{'\u2190'}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Choose Your Goal</Text>
      </View>

      {/* Main Heading */}
      <Text style={styles.mainHeading}>What's your goal?</Text>

      {/* Scrollable Goal Cards */}
      <ScrollView horizontal contentContainerStyle={styles.scrollContainer}>
        {[
          { title: 'Lose Weight', uri: 'https://cdn.usegalileo.ai/sdxl10/336e251a-b195-409d-a421-21708dbf4ea8.png' },
          { title: 'Gain Muscle', uri: 'https://cdn.usegalileo.ai/sdxl10/60df5bc6-2163-4634-a29b-c2ffe277b5aa.png' },
        ].map((goal) => (
          <View
            key={goal.title}
            style={[
              styles.card,
              selectedGoal === goal.title && styles.selectedCard, // Highlight selected card
            ]}
          >
            <ImageBackground
              source={{ uri: goal.uri }}
              style={styles.image}
              imageStyle={styles.imageStyle}
            />
            <View style={styles.cardContent}>
              <Text style={styles.cardText}>{goal.title}</Text>
              <TouchableOpacity
                style={[
                  styles.button,
                  selectedGoal === goal.title && styles.selectedButton, // Highlight selected button
                ]}
                onPress={() => setSelectedGoal(goal.title)} // Update the selected goal
              >
                <Text
                  style={[
                    styles.buttonText,
                    selectedGoal === goal.title && styles.selectedButtonText, // Highlight button text
                  ]}
                >
                  {selectedGoal === goal.title ? 'Selected' : 'Select'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Navigation Dots */}
      <View style={styles.dotsContainer}>
        <View style={[styles.dot, styles.activeDot]}></View>
        <View style={styles.dot}></View>
        <View style={styles.dot}></View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.skipButton}
          onPress={handleNext} // Navigate to next screen if goal is selected
        >
          <Text style={styles.skipButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#200c31',
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#200c31',
    padding: 16,
  },
  iconContainer: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: 'white',
    fontSize: 24,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  mainHeading: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 16,
  },
  scrollContainer: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    gap: 12,
  },
  card: {
    backgroundColor: '#2d1145',
    borderRadius: 16,
    overflow: 'hidden',
    width: 200,
    shadowColor: 'rgba(0,0,0,0.1)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  selectedCard: {
    borderWidth: 2,
    borderColor: '#6100b6',
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 4,
  },
  imageStyle: {
    borderRadius: 16,
  },
  cardContent: {
    padding: 16,
  },
  cardText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#3d175e',
    borderRadius: 24,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  selectedButton: {
    backgroundColor: '#6100b6',
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  selectedButtonText: {
    color: '#ffffff',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 16,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#52207e',
  },
  activeDot: {
    backgroundColor: '#6100b6',
  },
  footer: {
    padding: 16,
  },
  skipButton: {
    backgroundColor: '#3d175e',
    borderRadius: 24,
    paddingVertical: 12,
    alignItems: 'center',
  },
  skipButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Goal;
