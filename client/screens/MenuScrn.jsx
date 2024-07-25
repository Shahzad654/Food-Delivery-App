import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Platform,
  StatusBar,
  FlatList,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Icon, SearchBar, Card } from "react-native-elements";
import Menu from '../Data/Menu'

const MenuScrn = () => {
  const [search, setSearch] = useState("");

  const renderMenu = ({item}) => {
    return (
      <>
        <Card containerStyle={{ borderRadius: 20 }}>
          <View style={{ display: "flex", flexDirection: "row", gap: 50 }}>
            <View>
              <Image
                source={item.image}
                style={{ width: 100, height: 100, borderRadius: 20, marginTop:5 }}
              />
            </View>
            <View>
              <Text style={{ fontSize: 18, marginBottom: 10 }}>
                {item.title}
              </Text>
              <Text
                style={{ fontSize: 14, fontWeight: "bold", marginBottom: 10 }}
              >
                {item.price}
              </Text>
              <TouchableOpacity style={styles.button}>
                <Icon name="cart" type="evilicon" color="white" size={35} />
                <Text style={styles.buttonText}>{item.button}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Card>
      </>
    );
  }
    return (
      <ScrollView>
        <View
          style={{
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
          }}
        >
          <View style={styles.searchContainer}>
            <SearchBar
              round
              placeholder="Search in menu"
              onChangeText={setSearch}
              value={search}
              containerStyle={styles.searchBarContainer}
              inputContainerStyle={styles.searchBarInputContainer}
              inputStyle={styles.searchBarInput}
            />
          </View>

          <View style={{ marginTop: 20, marginBottom: 20 }}>
            <FlatList
              data={Menu}
              renderItem={renderMenu}
              keyExtractor={(item) => item.id}
              vertical
            />
          </View>
        </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
  searchContainer: {
    paddingHorizontal: 30,
    marginTop: 25,
  },
  searchBarContainer: {
    backgroundColor: "transparent",
    borderTopWidth: 0,
    borderBottomWidth: 0,
    padding: 0,
  },
  searchBarInputContainer: {
    backgroundColor: "#fff",
    borderRadius: 20,
  },
  searchBarInput: {
    backgroundColor: "#fff",
  },
  button: {
    display:'flex',
    flexDirection:'row',
    backgroundColor: "orange", 
    padding: 6,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default MenuScrn;
