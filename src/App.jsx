import "./app.scss";
import Myself from "./component/myself/Myself";
import Navbar from "./component/navbar/Navbar";
import Parallax from "./component/parallax/Parallax"
import Services from "./component/services/service";
import Portfolio from "./component/portfolio/Portfolio";
import Contact from "./component/contact/contact";
import Cursor from "./component/cursor/Cursor";

const App = () => {
  return <div>

    <Cursor/>
    <section id="Homepage">
      <Navbar/>
      <Myself/>
    </section>

    <section id="Services">
      <Parallax type="services"/></section>

    <section><Services/></section>

    <section id="Portfolio">
      <Parallax type="portfolio"/>
      </section>
      
    <Portfolio/>
    <section id="contact"><Contact/></section>

  </div>;
};

export default App;
