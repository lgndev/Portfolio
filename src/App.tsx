const App = () => {
  return (
    <>
      <div
        className="pageContainer"
        style={{
          height: "100%",
          backgroundColor: "#151515",
          color: "white",
          fontFamily: "'Roboto Mono', monospace",
          position: "relative",
          overflowY: "auto",
          overflowX: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          className="introContainer"
          style={{
            color: "white",
            fontFamily: "'Roboto Mono', monospace",
            position: "relative",
            borderBottom: "2px solid white",
            flexGrow: "1",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            className="header"
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p>logansawyer</p>
            <ul
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <li>GITHUB</li>
              <li>LINKEDIN</li>
            </ul>
          </div>
          <div
            style={{
              padding: "40px",
              flexGrow: "1",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <p className="saluation">Nice to meet you! I'm Logan Sawyer.</p>
            <p className="blurb">
              Based in the US, I'm a front-end developer passionate about
              building modern react web apps.
            </p>
          </div>
        </div>
        <div
          className="skillsContainer"
          style={{
            color: "white",
            fontFamily: "'Roboto Mono', monospace",
            position: "relative",
            padding: "40px",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              flex: "0 0 33%",
              paddingBottom: "40px",
            }}
          >
            <p>HTML</p>
            <p>5 years of experience</p>
          </div>
          <div
            style={{
              flex: "0 0 33%",
              paddingBottom: "40px",
            }}
          >
            <p>CSS</p>
            <p>5 years of experience</p>
          </div>
          <div
            style={{
              flex: "0 0 33%",
              paddingBottom: "40px",
            }}
          >
            <p>Javascript</p>
            <p>5 years of experience</p>
          </div>
          <div
            style={{
              flex: "0 0 33%",
              paddingBottom: "40px",
            }}
          >
            <p>React</p>
            <p>3 years of experience</p>
          </div>
          <div
            style={{
              flex: "0 0 33%",
              paddingBottom: "40px",
            }}
          >
            <p>APIs</p>
            <p>5 years of experience</p>
          </div>
          <div
            style={{
              flex: "0 0 33%",
              paddingBottom: "40px",
            }}
          >
            <p>Typescript</p>
            <p>3 years of experience</p>
          </div>
        </div>
        <div
          className="projectsContainer"
          style={{
            color: "white",
            fontFamily: "'Roboto Mono', monospace",
            position: "relative",
            padding: "0 40px 40px 40px",
          }}
        >
          <p>Projects</p>
          <p>Coming soon...</p>
        </div>
        <div
          className="contactContainer"
          style={{
            backgroundColor: "#242424",
            color: "white",
            fontFamily: "'Roboto Mono', monospace",
            position: "relative",
            padding: "40px",
          }}
        >
          <div>
            <p>Contact</p>
            <p>
              I would love to hear about your prject and how I could help.
              Please fill in the form, and I'll get back to you as soon as
              possible
            </p>
          </div>
          <form>
            <input placeholder="name" />
            <input placeholder="email" />
            <textarea placeholder="message" />
          </form>
        </div>
      </div>
    </>
  );
};

export default App;
