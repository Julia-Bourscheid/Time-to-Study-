
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';


export default function Tela2({navigation}) {
  return (

    <View style={styles.container}>
      <View>
        <Image source={require('../assets/Entrar.jpg')}style={{width:110, height:100, marginBottom: 30}}></Image>
      </View>
      <Text style={{fontSize:25, fontWeight: 'bold', marginBottom: 10 }}> Seu Perfil </Text>

      <View>
      <Text style={styles.label}> Qual seu nome? </Text>
      <View style={styles.containerInput}>
      <TextInput style={styles.Input}
      placeholder='Nome'
      ></TextInput>
      </View>
      </View>

      <View>
      <Text style={styles.label}> Qual sua idade? </Text>
      <View style={styles.containerInput}>
      <TextInput style={styles.Input}
      placeholder='Idade'
      ></TextInput>
      </View>
      </View>
      
      <View>
      <Text style={styles.label}> Qual sua cidade? </Text>
      <View style={styles.containerInput}>
      <TextInput style={styles.Input}
      placeholder='Cidade'
      ></TextInput>
      </View>
      </View>

      <View>
      <Text style={styles.label}> Crie uma senha</Text>
      <View style={styles.containerInput}>
      <TextInput style={styles.Input}
       placeholder='Senha'
       secureTextEntry
      ></TextInput>
      </View>
      </View>
      
      <View style={{marginTop:30, width: 200, height: 120 }}>
        <Button onPress={()=>navigation.navigate('Tela3')} title={'Próximo'} color='black'></Button>
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