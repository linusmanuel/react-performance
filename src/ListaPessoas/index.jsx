import { useState } from "react"
import Pessoa from "./Pessoa"

const ListaPessoas = () => {
  const [pessoas, setPessoas] = useState(['Maria', 'João'])
  return (
    <ul>
      {
        pessoas.map((pessoa) => (
          <Pessoa name={pessoa}/>
        ))
      }
    </ul>
  )
}

export default ListaPessoas