import axios from '../api/axios'
import type { Pet } from '../shared/types/pet.types'

interface PetsApiResponse {
  success: boolean
  data: Pet[]
}

export class PetsService {
  static async getAll(species?: string): Promise<Pet[]> {
    const { data } = await axios.get<PetsApiResponse>('/pets', {
      params: species ? { species } : undefined,
    })

    return data.data ?? []
  }
}
