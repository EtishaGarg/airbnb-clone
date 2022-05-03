import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import infoData from './data';


function App() {
  const dataElement = infoData.map(data =>{
    return(
      <Card 
        key= {data.id}
        img1= {data.coverImg} 
        rating= {data.stats.rating} 
        reviewCount= {data.stats.reviewCount}
        location= {data.location}
        title= {data.title}
        price= {data.price}
        openSpots= {data.openSpots}
        //data={data}
        />)
  })
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <section className='card-list'>
        {dataElement}
      </section>
    </div>
  );
}

export default App;
