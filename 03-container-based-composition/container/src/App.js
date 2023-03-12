import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'ui-components';
import { GlobalStyles } from './GlobalStyles';

import Header from './Layout/Header';
import Footer from './Layout/Footer';
import * as S from './App.styles';
import Catalog from './pages/Catalog';

export default () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <S.App>
          <Header />
          <S.Main>
            <Routes>
              <Route path='/' element={<Catalog />} />
              <Route path='/products' element={<Catalog />} />
            </Routes>
          </S.Main>
          <Footer />
        </S.App>
      </ThemeProvider>
    </BrowserRouter>
  )
}