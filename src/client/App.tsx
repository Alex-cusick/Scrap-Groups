import React from 'react';
import { render } from 'react-dom';
import Navbar from './Components/Navbar';

const App: React.FC = () => {
  const links = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Contact', url: '/contact' }
  ];

  return (
    <div>
      <Navbar title="My App" links={links} />
      // rest of your app
    </div>
  );
}

export default App;

render(<App />, document.querySelector('#root'));