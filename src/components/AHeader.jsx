import React from 'react'

export default function AHeader() {

  return (
    <div>
    <header className="bg-white mb-{3px} mb-16 fixed w-full z-20 pt-5 pb-3">

      <nav class="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">


      <img class="h-14 w-auto" src="/logo-w.png" alt="" />

        <div class="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5">


        <ul class="flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0" >


                <li>
                    <a href='/#CPathAndProgrammes' class="block py-2 pl-3 pr-4 font-lg text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#dea6a0] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Programs and Learning Path</a>
                </li>

                <li>
                    <a href='/#DTextResources' class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#dea6a0] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Learning Tips</a>
                </li>

                <li>
                    <a href="/#ESignUpOrLogin" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#dea6a0] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Join Events</a>
                </li>

                <li>
                    <a href="/#FContactMe" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#dea6a0] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Contact Me</a>
                </li>
        </ul>
          </div>
      </nav>
    </header>


    

    <div class="flex justify-center items-center pt-12"> 
    <img class="max-w-full rounded-lg mt-20" src='/welcome2.png' />

    </div>
    </div>
  );

}




