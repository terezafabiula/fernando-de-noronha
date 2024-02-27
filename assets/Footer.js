import {View, Text, StyleSheet} from 'react-native'

export function Footer( ){
  return(
    <View>

      <Text style = {styles.footer}> 2024 Fernando de Noronha Turismo</Text>
     
    </View>
  )
}

const styles = StyleSheet.create ({
  footer:{
    
   
    textAlign: 'center',
   
    
  }
  
})