import { Project } from '../typings'

export const fetchProjects = async () => {
  let projects: Project[] = []
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`
    )
    const data = await response.json()

    // console.log('projects', data)
    // type check
    projects = data.project

    return projects
  } catch (error) {
    console.log(
      '[Server did not respond ] check you connection first. error-',
      error
    )
  }
  return projects
}
