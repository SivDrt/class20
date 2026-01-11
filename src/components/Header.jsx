import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>Students</h1>
      {}
      <div style={styles.logo}>🎓</div> 
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#333',
    color: 'white',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row-reverse' 
  },
  logo: {
    fontSize: '2rem'
  }
};

export default Header;