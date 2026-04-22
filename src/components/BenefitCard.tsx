import React, { memo } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import { colors } from "../theme/colors";

type BenefitCardProps = {
  title: string;
  description: string;
  onPress?: () => void;
  buttonLabel?: string;
  iconName?: keyof typeof Ionicons.glyphMap;
  disabled?: boolean;
};

function BenefitCardComponent({
  title,
  description,
  onPress,
  buttonLabel = "Ver más",
  iconName = "restaurant",
  disabled = false,
}: BenefitCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.iconWrapper}>
        <Ionicons name={iconName} size={24} color={colors.primary} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>

        <Text style={styles.description} numberOfLines={3}>
          {description}
        </Text>

        <Pressable
          onPress={onPress}
          disabled={disabled}
          accessibilityRole="button"
          accessibilityLabel={`${buttonLabel}: ${title}`}
          style={({ pressed }) => [
            styles.button,
            pressed && !disabled && styles.buttonPressed,
            disabled && styles.buttonDisabled,
          ]}
        >
          <Text style={[styles.buttonText, disabled && styles.buttonTextDisabled]}>
            {buttonLabel}
          </Text>

          <Feather
            name="arrow-up-right"
            size={18}
            color={disabled ? colors.textSecondary : colors.primary}
          />
        </Pressable>
      </View>
    </View>
  );
}

const BenefitCard = memo(BenefitCardComponent);

export default BenefitCard;

const styles = StyleSheet.create({
  card: {
    width: "48%",
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
    gap: 12,
  },
  iconWrapper: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(30, 91, 165, 0.15)",
  },
  content: {
    gap: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.textPrimary,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.textSecondary,
  },
  button: {
    marginTop: 8,
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  buttonPressed: {
    opacity: 0.7,
  },
  buttonDisabled: {
    borderColor: colors.border,
    backgroundColor: colors.background,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.primary,
  },
  buttonTextDisabled: {
    color: colors.textSecondary,
  },
});