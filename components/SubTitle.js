import { View, Text, StyleSheet } from 'react-native'

export function SubTitle() {
  return (
    <View>
      <Text style={styles.title}>Explore as Maravilhosas Praias</Text>
      <Text style={styles.subtitle}>Visite as praia de Fernando de Noronha e mergulhe nas águas azul-turquesa.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    backgroundColor: '#ff8c00',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    padding: 20,
  },

  subtitle: {
    marginLeft: 10,
    marginBottom: 20,
  }
})