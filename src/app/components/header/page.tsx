import Link from "next/link";
import { FC } from "react";
import style from './header.module.scss'
const HeaderComponent: FC = () => {
  return (
    <div className={style.headerStyle}>
      <Link href={'/'}>Home</Link>
      <Link href={'/pages/postsPage/posts'}>Posts</Link>
    </div>
  );
};

export default HeaderComponent;
