
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions
} from 'react-native';

const { width } = Dimensions.get('window');

export default function Carousel() {
  const destacados = [
    {
      id: 'c1',
      nombre: 'iPhone 18 Pro Max',
      badge: 'NUEVO',
      uri: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600',
    },
    {
      id: 'c2',
      nombre: 'iPad M5',
      badge: 'ULTRA POTENTE',
      uri: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600',
    },
    {
      id: 'c3',
      nombre: 'Apple Watch Series 10',
      badge: 'SALUD AVANZADA',
      uri: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600',
    },
  ];

  return (
    <View style={styles.contenedor}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        {destacados.map((item) => (
          <View key={item.id} style={styles.slide}>
            <Image
              source={{ uri: item.uri }}
              style={styles.imagen}
            />

            <View style={styles.overlay}>
              <Text style={styles.badge}>{item.badge}</Text>
              <Text style={styles.tituloSlide}>
                {item.nombre}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    height: 180,
    marginVertical: 10,
  },
  slide: {
    width: width - 32,
    marginHorizontal: 16,
    height: 180,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#000',
  },
  imagen: {
    width: '100%',
    height: '100%',
    opacity: 0.75,
  },
  overlay: {
    position: 'absolute',
    bottom: 16,
    left: 16,
  },
  badge: {
    backgroundColor: '#2997FF',
    color: '#FFF',
    fontSize: 10,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  tituloSlide: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 4,
  },
});
