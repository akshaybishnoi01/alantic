import logo from './logo.svg';
import './App.css';
import './assets/css/root.css'
import HeroSection from './components/HeroSection';
import Pioneer from './components/Pioneer';
import Approvals from './components/Approvals';
import Aboutus from './components/Aboutus'
import Blogs from './components/Blogs';
function App() {
  return (
    <>
      <HeroSection />
      <Pioneer />
      <Approvals />
      <Aboutus />
      <Blogs />
    </>
  );
}

export default App;
