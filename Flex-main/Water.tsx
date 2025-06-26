import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Home from "./Home"; // Import the Home component

const Water = () => {
  const [waterIntake, setWaterIntake] = useState(0); // Initial water intake in glasses
  const [currentScreen, setCurrentScreen] = useState("Water"); // Manage screen state
  const dailyGoal = 8; // Daily goal in glasses
  const glassToLiters = 0.25; // 1 glass = 0.25 liters

  const addWaterIntake = () => {
    if (waterIntake < dailyGoal) {
      setWaterIntake((prevIntake) => prevIntake + 1);
    }
  };

  const subtractWaterIntake = () => {
    if (waterIntake > 0) {
      setWaterIntake((prevIntake) => prevIntake - 1);
    }
  };

  // Render Home component if the currentScreen is 'Home'
  if (currentScreen === "Home") {
    return <Home />;
  }

  const litersIntake = (waterIntake * glassToLiters).toFixed(2); // Calculate liters with 2 decimals
  const litersGoal = (dailyGoal * glassToLiters).toFixed(2); // Total goal in liters

  // Render Water component
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#1a1122",
        padding: 20,
        justifyContent: "space-between",
      }}
    >
      {/* Header with Back Button */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          onPress={() => setCurrentScreen("Home")}
          style={{
            backgroundColor: "#362447",
            borderRadius: 8,
            paddingHorizontal: 16,
            paddingVertical: 8,
          }}
        >
          <Text style={{ color: "white", fontSize: 16 }}>Back</Text>
        </TouchableOpacity>
        <Text
          style={{
            color: "white",
            fontSize: 18,
            fontWeight: "bold",
            flex: 1,
            textAlign: "center",
          }}
        >
          Water Intake
        </Text>
      </View>

      {/* Water Intake Info */}
      <View>
        <Text
          style={{
            color: "white",
            fontSize: 32,
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          {waterIntake}/{dailyGoal} glasses
        </Text>
        <Text style={{ color: "white", fontSize: 16, marginBottom: 5 }}>
          {litersIntake}L / {litersGoal}L
        </Text>
        <Text style={{ color: "white", fontSize: 14, marginBottom: 20 }}>
          Daily Goal: {dailyGoal} glasses or {litersGoal} liters
        </Text>

        {/* Add/Subtract Buttons */}
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <TouchableOpacity
            onPress={subtractWaterIntake}
            style={{
              backgroundColor: "#362447",
              borderRadius: 8,
              padding: 16,
              marginHorizontal: 10,
            }}
          >
            <Text style={{ color: "white", fontSize: 18 }}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={addWaterIntake}
            style={{
              backgroundColor: "#8019e6",
              borderRadius: 8,
              padding: 16,
              marginHorizontal: 10,
            }}
          >
            <Text style={{ color: "white", fontSize: 18 }}>+</Text>
          </TouchableOpacity>
        </View>

        {/* Encouragement Message */}
        <Text
          style={{
            color: "white",
            fontSize: 14,
            textAlign: "center",
            marginTop: 10,
          }}
        >
          {waterIntake >= dailyGoal
            ? "You've reached your goal!"
            : "Keep going!"}
        </Text>
      </View>
    </View>
  );
};

export default Water;
