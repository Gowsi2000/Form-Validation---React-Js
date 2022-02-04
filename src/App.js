import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ minWidth: "180px", maxWidth: "360px" }}>
        <Row>
          <Col>
            <UserAuthContextProvider>
              <Routes>
                <Route
                  path="/home"
                  element={
                    <ProtectedRoute>
                      <Home />
                    </ProtectedRoute>
                  }
                />
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
            </UserAuthContextProvider>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default App;
