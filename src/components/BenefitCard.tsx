import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../theme/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";

export default function BenefitCard() {
  return (
    <View style={styles.card}>
      <Ionicons name="restaurant" size={24} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>Beneficio Destacado</Text>
        <Text style={styles.description}>
          Descripción breve del beneficio ofrecido.
        </Text>
        <Pressable
          style={({ pressed }) => [styles.buttom, pressed && { opacity: 0.6 }]}
        >
          <Text style={styles.buttonText}>Ver más</Text>
          <Feather name="arrow-up-right" size={24} color={colors.primary} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "50%",
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.border,
    gap: 12,
  },
  image: {
    color: colors.primary,
    backgroundColor: "#1e5ba566",
    height: 48,
    width: 48,
    borderRadius: 8,
    padding: 12,
  },
  info: {
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.textPrimary,
    marginBottom: 4,
  },
  description: {
    display: "flex",
    flexDirection: "row",
    fontSize: 14,
    color: colors.textSecondary,
  },
  buttom: {
    marginTop: 8,
    fontSize: 14,
    color: colors.primary,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 99,
    alignSelf: "flex-start",
    paddingVertical: 8,
    paddingHorizontal: 16,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 14,
    color: colors.primary,
  },
});
