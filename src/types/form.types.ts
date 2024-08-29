type PeopleType = {
  name: string | undefined
  years: number | undefined
}
export type ChildrenType = PeopleType & {
  id: number
}

export interface IParent extends PeopleType {
  children: ChildrenType[]
}
