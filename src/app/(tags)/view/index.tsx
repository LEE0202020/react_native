import { Text, View } from 'react-native'

export default function index() {
    return (
        <View className='flex flex-col flex-1'>
            <Text className='text-[30px]'>리액트 네이티브에서는 HTML의 개념이 없습니다.</Text>
            <Text className='text-[30px]'>
                p, span, h1 태그등은 모두 
                <Text className='text-blue-500 font-bold text-[30px]'>텍스트 태그의 역할</Text>
                을 수행합니다.
            </Text>
            <Text className='text-[30px]'>또한 View는 Div태그의 역할을 수행합니다.</Text>
        </View>
    )
}