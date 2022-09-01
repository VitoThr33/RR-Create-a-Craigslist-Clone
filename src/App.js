// Import data
import {postings} from './postings'
// Import components
import './App.css';
import Searchbar from './components/searchbar.js';
import Directory from './components/directory.js';
import Gallery from './components/gallery.js';
import Sidebar from './components/sidebar.js';

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
