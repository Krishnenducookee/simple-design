import Card from "@/Components/Cards/Card";

const Cards = () => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {[...Array(15)].map((_, index) => {
        return <Card key={index}/>;
      })}
    </div>
  );
};

export default Cards;
