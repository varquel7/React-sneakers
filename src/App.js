import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/CardDrawer';
import Card2 from './components/Card2';
import Card3 from './components/Card3';
import Card4 from './components/Card4';
import Card5 from './components/Card5';
import Card6 from './components/Card6';
import Card7 from './components/Card7';
import Card8 from './components/Card8';


function App() {
  return (
    <div  className="wrapper">
<div style={ { display: 'none' } } className="overlay">

<Drawer />
</div>

  <Header />

  <div className="content">
    <div className="Search">
  <h1 className="title2">Nike Sneakers</h1>
  <div className="search-block">
   <img width={18} height={18} src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-2.png" alt="search" /> 
  <input placeholder="Search.." />
  </div>
  </div>

<div className="sneakers">
  <Card />
  <Card2 />
  <Card3 />
  <Card4 />
  <Card5 />
  <Card6 />
  <Card7 />
  <Card8 />


    </div>
    </div>
    </div>
  );
}

export default App;