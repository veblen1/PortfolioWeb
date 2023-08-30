import React from 'react';
import '../App.css';

const Algorithm: React.FC = () => {
  const bojUsername = "tgic01";

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
      <a
        href={`https://solved.ac/${bojUsername}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'block', margin: 'auto', marginLeft: '400px', textAlign: 'center' }}
      >
        <img
          src={`http://mazassumnida.wtf/api/generate_badge?boj=${bojUsername}`}
          alt="Solved.ac 프로필"
          style={{ width: '500%', maxWidth: '400px', height: 'auto' }}
        />
      </a>
    </div>
  );
};

export default Algorithm;
