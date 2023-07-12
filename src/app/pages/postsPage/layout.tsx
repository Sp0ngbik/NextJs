import Link from "next/link";
import style from "./layout.module.scss";
export default function UserPostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className={style.layoutStyle}>
        <Link href={"/pages/postsPage/users"}>Users</Link>
      </div>
      {children}
    </div>
  );
}
