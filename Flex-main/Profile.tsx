// import React from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

// const ProfileScreen = () => {
//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity style={styles.button}>
//           <Text style={styles.buttonText}>⚙️</Text>
//         </TouchableOpacity>
//       </View>
//       <Text style={styles.title}>Profile</Text>

//       {/* Name Input */}
//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Name</Text>
//         <TextInput style={styles.input} placeholder="Enter your name" placeholderTextColor="#ab9db8" />
//       </View>

//       {/* Gender Input */}
//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Gender</Text>
//         <TextInput style={styles.input} placeholder="Enter your gender" placeholderTextColor="#ab9db8" />
//       </View>

//       {/* Age Input */}
//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Age</Text>
//         <TextInput style={styles.input} placeholder="Enter your age" placeholderTextColor="#ab9db8" />
//       </View>

//       {/* Weight Input */}
//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Weight</Text>
//         <TextInput style={styles.input} placeholder="Enter your weight" placeholderTextColor="#ab9db8" />
//       </View>

//       {/* Height Input */}
//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Height</Text>
//         <TextInput style={styles.input} placeholder="Enter your height" placeholderTextColor="#ab9db8" />
//       </View>

//       {/* Body Type Input */}
//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Body Type</Text>
//         <TextInput style={styles.input} placeholder="Enter your body type" placeholderTextColor="#ab9db8" />
//       </View>

//       {/* Fitness Goals Input */}
//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Fitness Goals</Text>
//         <TextInput style={styles.input} placeholder="Enter your fitness goals" placeholderTextColor="#ab9db8" />
//       </View>

//       {/* Save Button */}
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity style={styles.saveButton}>
//           <Text style={styles.saveButtonText}>Save</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={styles.footerSpacer}></View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     backgroundColor: '#141118',
//     padding: 16,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'flex-end',
//     height: 48,
//     alignItems: 'center',
//   },
//   button: {
//     backgroundColor: 'transparent',
//     padding: 12,
//     borderRadius: 12,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 24,
//   },
//   title: {
//     color: '#fff',
//     fontSize: 28,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   inputContainer: {
//     marginBottom: 16,
//   },
//   label: {
//     color: '#fff',
//     fontSize: 14,
//     fontWeight: '500',
//     marginBottom: 8,
//   },
//   input: {
//     backgroundColor: '#302938',
//     color: '#fff',
//     borderRadius: 12,
//     height: 56,
//     paddingLeft: 16,
//     fontSize: 16,
//     placeholderTextColor: '#ab9db8',
//   },
//   buttonContainer: {
//     marginTop: 24,
//   },
//   saveButton: {
//     backgroundColor: '#302938',
//     paddingVertical: 12,
//     borderRadius: 12,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   saveButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   footerSpacer: {
//     height: 20,
//     backgroundColor: '#141118',
//   },
// });

// export default ProfileScreen;
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import HomeScreen from './Home';  // Import the Home screen

const ProfileScreen = () => {
  const [isHome, setIsHome] = useState(false);  // State to manage screen view

  if (isHome) {
    return <HomeScreen />;  // If isHome is true, render HomeScreen
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* Go Back Button */}
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => setIsHome(true)}  // Change state to show Home screen
        >
          <Text style={styles.buttonText}>←</Text>  {/* Left arrow for go back */}
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Profile</Text>

      {/* Name Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} placeholder="Enter your name" placeholderTextColor="#ab9db8" />
      </View>

      {/* Gender Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Gender</Text>
        <TextInput style={styles.input} placeholder="Enter your gender" placeholderTextColor="#ab9db8" />
      </View>

      {/* Age Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Age</Text>
        <TextInput style={styles.input} placeholder="Enter your age" placeholderTextColor="#ab9db8" />
      </View>

      {/* Weight Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Weight</Text>
        <TextInput style={styles.input} placeholder="Enter your weight" placeholderTextColor="#ab9db8" />
      </View>

      {/* Height Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Height</Text>
        <TextInput style={styles.input} placeholder="Enter your height" placeholderTextColor="#ab9db8" />
      </View>

      {/* Body Type Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Body Type</Text>
        <TextInput style={styles.input} placeholder="Enter your body type" placeholderTextColor="#ab9db8" />
      </View>

      {/* Fitness Goals Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Fitness Goals</Text>
        <TextInput style={styles.input} placeholder="Enter your fitness goals" placeholderTextColor="#ab9db8" />
      </View>

      {/* Save Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footerSpacer}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#141118',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 48,
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'transparent',
    padding: 12,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
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
  footerSpacer: {
    height: 20,
    backgroundColor: '#141118',
  },
});

export default ProfileScreen;
