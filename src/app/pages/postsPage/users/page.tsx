import axios from "axios";
import Link from "next/link";
import style from './user.module.scss'
const getDataUsers = async () => {
  const responseUsers = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return responseUsers.data;
};

export default async function UsersOfPosts() {
  const userData = await getDataUsers();
  return (
    <div>
      <div className={style.userBlock}>
      <h1>Users</h1>
        {userData.map((el: any) => {
          return (
            <li key={el.id}>
              <Link href={`/pages/postsPage/users/${el.id}`}>
                <div>{el.name}</div>
                <div>{el.username}</div>
                <div>{el.email}</div>
              </Link>
            </li>
          );
        })}
      </div>
    </div>
  );
}
