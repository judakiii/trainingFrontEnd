// import "./App.css";
import { Landing } from "./pages";
// import {Header} from "./components";
import Header from './components/spectific/header/Header';
import Footer from "./components/spectific/footer/Footer";

function App() {
  return (
    // <div className="App">
    //     <Header />
    //   <Landing />
    // </div>


      <>
          <Header/>
          <Landing/>
          <Footer/>
      </>
  );
}

export default App;
