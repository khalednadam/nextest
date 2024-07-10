"use client";

import { useState, useEffect } from "react";
import { getUsers, getHello } from "@/app/actions";
import { User } from "../components/ui/user";

const Home = () => {
  const [apiData, setApiData] = useState<{ message: string } | null>(null);
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const { msg } = await getHello();
        setApiData(msg as any);
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    };

    const fetchUserData = async () => {
      try {
        const { users } = await getUsers();
        setUsers(users);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchApiData();
    fetchUserData();
  }, []);

  return (
    <div>
      {apiData && <p>{apiData.message}</p>}
      <ul>
        {users.map((u: any) => (
          <li key={u.id} className="m-5">
            <User name={u.name} avatarSrc={u.avatar} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
