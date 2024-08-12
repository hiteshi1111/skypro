import React from 'react'
import IptvApp from '../components/shared/iptvapp'
import { Link } from 'react-router-dom';
import SEO from '../components/shared/seo';
import InnerPageBanner from '../components/shared/innerPageBanner';
import ImageIcons from '../components/imageComponent/ImageIcons';
import { FaTv } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";
import { FaHdd } from "react-icons/fa";
import LazyLoad from 'react-lazyload';

const Iptv = () => {
  return (
    <>
      <SEO title="Top IPTV Apps: Best Streaming for Android | Skypro"
        description="The best IPTV apps for Android, Firestick, and Smart TVs. Explore free IPTV streaming, live TV options, and premium IPTV subscription."
        keywords='IPTV app, Skypro IPTV app, Best IPTV app, IPTV streaming app, IPTV player app, Free IPTV app, IPTV app for Android, IPTV app for Smart TV, IPTV subscription app, Live TV app, Internet TV app, IPTV app download, IPTV app channels, IPTV app for Firestick, Best IPTV app for Firestick' />
      <InnerPageBanner title='IPTV App' innerPageBanner={ImageIcons.IptvApp} />
      <IptvApp />
      <section className="bg-center bg-cover bg-fixed	relative  bg-no-repeat after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:opacity-90 after: after:bg-[#fff] after:h-full" style={{ backgroundImage: `url(${ImageIcons.iptvApplication})` }}>
        <div className='container relative z-10'>
          <h2>About Skypro IPTV Application?</h2>
          <p>Entertainment has always played a crucial role in the lives of
            people, as this is the only way to relax and remove boredom.
            In earlier days, there used to be radios, for which people
            needed to have rabbit ears to tune in to the programming
            content. Then came the time of antenna television, which
            brought colours to the lives of individuals as now they were
            provided with audio visual sources. Slowly, with the passage
            of time, cable TVs were introduced into the market, which are
            still prevalent today and with them, people were provided with
            more options of streaming entertainment. However, today’s era
            is the time which has witnessed one of the major rise in the
            entertainment industry with the introduction of IPTV services,
            which are the services of providing the whole content of the
            television along with other additional content over the
            internet.
          </p>
          <p>As expected, <strong>IPTV streaming applications</strong> have
            gained immense popularity and seeing the increasing demand,
            Skypro introduced its own IPTV platform a long ago and now has
            a community of thousands of satisfied customers.
            <strong>Skypro IPTV streaming app</strong> offers various
            features to the customers and the first one of them is a vast
            library of on-demand content, this allows users to view the
            content according to their convenience of time and
            flexibility. Not only this, but our{" "}
            <strong>IPTV player app </strong>has been designed to be
            intuitive and user friendly, which allows you to customise the
            content according to your choice. Customers can also use{" "}
            <strong>Firestick</strong> to view IPTV on their old TVs,
            which reduces the anxiety of buying a smart TV. Besides this,
            you get personalised recommendations and search options,
            allowing you to get access to your favourite content in
            seconds.</p>
          <p>The possibilities are endless with
            <strong>Skypro’s free IPTV app.</strong> It's time for you to
            say goodbye to your traditional TV and its rigid schedule, and
            join the world of IPTV.</p>
        </div>
      </section>

      <section >
        <div className='container'>
          <div className='text-center mb-[40px]'>
            <h2>What does Skypro IPTV App offer for your entertainment needs?</h2>
            <p>We offer you an array of exceptional services which will help
              you dive into the world of entertainment. Our features include</p>
          </div>

          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-[30px] gap-[20px]'>
            <div className='group relative z-20 shadow-[0px_3px_15px_0px_rgba(0,0,0,0.1)] p-[30px] rounded-[10px]  after:absolute after:content-[""] after:-z-10 after:w-full after:h-full after:hover:bg-[#fd5901] after:rounded-[10px] after:origin-left after:opacity-0 after:invisible after:scale-y-0 after:right-0 after:top-0 after:duration-700 after:hover:opacity-100 after:hover:visible after:hover:scale-y-100 hover:text-white'>
              <h3 className="mb-[10px] group-hover:text-white">Extensive Channel Selection</h3>
              <p><Link
                to="https//play.google.com/store/apps/details?id=com.onnet.systems.iptv.skypro"
                target="_blank">
                <b>Skypro IPTV app for android </b>
              </Link>
                and smart TV offers a broad-spectrum of channels, so that users
                can enjoy a variety of content according to their interests and
                preferences. If someone is a sports enthusiast, we offer a wider
                range of sports channels to make our users never feel bored.
                Movie buffs can enjoy a variety of movies according to the type
                of genres they like. They can watch recently released as well as
                old movies. Apart from this, those who love to stay up to date
                with current affairs across the world, can enjoy a vast
                collection of news channels also. Besides all this, there are
                plenty of educational channels, entertainment etcetera. Users
                can enjoy <b>Live IPTV</b> along with time-shifted content,
                which adds more convenience to their lives.
              </p>
            </div>

            <div className='group relative z-20 shadow-[0px_3px_15px_0px_rgba(0,0,0,0.1)] p-[30px] rounded-[10px]  after:absolute after:content-[""] after:-z-10 after:w-full after:h-full after:hover:bg-[#fd5901] after:rounded-[10px] after:origin-left after:opacity-0 after:invisible after:scale-y-0 after:right-0 after:top-0 after:duration-700 after:hover:opacity-100 after:hover:visible after:hover:scale-y-100 hover:text-white'>
              <h3 className="mb-[10px] group-hover:text-white">High-Quality Streaming</h3>
              <p>
                With Skypro’s <Link
                  to="https//www.skypro.co.in/iptv-subscription-packages"
                > <b>IPTV subscription, </b>
                </Link>
                users are provided with high-definition quality and ultra
                high-definition quality content. Even users can enjoy 4k
                resolutions. With such amazing graphics, you will feel more like
                a part of the action, which means you can have a big screen
                experience at the comfort of your living room. Moreover, the
                streaming speed is lightning fast, which provides you continuous
                entertainment without any interruptions caused due to buffering.
              </p>
            </div>

            <div className='group relative z-20 shadow-[0px_3px_15px_0px_rgba(0,0,0,0.1)] p-[30px] rounded-[10px]  after:absolute after:content-[""] after:-z-10 after:w-full after:h-full after:hover:bg-[#fd5901] after:rounded-[10px] after:origin-left after:opacity-0 after:invisible after:scale-y-0 after:right-0 after:top-0 after:duration-700 after:hover:opacity-100 after:hover:visible after:hover:scale-y-100 hover:text-white'>
              <h3 className="mb-[10px] group-hover:text-white">On-Demand Content</h3>
              <p>
                Our on-demand content library assures that our users have
                something new every time to watch, as they never go out of the
                programming. They can access the content according to their
                choice be it latest movies or binge watching your favourite
                serials. So, with an <b>internet TV app,</b> you can get a
                chance to remove the boredom and monotony from your life.
              </p>
            </div>

            <div className='group relative z-20 shadow-[0px_3px_15px_0px_rgba(0,0,0,0.1)] p-[30px] rounded-[10px]  after:absolute after:content-[""] after:-z-10 after:w-full after:h-full after:hover:bg-[#fd5901] after:rounded-[10px] after:origin-left after:opacity-0 after:invisible after:scale-y-0 after:right-0 after:top-0 after:duration-700 after:hover:opacity-100 after:hover:visible after:hover:scale-y-100 hover:text-white'>
              <h3 className="mb-[10px] group-hover:text-white">Multi-Device Compatibility</h3>
              <p>
                Users can easily install our Skypro IPTV application on
                different devices and can enjoy streaming at multiple screens
                according to their convenience. They are allowed to watch
                entertainment on smartphones, smart TVs, laptops, and computers
                etcetera.They just need to have a high-speed internet connection
                and can have seamless viewing experience from any corner of the
                world.
              </p>
            </div>

            <div className='group relative z-20 shadow-[0px_3px_15px_0px_rgba(0,0,0,0.1)] p-[30px] rounded-[10px]  after:absolute after:content-[""] after:-z-10 after:w-full after:h-full after:hover:bg-[#fd5901] after:rounded-[10px] after:origin-left after:opacity-0 after:invisible after:scale-y-0 after:right-0 after:top-0 after:duration-700 after:hover:opacity-100 after:hover:visible after:hover:scale-y-100 hover:text-white'>
              <h3 className="mb-[10px] group-hover:text-white">Parental Control</h3>
              <p>
                We understand the importance of family values, so we have
                provided our customers with the feature of parental control.
                Parents can restrict the content watched by their children by
                blocking the content which contains mature themes, violence,
                abusive language and adult scenes. They can also set up the pin
                to assure that children never have an access to such type of
                content. Thereby, parents can keep close tabs on what their
                children watch.
              </p>
            </div>

            <div className='group relative z-20 shadow-[0px_3px_15px_0px_rgba(0,0,0,0.1)] p-[30px] rounded-[10px]  after:absolute after:content-[""] after:-z-10 after:w-full after:h-full after:hover:bg-[#fd5901] after:rounded-[10px] after:origin-left after:opacity-0 after:invisible after:scale-y-0 after:right-0 after:top-0 after:duration-700 after:hover:opacity-100 after:hover:visible after:hover:scale-y-100 hover:text-white'>
              <h3 className="mb-[10px] group-hover:text-white">Personalised Recommendations</h3>
              <p>
                Our users are provided with the suggestions related to the
                content on their feed, so that they can easily have access to
                the content they like without having any need to search it. We
                use certain algorithms to know about the type of genre liked by
                the user, like keeping an eye on the content watched by them or
                on the basis of their viewing history. So, they are provided
                with the recommendations according to their viewing history.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-[#071e43]'>
        <div className='container'>
          <h2 className='text-white text-center mb-[40px]'>Skypro IPTV App’s Subscription Plans</h2>

          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-[30px] gap-[20px]'>
            <div className='p-[30px] bg-[#fff] rounded-[8px] relative group overflow-hidden'>
              <span className='inline-block border-b-[3px] pr-[15px] pb-[15px] mb-[15px] border-[#fd5901] text-[#fd5901]'><FaHdd className='text-[45px]' /></span>
              <span className='inline-block absolute bottom-[-70px] right-[20px] opacity-10 group-hover:bottom-[20px] duration-500'><FaHdd className='text-[60px] text-[#fd5901]' /></span>
              <h3>Basic Package</h3>
              <p className='mb-0'>As the name suggests, our basic package includes all the
                essential or required entertainment channels. This package is
                basically suitable for those individuals who want access to
                essential entertainment options. In this category, we offer a
                diverse range of popular channels like news, sports,
                entertainment etcetera. Viewers are given access to HD quality
                content in order to provide them a seamless experience.</p>
            </div>

            <div className='p-[30px] bg-[#fd5901] text-white rounded-[8px] relative group overflow-hidden'>
              <span className='inline-block border-b-[3px] pr-[15px] pb-[15px] mb-[15px] border-[#fff] text-[#fff] before:bg-[#fd5901]'><FaTv className='text-[45px]' /></span>
              <span className='inline-block absolute bottom-[-70px] right-[20px] opacity-10 group-hover:bottom-[20px] duration-500'><FaTv className='text-[60px] text-[#fff]' /></span>
              <h3 className='text-white'>Premium Package</h3>
              <p className='mb-0'>Get exclusive access to exclusive content along with enhanced
                features. This package includes live sports channels,
                international channels, movies and special programmers, which
                means access to all the premium channels. This package allows
                users to take advantage of features like multi-device
                streaming and personalised recommendations.
              </p>
            </div>

            <div className='p-[30px] bg-[#fff] rounded-[8px] relative group overflow-hidden'>
              <span className='inline-block border-b-[3px] pr-[15px] pb-[15px] mb-[15px] border-[#fd5901] text-[#fd5901]'><MdLiveTv className='text-[45px]' /></span>
              <span className='inline-block absolute bottom-[-70px] right-[20px] opacity-10 group-hover:bottom-[20px] duration-500'><MdLiveTv className='text-[60px] text-[#fd5901]' /></span>
              <h3>Customised Package</h3>
              <p className='mb-0'>As every user has his own preference or taste when it comes to
                watching content, to serve different needs,{" "}
                <b>our IPTV app subscription plans</b> allow you to get the
                packages customised according to your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container !max-w-[1200px]'>
          <h2 className='text-center mb-[40px]'>Installation and Set-up Instructions</h2>

          <div className=''>
            <div className='installation_box flex md:flex-nowrap even:flex-row-reverse flex-wrap-reverse mb-[30px]'>
              <div className='md:w-[50%] w-full lg:px-[50px] max-md:my-[20px] md:px-[40px] sm:px-[30px] px-[20px] py-[30px] bg-[#f2f2f2] flex flex-col justify-center'>
                <h3>Step 1</h3>
                <p className='mb-0'>Unlock your phone..</p>
              </div>
              <div className='md:w-[50%] w-full'>
                <LazyLoad>
                <img src={ImageIcons.insStep1} alt='IPTV streaming app' />
                </LazyLoad>
              </div>
            </div>
            <div className='installation_box flex md:flex-nowrap even:flex-row-reverse flex-wrap-reverse mb-[30px]'>
              <div className='md:w-[50%] w-full lg:px-[50px] max-md:my-[20px] md:px-[40px] sm:px-[30px] px-[20px] py-[30px] bg-[#f2f2f2] flex flex-col justify-center'>
                <h3>Step 2</h3>
                <p className='mb-0'>Access Google play store on it.</p>
              </div>
              <div className='md:w-[50%] w-full'>
                <LazyLoad>
                <img src={ImageIcons.insStep2} alt='IPTV player app' />
                </LazyLoad>
              </div>
            </div>
            <div className='installation_box flex md:flex-nowrap even:flex-row-reverse flex-wrap-reverse mb-[30px]'>
              <div className='md:w-[50%] w-full lg:px-[50px] max-md:my-[20px] md:px-[40px] sm:px-[30px] px-[20px] py-[30px] bg-[#f2f2f2] flex flex-col justify-center'>
                <h3>Step 3</h3>
                <p className='mb-0'>Click on the Google play app icon.</p>
              </div>
              <div className='md:w-[50%] w-full'>
                <LazyLoad>
                <img src={ImageIcons.insStep3} alt='Free IPTV app' />
                </LazyLoad>
              </div>
            </div>
            <div className='installation_box flex md:flex-nowrap even:flex-row-reverse flex-wrap-reverse mb-[30px]'>
              <div className='md:w-[50%] w-full lg:px-[50px] max-md:my-[20px] md:px-[40px] sm:px-[30px] px-[20px] py-[30px] bg-[#f2f2f2] flex flex-col justify-center'>
                <h3>Step 4</h3>
                <p className='mb-0'>Search “SkyPro self care” in the search bar and download the application on your mobile phone</p>
              </div>
              <div className='md:w-[50%] w-full'>
                <LazyLoad>
                <img src={ImageIcons.insStep4} alt='IPTV app for Android' />
                </LazyLoad>
              </div>
            </div>
            <div className='installation_box flex md:flex-nowrap even:flex-row-reverse flex-wrap-reverse mb-[30px]'>
              <div className='md:w-[50%] w-full lg:px-[50px] max-md:my-[20px] md:px-[40px] sm:px-[30px] px-[20px] py-[30px] bg-[#f2f2f2] flex flex-col justify-center'>
                <h3>Step 5</h3>
                <p className='mb-0'>Install the application.</p>
              </div>
              <div className='md:w-[50%] w-full'>
                <LazyLoad>
                <img src={ImageIcons.insStep5} alt='IPTV app for iOS' />
                </LazyLoad>
              </div>
            </div>
            <div className='installation_box flex md:flex-nowrap even:flex-row-reverse flex-wrap-reverse mb-[30px]'>
              <div className='md:w-[50%] w-full lg:px-[50px] max-md:my-[20px] md:px-[40px] sm:px-[30px] px-[20px] py-[30px] bg-[#f2f2f2] flex flex-col justify-center'>
                <h3>Step 6</h3>
                <p className='mb-0'>Once the application installed, click on the signup button and follow the procedure which consists 4 steps.</p>
              </div>
              <div className='md:w-[50%] w-full'>
                <LazyLoad>
                <img src={ImageIcons.insStep6} alt='IPTV app for Smart TV' />
                </LazyLoad>
              </div>
            </div>
            <div className='installation_box flex md:flex-nowrap even:flex-row-reverse flex-wrap-reverse mb-[30px]'>
              <div className='md:w-[50%] w-full lg:px-[50px] max-md:my-[20px] md:px-[40px] sm:px-[30px] px-[20px] py-[30px] bg-[#f2f2f2] flex flex-col justify-center'>
                <h3>Step 7</h3>
                <p className='mb-0'>Open the app and now put some amount in the application wallet.</p>
              </div>
              <div className='md:w-[50%] w-full'>
                <LazyLoad>
                <img src={ImageIcons.insStep7} alt='IPTV subscription app' />
                </LazyLoad>
              </div>
            </div>
            <div className='installation_box flex md:flex-nowrap even:flex-row-reverse flex-wrap-reverse mb-[30px]'>
              <div className='md:w-[50%] w-full lg:px-[50px] max-md:my-[20px] md:px-[40px] sm:px-[30px] px-[20px] py-[30px] bg-[#f2f2f2] flex flex-col justify-center'>
                <h3>Step 8</h3>
                <p>Purchase packs and channels– click on Packages and then on Manage TV. Here, you will find an option to renew your existing pack or you simply can edit it. In this case, you don’t have any packages, you can click on edit packs and channels.</p>
                <p className='mb-0'>Once you have selected the channels, it will take you to the summary page, where you can verify your details about the purchase and can confirm it. The particular amount is deducted from your wallet. You will also see some channels on the selfcare, however, for the rest of the channels, you will need to install the SKypro IPTV app on playstore as explained below.</p>
              </div>
              <div className='md:w-[50%] w-full'>
                <LazyLoad>
                <img src={ImageIcons.insStep8} alt='Live TV app' />
                </LazyLoad>
              </div>
            </div>
            <div className='installation_box flex md:flex-nowrap even:flex-row-reverse flex-wrap-reverse mb-[30px]'>
              <div className='md:w-[50%] w-full lg:px-[50px] max-md:my-[20px] md:px-[40px] sm:px-[30px] px-[20px] py-[30px] bg-[#f2f2f2] flex flex-col justify-center'>
                <h3>Step 9</h3>
                <p className='mb-0'>Turn on your TV and make sure it is connected to the internet.</p>
              </div>
              <div className='md:w-[50%] w-full'>
                <LazyLoad>
                <img src={ImageIcons.insStep9} alt='Internet TV app' />
                </LazyLoad>
              </div>
            </div>
            <div className='installation_box flex md:flex-nowrap even:flex-row-reverse flex-wrap-reverse mb-[30px]'>
              <div className='md:w-[50%] w-full lg:px-[50px] max-md:my-[20px] md:px-[40px] sm:px-[30px] px-[20px] py-[30px] bg-[#f2f2f2] flex flex-col justify-center'>
                <h3>Step 10</h3>
                <p className='mb-0'>Navigate to the Google Play store app using the remote of your TV. Depending on your TV model, this app may be pre-installed or available for download from your TV’s app store.</p>
              </div>
              <div className='md:w-[50%] w-full'>
                <LazyLoad>
                <img src={ImageIcons.insStep10} alt='IPTV app download' />
                </LazyLoad>
              </div>
            </div>
            <div className='installation_box flex md:flex-nowrap even:flex-row-reverse flex-wrap-reverse mb-[30px]'>
              <div className='md:w-[50%] w-full lg:px-[50px] max-md:my-[20px] md:px-[40px] sm:px-[30px] px-[20px] py-[30px] bg-[#f2f2f2] flex flex-col justify-center'>
                <h3>Step 11</h3>
                <p className='mb-0'>In the Google Play Store, use the search function to search “Skypro IPTV” and install it on your TV.</p>
              </div>
              <div className='md:w-[50%] w-full'>
                <LazyLoad>
                <img src={ImageIcons.insStep11} alt='IPTV app channels' />
                </LazyLoad>
              </div>
            </div>
            <div className='installation_box flex md:flex-nowrap even:flex-row-reverse flex-wrap-reverse mb-[30px]'>
              <div className='md:w-[50%] w-full lg:px-[50px] max-md:my-[20px] md:px-[40px] sm:px-[30px] px-[20px] py-[30px] bg-[#f2f2f2] flex flex-col justify-center'>
                <h3>Step 12</h3>
                <p className='mb-0'>Once you locate the app on the Google play store, install it on your TV.</p>
              </div>
              <div className='md:w-[50%] w-full'>
                <LazyLoad>
                <img src={ImageIcons.insStep12} alt='IPTV app for Firestick' />
                </LazyLoad>
              </div>
            </div>
            <div className='installation_box flex md:flex-nowrap even:flex-row-reverse flex-wrap-reverse mb-[30px]'>
              <div className='md:w-[50%] w-full lg:px-[50px] max-md:my-[20px] md:px-[40px] sm:px-[30px] px-[20px] py-[30px] bg-[#f2f2f2] flex flex-col justify-center'>
                <h3>Step 13</h3>
                <p className='mb-0'>Open the app, sign in with a QR code. On your self care app, go to shortcuts Link TV, and scan the QR code to login to your TV.</p>
              </div>
              <div className='md:w-[50%] w-full'>
                <LazyLoad>
                <img src={ImageIcons.insStep8} alt='Best IPTV app for Firestick' />
                </LazyLoad>
              </div>
            </div>
            <div className='installation_box flex md:flex-nowrap even:flex-row-reverse flex-wrap-reverse mb-[30px]'>
              <div className='md:w-[50%] w-full lg:px-[50px] max-md:my-[20px] md:px-[40px] sm:px-[30px] px-[20px] py-[30px] bg-[#f2f2f2] flex flex-col justify-center'>
                <h3>Step 14</h3>
                <p className='mb-0'>After scanning, the TV is registered and you can start viewing your favourite channels.</p>
              </div>
              <div className='md:w-[50%] w-full'>
                <LazyLoad>
                <img src={ImageIcons.insStep8} alt='IPTV app' />
                </LazyLoad>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Iptv