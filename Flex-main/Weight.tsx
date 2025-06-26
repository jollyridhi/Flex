// import React from 'react';
// import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';

// const App = () => {
//   return (
//     <View style={styles.container}>
//       {/* Header Section */}
//       <View style={styles.headerContainer}>
//         <View style={styles.iconContainer}>
//           {/* Close Icon */}
//           <Text style={styles.icon}>X</Text>
//         </View>
//         <Text style={styles.headerText}>Weight</Text>
//       </View>

//       {/* Weight Options */}
//       <ScrollView horizontal style={styles.scrollContainer}>
//         <View style={styles.optionContainer}>
//           <Text style={styles.optionInactive}>110lb</Text>
//           <Text style={styles.optionActive}>111lb</Text>
//           <Text style={styles.optionInactive}>112lb</Text>
//         </View>
//       </ScrollView>

//       {/* Buttons Section */}
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity style={styles.previousButton}>
//           <Text style={styles.buttonText}>Previous</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.nextButton}>
//           <Text style={styles.buttonText}>Next</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Footer Spacer */}
//       <View style={styles.footerSpacer} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#1a1122',
//     justifyContent: 'space-between',
//   },
//   headerContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: 16,
//     backgroundColor: '#1a1122',
//   },
//   iconContainer: {
//     width: 24,
//     height: 24,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   icon: {
//     color: '#FFFFFF',
//     fontSize: 24,
//   },
//   headerText: {
//     color: '#FFFFFF',
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     flex: 1,
//   },
//   scrollContainer: {
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//   },
//   optionContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   optionActive: {
//     backgroundColor: '#362447',
//     color: '#FFFFFF',
//     fontSize: 14,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 20,
//     marginHorizontal: 4,
//   },
//   optionInactive: {
//     backgroundColor: 'transparent',
//     color: '#69478a',
//     fontSize: 14,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 20,
//     marginHorizontal: 4,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//   },
//   previousButton: {
//     backgroundColor: '#362447',
//     paddingVertical: 12,
//     paddingHorizontal: 20,
//     borderRadius: 24,
//   },
//   nextButton: {
//     backgroundColor: '#8019e6',
//     paddingVertical: 12,
//     paddingHorizontal: 20,
//     borderRadius: 24,
//   },
//   buttonText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   footerSpacer: {
//     height: 20,
//     backgroundColor: '#1a1122',
//   },
// });

// export default App;
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { useForm } from './FormContext'; // Import useForm to interact with the context

interface WeightProps {
  onContinue: () => void; // Function to navigate to the next screen
}

const Weight: React.FC<WeightProps> = ({ onContinue }) => {
  const [weight, setWeight] = useState<string>(''); // State to store the entered weight
  const { addStepData } = useForm(); // Use context to save data

  const handleNext = () => {
    if (weight !== '') {
      addStepData(5, 'weight', weight); // Save weight data to context
      onContinue(); // Navigate to the next screen
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#141118" />

      {/* Header with Icon */}
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>X</Text>
        </View>
      </View>

      {/* Title */}
      <Text style={styles.title}>What is your weight (in kg)?</Text>

      {/* Weight Input Field */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter weight in kg"
          placeholderTextColor="#665676"
          keyboardType="numeric"
          value={weight}
          onChangeText={(text) => setWeight(text)} // Update weight on text change
        />
      </View>

      {/* Next Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            { opacity: weight ? 1 : 0.6 },
          ]}
          disabled={!weight} // Disable button if no weight is entered
          onPress={handleNext} // Save weight and proceed
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141118',
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 16,
    backgroundColor: '#141118',
  },
  iconContainer: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
  },
  icon: {
    color: '#FFFFFF',
    fontSize: 24,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  inputContainer: {
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  input: {
    width: '90%',
    height: 48,
    backgroundColor: '#302938',
    borderRadius: 50,
    paddingHorizontal: 16,
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  button: {
    minWidth: 84,
    maxWidth: 480,
    height: 48,
    borderRadius: 50,
    backgroundColor: '#302938',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Weight;
