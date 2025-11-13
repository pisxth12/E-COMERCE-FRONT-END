import React from 'react'

const Products = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Products</h1>
          <p className="text-gray-600 mt-1">Manage your product catalog</p>
        </div>
        <button className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg font-medium transition-colors mt-4 sm:mt-0">
          Add Product
        </button>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Product List</h3>
        <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
          <p className="text-gray-500">Products will be listed here</p>
        </div>
      </div>
    </div>
  )
}

export default Products