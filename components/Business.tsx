import React from 'react'
import styles from '../constants/style'
import { layout } from '../constants/style'
import { features } from '../constants'
import Button from './Button'
import Image from 'next/image'


type Props = {
  index: any,
  icon: any,
  title: string,
  content: any,
}


const FeatureCard = ({index, icon, title, content}: Props) => {
return(<div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <Image src={icon} alt='icon' className='w-[50%] h-[50%] object-contain' />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
)}

export default function Business() {
  return (
    <section id="features" className={`${layout.section}  px-4`}>
      <div className={`${layout.sectionInfo} py-4`}>
        <h2 className={`font-poppins font-semibold text-[30px]  md:text-xl lg:text-2xl text-white w-full`}>
          You do the business, <br className="block ss:hidden" /> we’ll handle
          the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button styles="mt-10"/>
      </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
    </section>
  )
}