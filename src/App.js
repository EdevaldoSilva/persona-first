import style from './App.css';
import NavBar from './NavBar';
import Footer from './Footer';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About';
import SharedLayout from './SharedLayout';
import Error404 from './Error404';
import Login from './Login';
import FreelancerProfile from './FreelancerProfile';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='freelancer' element={<FreelancerProfile />} />
            <Route path='*' element={<Error404 />} />
          </Route>
          <Route path='login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
