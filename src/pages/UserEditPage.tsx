import { useParams } from "react-router-dom";

export default function UserEditPage() {
  // usando useParams de react-router-dom recibo el id del usuario a editar
  const { id } = useParams<{ id: string }>();
  // TODO: Implement user creation form

  return <div>UserEditPage {id}</div>;
}
