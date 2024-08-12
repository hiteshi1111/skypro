import React, { useState, useEffect } from "react";
import stdCodes from "../data/stdCodes.json";
import { validateEmail, validatePhone } from "../utils/formValidation";
import { PostRequest } from "../utils/requests";
// import Toastify from "../components/shared/toastify";
import InnerPageBanner from '../components/shared/innerPageBanner'
import ImageIcons from '../components/imageComponent/ImageIcons';
// import SEO from '../components/shared/seo';
import Loader from "../utils/loader";
import { useNavigate } from "react-router-dom";
// import { AccountContext } from "../utils/AccountContext";
import { windowScroll } from '../utils/windowScroll';
import LazyLoad from 'react-lazyload';
import SEO from "../components/shared/seo";
const ContactUs = () => {
  // const {packageData} = useContext(AccountContext); 
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    email: false,
    msg: false,
    phone: false,
    message: "",
    success: false,
  });
  console.log(disabled);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    stdCode: "+91"
  });

  const fullNameHandler = (e) => {
    const inputValue = e.target.value;
    const alphaValue = inputValue.replace(/[^A-Za-z\s]/g, '');
    if (alphaValue.length <= 30) {
      setFormData(prevState => ({ ...prevState, fullName: alphaValue }));
      setError(prevState => ({ ...prevState, message: "" }));
    }
  };
  const handlePhoneInputChange = (e) => {
    const inputValue = e.target.value;
    const numericValue = inputValue.replace(/\D/g, ""); // Remove non-digit characters

    if (numericValue.length <= 10) {
      setFormData((prevState) => ({ ...prevState, phone: numericValue }));
      setError((prevState) => ({ ...prevState, phone: false, message: "" }));
    }
  };
  const handleEmailInputChange = (e) => {
    const inputValue = e.target.value;
    const val = inputValue.replace(" ", "");
    setFormData((prevState) => ({ ...prevState, email: val }));
    setError((prevState) => ({ ...prevState, email: false, message: "" }));
  };
  const handleSubjectInputChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 50) {
      setFormData((prevState) => ({ ...prevState, subject: inputValue }));
      setError((prevState) => ({ ...prevState, message: "" }));
    }
  };
  const handleMessageInputChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 500) {
      setFormData((prevState) => ({ ...prevState, message: inputValue }));
      setError((prevState) => ({ ...prevState, message: "" }));
    }
  };
  function submissionHandler(e) {
    e.preventDefault();
    setDisabled(true);
    setError((prevState) => ({ ...prevState, message: "" }));
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.subject
    ) {
      setError((prevState) => ({
        ...prevState,
        success: false,
        message: "Fields must not be empty!",
      }));
      setDisabled(false);
    } else if (!validateEmail(formData.email)) {
      setError((prevState) => ({
        ...prevState,
        email: true,
        message: "Email is invalid!",
      }));
      setDisabled(false);
    } else if (!validatePhone(formData.phone)) {
      setError((prevState) => ({
        ...prevState,
        phone: true,
        message: "Phone number is invalid!",
      }));
      setDisabled(false);
    } else {
      setLoading(true);
      PostRequest(`${process.env.REACT_APP_API_URL}/contact/submit`, {
        fullName: formData.fullName,
        email: formData.email,
        phone: `${formData.stdCode} ${formData.phone}`,
        message: formData.message,
        subject: formData.subject,
      })
        .then((response) => {
          setError((prevState) => ({ ...prevState, success: true }));
          setLoading(false);
          setFormData((prevState) => ({
            ...prevState,
            fullName: "",
            email: "",
            subject: "",
            phone: "",
            message: "",
          }));
        })
        .catch((err) => {
          setError((prevState) => ({
            ...prevState,
            message: err?.data
              ? err.data.error
              : "Something went wrong. Try again later!",
          }));
          setDisabled(false);
        });
    }
  }
  useEffect(() => {
    if (error.success) {
      const timer = setTimeout(() => {
        navigate('/thanks');
        windowScroll();
        setError((prevState) => ({ ...prevState, success: false }));
        setDisabled(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [error.success, navigate]);
  const WindowScroll = () => {
    window.scrollTo({
      top: 500,
      behavior: "smooth"
    });
  }

  return (
    <>
      <SEO
        title="Contact SkyPro - Customer Support & Inquiries"
        description="Reach out to SkyPro for inquiries, support, or services. Fill out our contact form or call us directly. We're here to assist you with all your needs."
        keywords="Skypro contact, contact Skypro, Skypro customer support, Skypro IPTV support, Skypro contact information, IPTV service contact, Skypro helpline, Skypro phone number, Skypro email address, Skypro contact form, Skypro inquiries, Skypro support team, Skypro customer service, Skypro office location,"
      />
      <InnerPageBanner title='Contact Us' innerPageBanner={ImageIcons.contactBg} />
      {/* {error.success && <Toastify message="Email sent Successfully" />} */}
      <section className="">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-[30px] gap-[40px]">
            <div className="lg:p-[30px] p-0 lg:shadow-[0_0_10px_#e5e5e5] relative">
              {loading && (
                <Loader />
              )}
              <h3 className="text-[#071e43] uppercase mb-[20px]">Send us a message</h3>
              <p className={` mb-[10px] text-[#fd5901] font-medium ${error.message ? 'block' : 'hidden'}`}>{error.message}</p>
              <div className="grid md:grid-cols-2 gap-[20px]" id="contactusForm">
                <div>
                  <label className="inline-block text-[#071e43] font-medium mb-[5px]" for="name">Name <span className="text-[#fd5901]">*</span></label>
                  <input type="text" name="name" id="name" value={formData.fullName} onChange={(e) => fullNameHandler(e)} className="h-[45px] bg-white w-full focus:outline-none hover:border-black border-[#c4c4c4] px-[8px] border focus:border-[#fd5901] rounded-[5px] focus:shadow-[0_0_2px_#fd5901] text-[14px] " placeholder="Name" required={true} />
                </div>

                <div>
                  <label className="inline-block text-[#071e43] font-medium mb-[5px]" for="name">Enter Your Email <span className="text-[#fd5901]">*</span></label>
                  <input type="email" name="email" id="email" value={formData.email} onChange={(e) => handleEmailInputChange(e)} className="h-[45px] bg-white w-full focus:outline-none hover:border-black border-[#c4c4c4] px-[8px] border focus:border-[#fd5901] rounded-[5px] focus:shadow-[0_0_2px_#fd5901] text-[14px]" placeholder="Enter Your Email" required={true}
                    onKeyDown={(e) => {
                      if (e.key === " ") {
                        e.preventDefault();
                      }
                    }}
                  />
                </div>

                <div>
                  <label className="inline-block text-[#071e43] font-medium mb-[5px]" for="name">Enter Your Phone <span className="text-[#fd5901]">*</span></label>
                  <div className="flex">
                    <select name="stdCode" id="stdCode" value={formData.stdCode} onChange={(e) => setFormData(prevState => ({ ...prevState, stdCode: e.target.value }))} className="border-r-0 rounded-l-[5px] h-[45px] bg-white w-[80px] focus:outline-none hover:border-black border-[#c4c4c4] px-[8px] border focus:border-[#fd5901] focus:shadow-[0_0_2px_#fd5901] text-[14px]">
                      {stdCodes.map((item, i) => (
                        <option
                          key={i}
                          value={item.dial_code}
                        >
                          {`${item.dial_code} ${item.code} `}
                        </option>
                      ))}
                    </select>
                    <input type="tel" name="phone" id="phone" maxLength={10} required={true} value={formData.phone}
                      onChange={(e) => handlePhoneInputChange(e)} className="h-[45px] bg-white w-full focus:outline-none hover:border-black border-[#c4c4c4] px-[8px] border focus:border-[#fd5901] rounded-[5px] rounded-l-none focus:shadow-[0_0_2px_#fd5901] text-[14px]" placeholder="Enter Your Phone"
                    />
                  </div>
                </div>

                <div>
                  <label className="inline-block text-[#071e43] font-medium mb-[5px]" for="name">Enter Your Subject <span className="text-[#fd5901]">*</span></label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    required={true}
                    value={formData.subject} onChange={(e) => handleSubjectInputChange(e)}
                    className="h-[45px] bg-white w-full focus:outline-none hover:border-black border-[#c4c4c4] px-[8px] border focus:border-[#fd5901] rounded-[5px] focus:shadow-[0_0_2px_#fd5901] text-[14px]"
                    placeholder="Enter Your Subject"
                  />
                </div>

                <div className="sm:col-span-2 col-span-1">
                  <label className="inline-block text-[#071e43] font-medium mb-[5px]" for="name">Enter Your Message </label>
                  <textarea
                    className="h-[50px] w-full focus:outline-none hover:border-black border-[#c4c4c4] px-[8px] border focus:border-[#fd5901] rounded-[5px] focus:shadow-[0_0_2px_#fd5901] py-[5px] text-[16px] min-h-[80px] resize-none false"
                    name="message"
                    id="message"
                    value={formData.message} onChange={(e) => handleMessageInputChange(e)}
                    placeholder="Message"
                    rows="4"
                    cols="30"
                  ></textarea>
                </div>

                <div onClick={WindowScroll}>
                  <button onClick={submissionHandler} className="bg-[#081c44] duration-500 text-white px-[40px] h-[45px] leading-[45px] inline-block rounded-[8px] hover:bg-[#fd5901]">
                    <span></span>Submit
                  </button>
                </div>
              </div>
            </div>

            <div>
              <LazyLoad>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.1802899880563!2d76.69166287621962!3d30.71333158656875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef6120a30ae9%3A0xfaad926cf0e52b11!2sSkypro%20TV!5e0!3m2!1sen!2sin!4v1705385040612!5m2!1sen!2sin"
                width="100%"
                height="500"
                loading="lazy"
                title="Embedded Location"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              </LazyLoad>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
