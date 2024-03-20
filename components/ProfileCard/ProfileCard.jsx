import { TouchableOpacity, Text, View, Image } from "react-native";
import { cardStyle } from "../ProfileCard.style";

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

      <View style={cardStyle.social}></View>
    </View>
  );
}
