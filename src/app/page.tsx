import { getUsers } from "@/app/actions";
import { User } from "../components/ui/user";

export default async function Home() {
  const { users } = await getUsers();
  return (
    <ul>
      {users.map((u: any) => (
        <li key={u.id} className="m-5">
          <User name={u.name} avatarSrc={u.avatar} />
        </li>
      ))}
    </ul>
  );
}
