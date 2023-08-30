import React from 'react';
import Slider from "react-slick";
import '../App.css';


const Home: React.FC = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 20000
  };

  const skills = [
    {
      category: 'Frontend',
      items: [
        'HTML5, CSS3(SCSS), JS(ES6), Kotlin',
        'React, Vue.js',
        'JavaScript : Typescript, Phaser',
        'Android : Jetpack Compose, Coroutine, Retrofit2, Hilt',
        'Flutter : '
      ]
    },
    {
      category: 'Backend',
      items: ['Java, Node.js', 'Spring Boot, Spring MVC', 'MySQL, MyBatis']
    },
    {
      category: 'Tools & Collaboration',
      items: [
        'Eclipse, VScode, IntelliJ, Android Studio',
        'Git, Gitlab',
        'Jira'
      ]
    },
  ];
  

return (
  <Slider {...settings}>
    <div className="Introduce_1">
      <div className="left-side">
        <img src="/image/me.png" alt="내사진" />
      </div>

      <div className="middle-side">
        <h1>계속 학습하는 개발자, 박해종입니다. 👋</h1>

        <h1>💁🏻 About Me</h1>

        <h3>Introduction</h3>
        <ul>
          <li>안녕하세요! 개발 시작 1년차 개발자 박해종입니다.</li>
          <li>
            사람들이 유용하게 쓰는것을 만들기 위해 개발을 시작했고, 배우고
            있습니다.
          </li>
          <li>새로운 기술, 새로운 언어를 배우는 것에 관심이 많습니다.</li>
          <li>Clean Code와 사용자의 편의성에 대한 고민을 생활화합니다.</li>
          <li>같이 성장할 수 있는 환경을 지향합니다.</li>
        </ul>

        <h3>Contact & Channel</h3>
        <ul>
          <li>
            <strong>Email</strong> |{" "}
            <a href="mailto:qkrgowhd123@gmail.com">qkrgowhd123@gmail.com</a>
          </li>
          <li>
            <strong>Portfolio</strong> |{" "}
            <a
              href="http://veblen.kr"
              target="_blank"
              rel="noopener noreferrer"
            >
              veblen.kr
            </a>
          </li>
          <li>
            <strong>Github</strong> |{" "}
            <a
              href="https://github.com/veblen1"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/veblen1
            </a>
          </li>
          <li>
            <strong>Phone</strong> | 010-7522-0
          </li>
        </ul>
      </div>
    </div>

    <div className="Introduce_2">
      <h2 style={{ marginRight: "30px" }}>⛏️ Skills</h2>

      {skills.map((skill, index) => (
        <div key={index} className="skills-section">
          <h2>{skill.category}</h2>
          <table>
            <tbody>
              {skill.items.map((item, i) => (
                <tr key={i}>
                  <td>{item}&nbsp;&nbsp;&nbsp;&nbsp;</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>

    <div className="Introduce_3">
      <h2 style={{ marginRight: "30px" }}>📄 Education</h2>
      <div className="education-item">
        <h3 style={{ marginTop: "30px" }}>삼성 청년 SW 아카데미 9기 (SSAFY)</h3>
        <p>
          <strong>기간:</strong> 2023.01.04 ~ 진행중
        </p>
        <p>
          <strong>공식 웹사이트 : </strong>
          <a
            href="https://www.ssafy.com/ksp/jsp/swp/swpMain.jsp"
            target="_blank"
            rel="noopener noreferrer"
          >
            SSAFY 공식 웹사이트
          </a>
        </p>

        <div className="education-details">
          <h4>교육 내용:</h4>
          <ul>
            <li>
              <strong>SW 개발자 풀스택 교육 (5개월) : </strong> 비전공 Java반
            </li>
            <li>
              <strong>공통 프로젝트 (7주) : </strong> 웹기술(WebRTC)
            </li>
            <li>
              <strong>특화 프로젝트 (7주) : </strong> 핀테크
            </li>
            <li>
              <strong>자율 프로젝트 (7주) : </strong> 예정
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="Introduce_4">
      <h2 style={{ marginRight: "30px" }}>🏅 Certificate</h2>

      <div className="certificate-item">
        <h3 style={{ marginTop: "30px" }}>SQLD &nbsp; : &nbsp; 2023.07.07 취득</h3>
        <h3 style={{ marginTop: "30px" }}>리눅스 마스터 2급 &nbsp; : &nbsp; 1차통과, 2차 09.09 시험</h3>
      </div>
    </div>
  </Slider>
);
}

export default Home;
