import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FirstComponent from './components/LoginComponent/FirstComponent';
import ThirdComponent from './components/AdmComponent/ThirdComponent';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<FirstComponent />} />
          <Route path="/adm" element={<ThirdComponent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
