import siteLogo from '../assets/E_WEB_INVERTED_01.png'

function Header() {
  return (
    <>
      <nav className="navbar navbar-light bg-light border-bottom sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={siteLogo} height="60" alt="No Poverty" />
          </a>

          <div className="justify-content-end">
            <a className="btn btn-outline-dark me-2" href="/AddProject">Add Project</a>
            <a className="btn btn-outline-dark" href="/ViewProjects">View Projects</a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
