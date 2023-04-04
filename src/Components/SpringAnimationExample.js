import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Animated, Alert } from 'react-native'


const SpringAnimationExample = () => {

    const SpringValue = new Animated.Value(0);


    const SpringAnimation = () => {
        Animated.timing(SpringValue, {
            toValue: 1,
            friction: 1,
            duration: 2000,
            useNativeDriver: true
        }).start()
    };

    useEffect(() => {
        SpringAnimation()
    }, [])

    return (
        <View>
            <Text>Spring Animation Example</Text>
            <Animated.Image
                resizeMode={'contain'}
                style={[styles.image, { transform: [{ scale: SpringValue }] }]}
                source={require('../Assets/Images/tree.png')}>
            </Animated.Image>
        </View>
    )
}

export default SpringAnimationExample

const styles = StyleSheet.create({
    image: { marginTop: 20, height: 100, width: 100, alignSelf: "center", marginBottom: 20 }
})
