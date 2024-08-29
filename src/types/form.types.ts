type PeopleType = {
  name: string
  years: number
}
export type ChildrenType = PeopleType & {
  id: number
}

export interface IParent extends PeopleType {
  children: ChildrenType[]
}
