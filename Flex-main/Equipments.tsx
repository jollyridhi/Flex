// import React, { useState } from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

// const App = () => {
//   const [equipment, setEquipment] = useState({
//     fullGym: false,
//     treadmill: false,
//     bike: false,
//     dumbbells: false,
//     barbell: false,
//     smithMachine: false,
//   });

//   const toggleEquipment = (key) => {
//     setEquipment((prev) => ({ ...prev, [key]: !prev[key] }));
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity style={styles.iconContainer}>
//           <Text style={styles.icon}>{'\u2190'}</Text>
//         </TouchableOpacity>
//         <Text style={styles.title}>Select Equipment</Text>
//       </View>

//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         {Object.entries({
//           fullGym: 'Full gym setup',
//           treadmill: 'Treadmill',
//           bike: 'Stationary bike',
//           dumbbells: 'Dumbbells',
//           barbell: 'Barbell',
//           smithMachine: 'Smith machine',
//         }).map(([key, label]) => (
//           <TouchableOpacity
//             key={key}
//             style={styles.checkboxContainer}
//             onPress={() => toggleEquipment(key)}
//           >
//             <View
//               style={[
//                 styles.checkbox,
//                 equipment[key] && styles.checkboxChecked,
//               ]}
//             />
//             <Text style={styles.checkboxLabel}>{label}</Text>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>

//       <View style={styles.footer}>
//         <TouchableOpacity style={styles.startButton}>
//           <Text style={styles.startButtonText}>Start workout</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#200c31',
//     justifyContent: 'space-between',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#200c31',
//     padding: 16,
//   },
//   iconContainer: {
//     width: 24,
//     height: 24,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   icon: {
//     color: 'white',
//     fontSize: 24,
//   },
//   title: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     flex: 1,
//   },
//   scrollContainer: {
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//   },
//   checkboxContainer: {
//     flexDirection: 'row-reverse',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginVertical: 8,
//   },
//   checkbox: {
//     width: 20,
//     height: 20,
//     borderRadius: 4,
//     borderWidth: 2,
//     borderColor: '#52207e',
//     backgroundColor: 'transparent',
//   },
//   checkboxChecked: {
//     backgroundColor: '#6100b6',
//     borderColor: '#6100b6',
//   },
//   checkboxLabel: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'normal',
//   },
//   footer: {
//     padding: 16,
//   },
//   startButton: {
//     backgroundColor: '#6100b6',
//     borderRadius: 24,
//     paddingVertical: 12,
//     alignItems: 'center',
//   },
//   startButtonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default App;

// import React, { useState } from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native';
// import { useForm } from './FormContext'; // Import useForm to interact with the context

// const App = () => {
//   const [equipment, setEquipment] = useState({
//     fullGym: false,
//     treadmill: false,
//     bike: false,
//     dumbbells: false,
//     barbell: false,
//     smithMachine: false,
//   });
//   const { formSteps } = useForm(); // Access form data from context

//   const toggleEquipment = (key: string) => {
//     setEquipment((prev) => ({ ...prev, [key]: !prev[key] }));
//   };

//   const handleSubmit = async () => {
//     // Combine data from all form steps and equipment
//     const dataToSubmit = {
//       goal: formSteps.find((step) => step.key === 'goal')?.value,
//       weight: formSteps.find((step) => step.key === 'weight')?.value,
//       bodyType: formSteps.find((step) => step.key === 'bodyType')?.value,
//       equipment: equipment, // equipment selected on this page
//     };

//     console.log('Data to submit:', dataToSubmit);

//     // Simulating an API call to submit data
//     try {
//       // Replace this with an actual API request to send the data to your database
//       const response = await fetch('http://10.12.9.221:5002/api/users', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(dataToSubmit),
//       });

//       if (response.ok) {
//         // Handle success
//         console.log('Data submitted successfully!');
//         Alert.alert('Data submitted successfully!');
//       } else {
//         // Handle error
//         console.error('Failed to submit data');
//         Alert.alert('Failed to submit data');
//       }
//     } catch (error) {
//       console.error('Error submitting data:', error);
//       Alert.alert('Error submitting data');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity style={styles.iconContainer}>
//           <Text style={styles.icon}>{'\u2190'}</Text>
//         </TouchableOpacity>
//         <Text style={styles.title}>Select Equipment</Text>
//       </View>

//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         {Object.entries({
//           fullGym: 'Full gym setup',
//           treadmill: 'Treadmill',
//           bike: 'Stationary bike',
//           dumbbells: 'Dumbbells',
//           barbell: 'Barbell',
//           smithMachine: 'Smith machine',
//         }).map(([key, label]) => (
//           <TouchableOpacity
//             key={key}
//             style={styles.checkboxContainer}
//             onPress={() => toggleEquipment(key)}
//           >
//             <View
//               style={[
//                 styles.checkbox,
//                 equipment[key] && styles.checkboxChecked,
//               ]}
//             />
//             <Text style={styles.checkboxLabel}>{label}</Text>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>

//       {/* Submit Button */}
//       <View style={styles.footer}>
//         <TouchableOpacity style={styles.startButton} onPress={handleSubmit}>
//           <Text style={styles.startButtonText}>Submit</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#200c31',
//     justifyContent: 'space-between',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#200c31',
//     padding: 16,
//   },
//   iconContainer: {
//     width: 24,
//     height: 24,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   icon: {
//     color: 'white',
//     fontSize: 24,
//   },
//   title: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     flex: 1,
//   },
//   scrollContainer: {
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//   },
//   checkboxContainer: {
//     flexDirection: 'row-reverse',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginVertical: 8,
//   },
//   checkbox: {
//     width: 20,
//     height: 20,
//     borderRadius: 4,
//     borderWidth: 2,
//     borderColor: '#52207e',
//     backgroundColor: 'transparent',
//   },
//   checkboxChecked: {
//     backgroundColor: '#6100b6',
//     borderColor: '#6100b6',
//   },
//   checkboxLabel: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'normal',
//   },
//   footer: {
//     padding: 16,
//   },
//   startButton: {
//     backgroundColor: '#6100b6',
//     borderRadius: 24,
//     paddingVertical: 12,
//     alignItems: 'center',
//   },
//   startButtonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default App;

// import React, { useState } from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native';
// import { useForm } from './FormContext'; // Import useForm to interact with the context

// const App = () => {
//   const [equipment, setEquipment] = useState({
//     fullGym: false,
//     treadmill: false,
//     bike: false,
//     dumbbells: false,
//     barbell: false,
//     smithMachine: false,
//   });
//   const { formSteps } = useForm(); // Access form data from context

//   const toggleEquipment = (key: string) => {
//     setEquipment((prev) => ({ ...prev, [key]: !prev[key] }));
//   };

//   const handleSubmit = async () => {
//     // Gather all form data
//     const dataToSubmit = {
//       name: formSteps.find((step) => step.key === 'name')?.value,
//       age: formSteps.find((step) => step.key === 'age')?.value,
//       gender: formSteps.find((step) => step.key === 'gender')?.value,
//       height: formSteps.find((step) => step.key === 'height')?.value,
//       weight: formSteps.find((step) => step.key === 'weight')?.value,
//       goal: formSteps.find((step) => step.key === 'goal')?.value,
//       bodyType: formSteps.find((step) => step.key === 'bodytype')?.value,
//       equipment: equipment, // equipment selected on this page
//     };
  
//     console.log('Data to submit:', dataToSubmit);
  
//     try {
//       const response = await fetch('http://10.12.9.221:3000/users', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(dataToSubmit),
//       });
  
//       const result = await response.json();
//       if (response.ok) {
//         console.log('User created successfully:', result);
//         Alert.alert('User created successfully!');
//       } else {
//         console.error('Failed to create user:', result);
//         Alert.alert('Failed to create user:', result.message || 'Unknown error');
//       }
//     } catch (error) {
//       console.error('Error submitting data:', error);
//       Alert.alert('Error submitting data');
//     }
//   };
  

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity style={styles.iconContainer}>
//           <Text style={styles.icon}>{'\u2190'}</Text>
//         </TouchableOpacity>
//         <Text style={styles.title}>Select Equipment</Text>
//       </View>

//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         {Object.entries({
//           fullGym: 'Full gym setup',
//           treadmill: 'Treadmill',
//           bike: 'Stationary bike',
//           dumbbells: 'Dumbbells',
//           barbell: 'Barbell',
//           smithMachine: 'Smith machine',
//         }).map(([key, label]) => (
//           <TouchableOpacity
//             key={key}
//             style={styles.checkboxContainer}
//             onPress={() => toggleEquipment(key)}
//           >
//             <View
//               style={[
//                 styles.checkbox,
//                 equipment[key] && styles.checkboxChecked,
//               ]}
//             />
//             <Text style={styles.checkboxLabel}>{label}</Text>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>

//       {/* Submit Button */}
//       <View style={styles.footer}>
//         <TouchableOpacity style={styles.startButton} onPress={handleSubmit}>
//           <Text style={styles.startButtonText}>Submit</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#200c31',
//     justifyContent: 'space-between',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#200c31',
//     padding: 16,
//   },
//   iconContainer: {
//     width: 24,
//     height: 24,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   icon: {
//     color: 'white',
//     fontSize: 24,
//   },
//   title: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     flex: 1,
//   },
//   scrollContainer: {
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//   },
//   checkboxContainer: {
//     flexDirection: 'row-reverse',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginVertical: 8,
//   },
//   checkbox: {
//     width: 20,
//     height: 20,
//     borderRadius: 4,
//     borderWidth: 2,
//     borderColor: '#52207e',
//     backgroundColor: 'transparent',
//   },
//   checkboxChecked: {
//     backgroundColor: '#6100b6',
//     borderColor: '#6100b6',
//   },
//   checkboxLabel: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'normal',
//   },
//   footer: {
//     padding: 16,
//   },
//   startButton: {
//     backgroundColor: '#6100b6',
//     borderRadius: 24,
//     paddingVertical: 12,
//     alignItems: 'center',
//   },
//   startButtonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default App;

import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useForm } from './FormContext'; // Import useForm to interact with the context
import Home from './Home'; // Import the Home component directly

const App = () => {
  const [equipment, setEquipment] = useState({
    fullGym: false,
    treadmill: false,
    bike: false,
    dumbbells: false,
    barbell: false,
    smithMachine: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track if the form is submitted
  const { formSteps } = useForm(); // Access form data from context

  const toggleEquipment = (key: string) => {
    setEquipment((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSubmit = async () => {
    // Gather all form data
    const dataToSubmit = {
      name: formSteps.find((step) => step.key === 'name')?.value,
      age: formSteps.find((step) => step.key === 'age')?.value,
      gender: formSteps.find((step) => step.key === 'gender')?.value,
      height: formSteps.find((step) => step.key === 'height')?.value,
      weight: formSteps.find((step) => step.key === 'weight')?.value,
      goal: formSteps.find((step) => step.key === 'goal')?.value,
      bodyType: formSteps.find((step) => step.key === 'bodytype')?.value,
      equipment: equipment, // equipment selected on this page
    };
  
    console.log('Data to submit:', dataToSubmit);
  
    try {
      const response = await fetch('http://10.12.9.221:3000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSubmit),
      });
  
      const result = await response.json();
      if (response.ok) {
        console.log('User created successfully:', result);
        Alert.alert('User created successfully!');
        setIsSubmitted(true); // Set to true after successful submission
      } else {
        console.error('Failed to create user:', result);
        Alert.alert('Failed to create user:', result.message || 'Unknown error');
      }
    } catch (error) {
      console.error('Error submitting data:', error);
      Alert.alert('Error submitting data');
    }
  };

  // Conditionally render Home screen if form is submitted successfully
  if (isSubmitted) {
    return <Home />; // Render Home component after submission
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconContainer}>
          <Text style={styles.icon}>{'\u2190'}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Select Equipment</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {Object.entries({
          fullGym: 'Full gym setup',
          treadmill: 'Treadmill',
          bike: 'Stationary bike',
          dumbbells: 'Dumbbells',
          barbell: 'Barbell',
          smithMachine: 'Smith machine',
        }).map(([key, label]) => (
          <TouchableOpacity
            key={key}
            style={styles.checkboxContainer}
            onPress={() => toggleEquipment(key)}
          >
            <View
              style={[
                styles.checkbox,
                equipment[key] && styles.checkboxChecked,
              ]}
            />
            <Text style={styles.checkboxLabel}>{label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Submit Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.startButton} onPress={handleSubmit}>
          <Text style={styles.startButtonText}>Submit</Text>
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
  scrollContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  checkboxContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#52207e',
    backgroundColor: 'transparent',
  },
  checkboxChecked: {
    backgroundColor: '#6100b6',
    borderColor: '#6100b6',
  },
  checkboxLabel: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'normal',
  },
  footer: {
    padding: 16,
  },
  startButton: {
    backgroundColor: '#6100b6',
    borderRadius: 24,
    paddingVertical: 12,
    alignItems: 'center',
  },
  startButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
