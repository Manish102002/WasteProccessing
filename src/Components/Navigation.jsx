import { NavLink } from "react-router-dom"


const Navigation = () => {
    return (
        <>
            <div className=" bg-lightBlue py-7">

                <div className=" flex justify-between lg:mx-20 md:mx-20 sm:mx-5 mx-5 p-3 px-5 bg-white flex-shrink-0 border rounded-[20px] shadow-md ">

                    <div className=" flex items-center">

                        <img src="https://i.ibb.co/gmvbLxL/BANG-in.png" alt="" className=" lg:w-[171px] md:w-[171px]  sm:w-[90px] w-[70px] lg:h-[31px] md:h-[31px]" />

                    </div>

                    <div className=" flex justify-center lg:text-h5 md:text-h5 items-center text-[12px] gap-10 font-semibold">

                      <NavLink exact activeClassName="active" className="Navbar" to="/"><h5 className="  cursor-pointer">Home</h5></NavLink>
                      <NavLink  activeClassName="active" to="/about" className="Navbar"><h5 className="  cursor-pointer">About</h5></NavLink>
                      <NavLink  activeClassName="active" to="/service" className="Navbar"><h5 className="  cursor-pointer">Service</h5></NavLink>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Navigation