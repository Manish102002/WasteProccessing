import Footer from "../Footer"
import Navigation from "../Navigation"


const Service = () => {
  return (
    <>
      <Navigation />


      <div className=" bg-lightBlue text-white pb-24 pt-5 h-min-full flex justify-center items-center flex-col gap-6  w-full">

        <div className=" -leading-[2]">
          <h2 className=" text-h3 font-semibold">Information & Education</h2>
          <h1 className=" text-center text-h1 font-bold">Waste Flow</h1>
        </div>

        <div className=" flex flex-wrap gap-4 items-center justify-center">

          <div className=" h-[250px] w-[176px]">
            <img src="https://i.ibb.co/s995s8c/frame1.png" alt="" />
            <h6 className=" text-h6 text-center font-semibold mt-5">Waste Segregation by Clients</h6>
          </div>

          <div className=" h-[250px] w-[176px]">
            <img src="https://i.ibb.co/NT7Hskr/frame2.png" alt="" />
            <h6 className=" text-h6 text-center font-semibold mt-5">Waste Segregation by Clients</h6>
          </div>

          <div className=" h-[250px] w-[176px]">
            <img src="https://i.ibb.co/FDRC5T8/frame3.png" alt="" />
            <h6 className=" text-h6 text-center font-semibold mt-5">Waste Segregation by Clients</h6>
          </div>

          <div className=" h-[250px] w-[176px]">
            <img src="https://i.ibb.co/CmRDXwg/frame4.png" alt="" />
            <h6 className=" text-h6 text-center font-semibold mt-5">Waste Segregation by Clients</h6>
          </div>

          <div className=" h-[250px] w-[176px]">
            <img src="https://i.ibb.co/NjqhG2F/frame5.png" alt="" />
            <h6 className=" text-h6 text-center font-semibold mt-5">Waste Segregation by Clients</h6>
          </div>

        </div>

      </div>


      {/* Next page */}

      <div>

        <div className=" flex flex-col gap-1 justify-center items-center mt-8">
          <h2 className=" text-h3 font-bold">Interested in Selling?</h2>
          <h1 className=" text-[48px] font-bold text-center text-lightBlue">Waste is also valuable</h1>
          <p className=" w-[70vw] text-center ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore provident iure quo, earum quaerat et quam ratione voluptates in, a quisquam ex eum doloremque quas culpa sequi ipsa architecto vitae?</p>
        </div>

        <div className=" flex gap-x-3 gap-y-3 flex-wrap mx-2 mt-10 justify-center items-center" >

          <div className=" w-[309px] h-[371px] border  rounded-lg py-5 justify-center gap-3 flex flex-col items-center shadow-lg ">
            <div className=" w-[160px] h-[160px] bg-lightBlue rounded-[50%] flex justify-center items-center">
              <img src="https://i.ibb.co/dtV79jH/sell1.png" alt="" className="" />
            </div>
            <h2 className=" w-[200px] text-center font-bold text-h5 ">Plastic PETE /PET
              Bottle</h2>
            <p className=" w-[181px] text-center mt-5 text-h6">Sell Now</p>
          </div>

          <div className=" w-[309px] h-[371px] border  rounded-lg py-5 justify-center gap-3 flex flex-col items-center shadow-lg ">
            <div className=" w-[160px] h-[160px] bg-lightBlue rounded-[50%] flex justify-center items-center">
              <img src="https://i.ibb.co/HT8BZFm/sell2.png" alt="" className="" />
            </div>
            <h2 className=" w-[200px] text-center  font-bold text-h5 ">Glass Bottle</h2>
            <p className=" w-[181px] text-center mt-9 text-h6">Sell Now</p>
          </div>

          <div className=" w-[309px] h-[371px] border  rounded-lg py-5 justify-center gap-3 flex flex-col items-center shadow-lg ">
            <div className=" w-[160px] h-[160px] bg-lightBlue rounded-[50%] flex justify-center items-center">
              <img src="https://i.ibb.co/6r2Fw4K/sell3.png" alt="" className="" />
            </div>
            <h2 className=" w-[200px] text-center font-bold text-h5 ">Polypropylene Plastic</h2>
            <p className=" w-[181px] text-center mt-5 text-h6">Sell Now</p>
          </div>

          <div className=" w-[309px] h-[371px] border  rounded-lg py-5 justify-center gap-3 flex flex-col items-center shadow-lg ">
            <div className=" w-[160px] h-[160px] bg-lightBlue rounded-[50%] flex justify-center items-center">
              <img src="https://i.ibb.co/PhB8CmC/sell4.png" alt="" className=" " />
            </div>
            <h2 className=" w-[200px] text-center font-bold text-h5 ">Plastic Bag</h2>
            <p className=" w-[181px] text-center mt-8 text-h6">Sell Now</p>
          </div>

          <div className=" w-[309px] h-[371px] border  rounded-lg py-5 justify-center gap-3 flex flex-col items-center shadow-lg ">
            <div className=" w-[160px] h-[160px] bg-lightBlue rounded-[50%] flex justify-center items-center">
              <img src="https://i.ibb.co/4fTBm4k/sell5.png" alt="" className="" />
            </div>
            <h2 className=" w-[200px] text-center font-bold text-h5 ">Plastic PETE /PET
              Bottle</h2>
            <p className=" w-[181px] text-center mt-5 text-h6">Sell Now</p>
          </div>

          <div className=" w-[309px] h-[371px] border  rounded-lg py-5 justify-center gap-3 flex flex-col items-center shadow-lg ">
            <div className=" w-[160px] h-[160px] bg-lightBlue rounded-[50%] flex justify-center items-center">
              <img src="https://i.ibb.co/tQZS9RJ/sell6.png" alt="" className="" />
            </div>
            <h2 className=" w-[200px] text-center font-bold text-h5 ">Plastic PETE /PET
              Bottle</h2>
            <p className=" w-[181px] text-center mt-5 text-h6">Sell Now</p>
          </div>

          

        </div>

      </div>



      <Footer />
    </>
  )
}

export default Service