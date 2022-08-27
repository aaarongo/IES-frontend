import Link from 'next/link';
import React from 'react';
import styles from './BigButton.module.scss';

function BigButton({link}) {
  return (
    <Link 
    href={link}>
        <div className={styles.container}>
            SUBMIT
        </div>
    </Link>
  )
}

export default BigButton