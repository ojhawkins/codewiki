import './App.css';
import { Route } from "react-router-dom";
import Header from './Components/Header';
import SideMenu from './Components/SideMenu';
import Home from './Components/Home';
import CSharp from './MarkdownPages/CSharp';

function App() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <SideMenu />
        <Content />
      </div>
    </>
  );
}

const Content = (props) => (
  <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
    <Route path="/" exact render={(x) => <Home {...x} />} />
    <Route path="/cs" exact render={(x) => <CSharp {...x} />} />
  </div>
);

export default App;
