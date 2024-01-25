export interface Crew {
  adult: boolean
  cast_id: number
  department: string
  gender: number
  id: number
  job: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string
}

export interface Cast {
  adult: boolean
  cast_id: number
  character: string
  credit_id: string
  gender: number
  id: number
  known_for_department: string
  name: string
  order: number
  original_name: string
  popularity: number
  profile_path: string
}

export interface CastType {
  cast: Cast[]
  crew: Crew[]
  id: number
}
