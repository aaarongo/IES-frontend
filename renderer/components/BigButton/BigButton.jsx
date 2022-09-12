import Link from 'next/link';
import React from 'react';
import styles from './BigButton.module.scss';

function BigButton({onClick, label}) {
  return (
      <button className={styles.container} onClick={onClick}>
          {label}
      </button>
  )
}

export default BigButton