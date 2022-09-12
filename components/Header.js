import Link from "next/link";
import React from "react";
// import resume from '../public/files/resume.pdf'

function Header() {
  return (
    <div className="mx-auto max-w-[90%] xs:pt-4 pt-4 flex flex-1 justify-between">
      <div className="flex xs:text-sm justify-center items-center text-xl">
        <Link href="/">Jakob Potosme</Link>
      </div>

      <div className=" flex flex-row gap-x-5 xs:text-sm  justify-center items-center ">
        <div>
          <Link href="/blog">Blog</Link>
        </div>

        <div>
          <Link href="resume.pdf">
            <button className="xs:p-1 p-2 border-[#00A789] hover:bg-[#007583]/30 border rounded-md ">
              Resume
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
