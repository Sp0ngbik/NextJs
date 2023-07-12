import axios from "axios";
import Link from "next/link";
import { FC } from "react";
import style from "./posts.module.scss";
const getData = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
};

const UserPost: FC = async () => {
  const data = await getData();
  return (
    <div className={style.postBlock}>
      {data.map((el: any) => {
        return (
          <div className={style.postElement} key={el.key}>
            <Link href={`/pages/postsPage/posts/${el.id}`}>
              <li>
                <h5>{el.title}</h5>
                <ul>{el.body}</ul>
              </li>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default UserPost;
