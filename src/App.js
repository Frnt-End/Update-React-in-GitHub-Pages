import './App.css';
import { Tutorial, Author } from './tabs';
import BgVideo from './video/vid-bg.mp4';



function App() {

  return (
  <>
  <video autoPlay loop muted className="bg-vid">
    <source src={BgVideo} type="video/mp4" />
  </video>
    <div className="container">
    <div className="main-content-top">
      <h1>How to update React in GitHub pages</h1>
      <h2>Simple solution for fast update</h2>
      <p className="date">May 31, 2021</p>
    </div>

    <div className="main-content-bottom">
    <h3 className="p-content"><strong>In order to update React, we need to update the build directory.</strong></h3>
    <p>Let's do this with those commands:</p>
    <div className="commands">
     <Tutorial />
    </div>
    <p><strong>..and that's it! </strong> now refresh your GitHub page to see your latest changes.If you need more details, check out the full guide in the README file.</p>

      </div>
      <div className="author">
       <Author />
      </div>
    </div>
    </>
  );
}

export default App;
