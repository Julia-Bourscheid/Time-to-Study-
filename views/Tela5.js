import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';


export default function Tela5({navigation, route }) {

  const {title, url, conteudo } = route.params;
  return (
    <View style={styles.container}>

      <View style={{marginBottom: 15}}>
        <Text style={styles.label}> Mais sobre o conteúdo de: </Text>
        
        
        <View>
            <Text style={{fontSize: 30, textAlign: 'center'}}> {title} </Text>
            <Image source={url}style={{width:260, height:170, marginBottom: 10, alignSelf: 'center'}}></Image>
            <Text style={{fontSize:22, padding: 25, marginTop:10, marginBottom:10, textAlign: 'justify'}}> {conteudo} </Text>
        </View>
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
    marginTop:'aut'
  },

  label: {
    textAlign:'left',
    fontSize: 25,
    fontWeight: 'bold', 
  },

  Input: {
    backgroundColor:'white',
    padding: 1,
    fontSize: 20,
  },

  containerInput:{
    marginBottom: 10,
    padding:1,
    borderWidth: 2,
  },
  
  Imagem:{
    width:40, 
    height:40, 
    marginBottom: 20, 
    marginTop: 10,
    marginLeft: 300
  }
});