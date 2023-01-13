import memo from 'react'

const Pessoa = ({name}) => {
  return (
    <li>{name}</li>
  )
}

export default memo(Pessoa)