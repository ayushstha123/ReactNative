import {Stack} from "expo-router"

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen name="openpage"   options={{headerShown:false}}/>
        </Stack>
    )
}