
const CostumerReview = ({ image, review, avatar, name, position }) => {
    return<>
    <div className="p-2 flex flex-col border border-gray-300 rounded-2xl w-100 my-3">
       <img src={image} alt="stars" className="w-20 h-auto pt-4"/>
       <div className="pt-4">{review}</div>
       <div className="flex justify-around p-2">
        <img src={avatar} alt="user avatar" className="w-10 h-10 rounded-full"/>
        <div className="flex flex-col">
            <div className="font-bold">{name}</div>
            <div>{position}</div>
        </div>
        <img src="linkedin-logo.png" alt="linkedin logo" className=" w-10 h-10 rounded-full" />
       </div>
    </div>
    </>
}

export default CostumerReview