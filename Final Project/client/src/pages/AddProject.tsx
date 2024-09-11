import { useEffect, useRef } from "react"
import { useNavigate } from 'react-router-dom'
import axios, { AxiosError } from "axios"

import Header from "../components/Header"

function AddProject() {
  useEffect(() => {
    document.title = 'Add Project | No Poverty'
  })

  const title = useRef<HTMLInputElement>(null)
  const description = useRef<HTMLTextAreaElement>(null)
  const date = useRef<HTMLInputElement>(null)
  const time = useRef<HTMLInputElement>(null)
  const location = useRef<HTMLInputElement>(null)

  const navigate = useNavigate()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const newProject: ProjectType = {
      title: title.current!.value,
      description: description.current?.value || null,
      datetime: new Date(date.current!.value + 'T' + time.current!.value),
      location: location.current!.value
    }

    try {
      const response = await axios.post('/projects', newProject)

      if (response.statusText === 'OK') {
        navigate('/ViewProjects')
      }
    }
    catch (error) {
      console.error(error as AxiosError)
    }
  }

  return (
    <>
      <Header></Header>

      <main className="container p-4">
        <form onSubmit={event => handleSubmit(event)} className="mx-auto p-4 rounded border custom-shadow" style={{ maxWidth: "672px" }}>
          <div className="row mb-4">
            <div className="col-12">
              <input type="text" ref={title} className="form-control bg-light" placeholder="Title" required />
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-12">
              <textarea ref={description} className="form-control bg-light" placeholder="Description"></textarea>
            </div>
          </div>

          <div className="row mb-4 gy-4">
            <div className="col-12 col-md-6">
              <input type="date" ref={date} className="form-control bg-light" required />
            </div>

            <div className="col-12 col-md-6">
              <input type="time" ref={time} className="form-control bg-light" required />
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-12">
              <input type="text" ref={location} className="form-control bg-light" placeholder="Location" required />
            </div>
          </div>

          <div className="row justify-content-end">
            <div className="col-6 col-md-4">
              <input type="submit" className="form-control btn btn-primary" value="Submit" />
            </div>

            <div className="col-6 col-md-4">
              <input type="reset" className="form-control btn btn-danger" value="Reset" />
            </div>
          </div>
        </form>
      </main>
    </>
  )
}

export default AddProject
