import axios from "axios";
import { Metadata } from "next";
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
  const userName = await getCurrentUser(id);
  return { title: userName.name };
}

export default async function CurrentUser({ params: { id } }: Props) {
  const user = await getCurrentUser(id);
  return (
    <div>
      <h1>{user.name}</h1>
      <div>{user.username}</div>
      <div>{user.email}</div>
    </div>
  );
}
