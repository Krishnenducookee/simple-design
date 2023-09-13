const SideBar=()=>{

    const list=["Lorem ipsum","Consectetur","Exercitation","Ut enim","Quis nostrud ","Laboris nisi"]

    return (
        <div>
            
        <img className=" ml-8 mt-6 rounded-full w-10 h-10 md:w-20 md:h-20" src="/images/photo-1567446537708-ac4aa75c9c28.jpg"/>
        <div className="text-white mt-12 ml-12">
            <ul className="list-disc">
               {list.map((data)=>(
                <li>{data}</li>
               ))}
            </ul>
            </div>
        </div>
    )
}
export default SideBar