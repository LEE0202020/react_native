import { Ionicons } from "@expo/vector-icons"
import { Tabs } from 'expo-router'

export default function _layout() {
    return (
        <Tabs screenOptions={{headerShown: false}}>
            <Tabs.Screen
                name="home"
                options={{
                    title: "홈",
                    tabBarIcon: ({color, size, focused}) => (
                        <Ionicons 
                            name={focused ? "home" : "home-outline"}
                            size={size}
                            color={color as any}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "프로필",
                    tabBarIcon: ({color, size, focused}) => (
                        <Ionicons 
                            name={focused ? "person" : "person-outline"}
                            size={size}
                            color={color as any}
                        />
                    )
                }}
            />
            

        </Tabs>
    )
}