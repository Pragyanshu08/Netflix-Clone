import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero.jsx';
import Sections from './components/Sections.js';
import Exceptionalsection from './components/Exceptionalsection.js';
import Questions from './components/Questions.js';
import Footer from './components/Footer.js';


function App() {
  return (
    <div className="App">
      <Hero/>

      <Sections
      value={true}
      heading="Enjoy on your TV"
      para="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
      imageNo="1"
      videoNo="2"
      />

      <Sections
       value={false}
       heading="Download your shows to watch offline"
       para="Save your favourites easily and always have something to watch."
       imageNo="3"
       videoNo={null}
       imgType={"jpg"}
       
      />

<Exceptionalsection
       
       value={true}
       heading="Watch everywhere"
       para="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
       imageNo="2"
       videoNo="1"
       />

   <Sections
      value={false}
      heading="Create profiles for kids"
      para="Send children on adventures with their favourite characters in a space made just for them—free with your membership."
      imageNo="4"
      videoNo={null}
      imgType={"png"}
      
      />

     <Questions/>
     <Footer/>
    </div>
  );
}

export default App;

