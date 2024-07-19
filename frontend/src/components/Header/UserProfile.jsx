import React from 'react';

const UserProfile = () => {
  return (
    <div className="fixed md:top-25 poppins top-20 right-0 rounded-l-2xl shadow-black/70 shadow-2xl font-regular text-gray-200 text-sm p-6 w-full max-w-md bg-[var(--opac2)] dark:bg-[var(--bg1lop)] backdrop-blur-2xl border-[1px] border-[var(--opac2)] dark:border-[var(--bg1lop)]">
      <div className="py-8 px-8 max-w-sm mx-auto rounded-xl shadow-black/40 shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 bg-[var(--bg5op)] dark:bg-[var(--bg1lop)] backdrop-blur-xl border-[1px] border-[var(--bg5op)] dark:border-[var(--bg1lop)]">
        {/* <img className="block mx-auto h-20 rounded-full sm:mx-0 sm:shrink-0" src="https://tailwindcss.com/img/erin-lindford.jpg" alt="Woman's Face"></img> */}
        <div className="flex justify-between items-center w-full">
          <div className="space-y-0.1 text-center sm:text-left">
            <p className="text-lg text-[var(--ltext)] font-medium">
              Name Surname
            </p>
            <p className="text-gray-100 font-regular">
              useremail@email.com
            </p>
          </div>
          <button className="px-4 py-1 border-red-500 border-[1px] text-sm text-red-500 hover:text-white px-2 py-1 mx-1 hover:border-white shadow-black/40 hover:shadow-black/40 shadow-lg hover:shadow-xl rounded-full">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
