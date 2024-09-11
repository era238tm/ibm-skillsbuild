import mongoose from 'mongoose'

interface ProjectType {
  title: string
  description: string | null
  datetime: Date
  location: string
}

const ProjectSchema = new mongoose.Schema<ProjectType>({
  title: { type: String, required: true },
  description: String,
  datetime: { type: Date, required: true },
  location: { type: String, required: true }
})

export default mongoose.model('Project', ProjectSchema)
