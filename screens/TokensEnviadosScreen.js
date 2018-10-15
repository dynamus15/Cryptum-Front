import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from "react-native";
import { Icon } from "react-native-elements";
import { StackActions, NavigationActions } from 'react-navigation';

export default class CarteiraScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

    resetToAndGo(routeName, routeName2){
        const resetAction = StackActions.reset({
            index: 0,
            key: null,
            actions: [NavigationActions.navigate({ routeName: routeName })],
            });
        this.props.navigation.dispatch(resetAction)
        this.props.navigation.navigate(routeName2);
    }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <View style={{flex:1, flexDirection:'column', justifyContent:'center', alignItems:'center',}}>
            <View style={{paddingVertical:50, paddingTop:150}}>
                <Image style={styles.imagemCheck} source={require('../assets/images/checked.png')}></Image>
            </View>
            <Text style={styles.tokensEnviadosTitulo}>Tokens enviados com sucesso!</Text>
            <View style={styles.botaoVoltar}>
                <Button title="Voltar para Carteira" color="#FF8000" onPress={() => this.resetToAndGo('Enviar','Carteira') } />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    paddingHorizontal: 20
  },

  imagemCheck: {
      width: 120, 
      height: 120,

    },
  tokensEnviadosTitulo:{
      fontSize: 25,
      color: '#0A1B2A',
      paddingHorizontal: 40,
      textAlign: 'center',
  },

  tituloCard: {
    fontSize: 20,
    color: "#0B2F3A",
    textAlign: "left",
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  card: {
    paddingTop: 15,
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    elevation: 1
  },

  cardContent: {
    height: 300,
    width: 335,
    backgroundColor: "#ffff",
    borderRadius: 6
  },
  container: {
    flex: 1,
    backgroundColor: "#E6E6E6"
  },

  textoSaldo: {
    fontSize: 14,
    color: "#0B2F3A",
    lineHeight: 24,
    textAlign: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    paddingLeft: 50
  },

  saldoDinheiro: {
    fontSize: 35,
    color: "#ffff",
    textAlign: "center",
    paddingHorizontal: 12,
    paddingVertical: 12
  },

  tituloCarteira: {
    fontSize: 24,
    color: "#ffff",
    textAlign: "auto",
    paddingLeft: 35,
    paddingTop: 35
  },

  icon: {
    color: "#ffff",
    fontSize: 30,
    paddingTop: 38,
    paddingLeft: 20
  },

  botoes: {
    paddingVertical: 20,
    width: 175
  },

  botaoQR: {
    width: 290,
    height: 50,
    borderRadius: 5,
    borderColor: "#0B2F3A",
    borderWidth: 1
  },

  botaoVoltar: {
    paddingVertical: 20,
    width: 180,
  },

  botaoContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start"
  },

  botaoQRContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  },

  botaoPagar: {
    width: 280
  },

  contentContainer: {
    paddingTop: 30
  }
});
