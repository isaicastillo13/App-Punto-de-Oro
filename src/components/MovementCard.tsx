import React, { memo } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { colors } from "../theme/colors";

type MovementItemProps = {
  title: string;
  date: string;
  amount: string;
  type: "earn" | "redeem";
  onPress?: () => void;
};

function MovementItemComponent({
  title,
  date,
  amount,
  type,
  onPress,
}: MovementItemProps) {
  const isEarn = type === "earn";

  return (
    <Pressable
      onPress={onPress}
      disabled={!onPress}
      style={({ pressed }) => [
        styles.container,
        pressed && onPress ? styles.pressed : null,
      ]}
    >
      <View style={styles.leftSection}>
        <View
          style={[
            styles.iconWrapper,
            isEarn ? styles.iconEarn : styles.iconRedeem,
          ]}
        >
          <Feather
            name={isEarn ? "arrow-up" : "arrow-down"}
            size={22}
            color={colors.textPrimary}
          />
        </View>

        <View style={styles.textBlock}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>

      <Text style={[styles.amount, isEarn ? styles.amountEarn : styles.amountRedeem]}>
        {amount}
      </Text>
    </Pressable>
  );
}

const MovementItem = memo(MovementItemComponent);

export default MovementItem;

const styles = StyleSheet.create({
  container: {
    minHeight: 86,
    backgroundColor: colors.card,
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },

  pressed: {
    opacity: 0.85,
  },

  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginRight: 12,
  },

  iconWrapper: {
    width: 54,
    height: 54,
    borderRadius: 27,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },

  iconEarn: {
    backgroundColor: "#DDEBE5",
  },

  iconRedeem: {
    backgroundColor: "#F2DEDF",
  },

  textBlock: {
    flex: 1,
  },

  title: {
    fontSize: 17,
    fontWeight: "700",
    color: colors.textPrimary,
    marginBottom: 4,
  },

  date: {
    fontSize: 14,
    color: "#8AA3B8",
    fontWeight: "500",
  },

  amount: {
    fontSize: 18,
    fontWeight: "700",
  },

  amountEarn: {
    color: "#20A464",
  },

  amountRedeem: {
    color: "#E53935",
  },
});