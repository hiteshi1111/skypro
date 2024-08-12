import React from 'react'
import ImageIcons from '../imageComponent/ImageIcons';
import { FaStar } from "react-icons/fa";
import { BiSolidQuoteAltRight } from "react-icons/bi";

const Testimonials = () => {
  return (
    <section className="testimonial style-two py-100 pb-50">
      <div className="container">
        <h2 className='uppercase text-center lg:mb-[50px] mb-[30px]'>What our client say about us</h2>

        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[40px] gap-[20px]'>
          {testimonialData.map((testimonial) => (
            <div className='relative text-center bg-[#f9f9f9] hover:bg-[#f4f6fd] duration-500 hover:mt-[-15px] rounded-[30px] p-[30px] overflow-hidden group' key={testimonial.id}>
              <span className='absolute top-[-80px] right-[-80px] w-[160px] h-[160px] rounded-full bg-[#071e43] duration-500 group-hover:bg-[#fd5901]' >
                <BiSolidQuoteAltRight className='text-white text-[26px] absolute left-[33px] bottom-[33px]' />
              </span>
              <div className='w-70px h-[70px] rounded-full inline-block overflow-hidden mb-[10px]'>
                <img className='w-full h-full object-center object-cover' src={testimonial.image} alt={testimonial.imageAlt} title="skypro about" />
              </div>

              <h4 className='mb-[10px]'>{testimonial.client}</h4>
              <span className='mb-[10px] inline-block font-medium uppercase text-[#fd5901]'>Client</span>

              <ul className="flex items-center justify-center gap-[5px] mb-[20px]">
                {Array.from({ length: 5 }, (_, index) => (
                  <li key={index}>
                    <FaStar className='text-[#fec42d] text-[18px]' />
                  </li>
                ))}
              </ul>

              <p>{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
const testimonialData = [
  {
    id: 1,
    image: ImageIcons.client1,
    imageAlt: 'Skypro Client 1',
    content: "The channel lineup offered by Skypro is extensive and diverse, catering to a wide range of interests and preferences. Whether it's sports, movies, news, or entertainment, the comprehensive selection ensures that there is always something for everyone.",
    client: "Ravi Verma",
  },
  {
    id: 2,
    image: ImageIcons.client2,
    imageAlt: 'Skypro Client 2',
    content: "Weve been enjoying an exceptional IPTV service with our current provider, and the experience has been nothing short of fantastic. The streaming quality is top-notch, delivering clear visuals and a seamless entertainment experience.",
    client: "Varun Antal",
  },
  {
    id: 3,
    image: ImageIcons.client4,
    imageAlt: 'Skypro Client 3',
    content: "What truly sets our IPTV provider apart is their remarkable customer service. The staff is not only highly proficient but also genuinely available, making us feel valued as customers. they have the best service in the world. Skypro has reliability of their service.",
    client: "Anjali Yadav",
  },
];

export default Testimonials
