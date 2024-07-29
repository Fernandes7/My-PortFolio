import React from 'react'
import styles from"./Loader.module.css"
import { PropagateLoader } from 'react-spinners'

function Loader() {
  return (
    <div className={styles.loaderwrap}>
        <div>
            <p>Good Thinks Takes Time</p>
            <PropagateLoader color='black' size={10}/>
        </div>
    </div>
  )
}

export default Loader