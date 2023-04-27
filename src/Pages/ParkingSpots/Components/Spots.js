import React from 'react';
import styles from './spots.module.css';
import ScriptTag from 'react-script-tag';

class PSpots extends React.Component {
  render() {
    return (
      <div>
        <h1>Parking Spots</h1>
        <section className={styles.parkingspots}></section>

        <ScriptTag src="./box.js"></ScriptTag>
       
      </div>
    );
  }
}

export default PSpots;
