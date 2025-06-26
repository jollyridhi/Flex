import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Modal, Linking } from 'react-native';
import axios from 'axios';  // Import axios for API calls

const ProfileScreen = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bodyType, setBodyType] = useState('');
  const [fitnessGoals, setFitnessGoals] = useState('');
  const [equipmentsAvailable, setEquipmentsAvailable] = useState('');

  const [exercises, setExercises] = useState([]);  // State to store exercises
  const [loading, setLoading] = useState(false);  // Loading state
  const [modalVisible, setModalVisible] = useState(false);  // Modal visibility state

  const handleSubmit = async () => {
    setLoading(true);

    const userData = {
      name,
      gender,
      age,
      weight,
      height,
      bodyType,
      fitnessGoals,
      equipmentsAvailable,
    };

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions', // OpenAI ChatGPT API endpoint
        {
          model: 'gpt-3.5-turbo', // Use GPT-3.5 model
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            {
              role: 'user',
              content: `Based on the user's information, recommend some exercises:
                Name: ${name}
                Gender: ${gender}
                Age: ${age}
                Weight: ${weight}
                Height: ${height}
                Body Type: ${bodyType}
                Fitness Goals: ${fitnessGoals}
                Equipments Available: ${equipmentsAvailable}`,
            },
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer API_KEY`, // Your API key here
          },
        }
      );

      // Assuming the response contains exercise recommendations as a list with name, description, and YouTube link
      const exercisesData = response.data.choices[0].message.content.split('\n').map(exercise => {
        const [name, description, videoLink] = exercise.split(';'); // Split each exercise data by semicolon
        return { name, description, videoLink };
      });
      setExercises(exercisesData);
      setModalVisible(true);  // Open the modal on successful response
    } catch (error) {
      console.error('Error fetching exercise recommendations:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Profile</Text>

      {/* Name Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Enter your name" 
          placeholderTextColor="#ab9db8"
          value={name}
          onChangeText={setName}
        />
      </View>

      {/* Gender Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Gender</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Enter your gender" 
          placeholderTextColor="#ab9db8"
          value={gender}
          onChangeText={setGender}
        />
      </View>

      {/* Age Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Age</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Enter your age" 
          placeholderTextColor="#ab9db8"
          value={age}
          onChangeText={setAge}
        />
      </View>

      {/* Weight Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Weight</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Enter your weight" 
          placeholderTextColor="#ab9db8"
          value={weight}
          onChangeText={setWeight}
        />
      </View>

      {/* Height Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Height</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Enter your height" 
          placeholderTextColor="#ab9db8"
          value={height}
          onChangeText={setHeight}
        />
      </View>

      {/* Body Type Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Body Type</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Enter your body type" 
          placeholderTextColor="#ab9db8"
          value={bodyType}
          onChangeText={setBodyType}
        />
      </View>

      {/* Fitness Goals Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Fitness Goals</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Enter your fitness goals" 
          placeholderTextColor="#ab9db8"
          value={fitnessGoals}
          onChangeText={setFitnessGoals}
        />
      </View>

      {/* Equipments Available Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Equipments Available</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Enter the equipment you have" 
          placeholderTextColor="#ab9db8"
          value={equipmentsAvailable}
          onChangeText={setEquipmentsAvailable}
        />
      </View>

      {/* Submit Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.saveButton} 
          onPress={handleSubmit}
          disabled={loading} // Disable if loading
        >
          <Text style={styles.saveButtonText}>{loading ? 'Loading...' : 'Submit'}</Text>
        </TouchableOpacity>
      </View>

      {/* Modal for exercise recommendations */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Recommended Exercises</Text>
            <ScrollView style={styles.scrollableContent}>
              {exercises.map((exercise, index) => (
                <View key={index} style={styles.exerciseCard}>
                  <Text style={styles.exerciseName}>{exercise.name}</Text>
                  <Text style={styles.exerciseDescription}>{exercise.description}</Text>
                  {exercise.videoLink && (
                    <TouchableOpacity onPress={() => Linking.openURL(exercise.videoLink)}>
                      <Text style={styles.videoLink}>Watch on YouTube</Text>
                    </TouchableOpacity>
                  )}
                </View>
              ))}
            </ScrollView>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#141118',
    padding: 16,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#302938',
    color: '#fff',
    borderRadius: 12,
    height: 56,
    paddingLeft: 16,
    fontSize: 16,
    placeholderTextColor: '#ab9db8',
  },
  buttonContainer: {
    marginTop: 24,
  },
  saveButton: {
    backgroundColor: '#302938',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#302938',
    padding: 20,
    borderRadius: 12,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  scrollableContent: {
    maxHeight: 300, // Limits the scroll height
    width: '100%',
  },
  exerciseCard: {
    backgroundColor: '#302938',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    width: '100%',
  },
  exerciseName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  exerciseDescription: {
    color: '#ab9db8',
    fontSize: 14,
    marginVertical: 5,
  },
  videoLink: {
    color: '#4a90e2',
    fontSize: 14,
    marginTop: 5,
  },
  closeButton: {
    backgroundColor: '#4a90e2',
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ProfileScreen;
