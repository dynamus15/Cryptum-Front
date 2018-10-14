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
import { TextInput } from "react-native-gesture-handler";

export default class CarteiraScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          {/*Toolbar-------------------------------------------- */}
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ height: 80, backgroundColor: "#0A1B2A" }}>
              <Icon iconStyle={styles.icon} name="arrow-back" color="#ffff" onPress={() => this.props.navigation.goBack()} />
            </View>
            <View style={{ height: 80, width: 320, backgroundColor: "#0A1B2A" }}>
              <Text style={styles.tituloCarteira}>Enviar</Text>
            </View>
          </View>
          {/*Toolbar-------------------------------------------- */}
          <View style={styles.card}>
            <View style={styles.cardContent}>
              <Text style={styles.tituloCard}>Digite a quantidade de CPTs que você deseja enviar:</Text>
              <TextInput placeholder="Quantidade de CPTs. Ex: 15,63" selectionColor="#000" underlineColorAndroid="transparent" style={styles.textInput}/>
              <View style={styles.botaoContainer}>
                <View style={styles.botaoProximo}>
                  <Button title="Enviar" color="#FF8000" onPress={() => navigate('TokensEnviados')}/>
                </View>
              </View>
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
    height: 220,
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

  botaoProximo: {
    paddingVertical: 20,
    width: 150
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
