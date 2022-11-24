import './style.css';
import Header from './components/Header';
import Note from './components/Note';
import Footer from './components/Footer';
import notes from './notes.js';
import Home from './components/Home';

const isLoggedIn = false;

function App() {
  return (
    <div className="App">
      <Header />
      {isLoggedIn ? notes.map(note => <Note key={note.id} title={note.title} content={note.content} />) : <Home />}
      <Footer />
    </div>
  );
}

export default App;
