import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { useAuth } from "../hooks/useAuth";
import { validateLoginForm } from "../utils/validators";
import { colors } from "../theme/colors";

type Props = {
  navigation: any;
  setIsAuthenticated: (value: boolean) => void;
};

export default function LoginScreen({
  navigation,
  setIsAuthenticated,
}: Props) {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleLogin = async () => {

    setError("");
    const errors = validateLoginForm(email, password);

    if (errors.email || errors.password) {
      setFormErrors(errors);
      return;
    }

    try {
      const data = await login(email, password);
      console.log("Login exitoso:", data);
      setIsAuthenticated(true);

    } catch (error: any) {
      setError(error.message || "Ocurrió un error al iniciar sesión");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoBox}>
          <Image
            source={require("../../assets/iconAppPuntoDeOro.png")}
            style={styles.logo}
          />
        </View>

        <Text style={styles.title}>Iniciar sesión</Text>
        <Text style={styles.subtitle}>Accede a tus puntos y beneficios</Text>

        <View style={styles.form}>
          <TextInput
            placeholder="Correo electrónico"
            placeholderTextColor={colors.textSecondary}
            style={[
              styles.input,
              formErrors.email || error ? styles.inputError : null,
            ]}
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              setFormErrors((prev) => ({ ...prev, email: "" }));
              setError("");
            }}
          />

          {formErrors.email ? (
            <Text style={styles.errorText}>{formErrors.email}</Text>
          ) : null}

          <TextInput
            placeholder="Contraseña"
            placeholderTextColor={colors.textSecondary}
            style={[
              styles.input,
              formErrors.password || error ? styles.inputError : null,
            ]}
            secureTextEntry
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              setFormErrors((prev) => ({ ...prev, password: "" }));
              setError("");
            }}
          />

          {formErrors.password ? (
            <Text style={styles.errorText}>{formErrors.password}</Text>
          ) : null}

          {error ? <Text style={styles.errorText}>{error}</Text> : null}

          <TouchableOpacity style={styles.primaryButton} onPress={handleLogin}>
            <Text style={styles.primaryButtonText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Text style={styles.link}>Olvidé mi contraseña</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>¿No tienes cuenta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.footerLink}>Regístrate</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
  },
  logoBox: {
    width: 72,
    height: 72,
    borderRadius: 20,
    backgroundColor: colors.primary,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: colors.textPrimary,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    color: colors.textSecondary,
    textAlign: "center",
    marginTop: 8,
    marginBottom: 28,
  },
  form: {
    gap: 14,
  },
  input: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 16,
    color: colors.textPrimary,
  },
  inputError: {
    borderColor: "red",
    backgroundColor: "#ffe5e5",
    color: "red",
  },
  errorText: {
    color: "red",
    marginTop: -6,
    fontSize: 13,
  },
  primaryButton: {
    backgroundColor: colors.accent,
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 4,
  },
  primaryButtonText: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: "800",
  },
  link: {
    textAlign: "center",
    color: colors.primary,
    fontWeight: "600",
    marginTop: 4,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 6,
    marginTop: 28,
  },
  footerText: {
    color: colors.textSecondary,
    fontSize: 14,
  },
  footerLink: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: "700",
  },
});