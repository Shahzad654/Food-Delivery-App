import React, {useState} from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon, SearchBar, Card, Button, Badge } from "react-native-elements";
import categories from "../Data/Categories";
import details from "../Data/Details";


const Home = () => {
  const [search, setSearch] = useState("");


  const renderCategories = ({ item }) => {
    return (
      <>
        <TouchableOpacity>
          <ImageBackground
            source={item.image}
            style={styles.cardImage}
            imageStyle={styles.renderImages}
          >
            <View style={styles.textContainer}>
              <Text style={styles.categoryTitle}>{item.title}</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </>
    );
  };



  const renderDetails = ({item}) => {
    return (
      <>
        <Card title="Sepcial" containerStyle={{ borderRadius: 20, marginBottom:20 }}>
          <Image source={item.image} style={{ width: 200, height: 150 }} />
          <View style={{ marginTop: 10, marginLeft: 10 }}>
            <Text
              style={{
                fontSize: 20,
              }}
            >
              {item.title}
            </Text>
            <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 3 }}>
              Rs.{item.price}
            </Text>
            <View
              style={{ display: "flex", flexDirection: "row", marginTop: 15 }}
            >
              <Icon name="star" type="evilicon" color="#517fa4" size={35} />
              <Text style={{ fontSize: 16, marginLeft: 5, marginTop: 3 }}>
                {item.rating}
              </Text>
            </View>
          </View>
        </Card>
      </>
    );
    
  }

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <View style={styles.locationContainer}>
            <Icon
              name="location"
              type="evilicon"
              color="#517fa4"
              size={35}
              style={{ marginLeft: -8 }}
            />
            <Text style={styles.locationText}>Lahore, Pakistan</Text>
          </View>
          <Icon name="user" type="evilicon" color="#517fa4" size={40} />
        </View>

        <View style={styles.searchContainer}>
          <SearchBar
            round
            placeholder="Type a dish or cuisine"
            onChangeText={setSearch}
            value={search}
            containerStyle={styles.searchBarContainer}
            inputContainerStyle={styles.searchBarInputContainer}
            inputStyle={styles.searchBarInput}
          />
        </View>

        <View>
          <Card title="Sale Card" containerStyle={styles.card}>
            <Text style={{ fontSize: 22, color: "white", marginTop: 20 }}>
              Up To 40% OFF
            </Text>
            <Text style={{ fontSize: 16, color: "white", marginTop: 5 }}>
              ON YOUR FIRST ORDER
            </Text>
            <Button
              title="Order Now"
              type="solid"
              titleStyle={{ color: "orange" }}
              buttonStyle={styles.button}
              containerStyle={styles.buttonContainer}
            />
          </Card>
        </View>
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginTop: 15,
              marginLeft: 22,
            }}
          >
            Popular Categories
          </Text>
          <View>
            <FlatList
              data={categories}
              renderItem={renderCategories}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginTop: 15,
              marginLeft: 22,
            }}
          >
            Today's Sepcial
          </Text>
          <View>
            <FlatList
              data={details}
              renderItem={renderDetails}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    marginTop: 20,
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    marginTop: 1,
    fontSize: 16,
  },
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
  card: {
    height: 200,
    backgroundColor: "#F56606",
    borderRadius: 20,
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 30,
    backgroundColor: "white",
  },
  buttonContainer: {
    width: 100,
  },
  cardImage: {
    width: 120,
    height: 100,
    justifyContent: "flex-end",
    marginTop: 20,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 30,
    marginLeft: 20,
    marginRight:10,
  },
  renderImages: {
    borderRadius: 30,
  },
  textContainer: {
    padding: 10,
    marginTop: 20,
  },
  categoryTitle: {
    fontSize: 20,
    color:'white'
  },
});

export default Home;
