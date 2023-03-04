import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import CardProduto from './components/CardProduto';

export default function App() {
  const lanche01 = {
    nome: 'Beef Burguer',
    calorias: '225',
    valor: '12.00',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfNr83Gs2YzJiE4B12zJNyvvoJh9qxKl3fTw&usqp=CAU',
  };
  const lanche02 = {
    nome: 'Pancakes',
    calorias: '227',
    valor: '15.00',
    img: 'https://static.vecteezy.com/system/resources/thumbnails/002/482/982/small_2x/breakfast-pancakes-hand-draw-and-line-style-icon-design-free-vector.jpg',
  };
  const lanche03 = {
    nome: 'French Fries',
    calorias: '312',
    valor: '10.00',
    img: 'https://thumbs.dreamstime.com/b/french-fries-flying-to-paper-box-sketch-style-hand-drawn-illustration-fried-potato-fast-food-retro-artwork-vector-image-isolated-256585715.jpg',
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#rgb(233, 233, 233)',
      padding: 8,
    },
  });

  return (
    <ScrollView style={styles.container}>
      <CardProduto lanche={lanche01} />
      <CardProduto lanche={lanche02} />
      <CardProduto lanche={lanche03} />
      <CardProduto lanche={lanche01} />
      <CardProduto lanche={lanche02} />
      <CardProduto lanche={lanche03} />
      <CardProduto lanche={lanche01} />
      <CardProduto lanche={lanche02} />
      <CardProduto lanche={lanche03} />
      <CardProduto lanche={lanche01} />
      <CardProduto lanche={lanche02} />
      <CardProduto lanche={lanche03} />
    </ScrollView>
  );
}
