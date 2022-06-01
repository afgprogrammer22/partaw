import { Navbar } from './components';
import { BrowserRouter as Routes } from 'react-router-dom';
const App = () => {
  return (
    <div>
      <Routes>
        <Navbar />
      </Routes>
    </div>
  );
};

export default App;
