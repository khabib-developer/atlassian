import React, { useEffect } from "react";
import { projectsApi } from "../../services/projectService.js";
import { Loader } from "../Skeleton/index.jsx";
import { ProjectItem } from "./project-item.jsx";
import { ErrorMessage } from "../DefaultText/error.jsx";
import { EmptyMessage } from "../DefaultText/empty.jsx";
import { useDispatch } from "react-redux";
import { setProject } from "../../store/reducers/toDo.js";

export const Projects = () => {
  const { data, isLoading, error } = projectsApi.useGetProjectsQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data && data.length !== 0) {
      dispatch(setProject(data[0].key));
    }
  }, [data]);

  if (isLoading) return <Loader />;

  if (error) return <ErrorMessage />;

  if (data.length === 0) return <EmptyMessage />;

  return (
    <div className="projects">
      {data.map((project) => (
        <ProjectItem project={project} key={project.id} />
      ))}
    </div>
  );
};
