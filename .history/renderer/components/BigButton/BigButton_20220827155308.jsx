import Link from 'next/link';
import React from 'react';
import styles from './BigButton.module.scss';

function BigButton({link}) {
  return (
    <Link className={styles.container}>
        SUBMIT
    </Link>
  )
}

export default BigButton