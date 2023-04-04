import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native';

//Animations Examples
import FadeAnimationExample from '../Components/FadeAnimationExample';
import SpinAnimationExample from '../Components/SpinAnimationExample';
import ScalingAnimationExample from '../Components/ScalingAnimationExample';
import SpringAnimationExample from '../Components/SpringAnimationExample';
import ParallelAnimationExample from '../Components/ParallelAnimationExample';


export default function Animations() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <ParallelAnimationExample />
                <SpinAnimationExample />
                <ScalingAnimationExample />
                <SpringAnimationExample />
                <FadeAnimationExample />

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: "center",
        alignItems: "center"
    }
})