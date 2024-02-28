"use client";
import React from "react";
import { Data } from "../data/Data_story";
import Link from "next/link";
interface StoryModelProps {
  index: number | null;
}

const Story_model: React.FC<StoryModelProps> = ({ index }) => {
  const selectedPerson = index !== null ? Data[index] : null;

  return (
    <div className="">
      {selectedPerson && (
        <dialog id="my_modal_2" className="modal " open>
          <div className="modal-box max-h-full min-h-40 max-w-[800px] mx-0 px-0">
            <form method="dialog">
              <button className=" font-bold text-3xl hover:text-[#404040] text-secondary bg-none border-none absolute right-8 top-6">
                ✕
              </button>
            </form>
            <div className="flex flex-col items-center my-[3rem] ">
              <div className="flex flex-col gap-2 font-bold justify-center items-center w-full my-5">
                <div className=" text-4xl text-black">
                  {selectedPerson.full_name ? (
                    <div>{selectedPerson.full_name}</div>
                  ) : (
                    <div>{selectedPerson.Name}</div>
                  )}
                </div>
                <div className="text-xl text-secondary">
                  {selectedPerson.full_position ? (
                    <div>{selectedPerson.full_position}</div>
                  ) : (
                    <div>{selectedPerson.position}</div>
                  )}
                </div>
              </div>
              <div className="w-full h-[1px] bg-black opacity-10 my-[3rem]"></div>
              <div className="px-6 md:px-10 flex flex-col justify-center items-center">
                <div className="flex flex-col w-full justify-start items-center">
                  <div className="text-2xl font-semibold text-black my-3">
                    {selectedPerson.about}
                  </div>
                  <div className="flex flex-col lg:flex-row gap-10 w-full justify-center items-center my-3">
                    {selectedPerson.about_details.map((item, index) => (
                      <div className="w-full text-secondary text-xl opacity-75" key={index}>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className=" flex gap-5 justify-start w-full items-center mt-10">
                  <h1 className="text-[16px] md:text-xl font-semibold ">Where to find?</h1>
                  <ul className="flex gap-3 text-secondary text-xl ">
                    {selectedPerson.contact.map((Item, index) => (
                      <li
                        key={index}
                        className="hover:text-primary cursor-pointer"
                      >
                        <Link href={Item.link}>
                          <Item.icon />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Add more details as needed */}
          </div>
          <form method="dialog" className="modal-backdrop ">
            <button className=" cursor-default">close</button>
          </form>
        </dialog>
      )}
    </div>
  );
};

export default Story_model;
