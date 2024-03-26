import { TouchableOpacity, Text, View, Image } from "react-native";
import { cardStyle } from "../ProfileCard.style";
import { FontAwesome } from "@expo/vector-icons";

export function ProfileCard({ firstName, lastName, age, isOpenToWork }) {
  return (
    <View style={cardStyle.container}>
      <View style={cardStyle.header}>
        <View>
          <Image
            style={cardStyle.avatar}
            source={{ uri: "https://i.pravatar.cc/300" }}
          />
        </View>
        <View style={cardStyle.texts}>
          <Text style={cardStyle.name}>
            {firstName} {lastName + "! "}{" "}
          </Text>
          <Text>
            Hi i am learning React Native, I am {age}, lets see where this goes.
          </Text>

          <Text
            style={{
              backgroundColor: isOpenToWork ? "green" : "red",
              color: "white",
            }}
          >
            {isOpenToWork
              ? "I am open to work."
              : "I am not looking for a job."}
          </Text>
        </View>
      </View>

      <View style={cardStyle.social}>
        <TouchableOpacity style={cardStyle.socialBtn}>
          <FontAwesome name="twitter" size={24} color="#1DA1F2" />
        </TouchableOpacity>
        <TouchableOpacity style={cardStyle.socialBtn}>
          <FontAwesome name="linkedin-square" size={24} color="#0A66C2" />
        </TouchableOpacity>
        <TouchableOpacity style={cardStyle.socialBtn}>
          <FontAwesome name="github" size={24} color="#333" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
