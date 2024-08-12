import React, { useEffect, useState } from 'react';
import SEO from '../components/shared/seo';
import { GetRequest } from '../utils/requests';
import { Link } from "react-router-dom";
import InnerPageBanner from '../components/shared/innerPageBanner';
import ImageIcons from '../components/imageComponent/ImageIcons';
import { windowScroll } from '../utils/windowScroll';
import { ImFilePdf } from "react-icons/im";
// import { AccountContext } from '../utils/AccountContext';
const Package = () => {
  const [packages, setPackages] = useState({ addon: [], isaddon: [] });
  // const {setPackageData} = useContext(AccountContext);
  useEffect(() => {
    GetRequest(`${process.env.REACT_APP_API_URL}/packages`)
      .then((response) => {
        console.log("response", response?.data);
        const data = response?.data || { addon: [], isaddon: [] };
        setPackages(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // console.log(packages, "packages");
  // const handlePackageData = (item) =>{
  //   setPackageData(item.name);
  //   windowScroll();
  // }
  return (
    <>
      <SEO
        title="Best IPTV Indian Packages with Skypro IPTV"
        description="Subscribe to our paid  IPTV service subscription channel list and experience best Indian TV channels and other programming, all in Ultra HD quality."
        keywords="IPTV subscription plans, IPTV pro subscription, IPTV Service Subscription, hd IPTV packages, IPTV subscription packages, IPTV packages, Indian IPTV subscription, IPTV India subscription, IPTV paid subscription, subscription IPTV, IPTV subscription channel list, IPTV Indian Package, IPTV package"
      />
      <InnerPageBanner title='Packages' innerPageBanner={ImageIcons.iptvAppBg} />
      <section>
        <div className='container'>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-[40px] gap-[20px]'>
            {packages?.addon.length > 0 && (
              <>
                {/* <h3 className='lg:col-span-3 md:col-span-2 col-span-1 mb-0 max-lg:my-[10px]'>Add-On Packages</h3> */}
                {packages?.addon.map((item, index) => (
                  <div key={index} className='shadow-[0px_2px_20px_0px_rgba(0,0,0,0.15)] rounded-[40px] group '>
                    <div className="rounded-lg text-center text-black">
                      <h3 className="py-[15px] mb-0 shadow-[5px_8.66px_30px_0px_rgba(0,0,0,0.15)] rounded-[40px] bg-[linear-gradient(157deg,#022a6b_0%,#071e43_100%)] group-hover:bg-[linear-gradient(157deg,#f8ca12_0%,#ce2a31_100%)] group-hover:animate-[animate-bounce-bg_2s_infinite_ease-in-out_alternate] duration-1000 text-white border-[#071e431f]">
                        {item?.name}
                      </h3>
                      <div className='py-[40px]'>
                        <h2 className="mb-[15px]">₹{item?.price} +GST</h2>
                        <Link to="/contact-us" className='border border-[#fd5901] text-[#fd5901] hover:text-[#fff] hover:bg-[#fd5901] inline-flex py-[9px] px-[20px] rounded-[10px] text-[17px]' onClick={windowScroll}>Add Pack</Link>
                        <Link to={item?.pdfFile} target="_blank" className='border border-[#071e43] text-[#071e43] hover:text-[#fff] hover:bg-[#071e43] inline-flex py-[9px] px-[20px] rounded-[10px] text-[17px] ml-[10px] flex justify-center gap-[6px] items-center' onClick={windowScroll}>View <ImFilePdf /></Link>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
            {packages?.isaddon.length > 0 && (
              <>
                <h3 className='lg:col-span-3 md:col-span-2 col-span-1 mb-0 max-lg:my-[10px]'>Add-On Packages</h3>
                {packages?.isaddon.map((item, index) => (
                  <div key={index} className='shadow-[0px_2px_20px_0px_rgba(0,0,0,0.15)] rounded-[40px] group '>
                    <div className="rounded-lg text-center text-black">
                      <h3 className="py-[15px] mb-0 shadow-[5px_8.66px_30px_0px_rgba(0,0,0,0.15)] rounded-[40px] bg-[linear-gradient(157deg,#022a6b_0%,#071e43_100%)] group-hover:bg-[linear-gradient(157deg,#f8ca12_0%,#ce2a31_100%)] group-hover:animate-[animate-bounce-bg_2s_infinite_ease-in-out_alternate] duration-1000 text-white border-[#071e431f]">
                        {item?.name}
                      </h3>
                      <div className='py-[40px]'>
                        <h2 className="mb-[15px]">₹{item?.price} +GST</h2>
                        <Link to="/contact-us" className='border border-[#fd5901] text-[#fd5901] hover:text-[#fff] hover:bg-[#fd5901] inline-flex py-[9px] px-[20px] rounded-[10px] text-[17px]' onClick={windowScroll}>Add Pack</Link>
                        <Link to={item?.pdfFile} target="_blank" className='border border-[#071e43] text-[#071e43] hover:text-[#fff] hover:bg-[#071e43] inline-flex py-[9px] px-[20px] rounded-[10px] text-[17px] ml-[10px] flex justify-center gap-[6px] items-center' onClick={windowScroll}>View <ImFilePdf /></Link>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </section>
      <section className='bg-[#f3f5f7]'>
        <div className='container'>
          <div className='group bg-[#fff] p-[25px] mb-[20px]'>
            <h1 className='group-hover:text-[#fd5901] duration-500 max-sm:text-[28px]'>Skypro IPTV Subscription Packages</h1>
            <p className="text-justify">Skypro <Link className="linkColor" to="https://www.skypro.co.in/">IPTV service subscription providers</Link> offer users a wide range of IPTV Indian packages, allowing you to choose the one IPTV package to your needs and budget. Users are also provided with customised IPTV Indian  packages, making our IPTV pro subscription services and plans more budget friendly. If you are looking for basic IPTV subscription packages offering basic channels, you will get lots of options from our side and if you want IPTV pro subscription plans like, then also we got you covered. Users are also provided with HD IPTV packages, allowing them to watch their favourite content in ultra-HD quality with immersive sound. Skypro IPTV provider’s Indian IPTV subscription offers users with a wide range of IPTV subscription channel list, which allows you to watch your favourite shows, movies, sports and news without spending extravagantly.</p>
            <p className='text-justify'>If you are a sports enthusiast, you will enjoy watching an extensive collection of sports channels, as you will be watching live sports programmes, tournaments or whatever you like. In case you love watching movies or are a news fanatic, we ensure that with our IPTV pro subscription plans, you will get access to both latest & old movies and a wide range of news channels, helping you stay updated every time. All in all, it can be said that our HD IPTV packages will allow you to experience the entertainment you never had before, as it will provide you a completely different streaming in comparison to traditional forms of watching TV like satellite or Cable TV. Subscribe to our IPTV subscription channel list and get immersed into the world of entertainment.
            </p>
          </div>
          <div>
            <div className='group bg-[#fff] p-[25px] mb-[20px]'>
              <h3 className='group-hover:text-[#fd5901] duration-500'>
                FTA Channels
              </h3>
              <p className='mb-0'>
                Skypro IPTV’s Free-to-Air channel plan is priced at just ₹75+GST. With this IPTV Indian package, you will enjoy an outstanding selection of basic content of TV, as this subscription of IPTV  covers a broad range of popular channels like news, sports, entertainment and other programming. Our IPTV paid subscription packages prove to be perfect for those who do not want any additional features, thereby allowing you to enjoy some necessary programming which would not prove heavy on your pocket.
              </p>
              <h4 className='mt-[20px]'>Our IPTV subscription channels list includes:-</h4>
              <p>Sahara one, MH One News, PTC News, Chardikla Time TV, India New Punjab, DD Punjabi, PTC Punjabi, PTC Music, 9X Tashan, Dhamaal and 274 more.
              </p>
            </div>
            <div className='group bg-[#fff] p-[25px] mb-[20px]'>
              <h3 className='group-hover:text-[#fd5901] duration-500'>
                FTA+ Hindi Bronze SD- ₹105 + GST
              </h3>
              <p className='mb-0'>
                With our FTA+ Hindi Bronze SD IPTV service subscription package, we will help you enhance your streaming experience. Our IPTV subscription plan which is worth ₹ 105 + GST provides you with selected Hindi channels in Standard Definition. Those who admire Hindi language content, this IPTV subscription channel list would prove to be the perfect choice for them, as they will be able to enjoy their favourite shows, movies and other content in their preferred language.
              </p>
              <h4 className='mt-[20px]'>With this IPTV subscription package, users will have access to:-</h4>
              <p>Sony Max 2, Sony Pal, Sony Wah, Star Sports First, Bindass, Star Utsav, AAJ TAK HD, News 18 India, Zee Classic, Zee News, and 70 more.
              </p>
            </div>
            <div className='group bg-[#fff] p-[25px] mb-[20px]'>
              <h3 className='group-hover:text-[#fd5901] duration-500'>
                FTA+ Hindi Silver HD- ₹ 210 + GST
              </h3>
              <p className='mb-0'>
                Want a high quality viewing experience? Get our FTA + Hindi Silver HD Package which has especially been crafted to provide enhanced streaming experience at only ₹ 210 + GST. This IPTV pro subscription package not only provides access to a broad range of Hindi channels but also other Free-to-Air channels in High Definition. You will be provided with the latest movies, shows, and new at very affordable prices along with amazing graphics and immersive audio with our IPTV Indian package.
              </p>
              <h4 className='mt-[20px]'>This IPTV Indian package will provide access to:-</h4>
              <p>Discovery HD, Animal Planet, Pogo, CNBC Awaaz, Sony Max 2, Sony Wah, Sony Pal, Star Plus HD, Star Utsav, Star Sports, Zee Anmol, Zee Action, Zee Classic, Colors HD, News 18 India, Zee Punjab Himachal Haryana News and 100 more channels.
              </p>
            </div>
            <div className='group bg-[#fff] p-[25px] mb-[20px]'>
              <h3 className='group-hover:text-[#fd5901] duration-500'>
                FTA + Hindi Gold HD- ₹ 350 + GST
              </h3>
              <p className='mb-0'>
                Our FTA + Hindi Gold HD package which is priced at ₹ 350 + GST proves to be an excellent choice for those who want to have a premium experience, as this subscription IPTV package provides access to not only a vast selection of Hindi channels in HD quality but you will also enjoy access to super hit movies, TV shows, News and other programming. You will enjoy watching content with crystal clear picture quality and amazing sound quality with our IPTV service subscription.
              </p>
              <h4 className='mt-[20px]'>Our users are provided with:-</h4>
              <p>Travel XP HD, Discovery HD, Pogo, CNBC TV, Nick Sonic, NDTV India, Sony Pal, Sony Max HD, Showbox, Sony Wah, Sony Max 2, Star Gold HD, Disney Junior, Aaj Tak HD, Zee TV HD, Zee Anmol, ETV Plus HD, Times Now, ETV HD and 122 more.
              </p>
            </div>
            <div className='group bg-[#fff] p-[25px] mb-[20px]'>
              <h3 className='group-hover:text-[#fd5901] duration-500'>
                FTA+ Hindi Gold PLUS HD- ₹410 + GST
              </h3>
              <p className='mb-0'>
                Our FTA + Hindi Gold Plus HD package which is priced at ₹410 + GST provides users with a comprehensive collection of FTA channels along with a broad array of Hindi channels and here we ensure providing content in High Quality. This package will allow you to indulge in an extremely superior experience of streaming entertainment.
              </p>
              <h4 className='mt-[20px]'>This packages provide access to:-
              </h4>
              <p>Travel XP HD, Animal Planet, Pogo, Cartoon Network, CNN News 18, Sony Pal, Sony Max HD, Sony Wah, MTV HD, MTV Beats HD, History TV 18 HD, News 18 India, Star Utsav, Nat Geo HD, Zee Action, Zee News, Zee Hindustan, ETV Plus HD, Zing, Zee business, Zee Cinema HD, Zee Anmol Cinema, Zee Punjabi and 128 more.
              </p>
            </div>
            <div className='group bg-[#fff] p-[25px] mb-[20px]'>
              <h3 className='group-hover:text-[#fd5901] duration-500'>FTA + Hindi Platinum HD- ₹490 + GST </h3>
              <p className='mb-0'>It is our top-notch HD IPTV package for keen viewers and we make it available only at ₹ 490+ GST. It provides access to all the FTA channels as well as a comprehensive range of Hindi channels and other programming in HD quality. It will serve all your entertainment needs, as you will be able to stream latest and old movies, reality shows, news coverage etc. So, wait for what? Join us today and experience top-notch entertainment services.
              </p>
              <p>With this HD IPTV package, you will be provided with below given channels:-
                Travel XP HD, Food XP, Showbox, Pogo,Nick, NDTV India, Sony Pal, Sony Pal, Sony Wah, Sony Max 2, CNN News 18, Colors HD, CNBC Awaaz, News 18 India, News 18 Punjab/Haryana, Sony Sport Ten 1 HD, Star Utsav, Star Gold HD, Star Gold Thrills, Aaj Tak HD, Zee Punjabi, Zee Cafe HD, Zee News and 145 more.
              </p>
            </div>

            <div className='group bg-[#fff] p-[25px] mb-[20px]'>
              <h2 className='group-hover:text-[#fd5901] duration-500'>ADD-ON PACKAGES</h2>
              <p className='text-black'>We also provide users with some ADD-ON Packages, allowing them to watch some additional channels with some additional charges.
              </p>
              <h3 className='group-hover:text-[#fd5901] duration-500'>KIDS- ₹36 + GST </h3>
              <p className='mb-0'>Our add on package allows you to get those channels added which offer kids programming such as educational and entertainment channels. This package is available at only ₹36 + GST, acting as the best choice for you to keep your kids engaged.
              </p>
              <p>With this, you will get access to</p>

              <h4 className='mt-[20px] mb-[10px]'>Disney</h4>
              <ul class="list_style">
                <li>Disney Channel HD</li>
                <li>Super Hungama</li>
                <li>Disney Junior Nick</li>
              </ul>

              <h4 className='mt-[20px] mb-[10px]'>Colors </h4>
              <ul class="list_style">
                <li>Sonic</li>
                <li>Nick Jr</li>
                <li>Nick HD+</li>
              </ul>

              <h4 className='mt-[20px] mb-[10px]'>BBC </h4>
              <ul class="list_style">
                <li>Cbeebies</li>
              </ul>

              <h4 className='mt-[20px] mb-[10px]'>Sony  </h4>
              <ul class="list_style">
                <li>Sony Yay</li>
              </ul>
            </div>
            <div className='group bg-[#fff] p-[25px] mb-[20px]'>
              <h3>ENGLISH HD- ₹ 75 + GST</h3>
              <p>Our English HD IPTV service subscription add-on package is available at only ₹ 75 + GST, serving the needs of those who enjoy watching content in English-language. With our package, you will be able to enjoy popular international channels in crystal clear quality. You will enjoy global news, international series, movies and more in superior quality.
              </p>
              <p>Our English HD package provides access to-
              </p>

              <h4 className='mt-[20px] mb-[10px]'>Zee Prime Pack English HD
              </h4>
              <ul class="list_style">
                <li>Zee Cafe HD</li>
                <li>&flix HD</li>
                <li>&prive HD</li>
                <li>Zee Zest HD</li>
              </ul>
              <h4 className='mt-[20px] mb-[10px]'>Star India PRivate Limited</h4>
              <ul class="list_style">
                <li>Star Movies HD</li>
                <li>Star Movies Select HD</li>
                <li>Fox Life HD</li>
              </ul>
              <h4 className='mt-[20px] mb-[10px]'>Colors Wala English GEC HD
              </h4>
              <ul class="list_style">
                <li> Colors Infinity HD</li>
                <li>Comedy Central</li>
              </ul>
              <h4 className='mt-[20px] mb-[10px]'>Media WorldWide Limited
              </h4>
              <ul class="list_style">
                <li>HD Woman
                </li>
              </ul>
            </div>
            <div className='group bg-[#fff] p-[25px] mb-[20px]'>
              <h3>Sports HD Lite- ₹ 75 + GST </h3>
              <p>Our Sports HD Lite pack, which is available at just ₹75 + GST, has especially been made for sports lovers, as it provides access to sporting events, leagues, and other programmes.
              </p>
              <p>It Provides access to-</p>
              <h4 className='mt-[20px] mb-[10px]'>Culver Max Entertainment Private Limited
              </h4>
              <ul class="list_style">
                <li>Sony Sports Ten 1 HD</li>
                <li>Sony Sports Ten 3 HD</li>
              </ul>
              <h4 className='mt-[20px] mb-[10px]'>Star India Private Limited
              </h4>
              <ul class="list_style">
                <li>Star Sports 18 HD
                </li>
              </ul>
            </div>
            <div className='group bg-[#fff] p-[25px] mb-[20px]'>
              <h3>Sports HD- ₹100 + GST</h3>
              <p>With this Indian IPTV subscription  package, you will get an extensive selection of sports channels in HD quality. You will enjoy a wide range of sports, be it a live match or any other game or tournament. This package proves to be perfect for sports enthusiasts.
              </p>
              <p>It provides access to-
              </p>
              <h4 className='mt-[20px] mb-[10px]'>Culver Max Entertainment Private Limited
              </h4>
              <ul class="list_style">
                <li>Sony Sports Ten 1 HD</li>
                <li>Sony Sports Ten 2 HD</li>
                <li>Sony Sports Ten 3 HD</li>
                <li>Sony Sports Ten 5 HD</li>
              </ul>
              <h4 className='mt-[20px] mb-[10px]'>Star India Private Limited
              </h4>
              <ul class="list_style">
                <li>Star Sports HD 1
                </li>
                <li>Star Sports HD 2
                </li>
              </ul>
              <h4 className='mt-[20px] mb-[10px]'>Viacom 18 Media Private Limited
              </h4>
              <ul class="list_style">
                <li> Sports 18 1 HD
                </li>
                <li>Sports 18 3
                </li>
              </ul>
            </div>
            <div className='group bg-[#fff] p-[25px] mb-[20px]'>
              <h2>Why Choose SkyPro IPTV Subscription Services? </h2>
              <p>As mentioned above, we offer a vast range of packages to our users, so that they can choose one which suits their needs. You will never feel like not having options, there will always be plenty to select from.</p>
              <ul class="list_style">
                <li>Get a chance to select a package according to your need or budget.</li>
                <li>Quality is not at all an issue, as you will get stunning picture quality along with deep audio ambience</li>
                <li>Get access to your favourite from anywhere or at multiple devices like smartphones, smart TVs, laptops, computers etcetera.</li>
              </ul>
              <p>So, wait for what? Take your entertainment to the new heights with our well planned IPTV subscription plans. For more information, don’t forget to contact us.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Package;
