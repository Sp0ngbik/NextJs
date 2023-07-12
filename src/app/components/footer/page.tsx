import { FC } from "react";
import style from "./footer.module.scss";
const FooterComponent: FC = () => {
  return (
    <div className={style.footerBlock}>
      <div>Create by &copy; Uladzislau Astapuk</div>
      <div>Email:Sp0ngbk@gmail.com</div>
    </div>
  );
};

export default FooterComponent;
