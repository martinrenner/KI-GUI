import { useEffect, useState } from "react";
import { Project } from "../../../interfaces/Project";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

function ProjectView() {
   const navigate = useNavigate();
   const { project_id } = useParams();
   const [project, setProject] = useState<Project>();

   useEffect(() => {
      fetch(`http://localhost:8000/project/${project_id}`, {
         method: "GET",
         headers: {
            contentType: "application/json",
         },
      })
         .then((response) => {
            if (response.ok) {
               return response.json();
            } else {
               throw new Error("Failed to fetch project data");
            }
         })
         .then((data) => {
            setProject(data);
         })
         .catch((error) => {
            navigate("/projects", { replace: true });
            console.error("Error fetching project data:", error.message);
         });
   }, []);

   const delete_project = (project_id: number) => {
      fetch(`http://localhost:8000/project/${project_id}`, {
         method: "DELETE",
         headers: {
            "Content-Type": "application/json",
         },
      }).then((response) => {
         if (!response.ok) {
            throw new Error("Failed to delete project");
         }
         navigate("/projects", { replace: true });
      });
   };

   return (
      <>
         {project && (
            <>
               <h1>{project.name}</h1>
               <hr />
               <p>Finished: {project.is_finished ? "Yes" : "No"}</p>
               <p>{project.description}</p>
               <Link to={`/projects/${project.id}/edit`}>
                  <Button variant="warning">Edit</Button>
               </Link>
               <Button
                  variant="danger"
                  onClick={() => delete_project(project.id)}
                  className="ms-2"
               >
                  Delete
               </Button>
            </>
         )}
      </>
   );
}

export default ProjectView;
