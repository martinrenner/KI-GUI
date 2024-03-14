import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ProjectEdit from "./components/Projects/EditProject/EditProject.tsx";
import ProjectView from "./components/Projects/ProjectView/ProjectView.tsx";
import ProjectCreate from "./components/Projects/CreateProject/CreateProject.tsx";
import ProjectList from "./components/Projects/ProjectsList/ProjectList.tsx";
import Header from "./components/Header/Header.tsx";
import Login from "./components/Login/Login.tsx";
import Register from "./components/Register/Register.tsx";
import TokenContextProvider from "./context/TokenContextProvider.tsx";
import Authenticated from "./components/Authenticated/Authenticated.tsx";

function App() {
  return (
    <BrowserRouter>
      <TokenContextProvider>
        <Header />
        <Container className="mt-5">
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="/projects/">
              <Route
                path="create"
                element={
                  <Authenticated>
                    <ProjectCreate />
                  </Authenticated>
                }
              />
              <Route
                path=""
                element={
                  <Authenticated>
                    <ProjectList />
                  </Authenticated>
                }
              />
              <Route
                path=":project_id"
                element={
                  <Authenticated>
                    <ProjectView />
                  </Authenticated>
                }
              />
              <Route
                path=":project_id/edit"
                element={
                  <Authenticated>
                    <ProjectEdit />
                  </Authenticated>
                }
              />
            </Route>
          </Routes>
        </Container>
      </TokenContextProvider>
    </BrowserRouter>
  );
}

export default App;
