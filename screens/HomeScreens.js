import { View, FlatList } from 'react-native';
import data from '../data/data.json';
import CoffeeCard from '../components/CoffeeCard';

export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={i => i.id.toString()}
        renderItem={({ item }) => (
          <CoffeeCard
            item={item}
            onPress={() => navigation.navigate('Detail', { item })}
          />
        )}
      />
    </View>
  );
}