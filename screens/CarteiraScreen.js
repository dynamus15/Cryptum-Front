import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  ImageBackground,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class CarteiraScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
            {/*Layout do SALDO------------------------------------- */}
            <View style={{flex:1, flexDirection:'column', justifyContent:'center', alignItems:'stretch',}}>
                <View style={{height:270, backgroundColor: '#0A1B2A'}}>
                <ImageBackground source={require('../assets/images/coins-wallpaper3.png')} imageStyle={styles.imagemMoeda} style={styles.imagemMoedaContainer}>
                    <Icon iconStyle={styles.icon} name='refresh' color='#ffff'/>
                    <Text style={styles.tituloCarteira}>Carteira</Text>
                    <Text style={styles.textoSaldo}>Saldo Disponível</Text>
                    <View style={{flex:1, flexDirection:'column', justifyContent:'flex-start', alignItems:'center',}}>
                        <View style={{height:70, backgroundColor: '#0B2F3A', borderRadius:10}}>
                            <Text style={styles.saldoDinheiro}>100,03 CPT</Text>
                        </View> 
                    </View>
                  </ImageBackground>
                  </View>
            </View>
            {/*Layout do SALDO------------------------------------- */}
        </ScrollView>

        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

imagemMoeda:{
  resizeMode:'cover',
},

  imagemMoedaContainer:{
    height: 270 ,
    
  },

  textoSaldo: {
    fontSize: 18,
    color: '#A4A4A4',
    lineHeight: 24,
    textAlign: 'center',
    paddingVertical: 10,
  },

  saldoDinheiro: {
    fontSize: 35,
    color: '#ffff',
    textAlign: 'center',
    paddingHorizontal: 12,
    paddingVertical: 12,

  },

  tituloCarteira: {
    fontSize: 24,
    color: '#ffff',
    lineHeight: 24,
    textAlign: 'auto',
    paddingLeft: 25,
  },

  icon: {
    color: '#ffff',
    fontSize: 30,
    paddingTop: 40,
    paddingLeft: 300,
    textAlign: 'auto',
    lineHeight: 24,

  },

  botoes: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    width: 150,
  },

  botaoPagar: {
    width: 280,
  },

  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          height: -3
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
