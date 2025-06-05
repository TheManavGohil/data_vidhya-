const Footer = () =>{
    return<>
    <div className="flex flex-col">
        <div className="flex items-center">
            <img 
                src='brand-logo.png'
                alt= "data-vidhya logo"
                className="h-20 w-auto"
                />
            <span className="text-lg font-medium">Data Vidhya</span>
        </div>
        <div className="flex justify-between">
            <div>
                <u>@2025 Your Company. All rights reserved</u>
                <u>Privacy Policy</u>
                <u>Terms of Service</u>
                <u>Cookies Settings</u>
            </div>
            <img src="SocialMedia.png" alt="Social media links" className="hover:cursor-pointer pb-20 px-5" />
        </div>
    </div>
    </>
}

export default Footer