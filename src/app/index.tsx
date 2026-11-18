import { cn } from "@/lib/utils";
import { router } from "expo-router";
import { ScrollView, Pressable, Text, TouchableOpacity, View } from "react-native";

// TouchableOpacity == a
// Pressable == button
export default function HomeScreen() {

    const buttonStyle = "m-4 p-3 bg-blue-500 rounded-lg"
    const textStyle = "flex justify-center text-white"

    const tags = [
        "view",
        "flatlist",
        "stack",
        "infinite",
        "camera",
        "notification01",
        "notification02",
        "location",
        "audio",
        "haptics",
        "files",
        "video"
    ]
    
    const tagList = tags.map((tag, i) => (
        <Pressable
            key={i}
            onPress={() => router.push(`/${tag}` as any)}
            className={cn(buttonStyle)}
        >
            <Text className={cn(textStyle)}>{tag}</Text>
        </Pressable>
    ))

    return (
        <ScrollView>
            {/* 글자 클릭 */}
            <TouchableOpacity
                className="m-4 p-3 bg-blue-500 rounded-lg"
                onPress={() => router.push("/home")}
            >
                <Text className="flex justify-center text-white">Tabs</Text>
            </TouchableOpacity>

            {tagList}
        </ScrollView>
    )
    
    // return <Redirect href="/home" />
}
