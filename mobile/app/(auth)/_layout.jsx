import { Redirect, Stack } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

const AuthRootLayout = () => {
    const { isSignedIn } = useAuth();

    if (isSignedIn) return <Redirect href="/" />;

    return <Stack screenOptions={{ headerShown: false }} />
}

export default AuthRootLayout