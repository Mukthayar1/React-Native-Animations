import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native'


const SpinAnimationExample = () => {

    const SpinValue = new Animated.Value(0);
    const Spin = SpinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })

    const SpinAnimation = () => {
        Animated.timing(SpinValue, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true
        }).start()
    };

    useEffect(() => {
        SpinAnimation()
    }, [])

    return (
        <View>
            <Text>Spin Animation Example</Text>
            <Animated.Image
                resizeMode={'contain'}
                style={[styles.image, { transform: [{ rotate: Spin }] }]}
                source={require('../Assets/Images/moon.png')}>
            </Animated.Image>
        </View>
    )
}

export default SpinAnimationExample

const styles = StyleSheet.create({
    image: { marginTop: 20, height: 100, width: 100, alignSelf: "center", marginBottom: 20 }
})
