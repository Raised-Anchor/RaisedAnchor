import logo from "./Logos/website/svg/Vector logo - No Background.svg";
import "./App.css";
import { ContactCard } from "./component/ContactCard";

function App() {
  return (
    <>
    {alert(myvar.a)}
    <div className="App">
      {/* <header className="App-header"> */}
      <img src={logo} className="" alt="Raised Anchor" />
      <p>Removing the weight of creating.</p>
      {/* </header> */}
      <footer>
        <ContactCard
          contact={{
            name: "Charles Hunter",
            email: "charles.hunter@raisedanchor.io",
          }}
        />
        {" | "}
        <ContactCard
          contact={{
            name: "Heather Kutzler",
            email: "heather.kutzler@raisedanchor.io",
          }}
        />
        {" | "}
        <ContactCard
          contact={{
            name: "Robb Burson",
            email: "robb.burson@raisedanchor.io",
          }}
        />
        {" | "}
        <ContactCard
          contact={{
            name: "Jerry Robertson",
            email: "jerry.robertson@raisedanchor.io",
          }}
        />
      </footer>
    </div>
    </>
  );
}

export default App;
