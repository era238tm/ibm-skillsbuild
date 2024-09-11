import { useEffect, useState } from "react"
import axios, { AxiosError } from "axios"

import Header from "../components/Header"
import Project from "../components/Project"

function ViewProjects() {
  const [projects, setProjects] = useState([] as ProjectType[])

  useEffect(() => {
    document.title = 'View Projects | No Poverty';

    (async () => {
      try {
        const response = await axios.get('/projects')

        if (response.statusText === 'OK') {
          setProjects(response.data.projects as ProjectType[])
        }
      }
      catch (error) {
        console.error(error as AxiosError)
      }
    })()
  }, [])

  return (
    <>
      <Header></Header>

      <main className="container-fluid p-4">
        <div className="row justify-content-center" style={{ gap: "1.5rem" }}>{
          projects.map((project, index) => {
            return (
              <Project key={index} {...project}></Project>
            )
          })
        }</div>
      </main>
    </>
  )
}

export default ViewProjects
