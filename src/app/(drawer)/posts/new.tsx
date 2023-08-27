import { StyleSheet, Text, View } from 'react-native';
import { Header } from '../../../components/Header';

import {Link} from 'expo-router'

export default function New() {
  return (
    <View style={styles.container}>
      <Header/>
      
      <Text style={styles.title}>Novo Post!</Text>

      <Link href="/posts" style={styles.button}>
        Voltar
      </Link>

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