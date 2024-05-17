import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
// import HomePage from './pages/Home';
import { PaperProvider } from 'react-native-paper';
// import TopBar from './components/TopBar';
// import ProductPage from './pages/Product';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import TopBar from '../components/TopBar';
import HomePage from './home';

// const image1 = require('./assets/image1.jpg')

const client = new ApolloClient({
  uri: 'https://mock.shop/api',
  cache: new InMemoryCache(),
})

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <PaperProvider>
        {/* <View> */}
        <ScrollView>
          <TopBar />
          <HomePage />

          {/* <TopBar /> */}
          {/* <HomePage /> */}

          {/* <ProductPage /> */}
          <StatusBar style="auto" />
        </ScrollView>
        {/* </View> */}
      </PaperProvider>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
