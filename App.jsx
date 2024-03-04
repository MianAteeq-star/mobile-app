import { View, Text, SafeAreaView, StyleSheet ,useColorScheme} from 'react-native'
import React from 'react'

const App = () => {
  const darkMode = useColorScheme === "light"
  return (
    <SafeAreaView>

    <View>
      <Text  style={ darkMode? styles.textWhite : styles.textBlack}>Hello World !</Text>
    </View>
    </SafeAreaView>
  )
}

 const styles = StyleSheet.create({
hello:{
  color: 'blue',
  textAlign:"center",
  fontSize: 20,
  fontWeight: 'bold'
},
textWhite:{
  color: 'white',
},
textBlack:{
  color: 'black',
}
})

export default App