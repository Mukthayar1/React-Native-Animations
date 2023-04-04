import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native'


const ScalingAnimationExample = () => {

    const ScaleValue = new Animated.Value(0);
    const Scale = ScaleValue.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 1.3]
    })

    const ScalingAnimation = () => {
        Animated.timing(ScaleValue, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true
        }).start()
    };

    useEffect(() => {
        ScalingAnimation()
    }, [])

    return (
        <View>
            <Text>Scale Animation Example</Text>
            <Animated.Image
                resizeMode={'contain'}
                style={[styles.image, { transform: [{ scale: Scale }] }]}
                source={require('../Assets/Images/pizza.png')}>
            </Animated.Image>
        </View>
    )
}

export default ScalingAnimationExample

const styles = StyleSheet.create({
    image: { marginTop: 30, height: 100, width: 100, alignSelf: "center", marginBottom: 20 }
})
