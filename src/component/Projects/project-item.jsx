import React from "react";
import Image from "@atlaskit/image";
import { token } from "@atlaskit/tokens";
import { N30 } from "@atlaskit/theme/colors";
import { HeadingItem, ButtonItem } from "@atlaskit/menu";
import { useDispatch, useSelector } from "react-redux";
import { setProject } from "../../store/reducers/toDo";
export const ProjectItem = ({ project }) => {
  const toDo = useSelector((state) => state.toDo);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setProject(project.key));
  };
  return (
    <ButtonItem
      style={{
        backgroundColor: toDo.project === project.key ? N30 : "",
        boxShadow: token(
          "elevation.shadow.overlay",
          "0px 4px 8px rgba(9, 30, 66, 0.25), 0px 0px 1px rgba(9, 30, 66, 0.31)"
        ),
        borderRadius: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        maxWidth: 320,
        cursor: "pointer",
      }}
      onClick={handleClick}
      iconBefore={
        <Image style={{ width: 24 }} src={project.avatarUrls["16x16"]} />
      }
    >
      <div>
        <HeadingItem className="project-key">{project.key}</HeadingItem>
        <HeadingItem className="project-name">{project.name}</HeadingItem>
      </div>
    </ButtonItem>
  );
};
