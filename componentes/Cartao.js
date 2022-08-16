import { Image, StyleSheet, Text, View, Button} from 'react-native';

export default function Cartao({
    title,
    url,
    onclick

}) {
  return (
    <View>
      <Text style={{fontSize: 20}}> {title} </Text>
      <Image source={url}style={{width:200, height:150, marginBottom:15  }}></Image>
      <Button onPress={onclick}title={'Leia Mais'} color='black'></Button>
      </View>
    
  );
}

const styles = StyleSheet.create({
  
});
