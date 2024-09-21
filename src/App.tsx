import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import Header from "./components/Header";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import ProfileProvider from "./contexts/ProfileContext";
import PostProvider from "./contexts/PostContext";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <ProfileProvider>
        <PostProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </PostProvider>
      </ProfileProvider>
    </ThemeProvider>
  );
}


