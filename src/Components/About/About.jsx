// import { Navigation } from "swiper/modules"

import Footer from "../Footer"
// import { NavLink } from "react-router-dom"
import Navigation from "../Navigation"


const About = () => {
  return (
    <>
      <Navigation />

      <div className=" bg-lightBlue h-min-full  w-full">

        <div className=" flex text-white justify-center pb-16 gap-8  pt-9 flex-wrap  ">

          <div>

            <img src="/public/Images/about1.png" alt="" className=" lg:w-[255px] md:w-[245px] sm:w-[150px] w-[150px] lg:h-[360px] md:h-[280px] sm:h-[200px] h-[200px]" />

          </div>

          <div className=" flex flex-col  ">

            <h3 className=" lg:text-h3 md:text-h3 sm:text-h3  font-semibold">About Me</h3>

            <h1 className=" lg:text-[48px] md:text-[35px] -leading-8 sm:text-[28px] text-[28px] font-bold text-[#FFFFDD]">Inovation Dedication <br />
              and Sustainable Solution</h1>

            <p className=" min-w-full lg:w-[654px] md:w-[354px] sm:w-[454px] w-[354px]">
              Lorem ipsum dolor sit amet consectetur. Nisl donec tortor volutpat id pharetra ultricies mauris. Eget augue at egestas et consequat quis ultricies. At vel aenean posuere neque a fermentum donec eros ut. Nullam mi egestas sed facilisis.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, deleniti non ullam reprehenderit debitis suscipit voluptate explicabo quam magnam quas nostrum, nisi ipsam fugiat expedita cumque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptatem cupiditate officiis eos soluta libero quisquam, voluptas autem omnis quidem.
            </p>

            {/* <button className=" mt-7 px-2 py-1 rounded-lg border w-28"> Veiw Detail</button> */}

          </div>


        </div>


      </div>



      <div className=" bg-white h-min-full  w-full">

        <div className=" flex text-[#016A70]  justify-center pb-16 gap-8  pt-20 flex-wrap-reverse  ">



          <div className=" flex flex-col  ">

            <h3 className=" lg:text-h3 md:text-h3 sm:text-h3  font-semibold">About Me</h3>

            <h1 className=" lg:text-[48px] md:text-[35px] -leading-8 sm:text-[28px] text-[28px] font-bold ">Goals And Objectives</h1>

            <p className=" min-w-full lg:w-[654px] md:w-[354px] sm:w-[454px] w-[354px]">
              Lorem ipsum dolor sit amet consectetur. Nisl donec tortor volutpat id pharetra ultricies mauris. Eget augue at egestas et consequat quis ultricies. At vel aenean posuere neque a fermentum donec eros ut. Nullam mi egestas sed facilisis.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, deleniti non ullam reprehenderit debitis suscipit voluptate explicabo quam magnam quas nostrum, nisi ipsam fugiat expedita cumque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptatem cupiditate officiis eos soluta libero quisquam, voluptas autem omnis quidem.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo distinctio suscipit molestiae, cum velit non harum! Ad dignissimos hic quidem nihil quibusdam minus sit nostrum? Excepturi, temporibus sapiente sed pariatur quaerat doloribus tempora nihil, nobis officiis quis esse molestias mollitia.
            </p>

            {/* <button className=" mt-7 px-2 py-1 rounded-lg border w-28"> Veiw Detail</button> */}

          </div>

          <div>

            <img src="/public/Images/about2.png" alt="" className=" lg:w-[255px] md:w-[245px] sm:w-[150px] w-[150px] lg:h-[360px] md:h-[280px] sm:h-[200px] h-[200px]" />

          </div>


        </div>


      </div>




      <Footer />
    </>
  )
}

export default About