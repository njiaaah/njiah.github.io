export interface StructureResourceCost {
  resource: string
  amount: number
}

export type StructureStage = null | StructureResourceCost[]

export interface Structure {
  id: string
  name: string
  bandwidth: number | null
  stages: StructureStage[]
  note?: string
}

export interface DsStructuresData {
  game: string
  description: string
  structures: Structure[]
}

export interface CartEntry {
  structureId: string
  structureName: string
  stageIndex: number
  levelLabel: string
  costs: StructureResourceCost[]
}

export interface CartItemCount {
  label: string
  count: number
}
