const SideBar=()=>{

    const list=["Lorem ipsum","Consectetur ghcf","Exercitation cfbc","vchhgv","Quis nostrud ","Laboris nisi"]

    return (
        <div className="pl-12">
            
        <img className="mt-6 rounded-full w-10 h-10 md:w-20 md:h-20" src="/images/photo-1567446537708-ac4aa75c9c28.jpg"/>
        <div className="text-white mt-12">
            <ul className="list-disc list-outside flex flex-row md:flex-col">
               {list.map((data, index)=>(
                <li key={index}>{data}</li>
               ))}
            </ul>
            </div>
        </div>
    )
}
export default SideBar
