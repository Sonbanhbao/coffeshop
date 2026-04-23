import { TouchableOpacity, Text } from 'react-native';

export default function SizeButton({ label, active, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: active ? '#C67C4E' : '#ccc',
        marginRight: 10
      }}
    >
      <Text>{label}</Text>
    </TouchableOpacity>
  );
}