import React from 'react'
import styles from '../constants/style'
import {feedback} from '../constants'
import FeedbackCard from "./FeedBackCard"

type Props = {}

export default function Testimonials({}: Props) {
  return (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative px-4 py-6`}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center flex-col md:flex-row mb-16 md:mb-6 relative z-[1]">
      <h2 className={`font-poppins font-semibold text-[30px]  md:text-xl lg:text-2xl text-white w-full`}>
        What People are <br className="block md:hidden" /> saying about us
      </h2>
      <div className="w-full mt-6">
        <p className={`${styles.paragraph} text-left w-full`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap justify-start md:justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </section>
)
}