import React from "react";
import { useLocation, Outlet } from "react-router";
import { useLayoutEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ProfileProvider } from "./context/DictionaryContext";
function App() {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <ProfileProvider>
      <div className="app">
        <Container className="App" fluid>
          <Outlet />
        </Container>
      </div>
    </ProfileProvider>
  );
}

export default App;
