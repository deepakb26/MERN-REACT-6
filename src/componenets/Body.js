import "./Body.css";

export function Body() {
  const BodyStyle = {
    width: "100%",
    minHeight: "60vh",
   background: 'linear-gradient(135deg,lightblue 0%,darkblue 35%,transparent 50%,blue 300%),linear-gradient(#0088ff,blue,black 100vh)'
  };
  const SvgStyle = {
    width: "100%",
  };
  return (
    <div style={BodyStyle}>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
          <path
            //  fill="#ffffff"
            fill="#ffffff"
            fill-opacity="1"
          ></path>

        </svg>
      </div>
      <div className="bg-svg-blue p-5 text-center text-light">
        <h1>Deepakram Bettarayan</h1>
        <div className="h4">Vellore Institute of Technology</div>
        <div className="h4"> 3rd Year CSE Undergrad Student </div>
        <div className="h4">
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/deepakram-bettarayan/"
            target="blank"
          >
            Deepakram Bettarayan
          </a>
        </div>
        <div className="h4">
          Medium :{" "}
          <a href="https://medium.com/@deepakbr" target="blank">
            Deepakbr
          </a>
        </div>
        <div className="h4">
          GitHub:{" "}
          <a href="https://github.com/deepakb26" target="blank">
            deepakb26
          </a>
        </div>
      </div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,96L80,128C160,160,320,224,480,213.3C640,203,800,117,960,90.7C1120,64,1280,96,1360,112L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
          <path
             fill="#ffffff"
            fill-opacity="1"
            d="M0,96L48,117.3C96,139,192,181,288,176C384,171,480,117,576,96C672,75,768,85,864,101.3C960,117,1056,139,1152,154.7C1248,171,1344,181,1392,186.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="d-flex justify-content-center px-5">
        <div className="text-center text-light px-5">
          <h1>About</h1>
          <div>
            I am a 3rd year student currently pursuing my B.Tech in CSE with
            Data Science in VIT Vellore. I'm a tech enthusiast and an avid
            football fan who passionately follows Arsenal. Quirky Tech,
            Automobiles, Bikes and Football are sure things that will get me
            excited!
          </div>
        </div>
      </div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
             fill="#ffffff"
            fill-opacity="1"
            d="M0,96L80,128C160,160,320,224,480,213.3C640,203,800,117,960,90.7C1120,64,1280,96,1360,112L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
          <path
             fill="#ffffff"
            fill-opacity="1"
            d="M0,96L48,117.3C96,139,192,181,288,176C384,171,480,117,576,96C672,75,768,85,864,101.3C960,117,1056,139,1152,154.7C1248,171,1344,181,1392,186.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="d-flex justify-content-center px-5">
        <div className="text-center text-light px-5">
          <h1>Experience</h1>
          <div>
            <div className="p-5">
              <h2>IET-VIT</h2>
              <h4>1 year 8 months</h4>
              <h4>Vellore, Tamil Nadu, India</h4>
              <div className="h6">Editorial Head, Board Member</div>
              <div>March 2022 - Present</div>
              <p>
                Throughout my time at IET-VIT I have found joy and excitement
                working together with my friends. Initially as a core member i
                worked across the Editorial, Sponsorship and Admin Domains
                wherein I got the opportunity to work together and conduct
                events. As the Editorial Head & Board Member of IET-VIT I have
                been overseeing the editorial activities of the chapter and
                working together with the rest of the board & core team to plan
                and conduct successful events.
              </p>
            </div>
            <div className="p-5">
              <div className="h6">
                Programming Intern - EmbedSense Solutions Pvt Ltd.
              </div>
              <div>Septemeber 2023 - Present(Full-Time)</div>
              <p>
                EmbedSense Solutions is an end to end IoT solutions company
                based in Bangalore. As a programming intern I worked on one of
                their existing solutions. My role was based on handling the
                custom SDK from an external vendor which would connect the
                backend with the data collected from our devices and the fronted
                dashboard.
              </p>
            </div>
            </div>
        </div>
      </div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
             fill="#ffffff"
            fill-opacity="1"
            d="M0,96L80,128C160,160,320,224,480,213.3C640,203,800,117,960,90.7C1120,64,1280,96,1360,112L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
          <path
             fill="#ffffff"
            fill-opacity="1"
            d="M0,96L48,117.3C96,139,192,181,288,176C384,171,480,117,576,96C672,75,768,85,864,101.3C960,117,1056,139,1152,154.7C1248,171,1344,181,1392,186.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="d-flex justify-content-center px-5">
        <div className="text-center text-light px-5">
          <h1>Education</h1>
          <div className="p-5">
            <h2>Vellore Institute of Technology, Vellore </h2>
            <h4>
              Bachelor of Technology - BTech, Computer Science with Data Science{" "}
            </h4>
            <h4>Grade: 9.17 CGPA</h4>
            <h4>Vellore, Tamil Nadu, India</h4>
          </div>
          <div>            
            <p>
              Coursework: Python · OS · Networks ·  DBMS ·  Java · Data Structures and Algorithms · SQL · Object-Oriented Programming (OOP) · C · C++·
            </p>
          </div>
        </div>
      </div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
             fill="#ffffff"
            fill-opacity="1"
            d="M0,96L80,128C160,160,320,224,480,213.3C640,203,800,117,960,90.7C1120,64,1280,96,1360,112L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
export default Body;
