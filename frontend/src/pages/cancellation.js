import React from 'react'
import SEO from '../components/shared/seo';
import InnerPageBanner from '../components/shared/innerPageBanner';
import ImageIcons from '../components/imageComponent/ImageIcons';

const Cancellation = () => {
  return (
    <>
      <SEO title="SkyPro Cancellation Policy: Smooth and Transparent" description="Learn about the SkyPro cancellation policy a Smooth and transparent process designed to ensure your satisfaction. Review our terms for hassle-free cancellation." />
      <InnerPageBanner title='Cancellation Policy' innerPageBanner={ImageIcons.cancelPolicy} />

      <section>
        <div className="container">

          <p>Last updated: <span style={{ color: "#fd5901" }}>
            November 2023
          </span>
          </p>
          <p>
            At Skypro communications, we offer flexibility regarding change
            of plans. We have made our cancellation policy terms keeping in
            mind the convenience of our customers.
          </p>
          {cancelData.map((data, i) => (
            <>
              <h2 className='mt-[20px] mb-[10px] text-[26px]' style={{ fontFamily: 'Roboto, sans-serif' }}>{data.title}</h2>
              <ul className='list_style'>
                <li>{data.para}</li>
              </ul>
            </>
          ))}
        </div>
      </section>
    </>
  )
}

const cancelData = [
  {
    title: "Flexible Options",
    para: "We provide you with the multifarious cancellation options in case your needs or circumstances change. So, flexibility is offered to the user and that too in a simple and hassle free way.",
  },
  {
    title: "Cancellation Deadline",
    para: "It is always requested that cancellation must be made within the stipulated time limit, so that we can ensure seamless operations and make required adjustments. The timeline provides guarantee that both the parties had ample time to make or manage transition effectively.",
  },
  {
    title: "Transparent Communication",
    para: "We offer transparency and communication is considered imperative, so in case users are looking for cancellation, we allow them to convey their decisions immediately as it gives us time to deal with problems and get feedback. We always want that your experience with Skypro remains as positive as possible.",
  },
  {
    title: "User support",
    para: "The same support which is provided during the purchase of service is offered during the cancellation process also. If you have any concerns or questions regarding anything or if you need any kind of help, contact immediately to our dedicated support team which is always there to assist you, as we are devoted to offering exceptional customer service.",
  },
  {
    title: "Continuous Improvement",
    para: "We secure the power to suspend or terminate the service of users who are found to violate our mentioned terms and conditions. Users are also being allowed to terminate their accounts but subject to cancellation policy.",
  },
  {
    title: "Feedback",
    para: "We always appreciate your feedback and use it for the betterment of our services. As we aim to make your journey seamless, feedback matters a lot to us. If you have any doubt regarding anything, contact our support team immediately.",
  },
];

export default Cancellation