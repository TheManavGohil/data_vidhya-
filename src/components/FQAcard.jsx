
const FAQcard = ({ question }) =>{
    return<>
    <div className="flex justify-between border border-gray-300 px-5 py-3 mb-5 rounded-lg w-200 mx-auto">
        <div>{question}</div>
        <div className="font-bold">+</div>
    </div>
    </>
}

export default FAQcard