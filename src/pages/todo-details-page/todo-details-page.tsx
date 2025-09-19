import { useParams } from 'react-router-dom'

export const TodoDetailsPage = () => {
  const { id } = useParams<{ id: string }>()

  return (
    <div>
      <h2>TodoDetails Page</h2>
      <div>{`ID todo item: ${id}`}</div>
    </div>
  )
}
