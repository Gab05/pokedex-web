import { ResourceType } from './ResourceType'
import { Type } from './type/Type'

export interface SearchResult {
  name: string
  resourceType: ResourceType
  type?: Type
}
