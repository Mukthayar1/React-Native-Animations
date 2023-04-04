import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native'


const FadeAnimationExample = () => {

    const FadeValue = new Animated.Value(0);

    const FadeAnimation = () => {
        Animated.timing(FadeValue, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true
        }).start()
    };

    useEffect(() => {
        FadeAnimation()
    }, [])

    return (
        <View>
            <Text>Fade Animation Example</Text>
            <Animated.Image
                resizeMode={'contain'}
                style={[styles.image, { opacity: FadeValue }]}
                source={require('../Assets/Images/boy.png')}>
            </Animated.Image>
        </View>
    )
}

export default FadeAnimationExample

const styles = StyleSheet.create({
    image: { marginTop: 20, height: 100, width: 100, alignSelf: "center", marginBottom: 20 }
})
