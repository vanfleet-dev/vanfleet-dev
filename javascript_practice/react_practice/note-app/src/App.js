import './style.css';
import Header from './components/Header';
import Note from './components/Note';
import Footer from './components/Footer';
import notes from './notes.js';
import Login from './components/Login';

const isLoggedIn = false;

function App() {
  return (
    <div className="App">
      <Header />
      {isLoggedIn ? notes.map(note => <Note key={note.id} title={note.title} content={note.content} />) : <Login />}
      <Footer />
    </div>
  );
}

export default App;
