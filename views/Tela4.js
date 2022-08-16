import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import Cartao from '../componentes/Cartao';

const dados = [ 
  {
    title: 'Guerra Fria',
    url:require('../assets/GuerraFria.jpeg.jpg'),
    conteudo: 'Foi um conflito político-ideológico entre Estados Unidos - EUA e União Soviética - URRS, esse conflito foi responsável por polarizar o mundo em dois grandes blocos, um aliado ao capitalismo e o outro ao comunismo. Essa polarização resultou em vários conflitos de média e pequena escala em locais diferentes do mundo. A Guerra Fria se iniciou após a Segunda Guerra Mundial, e essa guerra foi inicializada com um discurso do presidente americano Harry Truman. Foi uma guerra mais política do que armada, porém os dois países investiram muito em armamentos pesados. A guerra fria é conhecida como uma corrida espacial e armamentista, onde EUA e URRS disputavam a corrida para ver quem chegava primeiro á lua. Acontecimentos durante a Guerra Fria: Revolução chinesa- expansionismo, fortalecimento do comunismo. Guerra da Coreia- disputa entre Coreia do Sul e Coreia do Norte. Crise dos mísseis de Cuba- onde URRS instalou uma base de mísseis em Cuba, os EUA ficaram sabendo e logo instalaram uma base na Turquia. Foi o momento mais tenso da Guerra Fria. Guerra do Vietnã- conflito entre Vietnã Sul e Norte, onde os dois procuravam unificar o país sob seu controle. Guerra do Afeganistão- Soviéticos invadiram o Vietnã que queriam apoiar o governo comunista contra os rebeldes islâmicos. Plano Marshal- reconstrução dos países destruídos pela Segunda Guerra pelos americanos. Criação da Otan e Pacto de Varsóvia. Quem venceu a guerra Fria foram os EUA. '
  },
  {
    title: '1ª Guerra Mundial',
    url:require('../assets/Guerra.jpg'),
    conteudo:'Guerra entre grandes potências que disputavam entre si mercado consumidor, matéria-prima e metais preciosos. Guerra teve termino com a assinatura de Tratado de Versalhes. Duas alianças se formaram: Tríplice Aliança - Alemanha, Itália e Império Austro-húngaro, e Tríplice Entente - EUA, Rússia, França e Inglaterra. O Brasil participou da Guerra com navios que afundaram, auxílio médico e humanitário. Alguns motivos da 1° Guerra foram: Unificação de Itália e Alemanha. Neoimperialismo. Grande investimento em armamento. O estopim da guerra foi a morte de Francisco Ferdinando.'
  },

  {
    title: '2ª Guerra Mundial',
    url:require('../assets/segunda-guerra-mundial.jpg'),
    conteudo:'Conflito global, que ficou marcado com eventos como o Holocausto e as bombas atômicas. Busca pelo espaço vital. Resultou em 70 milhões de mortes. O estopim foi a invasão da Polônia pelos alemães. Dividiu-se me dois grupos: Aliados - Reino Unido, França, URRS e EUA e Eixo - Alemanha, Itália e Japão. Teve como principal causa o expansionismo e o militarismo da Alemanha Nazista. Expansionismo de Hitler. O Eixo foi derrotado e humilhado com a assinatura do Tratado de Versalhes. Hitler se suicidou, tomando veneno e depois sendo queimado.'
  },

  {
    title: 'Guerra dos Farrapos',
    url:require('../assets/guerradosfarrapos.jpg'),
    conteudo:'Conhecida como Revolução Farroupilha, ocorreu na Região Sul do Brasil. Foi um conflito regional contrário ao governo imperialista e com caráter republicano. Houve grande descontentamento político com o governo imperial. Líder Bento Gonçalves.  Morreram cerca de 3 mil pessoas. Luta entre Farroupilhas e Chimangos.'
  },

  {
    title: 'Revolução Industrial',
    url:require('../assets/industrial.jpg'),
    conteudo:'Período de grandes mudanças e desenvolvimento, principalmente tecnológico. Teve início na Inglaterra no séc XVIII. Consolidou o início da indústria, trabalho feito por máquinas. Pioneirismo ingles. Criação das locomotivas/máquinas a vapor e estradas de ferro. Podemos dividir as revoluções me 3: as quais ocorreram em períodos diferentes. 1° Revolução Industrial - 2° Revolução Industrial - 3° Revolução Industrial - . Trabalhos assalariados. Grande procura por empregos, trabalhos insalubres, em locais imundos sem condições, grande taxa de mortes. Ocorreram revoltas da população por busca de melhores condições. Estímulo ao consumo, maior produção, menor preço.'
  },

  {
    title: 'Independência do Brasil',
    url:require('../assets/independencia.jpg'),
    conteudo:'Processo histórico de separação entre Brasil e Portugal, que se deu em 7 de setembro de 1822. Com a independência o Brasil deixou de ser colônia de Portugal e ser nação independente e virou monarquia. Ocorreram importantes revoltas: Inconfidência mineira, Insurreição pernambucana, revolução do Porto. Houve expansionismo, de início a fronteira para os meios do Brasil. Os portugueses buscavam encontrar minério, mas ao final só acharam pau brasil. A independência foi proclamada, por Dom Pedro primeiro as margens do Rio Ipiranga.'
  },

  {
    title: 'Revolução Francesa',
    url:require('../assets/francesa.jpg'),
    conteudo:'Foi um movimento burguês, que acabou com o absolutismo na França e espalhou ideias liberais pelo mundo. O fato mais significativo foi a tomada da prisão de Bastilha. Dividida em três períodos: Monarquia Constitucional - 1789-1792 - Convenção Nacional - 1792-1795 - Diretório - 1795-1799. Criação do Iluminismo, movimento de grande importância e mudanças. Divisão em estados, clero, nobreza e burguesia. Lema: Liberdade, igualdade e Fraternidade. Principais líderes: Daton, Robespierre e Marat. Golpe do 18 brumário. Napoleão Bonaparte no poder.'
  },

  {
    title: 'Ditadura Militar',
    url:require('../assets/ditadura.jpg'),
    conteudo:'Regime autoritário que teve início com o golpe militar, com a deposição do presidente João Goulart. O regime durou 21 anos e estabeleceu forte censura à imprensa, restrição de direitos políticos e perseguição. Houve grande resistência da sociedade e crescimento econômico. Constituição de 1967, atos constitucionais. Presidentes - Castelo Branco, Costa e Silva e Medici.'
  },

  {
    title: 'Era Vargas',
    url:require('../assets/Vargas.jpg'),
    conteudo:'Vargas assumiu segundo um golpe militar, após a morte de Washington Luis. Durante seu mandato, Vargas centralizou o poder. Teve três períodos durante seu mandato: Governo Provisório - Governo Constitucional - Estado Novo - . Vargas ficou conhecido como “pai dos pobres”. Características do período de Vargas: Centralização do poder. Propagando política. Política trabalhista. Capacidade de negociação política. Getúlio foi forçado a renunciar.'
  },

  {
    title: 'Feudalismo',
    url:require('../assets/feudalismo.webp'),
    conteudo:'É uma forma de organização social e econômico instituída na Europa na Idade Média. Foi um período de ruralização, trabalho na agricultura. O feudalismo iniciou com a queda do Império Romano. Volta das pessoas para o campo, descentralização das cidades. Os donos das terras = feudos se tornaram poderosos. Divisão desigual das terras. Pirâmide social. Fortalecimento da igreja católica. Mão de obra servil.'
  }
]
export default function Tela4({navigation}) {
  const [value, setValue] = React.useState('')
  return (
    <View style={styles.container}>
      <View>
      <Image style={styles.Imagem} source={require('../assets/configuracao.jpg')}></Image>
      </View>

      <View style={{marginBottom: 15}}>
      <Text style={styles.label}> Pesquisa </Text>
      <View style={styles.containerInput}>
        <TextInput style={styles.Input} value={value} onChangeText={setValue}
        placeholder='Vamos estudar?'
        ></TextInput>
      </View>
       
      <View >
        <Text style={{fontSize:22}}> Conteúdos relacionandos: </Text>
      </View>
      </View>
      
      {dados.filter((item)=>{
      return item.title.indexOf(value) != - 1
      })
      .map((item) => { 
        return <Cartao title = {item.title} url = {item.url} onclick = {(()=>navigation.navigate('Tela5', item))}/>
      })}

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
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