import Divider from "../Sidebar_divider/Divider"
import SideBar from "./SideBar"

const MainLayout=({children})=>{
return (
    <div className="min-h-screen w-full relative flex bg-slate-900">
        <div className='sticky top-0 w-[20%] h-min ' >
            <SideBar/>
        </div>
        <div className='sticky top-0 h-min ' >
        <Divider/>
        </div>
        <div className="overflow-y-auto w-[80%] relative pl-36 p-16 flex flex-col">
            {children}
        </div>

    </div>
)
}

export default MainLayout