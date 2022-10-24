import { Project } from '../typings'

export const fetchProjects = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`
  )
  const data = await response.json()

  // console.log('projects', data)
  // type check
  const projects: Project[] = data.project

  return projects
}
