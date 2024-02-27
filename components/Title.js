import { View, Text, StyleSheet } from 'react-native'

export function Title() {
  return (
    <View>
      <Text style={styles.title}>Bem-vindo a Fernando de Noronha</Text>
      <Text style={styles.subtitle}>Descubra o paraíso das praias intocadas e águas cristalinas.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    backgroundColor: 'green',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    padding: 25,
  },

  subtitle: {
    marginLeft: 10,
  }
})