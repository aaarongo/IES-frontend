import React from 'react'

function ViewIncomePage() {
  return (
    <div className={styles.section}>
    <div className={styles.left}>
        <SideMenu homeState="active" viewincomeState="" addincomeState="" viewexpenseState="" addexpenseState="" /></div>
    <div className={styles.right}>
        Welcome username!
    </div>
</div>
  )
}

export default ViewIncomePage