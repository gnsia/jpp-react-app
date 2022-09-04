import './App.css';
import Contents from './components/Contents'

const DATA = [
  {
      fileName: 'demo01',
      tempFolder: '8ckCbZJ',
      className: ['paris'],
      isShow: true,
  },
  {
      fileName: 'demo02',
      tempFolder: 'y0CjZyz',
      className: ['building', 'pattern'],
      isShow: true,
  },
  {
      fileName: 'demo03',
      tempFolder: 'f0hH0KF',
      className: ['building', 'pattern'],
      isShow: true,
  },
  {
      fileName: 'demo04',
      tempFolder: 's2CLbxx',
      className: ['building', 'pattern'],
      isShow: true,
  },
  {
      fileName: 'demo05',
      tempFolder: 'YNvZSP3',
      className: ['building', 'pattern'],
      isShow: true,
  },
  {
      fileName: 'demo06',
      tempFolder: 'r6SvT2k',
      className: ['building', 'london'],
      isShow: true,
  },
  {
      fileName: 'demo07',
      tempFolder: 'xMGngCW',
      className: ['park'],
      isShow: true,
  },
  {
      fileName: 'demo08',
      tempFolder: 'KKcZcmC',
      className: ['landscape', 'dover'],
      isShow: true,
  },
  {
      fileName: 'demo09',
      tempFolder: 'yVTwRbY',
      className: ['city', 'paris'],
      isShow: true,
  },
  {
      fileName: 'demo10',
      tempFolder: 'VpC63wt',
      className: ['city', 'paris'],
      isShow: true,
  },
  {
      fileName: 'demo11',
      tempFolder: '85hhHnd',
      className: ['city', 'paris'],
      isShow: true,
  },
  {
      fileName: 'demo12',
      tempFolder: 'qdXZwCD',
      className: ['city', 'paris'],
      isShow: true,
  },
  {
      fileName: 'demo13',
      tempFolder: '6nZjRc3',
      className: ['city', 'paris'],
      isShow: true,
  },
];

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
        <Contents DATA={DATA}/>
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
