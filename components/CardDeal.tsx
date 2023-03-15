import React from 'react'
import {card} from '../assets'
import styles, {layout} from '../constants/style'
import Image from 'next/image'
import Button from './Button'


type Props = {}

export default function CardDeal({}: Props) {
  return (
  <section className={`${layout.section} px-4 flex-col md:flex-row py-8`}>
    <div className={layout.sectionInfo}>
      <h2 className={`font-poppins font-semibold text-[30px]  md:text-xl lg:text-2xl text-white w-full`}>
        Find a better card deal <br className="block md:hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} w-full mt-5`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <Image src={card} alt="billing" className="w-full h-full" />
    </div>
  </section>
);
}