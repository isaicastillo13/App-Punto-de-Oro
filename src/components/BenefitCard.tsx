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
        <Ionicons name={iconName} size={18} color={colors.primary} />
      </View>

      <View>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>

        <Text style={styles.description} numberOfLines={1}>
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
          <Text
            style={[styles.buttonText, disabled && styles.buttonTextDisabled]}
          >
            {buttonLabel}
          </Text>

          <Feather
            name="arrow-up-right"
            size={14}
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
    width: 160,
    minHeight: 170,
    backgroundColor: colors.card,
    borderRadius: 18,
    padding: 14,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    marginRight: 12,
    justifyContent: "space-between",
  },

  iconWrapper: {
    width: 34,
    height: 34,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F8E9B9",
    marginBottom: 12,
  },

  title: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.textPrimary,
    lineHeight: 20,
    marginBottom: 4,
  },

  description: {
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 18,
    marginBottom: 14,
  },

  button: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.card,
  },

  buttonPressed: {
    opacity: 0.7,
  },

  buttonDisabled: {
    borderColor: colors.border,
    backgroundColor: colors.background,
  },

  buttonText: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.primary,
  },

  buttonTextDisabled: {
    color: colors.textSecondary,
  },
});