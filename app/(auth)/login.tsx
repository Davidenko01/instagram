import { View, Text, Image, TouchableOpacity} from "react-native";
import React from "react";
import { styles } from "@/styles/auth.styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";
import { useSSO } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";


export default function login() {

  const { startSSOFlow } = useSSO();
  const router = useRouter();
  const handleGoogleSignIn = async () => {
    try {
      const { createdSessionId, setActive} = await startSSOFlow({strategy:"oauth_google"})

      if (setActive && createdSessionId) {
        setActive({session: createdSessionId})
        router.replace("/(tabs)")
      }
    } catch (error) {
      console.error("Ouath error: ", error)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.brandSection}>
        <View style={styles.logoContainer}>
          <Ionicons name="logo-instagram" size={32} color={COLORS.primary} />
        </View>
        <Text style={styles.appName}>InstaFAI</Text>
        <Text style={styles.tagline}>Fotografia tus momentos</Text>
      </View>

      <View style={styles.illustrationContainer}>
        <Image 
          source={require("../../assets/images/Photo-amico.png")}
          style={styles.illustration}
          resizeMode="contain"
        />
      </View>

      <View style={styles.loginSection}>
        <TouchableOpacity
          style={styles.googleButton}
          onPress={handleGoogleSignIn}
          activeOpacity={0.9}
        >
          <View style={styles.googleIconContainer}>
            <Ionicons name="logo-google" size={20} color={COLORS.surface} />
          </View>
          <Text style={styles.googleButtonText}>Iniciar sesión con Google</Text>       
        </TouchableOpacity>

        <Text style={styles.termsText}>
          Presionando continuar, aceptas los terminos y condiciones.
        </Text>
      </View>
    </View>
  );
}
