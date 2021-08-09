import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';

let deferredPrompt; 

function App() {
  const [installable, setInstallable] = useState(false);
    
useEffect(()=>{
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;
      // Update UI notify the user they can install the PWA
      setInstallable(true);
    });

    window.addEventListener('appinstalled', () => {
      // Log install to analytics
      alert('INSTALL: Success');
    });
 
  },[]);
  const handleInstallClick = (e) => {
      // Hide the app provided install promotion
      setInstallable(false);
      // Show the install prompt
      deferredPrompt.prompt();
      console.log(deferredPrompt);
      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          
        } else {
          
        }
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {installable &&  <button style={{cursor:'pointer'}} className="add-button"  onClick={handleInstallClick} >Install Yat</button> }  
      </header>
    </div>
  );
}

export default App;
