function ProjectFormate(props) {
  const { onClickHandler, info, keyid } = props;
  return (
    <>
      <div key={keyid} onClick={onClickHandler}>
        <h2>{info.title}</h2>
        <p>{info.text}</p>
        <img src={info.projectsimg} alt={info.imgalt} />
        <div>
          {info.tag.map((techStack, index) => (
            <p key={index}>{techStack}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProjectFormate;
