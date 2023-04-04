import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native'


const ParallelAnimationExample = () => {

    const Scale = new Animated.Value(0)
    const SpringVal = new Animated.Value(1)
    const ScaleValue = Scale.interpolate({
        inputRange: [0, 1],
        outputRange: [-1, 1]
    });

    useEffect(() => {
        Animated.parallel(
            [Animated.timing(Scale, {
                toValue: 1,
                duration: 3000,
                useNativeDriver: true
            }),
            Animated.spring(SpringVal, {
                toValue: 2,
                friction: 1,
                tension: 0.5,
                useNativeDriver: true
            }),
            ]).start()
    }, [])

    return (
        <View>
            <Text>Parallel Animation Example</Text>
            <Animated.Image
                resizeMode={'contain'}
                style={[styles.image, { transform: [{ scaleY: ScaleValue }] }]}
                source={require('../Assets/Images/pizza.png')}>
            </Animated.Image>
        </View>
    )
}

export default ParallelAnimationExample

const styles = StyleSheet.create({
    image: { marginTop: 30, height: 100, width: 100, alignSelf: "center", marginBottom: 20 }
})
