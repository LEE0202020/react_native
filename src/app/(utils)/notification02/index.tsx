import { cn } from '@/lib/utils';
import Constants from 'expo-constants';
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import { useState } from 'react';
import { Alert, Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true, // 알림음 재생
    shouldSetBadge: true, // 안 읽은 알람 개수 표시
    shouldShowBanner: true, // 배너 형태로 팝업
    shouldShowList: true, // 알림센터 드래그로 내리는 목록에 표시
    shouldShowAlert: true // 팝업 알림 표시 여부
  }),
});

export default function index() {
    const [statusMessage, setStatusMessage] = useState<string>("버튼을 눌러 토큰을 발급받으세요.")

    const buttonStyle = "m-4 p-3 bg-blue-500 rounded-lg"
    const textStyle = "flex justify-center text-white"

    const sendTestNotification = async () => {


        setStatusMessage("알림 예약 중...")

        await Notifications.scheduleNotificationAsync({
            content: {
                title: "승현: 과자 네나 먹어!",
                body: "이것은 앱 내부에서 쓴 테스트 알림입니다.",
                data: {
                    extraData: "전달할 데이터~~~"
                },
            },
            trigger: {
                type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
                seconds: 2 // 2초 뒤에 발송
            }
        })

        setStatusMessage("2초뒤 알림이 전송됩니다.")

    }

    return (
        <ScrollView>
            <Text>{statusMessage}</Text>
            {/* 토큰 발급 버튼 */}
            <View>
                <TouchableOpacity
                    onPress={sendTestNotification}
                    className={cn(buttonStyle)}
                >
                    <Text className={cn(textStyle)}>2초뒤에 알림</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}