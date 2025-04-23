import React from 'react'
import Image from 'next/image'
import styles from '@/styles/initialState.module.css'
const InitialState = () => {
  return (
    <div className={styles.container}>
      <Image src={'/illustration-empty.svg'} width={200} height={200} alt='image'/>
      <h2>Results Shown Here</h2>
      <p>Complete the form and click calculate repayments to see what your monthly repayments would be.</p>
    </div>
  )
}

export default InitialState
