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
//         <Text style={styles.headerText}>Height</Text>
//       </View>

//       {/* Height Question */}
//       <Text style={styles.questionText}>How tall are you?</Text>

//       {/* Height Options */}
//       <ScrollView horizontal style={styles.scrollContainer}>
//         <View style={styles.optionContainer}>
//           <Text style={styles.optionInactive}>5'4"</Text>
//           <Text style={styles.optionActive}>5'5"</Text>
//           <Text style={styles.optionInactive}>5'6"</Text>
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
//   questionText: {
//     color: '#FFFFFF',
//     fontSize: 22,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginTop: 16,
//     marginBottom: 8,
//     paddingHorizontal: 16,
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

// import React from 'react';
// import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';

// const App = ({ navigation }) => {
//   const onContinue = () => {
//     // Example navigation or continuation logic
//     navigation?.navigate('NextScreen'); // Replace 'NextScreen' with your desired route or logic
//   };

//   const onPrevious = () => {
//     // Example logic for going back
//     navigation?.goBack();
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header Section */}
//       <View style={styles.headerContainer}>
//         <View style={styles.iconContainer}>
//           {/* Close Icon */}
//           <Text style={styles.icon}>X</Text>
//         </View>
//         <Text style={styles.headerText}>Height</Text>
//       </View>

//       {/* Height Question */}
//       <Text style={styles.questionText}>How tall are you?</Text>

//       {/* Height Options */}
//       <ScrollView horizontal style={styles.scrollContainer}>
//         <View style={styles.optionContainer}>
//           <Text style={styles.optionInactive}>5'4"</Text>
//           <Text style={styles.optionActive}>5'5"</Text>
//           <Text style={styles.optionInactive}>5'6"</Text>
//         </View>
//       </ScrollView>

//       {/* Buttons Section */}
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity style={styles.previousButton} onPress={onPrevious}>
//           <Text style={styles.buttonText}>Previous</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.nextButton} onPress={onContinue}>
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
//   questionText: {
//     color: '#FFFFFF',
//     fontSize: 22,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginTop: 16,
//     marginBottom: 8,
//     paddingHorizontal: 16,
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

// import React, { useState } from 'react';
// import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

// const App = ({ navigation }) => {
//   const [feet, setFeet] = useState(''); // State for feet input
//   const [inches, setInches] = useState(''); // State for inches input

//   const onContinue = () => {
//     // Example navigation or logic for "Next" button

//     navigation?.navigate('NextScreen'); // Replace 'NextScreen' with your desired route
//   };

//   const onPrevious = () => {
//     // Example logic for "Previous" button
//     navigation?.goBack();
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header Section */}
//       <View style={styles.headerContainer}>
//         <View style={styles.iconContainer}>
//           {/* Close Icon */}
//           <Text style={styles.icon}>X</Text>
//         </View>
//         <Text style={styles.headerText}>Height</Text>
//       </View>

//       {/* Height Question */}
//       <Text style={styles.questionText}>How tall are you?</Text>

//       {/* Input Fields for Feet and Inches */}
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="ft"
//           placeholderTextColor="#69478a"
//           keyboardType="numeric"
//           maxLength={1} // Limiting input to one digit
//           value={feet}
//           onChangeText={setFeet}
//         />
//         <Text style={styles.unitText}>ft</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="in"
//           placeholderTextColor="#69478a"
//           keyboardType="numeric"
//           maxLength={2} // Limiting input to two digits
//           value={inches}
//           onChangeText={setInches}
//         />
//         <Text style={styles.unitText}>in</Text>
//       </View>

//       {/* Buttons Section */}
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity style={styles.previousButton} onPress={onPrevious}>
//           <Text style={styles.buttonText}>Previous</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.nextButton} onPress={onContinue}>
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
//   questionText: {
//     color: '#FFFFFF',
//     fontSize: 22,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginTop: 16,
//     marginBottom: 8,
//     paddingHorizontal: 16,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginVertical: 16,
//   },
//   input: {
//     backgroundColor: '#362447',
//     color: '#FFFFFF',
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     width: 60,
//     height: 50,
//     borderRadius: 8,
//     marginHorizontal: 8,
//     padding: 8,
//   },
//   unitText: {
//     color: '#FFFFFF',
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
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
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TextInput,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import { useForm } from "./FormContext"; // Import useForm to interact with the context

interface HeightProps {
  onContinue: () => void; // Function to navigate to the next screen
}

// const Height: React.FC<HeightProps> = ({ onContinue }) => {
//   const [selectedFeet, setSelectedFeet] = useState<number | string>(""); // State to store selected feet
//   const [selectedInches, setSelectedInches] = useState<number | string>(""); // State to store selected inches
//   const { addStepData } = useForm(); // Use context to save data

//   const handleNext = () => {
//     // Ensure both feet and inches are entered
//     if (selectedFeet && selectedInches) {
//       addStepData(1, "height", { feet: selectedFeet, inches: selectedInches }); // Save height data to context
//       onContinue(); // Navigate to the next screen
//     }
//   };

const Height: React.FC<HeightProps> = ({ onContinue }) => {
  const [selectedFeet, setSelectedFeet] = useState<string>(''); // State to store selected feet
  const [selectedInches, setSelectedInches] = useState<string>(''); // State to store selected inches
  const { addStepData } = useForm(); // Use context to save data

  const handleNext = () => {
    // Ensure both feet and inches are entered and are valid numbers
    const feet = parseInt(selectedFeet, 10);
    const inches = parseInt(selectedInches, 10);

    if (!isNaN(feet) && !isNaN(inches) && feet >= 0 && inches >= 0) {
      const heightInInches = (feet * 12) + inches;
      addStepData(4, "height", heightInInches); // Save height data to context
      onContinue(); // Navigate to the next screen
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#141118" />

      {/* Header with Icon */}
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Svg width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
            <Path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" />
          </Svg>
        </View>
      </View>

      {/* Title */}
      <Text style={styles.title}>How tall are you?</Text>

      {/* Height Input */}
      <View style={styles.heightInputContainer}>
        <View style={styles.inputRow}>
          <Text style={styles.inputLabel}>Feet:</Text>
          <TextInput
            style={styles.input}
            value={selectedFeet.toString()}
            onChangeText={(text) => setSelectedFeet(text)}
            keyboardType="numeric"
            placeholder="Feet"
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.inputLabel}>Inches:</Text>
          <TextInput
            style={styles.input}
            value={selectedInches.toString()}
            onChangeText={(text) => setSelectedInches(text)}
            keyboardType="numeric"
            placeholder="Inches"
          />
        </View>
      </View>

      {/* Next Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            { opacity: selectedFeet && selectedInches ? 1 : 0.6 },
          ]}
          disabled={!selectedFeet || !selectedInches} // Disable button if height is not selected
          onPress={handleNext} // Save height and proceed
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Bar */}
      <View style={styles.bottomBar} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141118",
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 16,
    backgroundColor: "#141118",
  },
  iconContainer: {
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
    color: "#FFFFFF",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  heightInputContainer: {
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  inputRow: {
    flexDirection: "row",
    marginVertical: 8,
    justifyContent: "space-between",
    width: "80%",
  },
  inputLabel: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#302938",
    borderRadius: 50,
    paddingHorizontal: 12,
    paddingVertical: 8,
    width: "40%",
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "center",
  },
  buttonContainer: {
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  button: {
    minWidth: 84,
    maxWidth: 480,
    height: 48,
    borderRadius: 50,
    backgroundColor: "#302938",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  bottomBar: {
    height: 20,
    backgroundColor: "#141118",
  },
});

export default Height;
