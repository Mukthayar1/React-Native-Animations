import React from 'react'
import { StatusBar } from 'react-native'
import Animations from './src/Animations/Animations'

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <Animations />
    </>

  )
}