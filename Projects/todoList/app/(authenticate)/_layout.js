import {Stack} from "expo-router"

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen name="login"  screenOptions={{headerShown:false}} />
            <Stack.Screen name="register"  screenOptions={{headerShown:false}} />
        </Stack>
    )
}