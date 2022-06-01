import { Navbar } from './components';
import { Header } from './container';
import { BrowserRouter as Routes } from 'react-router-dom';
const App = () => {
  return (
    <div>
      <Routes>
        <Navbar />
      </Routes>
      <Header />
    </div>
  );
};

export default App;
