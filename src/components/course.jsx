const Course = () =>{ 

    return<>
    <div className='flex flex-col pt-20'>
        <div className='text-center text-5xl font-bold'>
            <div>The Ultimate</div>
            <div> Data Engineering Course</div>
        </div>

        <div className='text-center text-lg pt-8 max-w-100 mx-auto'>
            Go from data novice to engineering pro ,faster than you thought possible
        </div>

        <div className='flex justify-center pl-40 pt-15'>
            <img src='product.png' alt="product's overview"/>
        </div>

        <button className='mt-15 rounded-lg bg-black text-white w-40 py-4 mx-auto hover:cursor-pointer'>View Course</button>
    </div>
    </>
}

export default Course