import { View, Text, Image } from 'react-native';
import { useState } from 'react';
import SizeButton from '../components/SizeButton';

export default function Detail({ route }) {
  const { item } = route.params;
  const [size, setSize] = useState('M');

  return (
    <View style={{ flex:1, padding:20 }}>
      <Image source={{ uri:item.image }}
        style={{ height:200, borderRadius:20 }}
      />

      <Text>{item.name}</Text>
      <Text>{item.desc}</Text>

      <View style={{ flexDirection:'row', marginTop:20 }}>
        {['S','M','L'].map(s => (
          <SizeButton
            key={s}
            label={s}
            active={size===s}
            onPress={()=>setSize(s)}
          />
        ))}
      </View>
    </View>
  );
}