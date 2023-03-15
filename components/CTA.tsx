import React from 'react'
import styles from '../constants/style'
import Button from './Button'


type Props = {}

export default function CTA({}: Props) {
  return (
  <section className={`flex justify-center items-center flex-col ss:flex-row bg-black-gradient-2 rounded-[20px] box-shadow px-4 mx-4 my-10`}>
    <div className="flex-1 flex flex-col mt-4">
      <h2 className={`font-poppins font-semibold text-[30px] md:text-2xl lg:text-3xl text-white w-full`}>
        Let’s try our service now!
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>

    <div className={`${styles.flexCenter} mt-10 my-2 py-6`}>
      <Button styles='' />
    </div>
  </section>
  )
}