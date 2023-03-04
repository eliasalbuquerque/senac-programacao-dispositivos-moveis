import './App.css'
import CardProduto from './components/CardProduto'
import Header from './components/Header'
import Footer from './components/Footer'

// import React from 'react';
// import {View, Text} from 'react-native';

export default function App() {

  return (
    <view>
      <Header />
      <CardProduto />
      <CardProduto />
      <Footer />
    </view>
  )
}