import './style.css';
import Header from './components/Header';
//import Note from './components/Note';
import Footer from './components/Footer';
//import notes from './notes.js';
import Login from './components/Login';
import Input from './components/Input';

function App() {
  return (
    <div className="App">
      <Header />

      <Input 
      type='text'
      placeholder='username'
      />
      <Input 
      type='text'
      placeholder='password'
      />
      <Login />

      {/* {notes.map(note => 
      <Note 
        key={note.id}
        title={note.title}
        content={note.content}
      />
      )} */}
      <Footer />
    </div>
  );
}

export default App;
