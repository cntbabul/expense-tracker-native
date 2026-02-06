import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { ClerkProvider } from '@clerk/clerk-expo'
import { Slot } from "expo-router";
import SafeScreen from "@/components/SafeScreen";
import { tokenCache } from "@clerk/clerk-expo/token-cache";




export default function RootLayout() {

  return (

    <ClerkProvider tokenCache={tokenCache}>
      <SafeScreen>
        <Slot />
      </SafeScreen>
      <StatusBar style="dark" />
    </ClerkProvider>

  );
}
