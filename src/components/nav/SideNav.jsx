import React from "react";
import {
  BsQuestion,
  BsBag,
  BsTag,
  BsBookmark,
  BsInboxFill,
} from "react-icons/bs";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { HiOutlineDocumentText, HiOutlineSpeakerphone } from "react-icons/hi";
import { FaRegUser, FaStackExchange } from "react-icons/fa";
import logo from "../../assets/logo.svg";

const SideNav = () => {
  return (
    <>
      <div className="w-1/6  ">
        <aside className="shadow-2xl h-full ">
          <img src={logo} alt="l" className="mx-auto mb-12 pt-6" />
          <MdOutlineKeyboardArrowLeft className="float-right border-t-2 border-b-2 border-l-2  w-6  rounded-l-xl mb-2" />
          <nav>
            <ul className="pt-4 ">
              <li>
                <a
                  href="#"
                  className="flex focus:border-l-2 focus:border-orange-500  pl-6 text-gray-400 items-center"
                >
                  <BsQuestion className="focus:border-orange-500" />
                  <p className="ml-6 focus:text-black">QUESTION</p>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex focus:border-l-2 focus:border-orange-500 my-2 pl-6 text-gray-400 items-center"
                >
                  <BsBag className="focus:border-orange-500" />
                  <p className="ml-6 focus:text-black">JOBS</p>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex focus:border-l-2 focus:border-orange-500 my-2 pl-6 text-gray-400   items-center"
                >
                  <HiOutlineDocumentText />
                  <p className="ml-6">DOCUMENTATION</p>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex focus:border-l-2 focus:border-orange-500 my-2 pl-6 text-gray-400 items-center"
                >
                  <BsTag className="focus:border-orange-500" />
                  <p className="ml-6 focus:text-black">TAGS</p>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex focus:border-l-2 focus:border-orange-500 my-2 pl-6 text-gray-400 items-center"
                >
                  <FaRegUser className="focus:border-orange-500" />
                  <p className="ml-6 focus:text-black">USERS</p>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex focus:border-l-2 focus:border-orange-500 my-2 pl-6 text-gray-400 items-center"
                >
                  <BsBookmark className="focus:border-orange-500" />
                  <p className="ml-6 focus:text-black">BADGES</p>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex focus:border-l-2 focus:border-orange-500 my-2 pl-6 text-gray-400 items-center"
                >
                  <HiOutlineSpeakerphone className="focus:border-orange-500" />
                  <p className="ml-6 focus:text-black">ASK QUESTION</p>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex focus:border-l-2 focus:border-orange-500  my-2 pl-6 text-gray-400 items-center"
                >
                  <FaStackExchange className="focus:border-orange-500" />
                  <p className="ml-6 focus:text-black">STACK EXCHANGE</p>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex focus:border-l-2 focus:border-orange-500 my-2 pl-6 text-gray-400 items-center"
                >
                  <BsInboxFill className="focus:border-orange-500" />
                  <p className="ml-6 focus:text-black">INBOX</p>
                </a>
              </li>
            </ul>
          </nav>
        </aside>
      </div>
    </>
  );
};

export default SideNav;
