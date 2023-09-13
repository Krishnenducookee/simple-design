import Card from "@/Components/Cards/Card"

const Cards=()=>{
    const componentArray=[]
    for(let i=0;i<15;i++){
        componentArray.push(<Card key={i}/>)
    }
    return (
        <div className="-ml-24 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {componentArray}
        </div>
    )
}

export default Cards