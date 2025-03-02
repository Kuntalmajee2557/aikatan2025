"use client";
import React from "react";
import styles from './square.module.css'; // renamed to indicate a CSS module

const Doctorstrange = () => {
  const spans = Array.from({ length: 25 }, (_, i) => (
    <span key={i} style={{ "--x": i + 1 } as React.CSSProperties}></span>
  ));

  return (
    <div className={styles.component}>
      <div className={styles.wrapper}>
        {spans}
      </div>
      <section className={styles.section}></section>
    </div>
  );
};

export default Doctorstrange;
