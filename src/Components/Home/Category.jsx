

const Category = () => {
    return (
        <>
            <div className=" mt-20">

                <h2 className=" text-center text-h3 ">Category</h2>

                <h1 className=" text-center font-bold text-h2">We Offer Best Service</h1>

                <div className=" flex  justify-center my-8 gap-9 flex-wrap">
                    
                    <div className=" w-[333px] h-[313px] border  rounded-lg py-5 justify-center flex flex-col items-center shadow-lg ">
                        <img src="https://i.ibb.co/CvHgS8D/Group.png" alt="" className=" h-[80px] w-[80px] mb-[32px]"/>
                        <h2 className=" font-bold text-h5 ">Information & Education</h2>
                        <p className=" w-[181px] text-h6">Built Wicket longer admire do barton vanity itself do in it.</p>
                    </div>

                    <div className=" w-[333px] h-[313px] border rounded-lg py-5 justify-center flex flex-col items-center shadow-lg ">
                        <img src="https://i.ibb.co/yN1BJ6F/Group2.png" alt="" className=" h-[80px] w-[80px] mb-[32px]"/>
                        <h2 className=" font-bold text-h5 ">Course and Traning</h2>
                        <p className=" w-[181px] text-h6">Built Wicket longer admire do barton vanity itself do in it.</p>
                    </div>

                    <div className=" w-[333px] h-[313px] border rounded-lg py-5 justify-center flex flex-col items-center shadow-lg ">
                        <img src="https://i.ibb.co/RH7VjbD/Group3.png" alt="" className=" h-[80px] w-[80px] mb-[32px]"/>
                        <h2 className=" font-bold text-h5 "> Waste Recycling</h2>
                        <p className=" w-[181px] text-h6">Built Wicket longer admire do barton vanity itself do in it.</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Category