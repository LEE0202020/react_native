import { Image, Pressable, ScrollView, Text, View } from 'react-native'
import useCountStore from '../../../../store/useCountStore'

export default function index() {

    const {count, increase, decrease} = useCountStore()

    return (
        <ScrollView>
            <Text>현재 고양이 수: {count}마리</Text>
            <View>
                <Pressable
                    onPress={decrease}
                    className='bg-blue-500 px-4 py-2 rounded-lg active:bg-blue-700'
                >
                    <Text>감소 (-)</Text>
                </Pressable>
                <Pressable
                    onPress={increase}
                    className='bg-blue-500 px-4 py-2 rounded-lg active:bg-blue-700'
                >
                    <Text>증가 (+)</Text>
                </Pressable>
            </View>

            {count <= 0 ? (
                <View>
                    <Text>고양이를 불러오세요!😽</Text>
                </View>
            ) : (
                <View
                    className='flex flex-wrap gap-2 max-w-[300px]'
                >
                    {Array.from({length: count}).map((_, i) => (
                        <Image 
                            className='rounded-full'
                            key={i}
                            style={{width: 20, height: 20}}
                            source={require("@/assets/images/zustand/cat01.jpg")}
                            resizeMode="cover"
                        />
                    ))}
                </View>
            )}

        </ScrollView>
    )
}