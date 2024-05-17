import { FlatList, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";

import HeroBanner from "../../components/HeroBanner";
import CollectionOne from "../../components/CollectionOne";
import CollectionTwo from "../../components/CollectionTwo";
import { Divider } from "react-native-paper";

// graphql
import { gql, useQuery } from '@apollo/client'


// featured collection
const queryOne = gql`
{
    collection(id: "gid://shopify/Collection/429512622102") {
      id
      handle
      title
      description
      image {
        id
        url
      }
      products(first: 20) {
        edges {
          node {
            id
            title
            featuredImage {
              id
              url
            }
          }
        }
      }
    }
  }
  
`;

export default function HomePage() {


  const { data, loading, error } = useQuery(queryOne);

  if (data) {
    console.log(JSON.stringify(data))
  } else if (error) {
    console.log("error: \n\n", error)
  }

  const response = JSON.stringify(data)
  // console.log(response);

  return (
    <ScrollView style={styles.container}>
      {/* task 1 - hero banner at top (generate it with AI or use any image you like) */}
      <HeroBanner />

      {/* task 2 - display 2 collections, each with collection title, description and 2 product cards */}
      {/* task 3 - each product card should show product's title, image and price */}
      <CollectionOne />

      <Divider style={{
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20
      }} />

      <CollectionTwo />


    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  collectionText: {
    color: 'black',
    fontSize: 20,
    marginTop: 25,
    paddingLeft: 15
  }
})