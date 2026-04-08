import { View, Text, StyleSheet, Image } from 'react-native';
import { colors } from '../theme/colors';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <View>
      <Text style={styles.subtitle}>Saludo</Text>
      <Text style={styles.title}>Hola, Usuario</Text>
        </View>
        <View style={styles.profileContainer}>
         <Image source={require("../../assets/iconProfile.png")} style={styles.profile} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
  },
  subtitle:{
    fontSize: 20,
    color: '#FFFFFFB3',
    marginTop: 4,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    marginTop: 20,
    width: 50,
    height: 50,
    borderRadius : 100,
    backgroundColor: '#ffffff59'
  },

  profile:{
    width: 24,
    height: 24,
  },

  containerHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: colors.primary,
    paddingTop: 40,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    width: '100%',
    height: '25%',
  }
});