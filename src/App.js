import './App.css';
import Photos from './components/Photos'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <br/>
        <h1>
          Jinny Park Photography
        </h1>
        <br/>
      </header>
      <section>
        <Photos />
      </section>
      <footer>
        <h2>Contact</h2>
        <h4>jinnyparkphotography@gmail.com</h4>
        <br/>
        <br/>
      </footer>
    </div>
  );
}

export default App;
