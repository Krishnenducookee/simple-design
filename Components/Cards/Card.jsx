import {useState } from "react";

const Card = () => {
  const [paragraph, setParagraph] = useState({
    newText:[],
    isOriginal: true,
  });

  const originalPara =
    "Lorem Ipsum is simply dummy paragraph of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

const undo=()=>{

   
}

  return (
    <div className="p-6 md:max-w-xl bg-white rounded-xl items-center">
      <button
        className="rounded w-10 h-10 border bg-red-500"
        onClick={undo}
      >
        undo
      </button>
      <button className="rounded w-10 h-10 border bg-green-500">redo</button>
      <button
        className="rounded-full w-5 h-5 border bg-red-500"
        onClick={() => {
          setParagraph({ isOriginal: true });
        }}
      ></button>
      <p className="paragraph-lg paragraph-black font-semibold">
        <textarea
          className="h-[330px] resize-none"
          onChange={(e) => {
            setParagraph({ newText: e.target.value, isOriginal: false });
          }} 
          value={paragraph.isOriginal ? originalPara : paragraph.newText}
        />
      </p>
    </div>
  );
};

export default Card;


