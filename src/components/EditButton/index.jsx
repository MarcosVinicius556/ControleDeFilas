import { memo } from "react"
import { BaseButton } from "../../styles/GlobalStyle"

export const EditButton = memo(() => {
  return (
    <BaseButton 
        backgroundColor="#e9f393"
        textColor="#555454"
        backgroundHover="#bfc778"
        textHover="#fff">
        Editar
    </BaseButton>
  )
}) 