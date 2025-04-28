import { Text, View } from "react-native";
import "../global.css";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text  className="text-blue-600 text-2xl" >Home Screen</Text>
    </View>
  );
}
