import {View, Text, StyleSheet} from 'react-native'

export function Button( ){
  return(
    <View>

      <Text style = {styles.button}> Reserve sua Viagem</Text>
     
    </View>
  )
}

const styles = StyleSheet.create ({
  button:{
    backgroundColor:'#bbd2ec',
    fontSize: '25px',
    textAlign: 'center',
    fontWeight: 'bold',
    padding:  20,
    margin: 20,
    color: '#0404e2'
    
  }
  
})