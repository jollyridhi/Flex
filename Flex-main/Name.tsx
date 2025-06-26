// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   SafeAreaView,
//   StatusBar,
//   TouchableOpacity,
//   Alert,
// } from "react-native";
// import axios from "axios";

// interface NameProps {
//   onContinue: (userId: string) => void; // Pass userId to continue to the next screen
// }

// const Name: React.FC<NameProps> = ({ onContinue }) => {
//   const [name, setName] = useState(""); // State to store the user's name
//   const [loading, setLoading] = useState(false); // State for loading status

//   // Function to handle the "Next" button click
//   const handleContinue = async () => {
//     if (!name) return;

//     setLoading(true); // Set loading to true to show the process is ongoing

//     try {
//       // API endpoint URL (make sure to replace this with your server URL)
//       const API_URL = "http://10.12.9.221:5001/api/users"; 

//       // Data to be sent to the server
//       const data = { name };

//       // Sending the POST request to the backend to create the user
//       const response = await axios.post(API_URL, data);

//       if (response.status === 201) {
//         // If the user was created successfully, show a success message
//         Alert.alert("Success", "User created successfully");

//         // Send the created userId to continue to the next screen
//         onContinue(response.data.user._id); // Assuming the response contains the user's ID
//       }
//     } catch (error) {
//       console.error("Error creating user:", error);
//       Alert.alert("Error", "There was an issue creating the user.");
//     } finally {
//       setLoading(false); // Set loading to false after the request is complete
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="light-content" backgroundColor="#141118" />

//       <View style={styles.header}>
//         <Text style={styles.headerText}>Enter Your Details</Text>
//       </View>

//       <Text style={styles.title}>What's your name?</Text>

//       <View style={styles.inputContainer}>
//         <TextInput
//           placeholder="Your name"
//           placeholderTextColor="#ab9db8"
//           style={styles.input}
//           value={name}
//           onChangeText={setName}
//         />
//       </View>

//       <TouchableOpacity
//         style={[styles.button, { opacity: name ? 1 : 0.6 }]}
//         disabled={!name || loading} // Disable the button if name is empty or if loading
//         onPress={handleContinue}
//       >
//         <Text style={styles.buttonText}>
//           {loading ? "Saving..." : "Next"}
//         </Text>
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#141118",
//     justifyContent: "space-between",
//     padding: 16,
//   },
//   header: {
//     alignItems: "center",
//     marginBottom: 16,
//   },
//   headerText: {
//     color: "#ab9db8",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   title: {
//     color: "#FFFFFF",
//     fontSize: 22,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginVertical: 16,
//   },
//   inputContainer: {
//     alignItems: "center",
//   },
//   input: {
//     width: "100%",
//     minHeight: 56,
//     borderRadius: 16,
//     backgroundColor: "#302938",
//     color: "#FFFFFF",
//     paddingHorizontal: 16,
//     fontSize: 16,
//   },
//   button: {
//     backgroundColor: "#6A4C93",
//     borderRadius: 16,
//     paddingVertical: 16,
//     alignItems: "center",
//     marginTop: 24,
//   },
//   buttonText: {
//     color: "#FFFFFF",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
// });

// export default Name;

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useForm } from './FormContext'; // Import useForm

interface NameProps {
  onContinue: () => void;
}

// const Name: React.FC<NameProps> = ({ onContinue }) => {
//   const [name, setName] = useState('');
//   const { addStepData } = useForm(); // Use the context to save data

//   const handleContinue = () => {
//     if (name !== null) {
//     addStepData(1, 'name', name); // Save the name to the context
//     onContinue(); // Navigate to the next screen
//     }
//   };
const Name: React.FC<NameProps> = ({ onContinue }) => {
  const [name, setName] = useState<string>(''); // State to store the entered name
  const { addStepData } = useForm(); // Use context to save data

  const handleContinue = () => {
    if (name.trim() !== '') {
      addStepData(1, 'name', name); // Save name data to context
      onContinue(); // Navigate to the next screen
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What's your name?</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <TouchableOpacity
        style={[styles.button, { opacity: name ? 1 : 0.5 }]}
        disabled={!name}
        onPress={handleContinue}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#6200ee',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Name;

// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

// interface NameProps {
//   onContinue: (urlString: string) => void; // Pass the URL string to the next screen
// }

// const Name: React.FC<NameProps> = ({ onContinue }) => {
//   const [name, setName] = useState('');

//   const handleContinue = () => {
//     if (name !== '') {
//       const urlString = `name=${encodeURIComponent(name)}`; // Create a query string
//       onContinue(urlString); // Pass the string to the next screen
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>What's your name?</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter your name"
//         value={name}
//         onChangeText={setName}
//       />
//       <TouchableOpacity
//         style={[styles.button, { opacity: name ? 1 : 0.5 }]}
//         disabled={!name}
//         onPress={handleContinue}
//       >
//         <Text style={styles.buttonText}>Next</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 16,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     width: '100%',
//     padding: 10,
//     borderWidth: 1,
//     borderRadius: 8,
//     marginBottom: 20,
//   },
//   button: {
//     backgroundColor: '#6200ee',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });

// export default Name;
