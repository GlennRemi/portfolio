import { useState } from "react";
import projectData from "../../data/project";
import ProjectFormate from "./ProjectFormate";
import ProjectFormateModal from "./Project_modal_module";

function Project() {
  return (
    <>
      {projectData.map((data, index) => {
        const [openModalState, setOpenModalState] = useState(0);
        function handleClick() {
          setOpenModalState((oldState) => (oldState === 0 ? 1 : 0));
          console.log(`${index}` + openModalState);
        }
        if (openModalState === 0)
          return (
            <div key={index}>
              <ProjectFormate
                onClickHandler={handleClick}
                info={data}
                keyid={index}
              />
            </div>
          );
        else
          return (
            <div key={index}>
              <ProjectFormateModal
                onClickHandler={handleClick}
                info={data}
                keyid={index}
              />
            </div>
          );
      })}
    </>
  );
}

export default Project;
