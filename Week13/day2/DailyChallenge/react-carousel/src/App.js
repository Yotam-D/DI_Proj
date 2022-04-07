// import logo from './logo.svg';
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function App() {
  return (
    <Carousel>
        <div>
            <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg" alt = "image1" />
            <p className="legend">Hong Kong</p>
        </div>
        <div>
            <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/w_480,h_384/cities/c1cklkyp6ms02tougufx.webp" alt = "image2" />
            <p className="legend">Macao</p>
        </div>
        <div>
            <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/w_480,h_384/cities/e8fnw35p6zgusq218foj.webp" alt = "image3" />
            <p className="legend">Japan</p>
        </div>
        <div>
            <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/w_480,h_384/cities/liw377az16sxmp9a6ylg.webp" alt = "image4" />
            <p className="legend">Las Vegas</p>
        </div>
      </Carousel>
  )
}

export default App;
