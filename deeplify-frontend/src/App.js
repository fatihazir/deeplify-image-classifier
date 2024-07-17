import React from 'react';
import { SharedContextProvider } from './store/context/SharedContext';
import { GlobalLoadingContextProvider } from './store/context/GlobalLoadingContext';
import { OverlayContextProvider } from './store/context/OverlayContext';
import Header from './components/header/Header';
import Overlay from './components/overlay/Overlay';
import GlobalLoading from './components/globalLoading/GlobalLoading';
import Footer from './components/footer/Footer';
import Container from './components/container/Container';

function App() {
  return (
    <OverlayContextProvider>
      <GlobalLoadingContextProvider>
        <SharedContextProvider>
          <Header />
          <Container />
          <Overlay />
          <GlobalLoading />
          <Footer />
        </SharedContextProvider>
      </GlobalLoadingContextProvider>
    </OverlayContextProvider>
  );
}

export default App;