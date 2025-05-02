import React from 'react';
import Navbar from './components/Navbar';
import ThreeScene from './components/ThreeScene';

function App() {
  return (
    <div style={{
      margin: 0,
      padding: 0,
      width: '100%',
      minHeight: '100vh',
      overflowX: 'hidden'
    }}>
      <Navbar />
      <ThreeScene />
      <section style={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#1a1a1a',
        color: 'white',
        padding: '4rem 0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        boxSizing: 'border-box'
      }}>
        <div style={{ width: '100%', maxWidth: '1200px', padding: '0 2rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>About Me</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.6', fontSize: '1.2rem' }}>
            ouaudhowaiid waijdpiw ajdpi jwapid jawpidj pwaijd piwajdp iwjap diwjapdi jwapid jwapidjwpaidj pawijdpiwajdpi jwa
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
