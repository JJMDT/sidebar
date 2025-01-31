import { BrowserRouter } from "react-router-dom";
import { MyRoutes } from "./routers/routes";
import styled, {
  ThemeProvider as StyledThemeProvider,
} from "styled-components";
import { Sidebar } from "./components/Sidebar";
import React, { useState, useEffect } from "react";
import { Light, Dark } from "./styles/Themes";

export const ThemeContext = React.createContext(null);

const MainLayout = styled.div`
  display: flex;
  height: 100vh; // Asegura que el layout ocupe toda la altura
`;

export const CustomThemeProvider = ({ children }) => {
  const storedTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(storedTheme);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

function App() {
  const storedSidebarState = localStorage.getItem("sidebarOpen") === "true";
  const [sidebarOpen, setSidebarOpen] = useState(storedSidebarState);

  useEffect(() => {
    setSidebarOpen(storedSidebarState);
  }, []);

  useEffect(() => {
    localStorage.setItem("sidebarOpen", sidebarOpen);
  }, [sidebarOpen]);

  return (
    <CustomThemeProvider>
      <ThemeContext.Consumer>
        {({ theme }) => (
          <StyledThemeProvider theme={theme === "light" ? Light : Dark}>
            <BrowserRouter>
            
              <Container className={sidebarOpen ? "sidebar active" : ""}>
                <Sidebar
                  sidebarOpen={sidebarOpen}
                  setSidebarOpen={setSidebarOpen}
                />
                <MyRoutes />
              </Container>
            </BrowserRouter>
          </StyledThemeProvider>
        )}
      </ThemeContext.Consumer>
    </CustomThemeProvider>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 90px auto;
  background: ${({ theme }) => theme.bgtotal};
  background: ${({ theme }) => theme.lightbackground};
  height: 100vh;
  max-height: 100vh;
  overflow-y: auto;  // Permite scroll vertical si el contenido excede
  transition: all 0.3s;
  
  &.active {
    grid-template-columns: 300px auto;
  }
  color: ${({ theme }) => theme.text};
`;

export default App;
