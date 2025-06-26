// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   SafeAreaView,
//   StatusBar,
// } from "react-native";
// import Svg, { Path } from "react-native-svg";
// import axios from "axios";

// interface AgeProps {
//   onContinue: () => void; // Function to navigate to the next screen
// }

// const Age: React.FC<AgeProps> = ({ onContinue }) => {
//   const [selectedAge, setSelectedAge] = useState<number | null>(null); // State to store the selected age
//   const [loading, setLoading] = useState<boolean>(false); // State to handle loading

//   const handleAgeSelect = (age: number) => {
//     setSelectedAge(age); // Set the selected age
//   };

//   const saveAgeToDatabase = async (age: number) => {
//     setLoading(true); // Set loading to true while the request is being processed
//     try {
//       // Replace with your backend API endpoint
//       const response = await axios.post("http://10.12.9.221:5001/api/users/save-age", {
//         age,
//       });

//       // Handle success response from backend
//       console.log("Age saved:", response.data);
//       onContinue(); // Proceed to the next screen after saving the data
//     } catch (error) {
//       // Handle error
//       console.error("Error saving age:", error);
//     } finally {
//       setLoading(false); // Reset loading state
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="light-content" backgroundColor="#141118" />

//       {/* Header with Icon */}
//       <View style={styles.header}>
//         <View style={styles.iconContainer}>
//           <Svg width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
//             <Path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" />
//           </Svg>
//         </View>
//       </View>

//       {/* Title */}
//       <Text style={styles.title}>How old are you?</Text>

//       {/* Age Options */}
//       <View style={styles.ageOptionContainer}>
//         {[18, 25, 30, 35, 40].map((age) => (
//           <TouchableOpacity
//             key={age}
//             style={[
//               styles.ageOption,
//               selectedAge === age && styles.selectedAgeOption,
//             ]}
//             onPress={() => handleAgeSelect(age)}
//           >
//             <Text
//               style={[
//                 styles.ageOptionText,
//                 selectedAge === age && styles.selectedAgeOptionText,
//               ]}
//             >
//               {age} years
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       {/* Next Button */}
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity
//           style={[
//             styles.button,
//             { opacity: selectedAge ? 1 : 0.6 },
//           ]}
//           disabled={!selectedAge || loading} // Disable button if no age is selected or still loading
//           onPress={() => {
//             if (selectedAge) {
//               saveAgeToDatabase(selectedAge); // Save the selected age to the database
//             }
//           }}
//         >
//           <Text style={styles.buttonText}>{loading ? "Saving..." : "Next"}</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Bottom Bar */}
//       <View style={styles.bottomBar} />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#141118",
//     justifyContent: "space-between",
//   },
//   header: {
//     flexDirection: "row",
//     justifyContent: "flex-end",
//     padding: 16,
//     backgroundColor: "#141118",
//   },
//   iconContainer: {
//     width: 24,
//     height: 24,
//     alignItems: "center",
//     justifyContent: "center",
//     color: "#FFFFFF",
//   },
//   title: {
//     color: "#FFFFFF",
//     fontSize: 22,
//     fontWeight: "bold",
//     textAlign: "center",
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//   },
//   ageOptionContainer: {
//     alignItems: "center",
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//   },
//   ageOption: {
//     width: "90%",
//     marginVertical: 8,
//     paddingVertical: 12,
//     backgroundColor: "#302938",
//     borderRadius: 50,
//     alignItems: "center",
//   },
//   selectedAgeOption: {
//     backgroundColor: "#6A4C93",
//   },
//   ageOptionText: {
//     color: "#665676",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   selectedAgeOptionText: {
//     color: "#FFFFFF",
//   },
//   buttonContainer: {
//     alignItems: "center",
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//   },
//   button: {
//     minWidth: 84,
//     maxWidth: 480,
//     height: 48,
//     borderRadius: 50,
//     backgroundColor: "#302938",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   buttonText: {
//     color: "#FFFFFF",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   bottomBar: {
//     height: 20,
//     backgroundColor: "#141118",
//   },
// });

// export default Age;

// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   SafeAreaView,
//   StatusBar,
// } from "react-native";
// import Svg, { Path } from "react-native-svg";
// import axios from "axios";

// interface AgeProps {
//   userId: string; // User ID to identify the user
//   onContinue: () => void; // Function to navigate to the next screen
// }

// const Age: React.FC<AgeProps> = ({ userId, onContinue }) => {
//   const [selectedAge, setSelectedAge] = useState<number | null>(null); // State to store the selected age
//   const [loading, setLoading] = useState<boolean>(false); // State to handle loading

//   const handleAgeSelect = (age: number) => {
//     setSelectedAge(age); // Set the selected age
//   };

//   const saveAgeToDatabase = async (age: number) => {
//     setLoading(true); // Set loading to true while the request is being processed
//     try {
//       // Replace with your backend API endpoint to update the user's age
//       console.log(userId+"dfjdfnjnfj");
//       const response = await axios.put(`http://10.12.9.221:5001/api/users/${userId}/age`, {
//         age,
//       });

//       // Handle success response from backend
//       console.log("Age saved:", response.data);
//       onContinue(); // Proceed to the next screen after saving the data
//     } catch (error) {
//       // Handle error
//       console.error("Error saving age:", error);
//     } finally {
//       setLoading(false); // Reset loading state
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="light-content" backgroundColor="#141118" />

//       {/* Header with Icon */}
//       <View style={styles.header}>
//         <View style={styles.iconContainer}>
//           <Svg width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
//             <Path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" />
//           </Svg>
//         </View>
//       </View>

//       {/* Title */}
//       <Text style={styles.title}>How old are you?</Text>

//       {/* Age Options */}
//       <View style={styles.ageOptionContainer}>
//         {[18, 25, 30, 35, 40].map((age) => (
//           <TouchableOpacity
//             key={age}
//             style={[
//               styles.ageOption,
//               selectedAge === age && styles.selectedAgeOption,
//             ]}
//             onPress={() => handleAgeSelect(age)}
//           >
//             <Text
//               style={[
//                 styles.ageOptionText,
//                 selectedAge === age && styles.selectedAgeOptionText,
//               ]}
//             >
//               {age} years
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       {/* Next Button */}
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity
//           style={[
//             styles.button,
//             { opacity: selectedAge ? 1 : 0.6 },
//           ]}
//           disabled={!selectedAge || loading} // Disable button if no age is selected or still loading
//           onPress={() => {
//             if (selectedAge) {
//               saveAgeToDatabase(selectedAge); // Save the selected age to the database
//             }
//           }}
//         >
//           <Text style={styles.buttonText}>{loading ? "Saving..." : "Next"}</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Bottom Bar */}
//       <View style={styles.bottomBar} />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#141118",
//     justifyContent: "space-between",
//   },
//   header: {
//     flexDirection: "row",
//     justifyContent: "flex-end",
//     padding: 16,
//     backgroundColor: "#141118",
//   },
//   iconContainer: {
//     width: 24,
//     height: 24,
//     alignItems: "center",
//     justifyContent: "center",
//     color: "#FFFFFF",
//   },
//   title: {
//     color: "#FFFFFF",
//     fontSize: 22,
//     fontWeight: "bold",
//     textAlign: "center",
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//   },
//   ageOptionContainer: {
//     alignItems: "center",
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//   },
//   ageOption: {
//     width: "90%",
//     marginVertical: 8,
//     paddingVertical: 12,
//     backgroundColor: "#302938",
//     borderRadius: 50,
//     alignItems: "center",
//   },
//   selectedAgeOption: {
//     backgroundColor: "#6A4C93",
//   },
//   ageOptionText: {
//     color: "#665676",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   selectedAgeOptionText: {
//     color: "#FFFFFF",
//   },
//   buttonContainer: {
//     alignItems: "center",
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//   },
//   button: {
//     minWidth: 84,
//     maxWidth: 480,
//     height: 48,
//     borderRadius: 50,
//     backgroundColor: "#302938",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   buttonText: {
//     color: "#FFFFFF",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   bottomBar: {
//     height: 20,
//     backgroundColor: "#141118",
//   },
// });

// export default Age;

// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   SafeAreaView,
//   StatusBar,
// } from "react-native";
// import Svg, { Path } from "react-native-svg";
// import { useForm } from "./FormContext"; // Import useForm to interact with the context

// interface AgeProps {
//   onContinue: () => void; // Function to navigate to the next screen
// }

// // const Age: React.FC<AgeProps> = ({ onContinue }) => {
// //   const [selectedAge, setSelectedAge] = useState<number | null>(null); // State to store the selected age
// //   const { addStepData } = useForm(); // Use context to save data

// //   const handleAgeSelect = (age: number) => {
// //     setSelectedAge(age); // Set the selected age
// //   };

// //   const handleNext = () => {
// //     if (selectedAge !== null) {
// //       addStepData(2, 'age', selectedAge); // Save the age to the context
// //       onContinue(); // Navigate to the next screen
// //     }
// //   };
// const Age: React.FC<AgeProps> = ({ onContinue }) => {
//   const [selectedAge, setAge] = useState<string>(''); // State to store the entered age
//   const { addStepData } = useForm(); // Use context to save data

//   const handleNext = () => {
//     const numericAge = parseInt(age, 10);
//     if (!isNaN(numericAge) && numericAge > 0) {
//       addStepData(3, 'age', numericAge.toString()); // Save age data to context
//       onContinue(); // Navigate to the next screen
//     }
//   };


//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="light-content" backgroundColor="#141118" />

//       {/* Header with Icon */}
//       <View style={styles.header}>
//         <View style={styles.iconContainer}>
//           <Svg width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
//             <Path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" />
//           </Svg>
//         </View>
//       </View>

//       {/* Title */}
//       <Text style={styles.title}>How old are you?</Text>

//       {/* Age Options */}
//       <View style={styles.ageOptionContainer}>
//         {[18, 25, 30, 35, 40].map((age) => (
//           <TouchableOpacity
//             key={age}
//             style={[
//               styles.ageOption,
//               selectedAge === age && styles.selectedAgeOption,
//             ]}
//             onPress={() => handleAgeSelect(age)}
//           >
//             <Text
//               style={[
//                 styles.ageOptionText,
//                 selectedAge === age && styles.selectedAgeOptionText,
//               ]}
//             >
//               {age} years
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       {/* Next Button */}
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity
//           style={[
//             styles.button,
//             { opacity: selectedAge ? 1 : 0.6 },
//           ]}
//           disabled={!selectedAge} // Disable button if no age is selected
//           onPress={handleNext} // Save age and proceed
//         >
//           <Text style={styles.buttonText}>Next</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Bottom Bar */}
//       <View style={styles.bottomBar} />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#141118",
//     justifyContent: "space-between",
//   },
//   header: {
//     flexDirection: "row",
//     justifyContent: "flex-end",
//     padding: 16,
//     backgroundColor: "#141118",
//   },
//   iconContainer: {
//     width: 24,
//     height: 24,
//     alignItems: "center",
//     justifyContent: "center",
//     color: "#FFFFFF",
//   },
//   title: {
//     color: "#FFFFFF",
//     fontSize: 22,
//     fontWeight: "bold",
//     textAlign: "center",
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//   },
//   ageOptionContainer: {
//     alignItems: "center",
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//   },
//   ageOption: {
//     width: "90%",
//     marginVertical: 8,
//     paddingVertical: 12,
//     backgroundColor: "#302938",
//     borderRadius: 50,
//     alignItems: "center",
//   },
//   selectedAgeOption: {
//     backgroundColor: "#6A4C93",
//   },
//   ageOptionText: {
//     color: "#665676",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   selectedAgeOptionText: {
//     color: "#FFFFFF",
//   },
//   buttonContainer: {
//     alignItems: "center",
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//   },
//   button: {
//     minWidth: 84,
//     maxWidth: 480,
//     height: 48,
//     borderRadius: 50,
//     backgroundColor: "#302938",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   buttonText: {
//     color: "#FFFFFF",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   bottomBar: {
//     height: 20,
//     backgroundColor: "#141118",
//   },
// });

// export default Age;

import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import { useForm } from "./FormContext"; // Import useForm to interact with the context

interface AgeProps {
  onContinue: () => void; // Function to navigate to the next screen
}

const Age: React.FC<AgeProps> = ({ onContinue }) => {
  const [selectedAge, setSelectedAge] = useState<number | null>(null); // State to store the selected age
  const { addStepData } = useForm(); // Use context to save data

  const handleAgeSelect = (age: number) => {
    setSelectedAge(age); // Set the selected age
  };

  const handleNext = () => {
    if (selectedAge !== null) {
      addStepData(2, "age", selectedAge.toString()); // Save age data to context
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
      <Text style={styles.title}>How old are you?</Text>

      {/* Age Options */}
      <View style={styles.ageOptionContainer}>
        {[18, 25, 30, 35, 40].map((age) => (
          <TouchableOpacity
            key={age}
            style={[
              styles.ageOption,
              selectedAge === age && styles.selectedAgeOption,
            ]}
            onPress={() => handleAgeSelect(age)} // Update age selection
          >
            <Text
              style={[
                styles.ageOptionText,
                selectedAge === age && styles.selectedAgeOptionText,
              ]}
            >
              {age} years
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Next Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { opacity: selectedAge ? 1 : 0.6 }]}
          disabled={!selectedAge} // Disable button if no age is selected
          onPress={handleNext} // Save age and proceed
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
  ageOptionContainer: {
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  ageOption: {
    width: "90%",
    marginVertical: 8,
    paddingVertical: 12,
    backgroundColor: "#302938",
    borderRadius: 50,
    alignItems: "center",
  },
  selectedAgeOption: {
    backgroundColor: "#6A4C93",
  },
  ageOptionText: {
    color: "#665676",
    fontSize: 16,
    fontWeight: "bold",
  },
  selectedAgeOptionText: {
    color: "#FFFFFF",
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

export default Age;
