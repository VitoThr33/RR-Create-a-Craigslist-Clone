// Import data
import {postings} from './postings'
// Import components
import './App.css';
import Searchbar from './searchbar.js';
import Directory from './directory.js';
import Gallery from './gallery.js';
import Sidebar from './sidebar.js';

const App = () => {
  return (
    <div>
      <h1>RyansList</h1>
      <div className="App">
        <Searchbar />
        <Directory />
        <Sidebar />
        <Gallery postings={postings} />
      </div>
    </div>
  );
}

export default App;
