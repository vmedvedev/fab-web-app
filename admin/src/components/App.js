import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import NavBar from './NavBar';
import CommandForm from './CommandForm';
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink
} from '@apollo/client';

const API_URI = process.env.REACT_APP_API_URI || "http://localhost:4000";

const httpLink = new HttpLink({
  uri: API_URI
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Box>
        <NavBar/>
        <Container maxWidth="md" className="container">
          <CommandForm client={client}/>
        </Container>
      </Box>
    </ApolloProvider>
  );
}

export default App;
