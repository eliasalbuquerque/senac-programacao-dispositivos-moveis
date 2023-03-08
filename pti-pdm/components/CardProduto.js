import { Text, View, StyleSheet, Image } from 'react-native';



export default function CardProduto(props) {
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={styles.nome}>{props.lanche.nome}</Text>
        <Text style={styles.calorias}>🔥{props.lanche.calorias} Calorias</Text>
        <Text style={styles.valor}>R$ {props.lanche.valor}</Text>
      </View>
      <View>
        <Image style={styles.img} source={{ uri: props.lanche.img }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    minWidth: '0%',
    flexDirection: 'row',
    marginTop: 20,
    borderRadius: 20,
  },
  text: {
    padding: 8,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  nome: {
    fontSize: 24,
    fontWeight: '900',
    color: 'rgb(54, 53, 53)',
  },
  calorias: {
    fontSize: 18,
    fontWeight: '500',
    color: 'rgb(54, 53, 53)',
  },
  valor: {
    fontSize: 20,
    fontWeight: '800',
    color: 'coral',
  },
});
