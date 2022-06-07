import type { NextComponentType } from "next";



import { BsAward } from "../Misc/Icons.collection";

const Awards: NextComponentType = () => {
    return (
        <div className="my-8 flex flex-row items-center justify-between px-3" id="awards">
            <div className="text-md my-8 flex flex-col font-medium ">
                <h1 className="text-3xl font-bold text-white">Awards</h1>

                <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
                    <BsAward className=""  size="30" />
                    <span className="text-white">คนดีศรีนครินทร์ Award Academic year 2021</span>

                </p>

                <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
                    <BsAward className="" size="30" />
                    <span className="text-white">ต๊อกแต๊ก หุ่นยนต์อำนวยความสะดวกสำหรับจัดส่งของภายในโรงพยาบาล <br />Silver Medal Quality Award, National Research Agency </span>
                    <br></br>
                </p>

                <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
                    <BsAward className="" size="30" />
                    <span className="text-white">ต๊อกแต๊ก หุ่นยนต์อำนวยความสะดวกสำหรับจัดส่งของภายในโรงพยาบาล <br /> Honorable Mention: Puey Ungphakorn College of Development Studies</span>
                </p>

                <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
                    <BsAward className="" size="30" />
                    <span className="text-white">VDEGREE Verification <br /> Silver Medal Quality Award, National Research Agency </span>
                </p>


            </div>
        </div>


    );
};

export default Awards;
