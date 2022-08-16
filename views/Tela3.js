import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';


export default function Tela3({navigation}) {
  return (

    <View style={styles.container}>
      <View>
        <Image source={require('../assets/livros.jpeg')}style={{width:110, height:110, marginBottom: 50}}></Image>
      </View>
      <Text style={{fontSize:25, fontWeight: 'bold', marginBottom: 10 }}> Informações Escolares </Text>

      <View>
      <Text style={styles.label}> Qual sua escola? </Text>
      <View style={styles.containerInput}>
      <TextInput style={styles.Input}
      placeholder='Escola'
      ></TextInput>
      </View>
      </View>
      
      <View>
      <Text style={styles.label}> Que série você estuda? </Text>
      <View style={styles.containerInput}>
      <TextInput style={styles.Input}
      placeholder='Serie'
      ></TextInput>
      </View>
      </View>
      
      <View>
      <Text style={styles.label}> Qual sua matéria favorita? </Text>
      <View style={styles.containerInput}>
        <TextInput style={styles.Input}
        placeholder='Materia favorita'
        ></TextInput>
        </View>
      </View>
     
     <View>
     <Text style={styles.label}> Qual nota deseja obter? </Text>
     <View style={styles.containerInput}>
      <TextInput style={styles.Input}
      placeholder='Nota desejada'
      ></TextInput>
      </View>
     </View>
      
      <View style={{marginTop:30, width: 200, height: 120  }}>
        <Button onPress={()=>navigation.navigate('Tela4')} title={'Cadastrar'} color='black'></Button>
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