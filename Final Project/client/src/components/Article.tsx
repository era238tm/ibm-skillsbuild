function Article(props: ArticleType) {
  return (
    <>
      <div className="card p-3 custom-shadow" style={{ maxWidth: "432px" }}>
        <img className="card-img-top" src={props.urlToImage || undefined} alt="" />

        <div className="card-body px-0">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text" dangerouslySetInnerHTML={{ __html: props.content }}></p>
          <a href={props.url} className="btn btn-primary">Read More</a>
        </div>
      </div>
    </>
  )
}

export default Article
