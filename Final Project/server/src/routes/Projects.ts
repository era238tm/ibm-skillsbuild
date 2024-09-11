import express from 'express'

import Project from '../models/Project.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const projects = await Project.find({})
    return res.status(200).json({
      status: 'ok',
      totalResults: projects.length,
      projects
    })
  }
  catch (error) {
    if (error instanceof Error) {
      console.error(error)
      return res.status(400).json({
        status: 'error',
        code: error.name,
        message: error.message
      })
    }
  }
})

router.post('/', async (req, res) => {
  try {
    const newProject = new Project(req.body)
    await newProject.save()

    return res.status(200).json({ status: 'ok' })
  }
  catch (error) {
    if (error instanceof Error) {
      console.log(error)
      return res.status(400).json({
        status: 'error',
        code: error.name,
        message: error.message
      })
    }
  }
})

export default router
