interface SanityBody {
  _createdAt: string
  _id: string
  _rev: string
  _updateAt: string
}

interface Image {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
}

export interface Social extends SanityBody {
  title: string
  url: string
  _type: 'social'
}

export interface PageInfo extends SanityBody {
  _type: 'pageInfo'
  address: string
  backgroundInformation: string
  email: string
  role: string
  image: Image | null
  name: string
  phoneNumber: string
  profilePic: Image | null
}

export interface Technology extends SanityBody {
  _type: 'skill'
  image: Image
  progress: number
  title: string
}

export interface Skill extends SanityBody {
  _type: 'skill'
  image: Image
  progress: number
  title: string
}

export interface Project extends SanityBody {
  _type: 'project'
  title: string
  image: Image
  linkToBuild: string
  /**
   * @deprecated
   * instead use
   * @param {Project.linkToBuild} linkToBuild
   */
  linkTobuild: string
  summary: string
  technologies: Technology[]
}

export interface Social extends SanityBody {
  _type: 'social'
  title: string
  url: string
}
export interface Experience extends SanityBody {
  _type: 'experience'
  company: string
  companyImage: Image
  dateStarted: date
  dateEnded: date
  isCurrentlyWorking: boolean
  jobTitle: string
  points: string[]
  technologies: Technology[]
}
