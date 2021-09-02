import React, {useEffect } from 'react';
import axios from 'axios';
import SearchComponent from './components/SearchComponent/SearchComponent';
import { Container } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

function App() {
  const theme = createTheme({
  });

  
  const API_URL = "https://api.dictionaryapi.dev/api/v2/entries";
  const searchForWord = async (word="hello", lang="en")=>{
    try {
      const res = await axios.get(`${API_URL}/${lang}/${word}`);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
    
  }
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container>
        <SearchComponent searchWord={searchForWord} />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
