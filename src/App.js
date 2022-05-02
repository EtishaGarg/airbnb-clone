import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import img1 from './images/img1.png';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Card 
        img1= {img1} 
        rating= "5.0"
        reviewCount= {6}
        country= "USA"
        title= "Life Lessons with Katie Zaferes"
        price= {136}
        />
    </div>
  );
}

export default App;
