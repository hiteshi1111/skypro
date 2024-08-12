import React, { useState } from 'react';
// import ImageIcons from '../imageComponent/ImageIcons';
import Button from '../shared/button';
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

const HomeFaq = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="pt-0">
      <div className="container !max-w-[1000px]">
        <h2 className='text-center mb-[40px] uppercase'>Frequently Asked Questions</h2>
        <div>
          {faqData.map((item, i) => (
            <div key={i} className='lg:px-[25px] px-[20px] lg:py-[20px] py-[16px] mb-5 rounded-md shadow-[0px_3px_15px_0px_rgba(0,0,0,0.1)] duration-500 overflow-hidden'>
              <button onClick={() => toggleAccordion(i)} className='w-full text-left cursor-pointer'>
                <div className='relative pr-[22px] flex justify-between items-center'>
                  <h5 className={` font-medium ${openIndex === i ? "text-[#fd5901]" : ""}`} style={{ fontFamily: 'Roboto, sans-serif' }}>{item.question}</h5>
                  {openIndex === i ? (
                    <FaChevronUp size="15" className='absolute right-0 text-[#fd5901]' />
                  ) : (
                    <FaChevronDown size="15" className='absolute right-0' />
                  )}
                </div>
              </button>
              <div className={` duration-300 faq-content ${openIndex === i ? "opacity-100 mt-[15px] pb-0" : "opacity-0 mt-0 pb-0 max-h-[0px]"}`}>
                <p
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                  className='last:mb-0'
                />
                {item.faqList && <ul className='mt-[15px] list_style'>
                  {item.faqList.map((itemList, i) => (
                    <li className='mb-[8px] text-[16px] relative pl-[25px]'>
                      {itemList}</li>
                  ))}
                </ul>
                }
              </div>
            </div>
          ))}
          <Button link='More Faqs' url='/faqs' />
        </div>
      </div>
    </section>
  )
}

const faqData = [
  {
    question: "What is IPTV?",
    answer: "IPTV, which is an acronym for Internet Protocol Television is a service through which users can watch TV programs and other video content over the internet. IPTV services are gaining a lot of popularity in today’s world because of the convenience of watching content anytime and anywhere. Even international content could be viewed easily, as there are no geographical boundaries",
  },
  {
    question: "How does IPTV work?",
    answer: "Firstly, the television content is being digitised by content providers and then its encoding is done. This encoded content is sent to the end user via the internet and then users take subscriptions according to their choice.",
  },
  {
    question: "What equipment do I need for IPTV?",
    answer: "The equipments required are Smart TV or set-up box, internet connectivity, router or modem, remote control or mobile application and compatible cables.",
  },
  {
    question: "What are the advantages of IPTV over traditional TV services?",
    answer: "The first and the foremost advantage is that users can watch programs at any time and place according to their convenience, as one just needs an internet connection but on Traditional TVs programs could be watched only on the scheduled timing. Besides this, users have flexibility and more control over the content like they have options like video on demand, fast-forward, rewind. However, all these facilities are not being offered by TV services. One more thing to consider here is that content can be accessed over multiple devices like smart TV, mobile phones, tablets, laptops etc.",
  },
  {
    question: "What equipment do I require to use IPTV?",
    answer: "There is a need for consistent internet connection, which you can get free of cost (MyInternet) with our Skypro IPTV services. You also need to have a compatible device like smart TV, tablet, smartphone, or computer, and a set-top box."
  },
  {
    question: "Are IPTV services legal?",
    answer: "IPTV services are completely legal, you just need to have a legitimate service provider, having licensing agreements."
  },
  {
    question: "What is the process of troubleshooting common IPTV issues?",
    answer: "If you face any issues, you should follow below given steps:",
    faqList: ["Firstly, you need to check your internet connection, as it needs to be consistent and faster.", "Restart your device and router.", "Your IPTV app or set-top box should be updated.", "You need to clear the cache.", "If the problem persists, you should contact your IPTV service provider.",]
  },
  {
    question: "Do you provide parental control features?",
    answer: "Yes, our IPTV subscription services provide parental control features with which parents can restrict certain age based content from their children, keeping an eye on the streaming habits of their children."
  },
  {
    question: "Is it possible to customise the IPTV channel lineup?",
    answer: "Yes, we offer tailored services, where you can select the particular channels according to your needs and preferences."
  },
  {
    question: "How can IPTV be set up on my Smart TV?",
    answer: "You just need to download our “Skypro IPTV app” and then log in by scanning QR code."
  },
  {
    question: "What can I do in cases of buffering?",
    answer: "It can occur due to several issues and it can be resolved via-Checking the speed of the internet.Connecting the device to the router with the help of ethernet cable rather than Wi-Fi.Closing  all other apps utilising bandwidth.Restarting the router.If the problem persists, you can contact your IPTV services provider",
    faqList: ["Checking the speed of the internet.", "Connecting the device to the router with the help of ethernet cable rather than Wi-Fi.", "Closing  all other apps utilising bandwidth.", "Restarting the router.",]

  },
  {
    question: "Can I watch IPTV outside my home?",
    answer: "Yes, as we provide multi-device compatibility, IPTV can be streamed outside home also on your smartphone, tablet, computer etc with the help of an internet connection."
  },
  {
    question: "Which type of content is shown on IPTV?",
    answer: "Skypro, best IPTV service providers offer a broad range of content like live TV, movie channels, sports channels, news channels etc, catering to the diverse needs of the viewers."
  },
  {
    question: "What is the difference between IPTV and OTT?",
    answer: "With IPTV services, content is delivered over a managed network and for this, users need to have a subscription of an IPTV provider like Skypro IPTV in India, however in case of OTT, content is provided  over the public internet and there is no need for any managed network."
  }
];

export default HomeFaq;