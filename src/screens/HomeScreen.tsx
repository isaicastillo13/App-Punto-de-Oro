import { View, Text, StyleSheet, Image, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../theme/colors";
import BenefitCard from "../components/BenefitCard";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View style={styles.userInfo}>
            <Text style={styles.greeting}>Saludo</Text>
            <Text style={styles.userName}>Hola, Usuario</Text>
          </View>

          <View style={styles.avatarWrapper}>
            <Image
              source={require("../../assets/iconProfile.png")}
              style={styles.avatar}
            />
          </View>
        </View>

        <View style={styles.pointsCard}>
          <Text style={styles.cardLabel}>Tu saldo</Text>
          <Text style={styles.balance}>1,240 pts</Text>
          <Text style={styles.cardSubtext}>puntos disponibles</Text>

          <Pressable
            style={({ pressed }) => [
              styles.codeButton,
              pressed && styles.codeButtonPressed,
            ]}
          >
            <AntDesign name="qrcode" size={20} color={colors.darkaccent} />
            <Text style={styles.codeButtonText}>Ver mi código</Text>
          </Pressable>
        </View>
      </View>

      <ScrollView
  horizontal
  showsHorizontalScrollIndicator={false}
  contentContainerStyle={styles.scrollContent}
>
  <View style={styles.benefitRow}>
    <BenefitCard
      title="Descuento en tu próxima compra"
      description="Obtén un 20% de descuento en tu próxima compra en nuestra tienda onliner"
      iconName="gift"
      onPress={() => console.log("Ver más")}
    />

    <BenefitCard
      title="Beneficio Destacado"
      description="Descripción breve del beneficio ofrecido."
      iconName="restaurant"
      onPress={() => console.log("Ver más")}
    />

    <BenefitCard
      title="Almuerzo corporativo"
      description="Aprovecha descuentos exclusivos en restaurantes aliados."
      iconName="fast-food"
      onPress={() => console.log("Ver más")}
    />
  </View>
</ScrollView>
            
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  header: {
    backgroundColor: colors.primary,
    paddingTop: 16,
    paddingHorizontal: 20,
    paddingBottom: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },

  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  userInfo: {
    flexShrink: 1,
  },

  greeting: {
    fontSize: 14,
    color: "#ffffffb3",
    marginBottom: 4,
  },

  userName: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.text,
  },

  avatarWrapper: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#ffffff2e",
    justifyContent: "center",
    alignItems: "center",
  },

  avatar: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },

  pointsCard: {
    marginTop: 24,
    backgroundColor: "#ffffff2e",
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: colors.border,
  },

  cardLabel: {
    fontSize: 14,
    color: "#ffffffbf",
    marginBottom: 6,
  },

  balance: {
    fontSize: 36,
    fontWeight: "800",
    color: colors.text,
    marginBottom: 4,
    textShadowColor: "#00000033",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 8,
  },

  cardSubtext: {
    fontSize: 15,
    color: "#ffffffb3",
    marginBottom: 18,
  },

  codeButton: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.accent,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 99,
  },

  codeButtonPressed: {
    opacity: 0.85,
  },

  codeButtonText: {
    marginLeft: 8,
    fontSize: 15,
    fontWeight: "700",
    color: colors.darkaccent,
  },

 

  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.textPrimary,
  },


  scrollContent: {
  paddingHorizontal: 20,
  paddingTop: 24,
  paddingBottom: 8,
},

benefitRow: {
  flexDirection: "row",
  alignItems: "flex-start",
},
});
