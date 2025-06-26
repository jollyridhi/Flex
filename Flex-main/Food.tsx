// import React, { useState } from "react";
// import { View, Text, TextInput, Button, StyleSheet } from "react-native";
// import axios from "axios";

// const API_URL = "https://trackapi.nutritionix.com/v2/natural/nutrients";
// const API_HEADERS = {
//   "x-app-id": "d0de1e49", // Replace with your Nutritionix App ID
//   "x-app-key": "de46874e76f53af1f016ee0e6f9483b1", // Replace with your Nutritionix App Key
//   "Content-Type": "application/json"
// };

// const FoodNutrition: React.FC = () => {
//   const [food, setFood] = useState("");
//   const [nutrition, setNutrition] = useState<any>(null);
//   const [error, setError] = useState<string | null>(null);

//   const fetchNutritionData = async () => {
//     try {
//       setError(null);
//       const response = await axios.post(
//         API_URL,
//         { query: food },
//         { headers: API_HEADERS }
//       );
//       setNutrition(response.data.foods[0]);
//     } catch (err) {
//       setError("Failed to fetch nutrition data. Please try again.");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Food Nutrition Calculator</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter food name"
//         value={food}
//         onChangeText={setFood}
//       />
//       <Button title="Get Nutrition Info" onPress={fetchNutritionData} />
//       {error && <Text style={styles.error}>{error}</Text>}
//       {nutrition && (
//         <View style={styles.result}>
//           <Text style={styles.text}>Calories: {nutrition.nf_calories} kcal</Text>
//           <Text style={styles.text}>Protein: {nutrition.nf_protein} g</Text>
//           <Text style={styles.text}>Carbs: {nutrition.nf_total_carbohydrate} g</Text>
//           <Text style={styles.text}>Fats: {nutrition.nf_total_fat} g</Text>
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#f8f8f8"
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 20
//   },
//   input: {
//     width: "80%",
//     height: 40,
//     borderColor: "gray",
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//     borderRadius: 5,
//     backgroundColor: "white"
//   },
//   result: {
//     marginTop: 20,
//     padding: 10,
//     backgroundColor: "#fff",
//     borderRadius: 5,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 5
//   },
//   text: {
//     fontSize: 16,
//     marginVertical: 2
//   },
//   error: {
//     color: "red",
//     marginTop: 10
//   }
// });

// export default FoodNutrition;
import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from "react-native";
import axios from "axios";

const API_URL = "https://trackapi.nutritionix.com/v2/natural/nutrients";
const API_HEADERS = {
  "x-app-id": "APP_ID", // Replace with your Nutritionix App ID
  "x-app-key": "APP_KEY", // Replace with your Nutritionix App Key
  "Content-Type": "application/json"
};

const FoodNutrition: React.FC = () => {
  const [food, setFood] = useState("");
  const [nutritionData, setNutritionData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Function to fetch the nutrition data for a given food
  const fetchNutritionData = async () => {
    try {
      setError(null);
      const response = await axios.post(
        API_URL,
        { query: food },
        { headers: API_HEADERS }
      );
      const nutrition = response.data.foods[0];
      setNutritionData((prevData) => [...prevData, nutrition]);
      setFood(""); // Reset the food input field
    } catch (err) {
      setError("Failed to fetch nutrition data. Please try again.");
    }
  };

  // Function to calculate total nutrition values
  const getTotalNutrition = () => {
    return nutritionData.reduce(
      (totals, item) => {
        totals.calories += item.nf_calories;
        totals.protein += item.nf_protein;
        totals.carbs += item.nf_total_carbohydrate;
        totals.fats += item.nf_total_fat;
        return totals;
      },
      { calories: 0, protein: 0, carbs: 0, fats: 0 }
    );
  };

  const totalNutrition = getTotalNutrition();

  // Reset data at midnight
  useEffect(() => {
    const resetAtMidnight = () => {
      const now = new Date();
      const currentTime = now.getHours() * 60 + now.getMinutes();
      const midnightTime = 0; // 12:00 AM in minutes (0)

      // Check if it's past midnight
      if (currentTime === midnightTime) {
        setNutritionData([]);
      }
    };

    // Check every minute if it's time to reset
    const interval = setInterval(resetAtMidnight, 60000); // 60000 ms = 1 minute

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daily Food Tracker</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter food name"
        value={food}
        onChangeText={setFood}
      />
      <Button title="Add Food" onPress={fetchNutritionData} />
      {error && <Text style={styles.error}>{error}</Text>}
      
      <ScrollView style={styles.resultContainer}>
        {nutritionData.length > 0 ? (
          nutritionData.map((nutrition, index) => (
            <View key={index} style={styles.result}>
              <Text style={styles.text}>Food: {nutrition.food_name}</Text>
              <Text style={styles.text}>Calories: {nutrition.nf_calories} kcal</Text>
              <Text style={styles.text}>Protein: {nutrition.nf_protein} g</Text>
              <Text style={styles.text}>Carbs: {nutrition.nf_total_carbohydrate} g</Text>
              <Text style={styles.text}>Fats: {nutrition.nf_total_fat} g</Text>
            </View>
          ))
        ) : (
          <Text style={styles.text}>No food items logged yet.</Text>
        )}
      </ScrollView>

      <View style={styles.totalNutrition}>
        <Text style={styles.totalText}>Total Daily Nutrition:</Text>
        <Text style={styles.text}>Calories: {totalNutrition.calories} kcal</Text>
        <Text style={styles.text}>Protein: {totalNutrition.protein} g</Text>
        <Text style={styles.text}>Carbs: {totalNutrition.carbs} g</Text>
        <Text style={styles.text}>Fats: {totalNutrition.fats} g</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#121212",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 20,
    textShadowColor: "#9b59b6",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#ffffff",
    color: "#000000",
    textShadowColor: "#9b59b6",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 5,
  },
  resultContainer: {
    width: "100%",
    marginTop: 20,
  },
  result: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: "#333333",
    borderRadius: 10,
    shadowColor: "#9b59b6",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.7,
    shadowRadius: 10,
    elevation: 5,
  },
  text: {
    fontSize: 16,
    color: "#ffffff",
    marginVertical: 3,
  },
  error: {
    color: "red",
    marginTop: 10,
  },
  totalNutrition: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#222222",
    borderRadius: 10,
    shadowColor: "#9b59b6",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.7,
    shadowRadius: 10,
    elevation: 5,
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#9b59b6",
    marginBottom: 10,
  },
});

export default FoodNutrition;