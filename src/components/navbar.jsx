const Navbar = ()=> {
    

    return <>
    <div className="flex justify-between items-center max-h-20 pt-5 px-20">
        <div className="flex items-center">
            <img 
                src='brand-logo.png'
                alt= "data-vidhya logo"
                className="h-20 w-auto"
                />
            <span className="text-lg font-medium">Data Vidhya</span>
        </div>
        <div className="flex space-x-12 text-base hover:cursor-pointer">
            <div>Home</div>
            <div>Courses</div>
            <div>Platform</div>
            <div>Resources</div>
        </div>
    </div>
    </>
}

export default Navbar;