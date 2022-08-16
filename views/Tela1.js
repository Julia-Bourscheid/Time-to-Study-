
import { Image, StyleSheet, Text, View, Button} from 'react-native';

export default function Tela1({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:50, marginTop:50, marginBottom:50}}></Text>

      <Image source={require('../assets/TimeToStudy.jpg')}style={{width:350, height:350, marginBottom: 150}}></Image>

      <View style={{width: 200, height: 300}} >
      <Button onPress={()=>navigation.navigate('Tela2')}title={'Cadastrar'} color='black'></Button>
      <Button onPress={()=>navigation.navigate('Entrar')}title={'Entrar'} color='lightblue' ></Button>
      </View>
     
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'start',
    marginTop:'auto',
    flexDirection: 'column',
  },

  caixaInformacao: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 5,
    borderRadius: 5,
    width: 200,
  },
});


