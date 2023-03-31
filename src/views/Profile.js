import React from 'react'

const Profile = () => {
  return (
    <div className='main w-8/12'>
      <div className="profile rounded-3xl">
      <div className="p-16 rounded-3xl">
<div className="p-8 bg-white shadow mt-24 rounded-3xl">
  <div className="pro-sec grid grid-cols-3">
    
    <div className=" relative">
      <div className=" w-48 h-48 bg-indigo-100 m-auto rounded-full shadow-2xl -mt-24 flex items-center justify-center text-indigo-500">
<svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
</svg>
      </div>
    </div>
    <div className="mx-auto mt-4 grid grid-cols-3 text-center">
      <div>
        <p className="font-bold text-gray-700 ">22</p>
        <p className="text-gray-400 ">Friends</p>
      </div>
      <div>
           <p className="font-bold text-gray-700 ">10</p>
        <p className="text-gray-400 ">Photos</p>
      </div>
          <div>
           <p className="font-bold text-gray-700 ">89</p>
        <p className="text-gray-400 ">Comments</p>
      </div>
    </div>
    <div className="m-8 space-x-8 flex justify-between m-auto md:justify-center">
<button
  className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
>
  Connect
</button>
    <button
  className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
>
  Message
</button>
    </div>
  </div>

  <div className="mt-8 text-center border-b pb-12">
    <h1 className="text-4xl font-medium text-gray-700">Murali, <span className="font-light text-gray-500">20</span></h1>
    <p className="font-light text-gray-600 mt-3">AndhraPradesh, Inida</p>

    <p className="mt-8 text-gray-500">Web Developer</p>
    <p className="mt-2 text-gray-500">University of Computer Science</p>
  </div>

  <div className="mt-12 flex flex-col justify-center">
    <p className="text-gray-600 text-center font-light lg:px-16">An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.</p>
    <button
  className="text-indigo-500 py-2 px-4  font-medium mt-4"
>
  Show more
</button>
  </div>

</div>
</div>
      </div>
    </div>
  )
}

export default Profile
