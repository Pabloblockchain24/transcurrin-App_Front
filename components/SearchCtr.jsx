import { View, TextInput, StyleSheet, Pressable,Text } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export const SearchCtr = ({ onSearch, ...props }) => {
  return (
    <View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.inputCtr}
          placeholder="ABCD 123456-7"
          placeholderTextColor="darkgray"
          autoCapitalize="characters"
          {...props}
        />
        <Pressable onPress={onSearch} style={styles.searchIconContainer}>
          <FontAwesome name="search" size={24} style={styles.searchIcon} />
        </Pressable>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  searchContainer: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'ffa70f',
    borderRadius: 30,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    marginTop:20

  },
  searchIconContainer: {
    padding: 10,
    backgroundColor: '#ffa70f',
    borderRadius: 30,
  },
  searchIcon: {
    color: 'white',
  },
  inputCtr: {
    flex: 1,
    color: 'black',
    padding: 8,
    fontSize: 16,
  },
});
