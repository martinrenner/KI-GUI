import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ProjectEdit from "./components/Projects/EditProject/EditProject.tsx";
import ProjectView from "./components/Projects/ProjectView/ProjectView.tsx";
import ProjectCreate from "./components/Projects/CreateProject/CreateProject.tsx";
import ProjectList from "./components/Projects/ProjectsList/ProjectList.tsx";

function App() {
   return (
      <Container className="mt-5">
         <BrowserRouter>
            <Routes>
               <Route path="/projects/">
                  <Route path="create" element={<ProjectCreate />} />
                  <Route path="" element={<ProjectList />} />
                  <Route path=":project_id" element={<ProjectView />} />
                  <Route path=":project_id/edit" element={<ProjectEdit />} />
               </Route>
            </Routes>
         </BrowserRouter>
      </Container>
   );
}

export default App;
