import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
// import Blog from "./pages/Blog";
import Header from "./components/Header";
import Post from "./pages/Post";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <Post />
    </ThemeProvider>
  )
}


