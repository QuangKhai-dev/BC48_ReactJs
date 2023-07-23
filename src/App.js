import Content from './Components/Content';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import DemoCss from './DemoCss/DemoCss';
import DemoState from './DemoState/DemoState';
import HandleOnChange from './HandleEvent/HandleOnChange';
import HandleOnClick from './HandleEvent/HandleOnClick';

function App() {
  return (
    <div className="App">
      {/* <Header />
      <div className="row">
        <div className="col-4">
          <Navigation />
        </div>
        <div className="col-8">
          <Content />
        </div>
      </div>
      <Footer /> */}
      {/* <HandleOnClick /> */}
      {/* <HandleOnChange /> */}
      {/* <div id="demo">Bc48</div>
      <DemoCss /> */}
      <DemoState />
    </div>
  );
}

export default App;
