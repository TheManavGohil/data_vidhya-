import CostumerReview from "./costumerReview"

const Testimonials =()=> {

    return<>
    <div className='flex flex-col py-20'>
        <div className='text-center text-4xl font-bold'>Customer Testimonials</div>
        <div className='text-center pt-5 pb-10'>What our customers say about us!</div>
        <div className='px-30 grid grid-cols-3'>
          <CostumerReview image={"Stars.png"} 
            review={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."} 
            avatar={"avatar.jpg"}
            name={"Darshil Parmar"}
            position={"HR, Google"}
            />
            <CostumerReview image={"Stars.png"} 
            review={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."} 
            avatar={"avatar.jpg"}
            name={"Darshil Parmar"}
            position={"HR, Google"}
            />
            <CostumerReview image={"Stars.png"} 
            review={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."} 
            avatar={"avatar.jpg"}
            name={"Darshil Parmar"}
            position={"HR, Google"}
            />
            <CostumerReview image={"Stars.png"} 
            review={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."} 
            avatar={"avatar.jpg"}
            name={"Darshil Parmar"}
            position={"HR, Google"}
            />
            <CostumerReview image={"Stars.png"} 
            review={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."} 
            avatar={"avatar.jpg"}
            name={"Darshil Parmar"}
            position={"HR, Google"}
            />
            <CostumerReview image={"Stars.png"} 
            review={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."} 
            avatar={"avatar.jpg"}
            name={"Darshil Parmar"}
            position={"HR, Google"}
            />
        </div>
    </div>
    </>
}

export default Testimonials