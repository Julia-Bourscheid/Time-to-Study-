
import { StyleSheet, Text, View, TextInput, Button, Image, checkToNavigate} from 'react-native';


export default function Entrar({navigation}) {
  return (

    <View style={styles.container}>
      <View>
      <Image source={require('../assets/Entrar.jpg')}style={{width:110, height:110, marginBottom: 30}}></Image>
      </View>
      <Text style={{fontSize:25, fontWeight: 'bold', marginBottom: 30 }}> Entrar</Text>

      <View>
      <Text style={styles.label}> Nome de Usuário </Text>
      <View style={styles.containerInput}>
        <TextInput style={styles.Input} 
        placeholder='Nome'
        ></TextInput>
        </View>
      </View>

     <View>
     <Text style={styles.label}
      > Senha </Text>
     <View style={styles.containerInput}>
      <TextInput style={styles.Input}
      placeholder='Senha'
      secureTextEntry
      ></TextInput>
      </View>
     </View>

      <View style={{marginTop:30, width: 200, height: 150 }}>
        <Button onPress={()=>navigation.navigate('Tela4')} title={'Entrar'} color='black'></Button>
      </View>

      
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:'aut'
  },

  label: {
    textAlign:'left',
    fontSize: 15,
    fontWeight: 'bold', 
  },

  Input: {
    backgroundColor:'white',
    padding: 7,
    fontSize: 18,
  },

  containerInput:{
    marginBottom: 5,
    padding:1,
    borderWidth: 2,
  }
});