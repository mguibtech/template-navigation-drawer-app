import { StyleSheet, Text, View } from 'react-native';
import { Header } from '../../components/Header';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header/>
      
      <Text style={styles.title}>Dashboard!</Text>
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
  }
});
