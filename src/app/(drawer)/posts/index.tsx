import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Header } from '../../../components/Header';
import {Link, useNavigation} from 'expo-router'


export default function Home() {

  const nativation = useNavigation()

  return (
    <View style={styles.container}>
      <Header/>
      
      <Text style={styles.title}>Post!</Text>
      <Link href="/posts/new" style={styles.button}>
        Novo Post
      </Link>

      <TouchableOpacity onPress={nativation.goBack} style={styles.button}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize: 32,
    color: "#fff"
  },
  button:{
    backgroundColor: '#11ced8',
    color: '#fff',
    height: 54,
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 7,
    fontSize: 18
  }
});