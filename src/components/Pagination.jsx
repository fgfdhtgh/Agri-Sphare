import React from 'react'

function Pagination() {
    return (
        <div className="flex justify-center items-center space-x-2 mt-6">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-300 ${
            currentPage === page
              ? 'bg-green-600 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100 border'
          }`}
        >
          {page}
        </button>
      ))}
    </div>
    )
}

export default Pagination
