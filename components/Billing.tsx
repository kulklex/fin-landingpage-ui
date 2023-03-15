import React from 'react'
import styles, {layout} from '../constants/style'
import Image from 'next/image'
import {apple, bill, google} from '../assets'


type Props = {}

export default function Billing({}: Props) {
  return (
    <section id="product" className={`${layout.sectionReverse} px-4 flex-col md:flex-row py-8`}>
    <div className={layout.sectionImgReverse}>
      <Image src={bill} alt="billing" className="w-full h-full relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={`${layout.sectionInfo} py-4`}>
      <h2 className={`font-poppins font-semibold text-[30px]  md:text-xl lg:text-2xl text-white w-full`}>
        Easily control your <br className="block ss:hidden" /> billing &
        invoicing
      </h2>
      <p className={`${styles.paragraph} w-full mt-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
        aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
        placerat.
      </p>

      <div className="flex flex-row flex-wrap mt-10 md:mt-6">
        <Image src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <Image src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div>
    </div>
  </section>
)
}