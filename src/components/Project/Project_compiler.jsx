import FileType from "./Filetype";
import ProjectFormate from "./ProjectFormate";

const Project = (props) => {
  return (
    <div>
      <ProjectFormate text={props.text} title={props.title} link={props.link} />

      <div>
        <FileType formatetype={props.tag1} />
        <FileType formatetype={props.tag2} />
        <FileType formatetype={props.tag3} />
        <FileType formatetype={props.tag4} />
      </div>
    </div>
  );
};

export default Project;
