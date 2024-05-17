import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Text, ActivityIndicator, MD2Colors } from 'react-native-paper'
import ProductCard from './ProductCard'

import {gql, useQuery} from "@apollo/client"
import LoadingCard from './LoadingCard'

const queryTwo = gql`
{
    collection(id: "gid://shopify/Collection/429493813270") {
      id
      handle
      title
      description
      image {
        id
        url
      }
      products(first: 2) {
        edges {
          node {
            id
            title
            description
            featuredImage {
              id
              url
            }
            variants(first: 3) {
              edges {
                node {
                  price {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const CollectionTwo = () => {

    const {data, loading, error} = useQuery(queryTwo)

    return (
        <View style={styles.container}>
            <Text variant='headlineLarge' style={styles.title}>{data?.collection?.title}</Text>

            {/* description */}
            <Text variant='bodyMedium' style={styles.description}>{data?.collection?.description}</Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                { loading && <LoadingCard /> }

                { data && data?.collection?.products?.edges?.map((item, key) => (
                    <ProductCard key={key} prodTitle={item?.node?.title} prodDesc={item?.node?.description} prodImg={item?.node?.featuredImage?.url} />
                )) }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 15,
    },
    title: {
        color: 'black',
    },
    description: {
        color: 'black',
        marginTop: 15,
        marginBottom: 10
    }
})

export default CollectionTwo