// import React from 'react';
// import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';

// const App = () => {
//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>Body Type</Text>
//       </View>

//       {/* Content */}
//       <ScrollView contentContainerStyle={styles.content}>
//         <Text style={styles.subHeader}>What's your body type?</Text>

//         {/* Body Types Grid */}
//         <View style={styles.grid}>
//           {/* Ectomorph */}
//           <View style={styles.card}>
//             <ImageBackground
//               source={{ uri: 'https://cdn.usegalileo.ai/sdxl10/dec582aa-1ed9-4136-a0c4-a9d53b87ca12.png' }}
//               style={styles.image}
//               imageStyle={styles.imageStyle}
//             />
//             <Text style={styles.cardTitle}>Ectomorph</Text>
//             <Text style={styles.cardSubtitle}>Lean and long</Text>
//           </View>

//           {/* Mesomorph */}
//           <View style={styles.card}>
//             <ImageBackground
//               source={{ uri: 'https://cdn.usegalileo.ai/sdxl10/d8def04b-5a96-43e4-9a47-8f62f52dca62.png' }}
//               style={styles.image}
//               imageStyle={styles.imageStyle}
//             />
//             <Text style={styles.cardTitle}>Mesomorph</Text>
//             <Text style={styles.cardSubtitle}>Athletic</Text>
//           </View>
//         </View>

//         {/* Buttons */}
//         <View style={styles.buttonsContainer}>
//           <TouchableOpacity style={styles.previousButton}>
//             <Text style={styles.buttonText}>Previous</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.nextButton}>
//             <Text style={styles.buttonText}>Next</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>

//       {/* Footer Spacer */}
//       <View style={styles.footerSpacer} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#200c31',
//   },
//   header: {
//     paddingVertical: 20,
//     alignItems: 'center',
//   },
//   headerTitle: {
//     color: '#FFFFFF',
//     fontSize: 32,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   content: {
//     paddingHorizontal: 16,
//   },
//   subHeader: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     textAlign: 'center',
//     marginVertical: 10,
//   },
//   grid: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     flexWrap: 'wrap',
//     gap: 12,
//   },
//   card: {
//     flexBasis: '48%',
//     marginBottom: 12,
//     alignItems: 'center',
//   },
//   image: {
//     width: '100%',
//     aspectRatio: 3 / 4,
//     borderRadius: 12,
//     overflow: 'hidden',
//   },
//   imageStyle: {
//     borderRadius: 12,
//   },
//   cardTitle: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: '500',
//     marginTop: 8,
//   },
//   cardSubtitle: {
//     color: '#b17cde',
//     fontSize: 14,
//   },
//   buttonsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginVertical: 20,
//   },
//   previousButton: {
//     backgroundColor: '#3d175e',
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 20,
//   },
//   nextButton: {
//     backgroundColor: '#6100b6',
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 20,
//   },
//   buttonText: {
//     color: '#FFFFFF',
//     fontSize: 14,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   footerSpacer: {
//     height: 20,
//     backgroundColor: '#200c31',
//   },
// });

// export default App;
// import React, { useState } from 'react';
// import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
// import { useForm } from './FormContext'; // Import useForm to interact with the context

// interface BodyTypeProps {
//   onContinue: () => void; // Function to navigate to the next screen
// }

// const BodyType: React.FC<BodyTypeProps> = ({ onContinue }) => {
//   const [selectedBodyType, setSelectedBodyType] = useState<string>(''); // State to store selected body type
//   const { addStepData } = useForm(); // Use context to save data

//   const handleBodyTypeSelect = (bodyType: string) => {
//     setSelectedBodyType(bodyType); // Update selected body type
//     // console.log(selectedBodyType+"djnfdjfn");
//   };

//   const handleNext = () => {
//     if (selectedBodyType !== '') {
//       addStepData(7, 'bodyType', selectedBodyType); // Save body type data to context
//       onContinue(); // Navigate to the next screen
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>Body Type</Text>
//       </View>

//       {/* Content */}
//       <ScrollView contentContainerStyle={styles.content}>
//         <Text style={styles.subHeader}>What's your body type?</Text>

//         {/* Body Types Grid */}
//         <View style={styles.grid}>
//           {/* Ectomorph */}
//           <TouchableOpacity
//             style={[
//               styles.card,
//               selectedBodyType === 'Ectomorph' && styles.selectedCard, // Highlight selected card
//             ]}
//             onPress={() => handleBodyTypeSelect('Ectomorph')}
//           >
//             <ImageBackground
//               source={{ uri: 'https://cdn.usegalileo.ai/sdxl10/dec582aa-1ed9-4136-a0c4-a9d53b87ca12.png' }}
//               style={styles.image}
//               imageStyle={styles.imageStyle}
//             />
//             <Text style={styles.cardTitle}>Ectomorph</Text>
//             <Text style={styles.cardSubtitle}>Lean and long</Text>
//           </TouchableOpacity>

//           {/* Mesomorph */}
//           <TouchableOpacity
//             style={[
//               styles.card,
//               selectedBodyType === 'Mesomorph' && styles.selectedCard, // Highlight selected card
//             ]}
//             onPress={() => handleBodyTypeSelect('Mesomorph')}
//           >
//             <ImageBackground
//               source={{ uri: 'https://cdn.usegalileo.ai/sdxl10/d8def04b-5a96-43e4-9a47-8f62f52dca62.png' }}
//               style={styles.image}
//               imageStyle={styles.imageStyle}
//             />
//             <Text style={styles.cardTitle}>Mesomorph</Text>
//             <Text style={styles.cardSubtitle}>Athletic</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Next Button */}
//         <View style={styles.buttonsContainer}>
//           <TouchableOpacity
//             style={[styles.nextButton, { opacity: selectedBodyType ? 1 : 0.6 }]}
//             disabled={!selectedBodyType} // Disable button if no body type is selected
//             onPress={handleNext}
//           >
//             <Text style={styles.buttonText}>Next</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>

//       {/* Footer Spacer */}
//       <View style={styles.footerSpacer} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#200c31',
//   },
//   header: {
//     paddingVertical: 20,
//     alignItems: 'center',
//   },
//   headerTitle: {
//     color: '#FFFFFF',
//     fontSize: 32,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   content: {
//     paddingHorizontal: 16,
//   },
//   subHeader: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     textAlign: 'center',
//     marginVertical: 10,
//   },
//   grid: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     flexWrap: 'wrap',
//     gap: 12,
//   },
//   card: {
//     flexBasis: '48%',
//     marginBottom: 12,
//     alignItems: 'center',
//     backgroundColor: '#2d1145',
//     borderRadius: 12,
//     padding: 10,
//   },
//   selectedCard: {
//     borderWidth: 2,
//     borderColor: '#6100b6',
//   },
//   image: {
//     width: '100%',
//     aspectRatio: 3 / 4,
//     borderRadius: 12,
//     overflow: 'hidden',
//   },
//   imageStyle: {
//     borderRadius: 12,
//   },
//   cardTitle: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: '500',
//     marginTop: 8,
//   },
//   cardSubtitle: {
//     color: '#b17cde',
//     fontSize: 14,
//   },
//   buttonsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginVertical: 20,
//   },
//   nextButton: {
//     backgroundColor: '#6100b6',
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 20,
//   },
//   buttonText: {
//     color: '#FFFFFF',
//     fontSize: 14,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   footerSpacer: {
//     height: 20,
//     backgroundColor: '#200c31',
//   },
// });

// export default BodyType;

import React, { useState } from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { useForm } from './FormContext'; // Import useForm to interact with the context

interface BodyTypeProps {
  onContinue: () => void; // Function to navigate to the next screen
}

const BodyType: React.FC<BodyTypeProps> = ({ onContinue }) => {
  const [selectedBodyType, setSelectedBodyType] = useState<string>(''); // State to store selected body type
  const { addStepData } = useForm(); // Use context to save data

  const handleBodyTypeSelect = (bodyType: string) => {
    setSelectedBodyType(bodyType); // Update selected body type
    console.log(selectedBodyType+" djfln");
  };

  const handleNext = () => {
    if (selectedBodyType) {
      addStepData(7, 'bodyType', selectedBodyType);
      console.log("I ran"); // Save body type data to context
      onContinue(); // Navigate to the next screen
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Body Type</Text>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.subHeader}>What's your body type?</Text>

        {/* Body Types Grid */}
        <View style={styles.grid}>
          {/* Ectomorph */}
          <TouchableOpacity
            style={[
              styles.card,
              selectedBodyType === 'Ectomorph' && styles.selectedCard, // Highlight selected card
            ]}
            onPress={() => handleBodyTypeSelect('Ectomorph')}
            accessibilityLabel="Select Ectomorph body type"
            accessibilityHint="Tap to select Ectomorph, a lean and long body type."
          >
            <ImageBackground
              source={{ uri: 'https://cdn.usegalileo.ai/sdxl10/dec582aa-1ed9-4136-a0c4-a9d53b87ca12.png' }}
              style={styles.image}
              imageStyle={styles.imageStyle}
            />
            <Text style={styles.cardTitle}>Ectomorph</Text>
            <Text style={styles.cardSubtitle}>Lean and long</Text>
          </TouchableOpacity>

          {/* Mesomorph */}
          <TouchableOpacity
            style={[
              styles.card,
              selectedBodyType === 'Mesomorph' && styles.selectedCard, // Highlight selected card
            ]}
            onPress={() => handleBodyTypeSelect('Mesomorph')}
            accessibilityLabel="Select Mesomorph body type"
            accessibilityHint="Tap to select Mesomorph, an athletic body type."
          >
            <ImageBackground
              source={{ uri: 'https://cdn.usegalileo.ai/sdxl10/d8def04b-5a96-43e4-9a47-8f62f52dca62.png' }}
              style={styles.image}
              imageStyle={styles.imageStyle}
            />
            <Text style={styles.cardTitle}>Mesomorph</Text>
            <Text style={styles.cardSubtitle}>Athletic</Text>
          </TouchableOpacity>

          {/* Endomorph */}
          <TouchableOpacity
            style={[
              styles.card,
              selectedBodyType === 'Endomorph' && styles.selectedCard, // Highlight selected card
            ]}
            onPress={() => handleBodyTypeSelect('Endomorph')}
            accessibilityLabel="Select Endomorph body type"
            accessibilityHint="Tap to select Endomorph, a rounder and softer body type."
          >
            <ImageBackground
              source={{ uri: 'https://cdn.usegalileo.ai/sdxl10/ff35057e-d38d-4508-9a7a-c1b2fe8be7d3.png' }}
              style={styles.image}
              imageStyle={styles.imageStyle}
            />
            <Text style={styles.cardTitle}>Endomorph</Text>
            <Text style={styles.cardSubtitle}>Round and soft</Text>
          </TouchableOpacity>
        </View>

        {/* Next Button */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.nextButton, { opacity: selectedBodyType ? 1 : 0.6 }]}
            disabled={!selectedBodyType} // Disable button if no body type is selected
            onPress={handleNext}
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Footer Spacer */}
      <View style={styles.footerSpacer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#200c31',
  },
  header: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  content: {
    paddingHorizontal: 16,
  },
  subHeader: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
  grid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 12,
  },
  card: {
    flexBasis: '48%',
    marginBottom: 12,
    alignItems: 'center',
    backgroundColor: '#2d1145',
    borderRadius: 12,
    padding: 10,
  },
  selectedCard: {
    borderWidth: 2,
    borderColor: '#6100b6',
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 4,
    borderRadius: 12,
    overflow: 'hidden',
  },
  imageStyle: {
    borderRadius: 12,
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
    marginTop: 8,
  },
  cardSubtitle: {
    color: '#b17cde',
    fontSize: 14,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  nextButton: {
    backgroundColor: '#6100b6',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footerSpacer: {
    height: 20,
    backgroundColor: '#200c31',
  },
});

export default BodyType;
