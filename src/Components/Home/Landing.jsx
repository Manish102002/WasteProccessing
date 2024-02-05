import Footer from "../Footer"
import Category from "./Category"
import Maping from "./Maping"
import Products from "./Products"
import Testimonial from "./Testimonial"


const Landing = () => {
    return (
        <>
            <div className=" bg-lightBlue  lg:h-[38vw] md:h-[38vw]   h-min-full  w-full">

                <div className=" flex text-white justify-center pb-8  pt-20 flex-wrap-reverse lg:mx-20 md:mx-20">

                    <div className=" flex flex-col  ">

                        <h3 className=" lg:text-h1 md:text-h2 sm:text-h2  font-semibold">Hi Folks,</h3>

                        <h1 className=" lg:text-[48px] md:text-[35px] sm:text-[28px] text-[28px] font-bold text-[#FFFFDD]">Inovation Dedication <br />
                            and Sustainable Solution</h1>

                        <p className=" min-w-full lg:w-[654px] md:w-[654px] sm:w-[554px] w-[354px]">
                            Lorem ipsum dolor sit amet consectetur. Nisl donec tortor volutpat id pharetra ultricies mauris. Eget augue at egestas et consequat quis ultricies. At vel aenean posuere neque a fermentum donec eros ut. Nullam mi egestas sed facilisis.
                        </p>

                        <button className=" mt-7 px-2 py-1 rounded-lg border w-28"> Veiw Detail</button>

                    </div>

                    <div>

                        <img src="https://i.ibb.co/Kryxk52/Component3.png" alt="" className=" lg:w-[305px] md:w-[345px] sm:w-[250px] w-[250px] lg:h-[300px] md:h-[280px] sm:h-[200px] h-[200px]" />

                    </div>
                </div>


            </div>
            <div  className=" flex justify-center font-semibold lg:gap-[100px] gap-10 my-3 flex-wrap">
                <div>
                    <div className=" text-center lg:text-[48px] text-[18px]">200+</div>
                    <div className=" lg:text-h3 text-h5 -translate-y-2">Members</div>
                </div>
                <div>
                    <div className=" text-center lg:text-[48px] text-[18px]">20</div>
                    <div className=" lg:text-h3 text-h5 -translate-y-2">Waste Bank</div>
                </div>
                <div>
                    <div className=" text-center lg:text-[48px] text-[18px]">50</div>
                    <div className=" lg:text-h3 text-h5 -translate-y-2">Products</div>
                </div>
                <div>
                    <div className=" text-center lg:text-[48px] text-[18px]">150</div>
                    <div className=" lg:text-h3 text-h5 -translate-y-2">Course Education</div>
                </div>
            </div>

            <Category/>

            <Products/>

            <Testimonial/>

            <Maping/>

            <Footer/>
        </>
    )
}

export default Landing