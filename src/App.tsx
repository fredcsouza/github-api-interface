import { useState } from 'react';

import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global'
import light from './styles/themes/light'
import dark from './styles/themes/dark'


import { Header } from "./components/Header";
import { Search } from './components/Search';
import Profile from './components/Profile';
import useGithub from './hooks/github-hooks';
import Layout from './components/layout';
import Repositories from './components/Repositories';
import NoSearch from './components/NoSearch';


function App() {
  const [theme, setTheme] = useState(light)
  const { githubState } = useGithub();

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
        <Search />

        {githubState.hasUser 
          ? <>
              <Profile />
              <Repositories /> 
            </> 
          : <NoSearch />
        }
      </Layout>
    </ThemeProvider>

  );
}

export default App;
