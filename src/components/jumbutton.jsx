import React  from 'react'

const Jumbutton = ({ children }) => {
  return (
     <div className="bg-gray-900 flex items-center py-10">
        <div className="max-w-md m-auto w-full">
            <h1 className="text-white text-center text-2xl font-bold mb-5">
                Find Image
            </h1>
             {children}
        </div>
     </div>
  )
}

export default Jumbutton
