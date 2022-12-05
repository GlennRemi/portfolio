import "./App.css";
import Project from "./components/Project/Project_compiler";

function App(props) {
  const { tag1, tag2, tag3, tag4, text, title, link } = props;
  return (
    <>
      <Project
        tag1="JS"
        title="first project"
        text="Something about the first project"
        link="imgurl comming"
      />
      ;
      <Project
        tag1="JS"
        tag2="HTML"
        title="Second project project"
        text="Something about the second project"
        link="imgurl comming"
      />
      ;
      <Project
        tag1="JS"
        tag2="React"
        title="Third project project"
        text="Something about the third project"
        link="imgurl comming"
      />
      ;
    </>
  );
}

export default App;
