
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList
} from 'react-native';

const productosApple = [
  {
    id: '1',
    nombre: 'iPhone 18 Pro Max',
    desc: 'Pantalla ProMotion de 6.9", chip A19 Pro y cámara de 48 MP.',
    precio: '$9,000,000',
    img: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=300'
  },
  {
    id: '2',
    nombre: 'iPad M5 Pro',
    desc: 'Procesador M5 con pantalla OLED Ultra Retina XDR.',
    precio: '$2,500,000',
    img: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300'
  },
  {
    id: '3',
    nombre: 'Apple Watch Series 10',
    desc: 'Diseño ultra delgado con sensor de ECG y medición de presión.',
    precio: '$1,800,000',
    img: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=300'
  },
  {
    id: '4',
    nombre: 'MacBook Pro M4',
    desc: 'Rendimiento extremo con hasta 24 horas de batería.',
    precio: '$1,599.000',
    img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300'
  },
  {
    id: '5',
    nombre: 'AirPods Max 2',
    desc: 'Cancelación activa de ruido mejorada y audio espacial.',
    precio: '$1,200,000',
    img: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=300'
  },
  {
    id: '6',
    nombre: 'Mac mini M4',
    desc: 'Computadora de escritorio compacta con arquitectura M4.',
    precio: '$1,500,000',
    img: 'https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?w=300'
  },
  {
    id: '7',
    nombre: 'Apple Vision Pro 2',
    desc: 'Computación espacial avanzada con resolución micro-OLED 4K.',
    precio: '$3,499,000',
    img: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=300'
  },
  {
    id: '8',
    nombre: 'Studio Display',
    desc: 'Pantalla Retina 5K de 27 pulgadas con cámara de 12 MP.',
    precio: '$1,599,000',
    img: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300'
  },
  {
    id: '9',
    nombre: 'HomePod 2',
    desc: 'Sonido de alta fidelidad con asistente inteligente Siri integrado.',
    precio: '$2,990,000',
    img: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=300'
  },
  {
    id: '10',
    nombre: 'AirTag (Pack de 4)',
    desc: 'Rastreo preciso de pertenencias mediante la red Find My.',
    precio: '$1,200,000',
    img: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=300'
  },
];

export default function WorkArea() {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.tituloSeccion}>
        Catálogo Principal
      </Text>

      <FlatList
        data={productosApple}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={{ uri: item.img }}
              style={styles.imagenProd}
            />

            <View style={styles.info}>
              <Text style={styles.nombre}>
                {item.nombre}
              </Text>

              <Text style={styles.desc}>
                {item.desc}
              </Text>

              <Text style={styles.precio}>
                {item.precio}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    paddingHorizontal: 16,
  },
  tituloSeccion: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1C1C1E',
    marginVertical: 12,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E5E5EA',
  },
  imagenProd: {
    width: 75,
    height: 75,
    borderRadius: 8,
    backgroundColor: '#F2F2F7',
  },
  info: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
  nombre: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1C1C1E',
  },
  desc: {
    fontSize: 12,
    color: '#8E8E93',
    marginVertical: 2,
  },
  precio: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#007AFF',
  },
});
