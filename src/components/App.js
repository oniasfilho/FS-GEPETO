import {StateProvider} from './StateContext';
import Header from './Header';
import Cadastro from './Cadastro';
import List from './List';
import Footer from './Footer';


function App() {
  return (
    <div className="App">     
      {/* <Header></Header> */}
      <StateProvider>
        <Cadastro/>
        <List/>
      </StateProvider>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
