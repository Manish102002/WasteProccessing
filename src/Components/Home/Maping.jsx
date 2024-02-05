

const Maping = () => {
  return (
    <>
      <div className=" my-20">
        <div className="flex  justify-center items-center flex-wrap gap-9">
          <img src="https://i.ibb.co/gmvbLxL/BANG-in.png" alt="" className=" lg:w-[213px] w-[103px] lg:h-[63px] h-[43px]" />
          <img src="https://i.ibb.co/6PH7mgR/logo2.png" alt="" className=" lg:w-[368px] w-[168px]  lg:h-[107px] h-[77px]" />
          <img src="https://i.ibb.co/D57jnfY/logo1.png" alt="" className="  lg:w-[158px] w-[78px] lg:h-[62px] h-[42px] " />
        </div>

        <div className=" flex justify-center items-end gap-16 mx-5  flex-wrap ">
          <div className="mt-10 w-max-[100vw] overflow-hidden ">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.126303897105!2d75.86978427527097!3d22.68634162879202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd11cbaf30c5%3A0xeddd100ed6a7f182!2sIT%20park%20indore!5e0!3m2!1sen!2sin!4v1704615810020!5m2!1sen!2sin"
              width="450"
              height="403"
              style={{ border: "0" }}
              allowfullscreen=""
              className=" rounded-lg"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">

            </iframe>
          </div>

          <div className=" w-[563px] flex flex-col gap-[10px]">

            <h2 className=" text-h3">Maps</h2>
            <h1 className=" text-[36px] font-bold">Find Your nearest waste Bank</h1>
            <p className=" text-h6">Lorem em ipsum dolor sit amet consectetur. Nisl donec tortor volutpat id pharetra ultricies mauris. Eget augue at egestas et consequat quis ultricies. At vel aenean posuere neque a fermentum donec eros ut. Nullam mi egestas sed facilisis.</p>
            <h3 className=" border-[2px] border-black pl-10 py-3 rounded-lg" >Search Your Waste Bank Here</h3>
          </div>

        </div>
      </div>
    </>
  )
}

export default Maping