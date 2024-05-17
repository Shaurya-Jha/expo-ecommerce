import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { Text } from 'react-native-paper'

const Page = () => {

    const {id} = useLocalSearchParams()

  return (
    <Text>{id}</Text>
  )
}

export default Page