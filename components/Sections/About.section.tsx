import type { NextComponentType } from "next";

import Image from "next/image";

const About: NextComponentType = () => {
  return (
    <>
      <div className="my-8 flex flex-row justify-center gap-x-4 block sm:hidden">
        <Image
          src="/assets/avatar.png"
          width="300"
          height="300"
          className="rounded-full"
          alt="avatar"
        />
      </div>
      <div className="my-8 flex flex-row items-center justify-between px-3 font-sen">
        <div>
          <p className="text-3xl font-bold text-white">Thanathip C. (Oat)</p>
          <p className="mt-1 text-lg text-gray-300">
            Web Developer and collage student
          </p>

          <p className="mt-4 text-gray-400">
            My name is Thanthip Chansri {new Date().getFullYear() - 2000} year <br />Now I'm study about Computer Science in Science, Srinakharinwirot University.
          </p>




        </div>

        <div className="hidden sm:block">
          <Image
            src="/assets/avatar.png"
            width="220"
            height="220"
            className="rounded-full"
            alt="avatar"
          />
        </div>

      </div>


    </>
  );
};

export default About;
