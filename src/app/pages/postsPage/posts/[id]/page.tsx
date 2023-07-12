import axios from "axios";
import { Metadata } from "next";
import style from '../posts.module.scss'
type Props = {
  params: {
    id: string;
  };
};

const getData = async (id: string) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return response.data;
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const posts = await getData(id);
  return { title: posts.title };
}
export default async function Posts({ params: { id } }: Props) {
  const responseData = await getData(id);
  return (
    <div className={style.soloPost}>
      <div >
        <h1>{responseData.id}</h1>
        <h3>{responseData.title}</h3>
        <div>{responseData.body}</div>
      </div>
    </div>
  );
}
