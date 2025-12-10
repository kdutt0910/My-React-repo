
import { useParams } from "react-router-dom"
export function User() {
  const { id, name } = useParams();
  return (
    <div className="bg-gray-500 text-3xl text-white text-center p-4">
      <div>User : {id}</div>
      <div>Name : {name}</div>
    </div>
  )
}