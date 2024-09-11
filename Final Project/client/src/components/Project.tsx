function Project(props: ProjectType) {
  return (
    <>
      <div className="card px-0 custom-shadow" style={{ maxWidth: "672px" }}>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
        </div>

        <div className="card-footer text-muted">
          <span className="me-4">{new Date(props.datetime).toLocaleString('en-GB')}</span>
          <span>{props.location}</span>
        </div>
      </div>
    </>
  )
}

export default Project
