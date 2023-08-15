import React from "react";
import style from "./Home.module.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate =useNavigate()
  return (
    <div className={style.home_container}>
      <h1>Welcome</h1>
      <p>
        My name is <span>Tasmin Ansari</span>, and I am a full-time front-end
        web developer. My career began with a Bachelor's degree in Chemistry
        from Jorhat Kendriya Mahavidyalaya in Jorhat, India. Assam. While my
        academic base is in chemistry, my heart and thoughts are in psychology.
        I've always been fascinated by technology and code. The The allure of
        turning ideas into appealing digital experiences has grown. My career
        ambitions have been fueled by you. Constantly looking for I am looking
        for opportunity to learn new technologies and broaden my skill set.
        motivated by a tireless enthusiasm for growth and innovation. I am
        adamant. believe that teamwork is essential for personal and
        professional success improvement, and I am eager to learn from those who
        have gone before me. all around me. As a front-end developer, I get a
        lot of satisfaction from creating user interfaces that smoothly
        integrate creativity with functionality. My approach is a combination of
        precise coding abilities and a keen eye for design. My ultimate goal is
        to create web applications that not only work flawlessly but also
        provide users with a visually appealing and intuitive experience. As I
        enter the world of web development, I am excited to contribute my
        knowledge, interact with other professionals, and embrace the
        never-ending learning curve that the ever-changing field of front-end
        development provides. The possibility of using technology to create
        beauty and improve user experiences inspires me and motivates me onward on
        this fascinating road of growth and discovery.
      </p>
      <div className={style.btn}>
        <button onClick={()=>navigate('/todo')}>TODO-LIST</button>
        <button onClick={()=>navigate('/shopping')}>SHOP NOW</button>
      </div>
    </div>
  );
};

export default Home;
