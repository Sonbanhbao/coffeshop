import { View, Text, Image, TouchableOpacity } from 'react-native';

export default function CoffeeCard({ item, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: 1,
        margin: 8,
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 10
      }}
    >
      <Image source={{ uri: item.image }}
        style={{ height: 120, borderRadius: 15 }}
      />

      <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
      <Text>⭐ {item.rating}</Text>
      <Text>${item.price}</Text>
    </TouchableOpacity>
  );
}