import { TouchableOpacity, Text, View, Image } from "react-native";
import { cardStyle } from "../ProfileCard.style";

export function ProfileCard() {
  return (
    <View style={cardStyle.container}>
      <View style={cardStyle.header}>
        <Image style={cardStyle.avatar} source={{uri: "https://i.pravatar.cc/300"}}/>
        <Text>Tomos</Text>
        <Text>Hi i am learning</Text>
      </View>

      <View style={cardStyle.social}></View>
    </View>
  );
}
