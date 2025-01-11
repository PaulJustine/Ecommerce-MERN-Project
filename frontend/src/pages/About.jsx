import React from 'react'
import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox'
import { assets } from '../assets/frontend_assets/assets'

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, ex, sunt molestias 
            voluptatem provident aspernatur porro illum quam corporis eveniet iste. Officia voluptates ab perspiciatis corrupti
             magnam laborum, earum odit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, deserunt expedita et temporibus
             reiciendis dolorem magnam doloribus, optio, exercitationem fugit eaque minus commodi inventore laudantium maiores
              quae ipsam eius atque.</p> 
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus molestiae fuga facere sed aliquam repudiandae quaerat
             aliquid veritatis fugiat, libero nulla omnis ratione ex minus, placeat dolorem quidem vero provident.</p>
        
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}  />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Insurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae laboriosam impedit doloremque suscipit repellat 
            quidem facere illum eum, esse nihil porro modi natus aliquid cum voluptatum dignissimos. Est, totam aliquid.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Conveneince:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae laboriosam impedit doloremque suscipit repellat 
            quidem facere illum eum, esse nihil porro modi natus aliquid cum voluptatum dignissimos. Est, totam aliquid.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service :</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae laboriosam impedit doloremque suscipit repellat 
            quidem facere illum eum, esse nihil porro modi natus aliquid cum voluptatum dignissimos. Est, totam aliquid.</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About
