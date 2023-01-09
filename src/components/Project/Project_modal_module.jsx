function ProjectFormateModal(props) {
  const { onClickHandler, info, keyid } = props;
  return (
    <>
      <div key={keyid} onClick={onClickHandler}>
        <h2>{info.title}</h2>
        <img src={info.projectsimg} alt={info.imgalt} />
        <p>{info.text}</p>
        <a href={"www.vg.no"}>Click here to try.</a>
        <a href={"www.vg.no"}>Click here to view code.</a>
        <div>
          {info.tag.map((techStack, index) => (
            <p key={index}>{techStack}</p>
          ))}
        </div>
      </div>
    </>
  );
}
export default ProjectFormateModal;
