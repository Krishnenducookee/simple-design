import Divider from "../Sidebar_divider/Divider"
import SideBar from "./SideBar"

const MainLayout=({children})=>{
return (
    <div className="min-h-screen w-full relative flex bg-slate-900 flex-col md:flex-row">
        <div className='sticky top-0 h-min md:w-60' >
            <SideBar/>
        </div>
        <div className='hidden md:block sticky top-0 h-min' >
        <Divider/>
        </div>

        
        <div className="p-20 md:overflow-y-auto relative md:pl-36 md:p-16 flex flex-col">
            {children}
        </div>

    </div>


)
   
}

export default MainLayout
