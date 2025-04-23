import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import InitialLayout from "@/components/InitialLayout";
import { StatusBar } from "react-native";
import ClerkAndConvexProviders from "@/providers/ClerkAndConvexProviders";

export default function RootLayout() {
  return (
    <ClerkAndConvexProviders>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
          <StatusBar barStyle="light-content" backgroundColor="black" /> 
          <InitialLayout />
        </SafeAreaView>
      </SafeAreaProvider>
    </ClerkAndConvexProviders>
  );
}