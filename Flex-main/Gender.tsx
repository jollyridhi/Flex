// import React from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   SafeAreaView,
//   StatusBar,
// } from "react-native";
// import Svg, { Path } from "react-native-svg";

// const App = () => {
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
//       <Text style={styles.title}>What's your gender?</Text>

//       {/* Gender Options */}
//       <View style={styles.genderOptionsContainer}>
//         <Text style={styles.genderOptionInactive}>Female</Text>
//         <Text style={styles.genderOptionActive}>Male</Text>
//         <Text style={styles.genderOptionInactive}>Non-binary</Text>
//       </View>

//       {/* Progress Indicators */}
//       <View style={styles.progressContainer}>
//         <View style={styles.progressInactive} />
//         <View style={styles.progressActive} />
//         <View style={styles.progressInactive} />
//         <View style={styles.progressInactive} />
//       </View>

//       {/* Next Button */}
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity style={styles.button}>
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
//   genderOptionsContainer: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//   },
//   genderOptionActive: {
//     color: "#FFFFFF",
//     fontSize: 14,
//     fontWeight: "bold",
//     textAlign: "center",
//     backgroundColor: "#302938",
//     borderRadius: 50,
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//   },
//   genderOptionInactive: {
//     color: "#665676",
//     fontSize: 14,
//     fontWeight: "bold",
//     textAlign: "center",
//     borderRadius: 50,
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//   },
//   progressContainer: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     gap: 8,
//     paddingVertical: 16,
//   },
//   progressActive: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: "#FFFFFF",
//   },
//   progressInactive: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: "#473c53",
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

// export default App;

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

// interface GenderProps {
//   onContinue: () => void; // Function to navigate to the next screen
// }

// const Gender: React.FC<GenderProps> = ({ onContinue }) => {
//   const [selectedGender, setSelectedGender] = useState<string | null>(null); // State for selected gender

//   const handleGenderSelect = (gender: string) => {
//     setSelectedGender(gender); // Set the selected gender
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
//       <Text style={styles.title}>What's your gender?</Text>

//       {/* Gender Options */}
//       <View style={styles.genderOptionsContainer}>
//         {["Female", "Male", "Non-binary"].map((gender) => (
//           <TouchableOpacity
//             key={gender}
//             style={[
//               styles.genderOption,
//               selectedGender === gender && styles.genderOptionActive,
//             ]}
//             onPress={() => handleGenderSelect(gender)}
//           >
//             <Text
//               style={[
//                 styles.genderOptionText,
//                 selectedGender === gender && styles.genderOptionActiveText,
//               ]}
//             >
//               {gender}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       {/* Progress Indicators */}
//       <View style={styles.progressContainer}>
//         <View style={styles.progressInactive} />
//         <View style={styles.progressActive} />
//         <View style={styles.progressInactive} />
//         <View style={styles.progressInactive} />
//       </View>

//       {/* Next Button */}
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity
//           style={[
//             styles.button,
//             { opacity: selectedGender ? 1 : 0.6 },
//           ]}
//           disabled={!selectedGender} // Disable button if no gender is selected
//           onPress={onContinue}
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
//   genderOptionsContainer: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//   },
//   genderOption: {
//     paddingVertical: 12,
//     paddingHorizontal: 24,
//     borderRadius: 50,
//     backgroundColor: "#302938",
//   },
//   genderOptionActive: {
//     backgroundColor: "#6A4C93",
//   },
//   genderOptionText: {
//     fontSize: 14,
//     fontWeight: "bold",
//     color: "#665676",
//     textAlign: "center",
//   },
//   genderOptionActiveText: {
//     color: "#FFFFFF",
//   },
//   progressContainer: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     gap: 8,
//     paddingVertical: 16,
//   },
//   progressActive: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: "#FFFFFF",
//   },
//   progressInactive: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: "#473c53",
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

// export default Gender;

import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { useForm } from './FormContext';

interface GenderProps {
  onContinue: () => void;
}

// const Gender: React.FC<GenderProps> = ({ onContinue }) => {
  
//   const { gender, setGender } = useForm();
//   const [selectedGender, setSelectedGender] = useState<string | null>(gender);
  

//   const handleGenderSelect = (gender: string) => {
//     setSelectedGender(3,'gender',gender);
//     onContinue();
//   };
const Gender: React.FC<GenderProps> = ({ onContinue }) => {
  const [selectedGender, setSelectedGender] = useState<string | null>(null); // State to store the selected gender
  const { addStepData } = useForm(); // Use context to save data

  const handleGenderSelect = (gender: string) => {
    setSelectedGender(gender); // Set the selected gender
  };

  const handleNext = () => {
    if (selectedGender !== null) {
      addStepData(3, "gender", selectedGender); // Save gender data to context
      onContinue(); // Navigate to the next screen
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#141118" />

      {/* Title */}
      <Text style={styles.title}>What's your gender?</Text>

      {/* Gender Options */}
      <View style={styles.genderOptionsContainer}>
        {["Female", "Male", "Non-binary"].map((genderOption) => (
          <TouchableOpacity
            key={genderOption}
            style={[
              styles.genderOption,
              selectedGender === genderOption && styles.genderOptionActive,
            ]}
            onPress={() => handleGenderSelect(genderOption)}
          >
            <Text
              style={[
                styles.genderOptionText,
                selectedGender === genderOption && styles.genderOptionActiveText,
              ]}
            >
              {genderOption}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Progress Indicators */}
      <View style={styles.progressContainer}>
        <View style={styles.progressInactive} />
        <View style={styles.progressActive} />
        <View style={styles.progressInactive} />
        <View style={styles.progressInactive} />
      </View>

      {/* Next Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { opacity: selectedGender ? 1 : 0.6 }]}
          disabled={!selectedGender}
          onPress={handleNext}
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
  title: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  genderOptionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  genderOption: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 50,
    backgroundColor: "#302938",
  },
  genderOptionActive: {
    backgroundColor: "#6A4C93",
  },
  genderOptionText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#665676",
    textAlign: "center",
  },
  genderOptionActiveText: {
    color: "#FFFFFF",
  },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    paddingVertical: 16,
  },
  progressActive: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#FFFFFF",
  },
  progressInactive: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#473c53",
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

export default Gender;
