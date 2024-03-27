import { useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import { DisplayAge } from "../DisplayAge/DisplayAge";

export function AgeCounter() {
  const [age, setAge] = useState(30);
  function increaseAge() {
    setAge(age + 1);
  }
  return (
    <>
      <TouchableOpacity
        onPress={increaseAge}
        style={{ backgroundColor: "#00A2FF", borderRadius: 10, padding: 20 }}
      >
        <Text style={{ fontSize: 40, color: "white" }}>Increase age</Text>
      </TouchableOpacity>
      <DisplayAge age ={age}/>
    </>
  );
}
