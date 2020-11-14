import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  split
} from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import Layout from './components/Layout';
import './App.css';

const API_URI = process.env.REACT_APP_API_URI || "http://localhost:4000";
const SUB_URI = process.env.REACT_APP_SUB_URI || "ws://localhost:4000";

const httpLink = new HttpLink({
  uri: API_URI
});

const subscriptionLink = new WebSocketLink({
  uri: SUB_URI,
  options: {
    reconnect: true
  }
});

const splitLink = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  subscriptionLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache()
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Layout/>
    </ApolloProvider>
  )
};

export default App;