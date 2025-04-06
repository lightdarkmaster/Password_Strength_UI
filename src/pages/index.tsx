import { useState } from "react";


export default function Home() {

  const [data, setData] = useState<string>("");


  const RandomPick=()=>{
    const randomNumber = Math.floor(Math.random() * 20);
    fetch(`https://jsonplaceholder.typicode.com/posts/${randomNumber}`)
      .then((response) => response.json())
      .then((data) => {
        setData(JSON.stringify(data));
        console.log("Data fetched successfully:", data);
      });
  }

  // const testApi =()=>{
  //   fetch("https://jsonplaceholder.typicode.com")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(JSON.stringify(data));
  //      setData(data[Math.floor(Math.random() * data.length)].title);
  //      setData(data[Math.floor(Math.random() * 50)].body);
  //       console.log("Data fetched successfully:", data);

  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }


// const test2 =()=>{
//   fetch('https://dummyjson.com/image/400x200/282828')
//   .then(response => response.blob()) // Convert response to blob
//   .then(blob => {
//     console.log('Fetched image blob:', blob),
//     console.log(blob)
// })
  

  return (
    <div className=" w-full min-h-screen flex flex-col items-center justify-center text-center content-center">
      <button className="w-fit h-fit border-2 rounded-[10px] p-[10px] gap-[10px] cursor-pointer hover:bg-red-500" onClick={()=>RandomPick()}>
        Get Data
      </button>
      {
        data && (
          <div className="w-full h-full flex flex-col items-center justify-center">
            <h1 className="text-2xl">Data:</h1>
            <pre className="text-sm">{data}</pre>
            <p>{data}</p>
          </div>
        )
      }
    </div>
  );
}
