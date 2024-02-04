import SwiperJ from "./SwiperJ"


const Testimonial = () => {
    return (
        <>
            <div className=" mt-20">

                <div  className=" flex  flex-wrap justify-center items-center lg:gap-52 md:gap-40 gap-5">
                    <div>
                        <h2 className=" text-h2">Testimonial</h2>
                        <h1 className=" text-h1 font-bold ">What people say <br />
                            about us.</h1>
                    </div>

                    <div className=" lg:w-[450px] md:w-[450px] sm:w-[450px] w-[400px] h-[281px] overflow-hidden">
                        <SwiperJ/>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Testimonial