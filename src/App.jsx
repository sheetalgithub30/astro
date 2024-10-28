import React from "react";
import img1 from "./assets/Rectangle 3292.png";
import img2 from "./assets/Rectangle 3293.png";
import border from "./assets/border.png";
import borderBlack from "./assets/borderBlack.png";
import borderWhite from "./assets/borderWhite.png";
import planet from "./assets/Planet.png";
import numerology from "./assets/numerology.png";
import vastu from "./assets/vastu.png";
import puja from "./assets/puja.png";
import k from "./assets/10k.png";
import ss1 from "./assets/Screenshot1.png";
import ss2 from "./assets/Screenshot2.png";
import ss3 from "./assets/Screenshot3.png";
import rightArrow from "./assets/rightArrow.png";
import leftArrow from "./assets/leftArrow.png";
import circle from "./assets/Circle.png";
import astro from "./assets/Astro.png";
import influcent from "./assets/influcent.png";
import E1 from "./assets/E1.png";
import E2 from "./assets/E2.png";
import E3 from "./assets/E3.png";
import D1 from "./assets/D1.png";
import D2 from "./assets/D2.png";




const card_data = [
  {
    id: 1,
    src: planet,
    title: "Astrology Consultation",
    content: "Get personalized guidance on career, relationships, and health",
  },
  {
    id: 2,
    src: numerology,
    title: "Numerology Reading",
    content:
      "Unveil life’s hidden patterns through numerology readings for success and clarity",
  },
  {
    id: 3,
    src: vastu,
    title: "Vastu Consultation",
    content:
      "Align your environment with universal energy for better health, prosperity, and peace",
  },
  {
    id: 4,
    src: puja,
    title: "Puja Services",
    content:
      "Customized pooja services to invite positive energy and success into your life",
  },
];

const Choose_me_data = [
  {
    id: 1,
    title: "Expert Guidance",
    content:
      "With a deep understanding of cosmic forces, Gopal Krishna provides tailored insights to help you navigate life’s biggest decisions.",
  },
  {
    id: 2,
    title: "Achieve Peace & Success",
    content:
      "Through his personalized astrology and numerology services, Gopal has helped countless individuals find peace, success, and clarity in their personal and professional lives.",
  },
  {
    id: 3,
    title: "Transform Your Space",
    content:
      "Optimize your living or working environment with Vastu consultations, ensuring harmony, prosperity, and balance in all areas of life.",
  },
];

function App() {
  return (
    <>
      {/* Hero */}
      <div className="relative h-[100vh] bg-hero bg-cover bg-center text-white">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative">
          <navbar className="flex justify-between items-center h-24 w-full">
            <div className="w-full text-center text-2xl font-bold">
              Astro Gopal Pandit
            </div>
            <div className="w-full">
              <ul className="flex justify-evenly  ">
                <li>
                  <a href="" className="font-Sora">
                    Home
                  </a>
                </li>
                <li>
                  <a href="" className="font-Sora">
                    About
                  </a>
                </li>
                <li>
                  <a href="" className="font-Sora">
                    Services
                  </a>
                </li>
                <li>
                  <a href="" className="font-Sora">
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full"></div>
          </navbar>
          <div className="my-11">
            <div className="flex w-[80%] m-auto">
              <div className="w-[57%] m-auto">
                <p className="text-lg my-4 font-normal font-Sora">
                  Astrology | Numerology | Vastu | Pooja.
                </p>
                <h1 className="text-6xl font-extrabold my-4">
                  Find Balance and Direction at Every Stage of Life
                </h1>
                <p className="text-lg font-normal my-4 font-Sora">
                  Gain clarity, make informed choices, and shape your destiny
                  with trusted advice.
                </p>
                <div className="w-[60%] flex justify-between">
                  <button className="bg-white text-xl font-bold py-2 text-black rounded-lg hover:bg-gray-300 focus:outline-none w-48">
                    Book a Session
                  </button>
                  <button className="bg-transparent border-2 border-white text-xl font-bold py-2 rounded-lg hover:bg-gray-300 hover:text-black focus:outline-none w-48">
                    Explore
                  </button>
                </div>
              </div>
              <div className="mx-14">
                <img src={img1}></img>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="h-full">
        <div className="flex flex-col justify-center items-center my-16">
          <h2 className="text-4xl font-bold my-3">About Me</h2>
          <img src={border}></img>
        </div>
        <div className="flex items-center justify-center w-[80%] m-auto">
          <div className="">
            <img src={img2} />
          </div>
          <div className="w-[50%] m-auto ">
            <ul className="list-disc text-lg">
              <li className="font-Sora">
                Respected astrologer with expertise in astrology, numerology,
                and vastu.
              </li>
              <li className="  font-Sora">
                Known for a practical and compassionate approach that combines
                ancient wisdom with modern insights.
              </li>
              <li className="  font-Sora">
                Specializes in providing actionable advice that helps improve
                daily life.
              </li>
              <li className="  font-Sora">
                Mission: To guide clients on their unique journeys with clarity
                and direction.
              </li>
            </ul>
            <div className="flex my-4">
              <img src={planet} className="w-12 h-12"></img>
              <div className="mx-5 flex">
                <img src={k} className="w-14 h-12" />
                <div className="flex flex-col mx-2">
                  <span>number of</span>
                  <span className="text-xl font-semibold">Consultations</span>
                </div>
              </div>
            </div>
            <button className="my-4 text-white bg-gradient-to-r from-[#343265] to-[#245276] text-xl font-bold py-2 rounded-lg hover:bg-gradient-to-l focus:outline-none w-48">
              Consult now
            </button>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="h-full bg-[#F6F7FF]">
        <div className="flex flex-col justify-center items-center my-16">
          <h2 className="text-4xl font-bold my-3">Services</h2>
          <img src={border}></img>
        </div>
        <div className="flex items-center justify-center w-[80%] m-auto">
          <div className="w-[45%] relative flex justify-center items-center ">
            <div className="absolute justify-center items-center flex">
              <img src={E2} className="absolute"/>
              <img src={E1} className="w-[84%]"/>
              <img src={D2} className="absolute left-16 top-0"/>

              <img src={D1} className="absolute -left-1 top-16"/>
              <img src={D1} className="absolute -right-5"/>
              <img src={D2} className="absolute right-16 bottom-0.5"/>


              <div className="absolute flex justify-center items-center">
                <img src={E3} className="w-[84%]"/>
              </div>

            </div>
            
          </div>
          <div className="w-[55%] m-auto flex flex-wrap">
            {card_data.map((data) => {
              return (
                <div
                  key={data.id}
                  className="border-2 border-gray-300 rounded-3xl w-72 p-4 m-3 flex flex-col justify-center items-center text-center"
                >
                  <img src={data.src} className="m-4" />
                  <p className="font-bold font-Sora text-lg m-2">
                    {data.title}
                  </p>
                  <p className=" leading-6 font-Sora text-gray-800">
                    {data.content}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="h-full flex flex-col items-center justify-center py-12">
        <div className="flex flex-col justify-center items-center my-16 w-[40%]">
          <h2 className="text-4xl font-bold my-3">Testimonials</h2>
          <img src={borderBlack}></img>
          <p className="text-lg text-center text-gray-800 p-4 font-Sora">
            “Here's what our clients have to say about their life-changing
            experiences!”
          </p>
        </div>
        <div className="flex justify-evenly w-[80%]">
          <button>
            <img src={leftArrow} />
          </button>
          <img src={ss1} className="" />
          <img src={ss2} className="" />
          <img src={ss3} className="" />
          <button>
            <img src={rightArrow} />
          </button>
        </div>
      </div>

      {/* Choose Me */}
      <div className="relative h-full bg-hero bg-cover bg-center text-white py-10">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative">
          <div className="flex flex-col justify-center items-center my-16">
            <h2 className="text-4xl font-bold my-3">Why Choose Me</h2>
            <img src={borderWhite}></img>
          </div>
          <div className="flex items-center justify-center w-[88%] m-auto">
            <div className="w-[80%] m-auto flex flex-wrap">
              {Choose_me_data.map((data) => {
                return (
                  <div
                    key={data.id}
                    className="border-2 border-gray-300 rounded-3xl w-80 p-4 m-3 flex flex-col justify-center items-center text-center"
                  >
                    <img src={circle} className="m-4" />
                    <p className="font-semibold font-Sora text-lg my-4">{data.title}</p>
                    <p className="text-sm leading-5 font-Sora ">{data.content}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-[63%] m-auto flex justify-end">
            <button className="bg-white text-xl font-bold py-2 text-black rounded-lg hover:bg-gray-300 focus:outline-none w-48 my-7">
              Book a Session
            </button>
          </div>
        </div>
      </div>

      {/* qna */}
      <div className="relative h-full bg-btm bg-cover bg-center text-white py-8">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative">
          <div className="flex items-center justify-center w-[80%] m-auto border-2 border-white rounded-3xl p-14">
            <div className="w-[40%] m-auto">
              <img src={astro} />
            </div>
            <div className="w-[40%] m-auto">
              <h1 className="text-4xl font-extrabold my-3">
                Got a Question? Ask Gopal Ji!
              </h1>
              <p className=" w-[88%] leading-5 my-2 font-Sora font-normal">
                Curious about your future, or seeking insights into your life's
                challenges? Reach out today and let Gopal Ji guide you through
                expert astrological advice, personalized readings, and more.
              </p>
              <p className="font-medium leading-5 font-Sora">
                Don’t hesitate! Share your query below and let’s begin the
                journey.
              </p>
              <div className="bg-white text-black p-6 my-6 rounded-xl">
                <form>
                  <div className="flex flex-col my-2">
                    <label>Full name</label>
                    <input
                      type="text"
                      className="border-2 border-gray-400 text-2xl"
                    ></input>
                  </div>
                  <div className="flex justify-between my-2">
                    <div className="flex flex-col w-[48%]">
                      <label>Phone number</label>
                      <input
                        type="text"
                        className="border-2 border-gray-400 text-2xl"
                      ></input>
                    </div>
                    <div className="flex flex-col w-[48%]">
                      <label>E-mail ID</label>
                      <input
                        type="email"
                        className="border-2 border-gray-400 text-2xl"
                      ></input>
                    </div>
                  </div>
                  <div className="flex flex-col my-2">
                    <label>Message</label>
                    <textarea className="border-2 border-gray-400 h-32"></textarea>
                  </div>
                  <button className="my-4 text-white bg-gradient-to-r from-[#343265] to-[#245276] text-xl font-bold py-2 rounded-lg hover:bg-gradient-to-l focus:outline-none w-full">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="bg-[#0F1726] text-white flex w-[100%] h-24 justify-around items-center">
        <div>
          <p className="my-2 font-bold text-lg">Privacy Policy</p>
          <p className="my-2 font-bold text-lg">Terms of use</p>
        </div>
        <div>
          <img src={influcent} />
        </div>
      </div>
    </>
  );
}

export default App;
