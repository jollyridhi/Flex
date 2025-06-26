// import React from 'react';
// import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

// const Footer = () => {
//   return (
//     <View style={styles.footer}>
//       <TouchableOpacity style={styles.button}>
//         <Text style={styles.text}>Home</Text>
//       </TouchableOpacity>
      
//       <TouchableOpacity style={styles.button}>
//         <Text style={styles.text}>Profile</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   footer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     backgroundColor: '#211c26',
//     borderTopWidth: 1,
//     borderColor: '#302938',
//     padding: 10,
//   },
//   button: {
//     padding: 10,
//   },
//   text: {
//     color: '#ab9db8', 
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default Footer;

import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import Home from './Home';  // Import the Home component
import Profile from './Profile';  // Import the Profile component

const Footer = () => {
  const [currentScreen, setCurrentScreen] = useState('home');
  

  const navigateToProfile = () => {
    setCurrentScreen('profile');
  };

  const navigateToHome = () => {
    setCurrentScreen('home');
  };

  if (currentScreen === 'profile') {
    return <Profile />;
  }

  if (currentScreen === 'profile') {
    return <Home />;
  }

  return (
    

      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={navigateToHome}>
          <Text style={styles.text}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={navigateToProfile}>
          <Text style={styles.text}>Profile</Text>
        </TouchableOpacity>
      </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure the container takes full available space
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#211c26',
    borderTopWidth: 1,
    borderColor: '#302938',
    padding: 10,
  },
  button: {
    padding: 10,
  },
  text: {
    color: '#ab9db8',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Footer;


// import React, { useState } from 'react';
// import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
// import Home from './Home';  // Import the Home component
// import Profile from './Profile';  // Import the Profile component

// const Footer = () => {
//   const [currentScreen, setCurrentScreen] = useState('home'); // Initially set to 'home'

//   // Function to navigate to Profile screen
//   const navigateToProfile = () => {
//     setCurrentScreen('profile');
//   };

//   // Function to navigate to Home screen
//   const navigateToHome = () => {
//     setCurrentScreen('home');
//   };

//   // Conditional rendering based on currentScreen state
//   if (currentScreen === 'profile') {
//     return <Profile />;
//   }

//   if (currentScreen === 'home') {
//     return <Home />;
//   }

//   // Default return in case no screen matches (this shouldn't happen with the current setup)
//   return (
//       <View style={styles.footer}>
//         <TouchableOpacity style={styles.button} onPress={navigateToHome}>
//           <Text style={styles.text}>Home</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button} onPress={navigateToProfile}>
//           <Text style={styles.text}>Profile</Text>
//         </TouchableOpacity>
//       </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1, // Ensure the container takes full available space
//     paddingTop: StatusBar.currentHeight, // Adjust for the status bar height
//   },
//   footer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     backgroundColor: '#211c26',
//     borderTopWidth: 1,
//     borderColor: '#302938',
//     padding: 10,
//   },
//   button: {
//     padding: 10,
//   },
//   text: {
//     color: '#ab9db8',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default Footer;

// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
// import Home from './Home';  // Import the Home component
// import Profile from './Profile';  // Import the Profile component

// const Footer = () => {
//   const [currentScreen, setCurrentScreen] = useState('home');  // Initially set to 'home'

//   const navigateToProfile = () => {
//     setCurrentScreen('profile');  // Navigate to profile
//   };

//   const navigateToHome = () => {
//     setCurrentScreen('home');  // Navigate to home
//   };

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       {/* Conditionally render content based on the currentScreen */}
//       {currentScreen === 'profile' ? (
//         <Profile />
//       ) : (
//         <Home />
//       )}

//       {/* Footer Section */}
//       <View style={styles.footer}>
//         <TouchableOpacity style={styles.button} onPress={navigateToHome}>
//           <Text style={styles.text}>Home</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button} onPress={navigateToProfile}>
//           <Text style={styles.text}>Profile</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   footer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     backgroundColor: '#211c26',
//     borderTopWidth: 1,
//     borderColor: '#302938',
//     padding: 10,
//     position: 'absolute',
//     bottom: 0,
//     width: '100%',
//   },
//   button: {
//     padding: 10,
//   },
//   text: {
//     color: '#ab9db8', 
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default Footer;

