import axios from "axios";
import { Metadata } from "next";
import style from "../user.module.scss";
type Props = {
  params: {
    id: string;
  };
};

const getCurrentUser = async (id: string) => {
  const user = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return user.data;
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const userData = await getCurrentUser(id);
  return { title: userData.name };
}

export default async function CurrentUser({ params: { id } }: Props) {
  const user = await getCurrentUser(id);
  return (
    <div className={style.soloUserBlock}>
      <h1>{user.name}</h1>
      <div>{user.username}</div>
      <div>{user.email}</div>
    </div>
  );
}
