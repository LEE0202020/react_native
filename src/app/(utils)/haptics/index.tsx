import { cn } from '@/lib/utils'
import * as Haptics from "expo-haptics"
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'

export default function index() {
    const buttonStyle = "m-4 p-3 bg-blue-500 rounded-lg"  //버튼 바깥 4, 안쪽 3, 배경 파랑 , 모서리 둥글 
    const textStyle = "flex justify-center text-white"

    const triggerImpact = [
        {
            content: "진동 임팩트: 가볍게(Light)",
            enum: Haptics.ImpactFeedbackStyle.Light
        },
        {
            content: "진동 임팩트: 중간(Medium)",
            enum: Haptics.ImpactFeedbackStyle.Medium
        },
        {
            content: "진동 임팩트: 강하게(Heavy)",
            enum: Haptics.ImpactFeedbackStyle.Heavy
        },
        {
            content: "진동 임팩트: 단단하게(Rigid)",
            enum: Haptics.ImpactFeedbackStyle.Rigid
        },
    ]

    const triggerImpactButtons = triggerImpact.map((item, i) => (
         <TouchableOpacity
            key={i}
            onPress={() => {
                Haptics.impactAsync(item.enum)
            }}
            className={cn(buttonStyle)}
        >
            <Text className={cn(textStyle)}>{item.content}</Text>
        </TouchableOpacity>
    ))


    const triggerNotification = [
         {
            content: "진동 임팩트: 성공(Success)",
            enum: Haptics.NotificationFeedbackType.Success
        },
        {
            content: "진동 임팩트: 경고(Warning)",
            enum: Haptics.NotificationFeedbackType.Warning
        },
        {
            content: "진동 임팩트: 에러(Error)",
            enum: Haptics.NotificationFeedbackType.Error
        }
    ]
    const triggerDuration = [
        {
            content: "시간 진동: 0.5초 (500ms)",
            duration: 500
        },
        {
            content: "시간 진동: 1초 (500ms)",
            duration: 1000
        },
        {
            content: "시간 진동: 2초 (500ms)",
            duration: 2000
        }
        
    ]

    const triggerNotificationButtons = triggerNotification.map((item, i) => (
         <TouchableOpacity
            key={i}
            onPress={() => {
                Haptics.notificationAsync(item.enum)
            }}
            className={cn(buttonStyle)}
        >
            <Text className={cn(textStyle)}>{item.content}</Text>
        </TouchableOpacity>
    ))

    return (
        <ScrollView>
            <View>{triggerImpactButtons}</View>
            <View>{triggerNotificationButtons}</View>
        </ScrollView>
    )
}