import React, { useState } from 'react'
import MetaData from './MetaData.json'


export default function App() {
const[fileType, setFileType] = useState ('')
const [selectedRecord, setSelectedRecord] = useState('')

const fileTypeName = () =>{
  for (let i=0; i<MetaData.length; i++){
    if (MetaData[i].type === fileType){
      return MetaData[i].files
    }
  }
  return[]
}


return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <form className="bg-gray-200 rounded-xl shadow-md w-full max-w-6xl p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Record Type 
              </label>
              <select
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" 
                value={fileType} 
                onChange={e => {
                  setFileType(e.target.value);
                  setSelectedRecord('');
                }}>
                <option value="" disabled>Select File Type</option>
                {MetaData
                  .map(item => (
                    <option key={item.type} value={item.type}>
                      {item.type}
                    </option>
                  ))
                }
              </select>
          </div>

          {/* select record */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Record 
            </label>
            <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
              value={selectedRecord}
              onChange={e => setSelectedRecord(e.target.value)}
              disabled={!fileType}>

              <option value="">Select a record</option>
              {fileTypeName().map(file => (
                <option key={file} value={file}>{file}</option>
              ))}
            </select>
          </div>

          {/* date and time */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message Date & Time
            </label>
            <input type="datetime-local" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"/>
          </div>
        </div>

        {/* additional info */}
        <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
          <div className="font-semibold text-lg text-gray-700 mb-4">
            Additional Information
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* team members */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Team Members
              </label>
              <input type="text" placeholder="Enter team member names" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"/>
            </div>

            {/* customer feedback */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Customer Feedback
              </label>
              <select
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200">
                <option value="">Select feedback</option>  
              </select>
            </div>

            {/* next visit */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Next Visit
              </label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" />
            </div>
          </div>

          {/* Checklist */}
          <div className="mt-6">
            <div className="font-medium text-gray-700 mb-2">
              Inspection Checklist
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-2 gap-x-4">
              <label className="flex items-center space-x-2">
                <input type="checkbox" />
                <span>Panel Cleaned</span>
              </label>

              <label className="flex items-center space-x-2">
                <input type="checkbox" />
                <span>Panel Board Safety</span>
              </label>

              <label className="flex items-center space-x-2">
                <input type="checkbox" />
                <span>Water Leaks</span>
              </label>

              <label className="flex items-center space-x-2">
                <input type="checkbox" />
                <span>Wire Terminals</span>
              </label>

              <label className="flex items-center space-x-2">
                <input type="checkbox" />
                <span>Safety Labels</span>
              </label>

              <label className="flex items-center space-x-2">
                <input type="checkbox" />
                <span>Earthing</span>
              </label>

              <label className="flex items-center space-x-2">
                <input type="checkbox"/>
                <span>SPD</span>
              </label>

              <label className="flex items-center space-x-2">
                <input type="checkbox"/>
                <span>Customer Awareness</span>
              </label>

              <label className="flex items-center space-x-2">
                <input type="checkbox"/>
                <span>Photos Taken and Shared</span>
              </label>

            </div>
          </div>
        </div>

        {/* message */}
        <div>
          <div className="block text-sm font-medium text-gray-700 mb-1">
            Message 
          </div>
          <textarea placeholder="Enter your journal message" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 resize-none"/>
          <div className="text-right text-xs text-gray-400 mt-1"> 
          </div>
        </div>
      </form>
    </div>
  );
}
