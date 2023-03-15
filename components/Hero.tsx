import React from 'react'
import styles from '../constants/style'
import { discount, robot } from '../assets'
import Image from 'next/image'
import GetStarted from './GetStarted'


type Props = {}

export default function Hero({}: Props) {
  return (
    <section id="home" className={`flex flex-col md:flex-row ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col px-16 md:px-6 xl:px-0`}>
        <div className={`flex flex-row items-center py-[6px] px-4 rounded-[10px] mb-2 bg-discount-gradient`}>
          <Image src={discount} alt="discount" className="w-[32px] h-[32px]"/>
          <p className={`${styles.paragraph} ml-2`}>
            <span className='text-white'>20%</span>
            Discount For {" "}
            <span className="text-white"> Month</span>
            Account
          </p>
        </div>

        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className="flex-1 font-poppins font-semibold text-white text-[52px] ss:text-[72px] leading-[75px] ss:leading-[100px]">
            The Next <br className='block md:hidden' /> {" "}
            <span className='text-gradient'>Generation</span> {" "}
          </h1>

          <div className='hidden ss:flex mr-0 md:mr-4'>
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold text-white text-[52px] ss:text-[72px] leading-[75px] ss:leading-[100px]">
         Payment Method
        </h1> 
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>


      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <Image src={robot} alt="billing" className="w-full h-full relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  )
}