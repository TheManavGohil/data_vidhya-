import FAQcard from "./FQAcard"

const Faqs = ()=>{

    return<>
    <div className='w-screen flex flex-col bg-[#F7F7FB]'>
          <div className='text-center text-4xl font-bold mt-30'>FAQs</div>
          <div className='text-center pt-5'>Find answers to your most pressing questions about our data engineering courses and platform.</div>
          <div className='pt-15 flex flex-col mb-40 '>
              <FAQcard question={"What is Data engineering?"}/>
              <FAQcard question={"Who should take courses?"}/>
              <FAQcard question={"What is the platform?"}/>
              <FAQcard question={"How do i enroll?"}/>
              <FAQcard question={"Is there a refund policy?"}/>
          </div>
    </div>
    </>
}

export default Faqs