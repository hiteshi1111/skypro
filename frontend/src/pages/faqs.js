import React, { useState } from 'react'
import SEO from '../components/shared/seo';
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import ImageIcons from '../components/imageComponent/ImageIcons';
import InnerPageBanner from '../components/shared/innerPageBanner';

const Faqs = () => {
  const [expanded, setExpanded] = useState(0);
  function toggleHandler(i) {
    if (expanded === i) {
      setExpanded(null);
    } else {
      setExpanded(i);
    }
  }
  return (
    <>
      <SEO
        title="Frequently Asked Questions | Skypro IPTV"
        description="Find answers to common questions about Skypro IPTV services. Get detailed info on our FAQs page to help you with your inquiries."
        schema={`{
            "@context": "https://schema.org/", 
            "@type": "FAQPage", 
            "mainEntity": [{
                "@type": "Question", 
                "name": "What is IPTV?",
                "acceptedAnswer": { 
                "@type": "Answer",
                "text": "IPTV, which is an acronym for Internet Protocol Television is a service through which users can watch TV programs and other video content over the internet. IPTV services are gaining a lot of popularity in today’s world because of the convenience of watching content anytime and anywhere. Even international content could be viewed easily, as there are no geographical boundaries."
                } 
            },{
                "@type": "Question", 
                "name": "How does IPTV work?",
                "acceptedAnswer": { 
                "@type": "Answer",
                "text": "Firstly, the television content is being digitised by content providers and then its encoding is done. This encoded content is sent to the end user via the internet and then users take subscriptions according to their choice."
                }  
            },{"@type": "Question","name": "What equipments do I need for IPTV?","acceptedAnswer": {"@type": "Answer","text": "The equipments required are Smart TV or set-up box, internet connectivity, router or modem, remote control or mobile application and compatible cables."}},{"@type": "Question","name": "What are the advantages of IPTV over traditional TV services?","acceptedAnswer": {"@type": "Answer","text": "The first and the foremost advantage is that users can watch programs at any time and place according to their convenience, as one just needs an internet connection but on Traditional TVs programs could be watched only on the scheduled timing.  Besides this, users have flexibility and more control over the content like they have options like video on demand, fast-forward, rewind. However, all these facilities are not being offered by TV services.  One more thing to consider here is that content can be accessed over multiple devices like smart TV, mobile phones, tablets, laptops etc."}},{"@type": "Question","name": "I need high speed internet connectivity for IPTV?","acceptedAnswer": {"@type": "Answer","text": "Yes, to enjoy high quality HD content, high speed internet connection is the one and only essential requirement."}},{"@type": "Question","name": "How can I pay for services?","acceptedAnswer": {"@type": "Answer","text": "There are multiple payment options like through credit card, paypal , cryptocurrency, bank transfers, Mobile payment services like Apple pay, Google pay or other regional mobile payment methods."}},{"@type": "Question","name": "Can I use my subscription on multiple devices?","acceptedAnswer": {"@type": "Answer","text": "Yes, you can. You can use it on mobile, laptop and Tablet also, as you just need to log in through your id and password. Depending on the type of plan chosen, you can also watch content on multiple devices at same time."}},{"@type": "Question","name": "How long does it take to receive the login data after making a purchase?","acceptedAnswer": {"@type": "Answer","text": "After purchasing the service,you immediately receive the login details and within minutes you can start enjoying the world of entertainment."}},{"@type": "Question","name": "Can I request adding channels,movies or series?","acceptedAnswer": {"@type": "Answer","text": "It depends totally upon the plan you have chosen and for adding channels, movies or series, you will need to upgrade your subscription plan."}},{"@type": "Question","name": "How is your refund policy?","acceptedAnswer": {"@type": "Answer","text": "Refund policy is available for certain eligible products only. Refund request has to be made within the specified days of the purchase of the service and supporting evidence must be submitted by the user to claim the refund."}},{"@type": "Question","name": "How can I access Skypro IPTV services?","acceptedAnswer": {"@type": "Answer","text": "The procedure is quite simple, you just need to contact our team. After discussing our services, you can make a purchase and can start enjoying our services."}},{"@type": "Question","name": "Can I use Skypro IPTV with my existing internet connection?","acceptedAnswer": {"@type": "Answer","text": "If you have high speed internet connectivity, then it is totally reliable. If your internet connectivity is slow, it is surely gonna affect the streaming quality."}},{"@type": "Question","name": "Do I need a smart TV to use Skypro IPTV?","acceptedAnswer": {"@type": "Answer","text": "Yes, for IPTV services, you need to have smart TV. But if you are still using old TV,you can follow simple steps given in our blog section to convert it into smart TV."}},{"@type": "Question","name": "How secure is Skypro IPTV?","acceptedAnswer": {"@type": "Answer","text": "Your personal information gathered by us is kept confidential. All the security measures are in place to safeguard your personal data. For more information, feel free to check our privacy policy."}},{"@type": "Question","name": "Can I record shows with Skypro IPTV?","acceptedAnswer": {"@type": "Answer","text": "Our IPTV services offer various features like you can download the shows to watch them later on. Other services include On-Demand Video, Time Shifted IPTV and Live IPTV. So, users need not to record them. One can watch every show according to their convenience."}},{"@type": "Question","name": "What should I do if I experience buffering issues?","acceptedAnswer": {"@type": "Answer","text": "For buffering problems, firstly check your internet connectivity. If there is not any issue in your internet speed, contact our round the clock available customer support team."} 
            }]
        }`}
      />  
      <InnerPageBanner title='FAQs' innerPageBanner={ImageIcons.faqs} />
      <section className="">
        <div className="container !max-w-[1000px] m-auto px-[15px]">
          <h2 className='uppercase text-center mb-[25px]'>Frequently Asked Questions</h2>
          {faqData.map((item, i) => (
            <div key={i} className='lg:px-[25px] px-[20px] lg:py-[20px] py-[16px] mb-5 rounded-md shadow-[0px_3px_15px_0px_rgba(0,0,0,0.1)] duration-500 overflow-hidden'>
              <button onClick={() => toggleHandler(i)} className='w-full text-left cursor-pointer'>
                <div className='relative pr-[22px] flex justify-between items-center'>
                  <h5 className={` font-medium ${expanded === i ? "text-[#fd5901]" : ""}`} style={{ fontFamily: 'Roboto, sans-serif' }}>{item.question}</h5>
                  {expanded === i ? (
                    <FaChevronUp size="15" className='absolute right-0 text-[#fd5901]' />
                  ) : (
                    <FaChevronDown size="15" className='absolute right-0' />
                  )}
                </div>
              </button>
              <div className={` duration-300 faq-content ${expanded === i ? "opacity-100 mt-[15px] pb-0" : "opacity-0 mt-0 pb-0 max-h-[0px]"}`}>
                <p
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                  className='last:mb-0'
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

const faqData = [
  {
    question: "Do I need high speed internet connectivity for IPTV?",
    answer:
      "Yes, to enjoy high quality HD content, high speed internet connection is the one and only essential requirement.",
  },
  {
    question: " How can I pay for services?",
    answer:
      "There are multiple payment options like through credit card, paypal , cryptocurrency, bank transfers, Mobile payment services like Apple pay, Google pay or other regional mobile payment methods.",
  },
  {
    question: "Can I use my subscription on multiple devices?",
    answer:
      "Yes, you can. You can use it on mobile, laptop and Tablet also, as you just need to log in through your id and password. Depending on the type of plan chosen, you can also watch content on multiple devices at same time.",
  },
  {
    question:
      "How long does it take to receive the login data after making a purchase?",
    answer:
      "After purchasing the service,you immediately receive the login details and within minutes you can start enjoying the world of entertainment.",
  },
  {
    question: "Can I request adding channels,movies or series?",
    answer:
      "It depends totally upon the plan you have chosen and for adding channels, movies or series, you will need to upgrade your subscription plan.",
  },
  {
    question: "How is your refund policy?",
    answer:
      "Refund policy is available for certain eligible products only. Refund request has to be made within the specified days of the purchase of the service and supporting evidence must be submitted by the user to claim the refund.",
  },
  {
    question: "How can I access Skypro IPTV services?",
    answer:
      "The procedure is quite simple, you just need to contact our team. After discussing our services, you can make a purchase and can start enjoying our services.",
  },
  {
    question: "Can I use Skypro IPTV with my existing internet connection?",
    answer:
      "If you have high speed internet connectivity, then it is totally reliable. If your internet connectivity is slow, it is surely gonna affect the streaming quality.",
  },
  {
    question: "Do I need a smart TV to use Skypro IPTV?",
    answer:
      "Yes, for IPTV services, you need to have smart TV. But if you are still using old TV,you can follow simple steps given in our blog section to convert it into smart TV.",
  },
  {
    question: "How secure is Skypro IPTV?",
    answer:
      "Your personal information gathered by us is kept confidential. All the security measures are in place to safeguard your personal data. For more information, feel free to check our privacy policy.",
  },
  {
    question: "Can I record shows with Skypro IPTV?",
    answer:
      "Our IPTV services offer various features like you can download the shows to watch them later on. Other services include On-Demand Video, Time Shifted IPTV and Live IPTV. So, users need not to record them. One can watch every show according to their convenience.",
  },
  {
    question: "What should I do if I experience buffering issues?",
    answer:
      "For buffering problems, firstly check your internet connectivity. If there is not any issue in your internet speed, contact our round the clock available customer support team.",
  },
];

export default Faqs