import React from 'react'
import styles from '../constants/style'
import Image from 'next/image'
import { arrowUp } from '../assets'

type Props = {}

export default function GetStarted({}: Props) {
  return (
    <div className={`flex justify-center items-center w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div className={`flex justify-center items-center flex-col w-full h-full rounded-full bg-primary text-white`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-6">
            <span>Get</span>
          </p>
          <Image src={arrowUp} className='w-6 h-6 object-contain' alt="arrow"/>
        </div>

        <p className="font-poppins font-medium text-[18px] leading-6">
          <span>Started</span>
        </p>
      </div>
    </div>
  )
}