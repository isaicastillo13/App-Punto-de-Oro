import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../theme/colors";
import BenefitCard from "../components/BenefitCard";
import MovementItem from "../components/MovementCard";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.screenContent}
      >
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <View style={styles.userInfo}>
              <Text style={styles.greeting}>Buenos días</Text>
              <Text style={styles.userName}>Hola, Isaias</Text>
            </View>

            <Pressable style={styles.avatarWrapper}>
              <Image
                source={require("../../assets/iconProfile.png")}
                style={styles.avatar}
              />
            </Pressable>
          </View>

          <View style={styles.pointsCard}>
            <Text style={styles.cardLabel}>TU SALDO</Text>
            <Text style={styles.balance}>12,450</Text>
            <Text style={styles.cardSubtext}>puntos disponibles</Text>

            <Pressable
              style={({ pressed }) => [
                styles.codeButton,
                pressed && styles.codeButtonPressed,
              ]}
            >
              <AntDesign name="qrcode" size={18} color={colors.darkaccent} />
              <Text style={styles.codeButtonText}>Ver mi código</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.mainContent}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Beneficios para ti</Text>
            <Pressable>
              <Text style={styles.sectionLink}>Ver todos</Text>
            </Pressable>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            <BenefitCard
              title="Café gratis"
              description="Cafetería Sena"
              iconName="cafe"
              onPress={() => console.log("Ver más")}
            />

            <BenefitCard
              title="2x1 en almuerzo"
              description="Restaurante El Rey"
              iconName="restaurant"
              onPress={() => console.log("Ver más")}
            />

            <BenefitCard
              title="Almuerzo corporativo"
              description="Restaurantes aliados"
              iconName="fast-food"
              onPress={() => console.log("Ver más")}
            />
          </ScrollView>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Movimientos recientes</Text>
          </View>

          <MovementItem
            title="Supermercado El Rey"
            date="Hoy · 10:32 am"
            amount="+120"
            type="earn"
          />

          <MovementItem
            title="Canje: Café gratis"
            date="Ayer · 8:15 am"
            amount="-200"
            type="redeem"
          />
          <MovementItem
            title="Supermercado El Rey"
            date="Hoy · 10:32 am"
            amount="+120"
            type="earn"
          />

          <MovementItem
            title="Canje: Café gratis"
            date="Ayer · 8:15 am"
            amount="-200"
            type="redeem"
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
    paddingBottom: 28,
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
    color: "rgba(255,255,255,0.7)",
    marginBottom: 4,
  },

  userName: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.text,
  },

  avatarWrapper: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "rgba(255,255,255,0.18)",
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
    backgroundColor: "rgba(255,255,255,0.14)",
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.18)",
  },

  cardLabel: {
    fontSize: 13,
    fontWeight: "600",
    letterSpacing: 0.8,
    color: "rgba(255,255,255,0.75)",
    marginBottom: 8,
  },

  balance: {
    fontSize: 42,
    fontWeight: "800",
    color: colors.text,
    marginBottom: 4,
  },

  cardSubtext: {
    fontSize: 16,
    color: "rgba(255,255,255,0.72)",
    marginBottom: 18,
  },

  codeButton: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.accent,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 999,
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

  mainContent: {
    paddingTop: 24,
  },

  sectionHeader: {
    paddingHorizontal: 20,
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.textPrimary,
  },

  sectionLink: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.primary,
  },

  scrollContent: {
    paddingLeft: 20,
    paddingRight: 8,
    paddingBottom: 8,
  },
  screenContent: {
    paddingBottom: 24,
  },
  sectionMovements: {
    marginTop: 8,
    paddingHorizontal: 20,
  },
});
