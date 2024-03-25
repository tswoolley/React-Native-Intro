import { TouchableOpacity, Text, View, Image } from "react-native";
import { cardStyle } from "../ProfileCard.style";
import { FontAwesome } from "@expo/vector-icons";

export function ProfileCard() {
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
          <Text style={cardStyle.name}>Tomos</Text>
          <Text>Hi i am learning React Native, lets see where this goes.</Text>
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
