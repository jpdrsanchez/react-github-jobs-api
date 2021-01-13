import Header from './components/Header';
import ThemeProvider from './contexts/ThemeContext';
import Home from './pages/Home';
import GlobalStyle from './styles/global';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import JobProvider from './contexts/JobContext';
import Job from './pages/Job';

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <JobProvider>
            <Route path="/" element={<Home />} />
          </JobProvider>
          <Route path="jobs/:id" element={<Job />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
