import React from "react";

function mathtinic() {
  return (
    <div className="w-full min-h-screen bg-blue-300">
      <div className="w-full h-full flex-col gap-[10px] items- justify-center">
        <div className="max-w-[600px] h-fit border gap-[10px] rounded-[10px] bg-red-400 flex-cols">
            <div className="gap-[10px] items-center flex">
              <input
                placeholder="num1"
                className="w-full h-full p-[10px] border-b outline-0"
                type="text"
              />
              Number 1
            </div>
            <div className="gap-[10px] items-center flex">
              <input
                placeholder="num1"
                className="w-full h-full p-[10px] border-b outline-0"
                type="text"
              />
            </div>
            <div className="gap-[10px] items-center flex">
              <input
                placeholder="num1"
                className="w-full h-full p-[10px] border-b outline-0"
                type="text"
              />
            </div>
            <div className="gap-[10px] items-center flex">
              <input
                placeholder="num1"
                className="w-full h-full p-[10px] border-b outline-0"
                type="text"
              />
            </div>
        </div>
      </div>
    </div>
  );
}

export default mathtinic;
