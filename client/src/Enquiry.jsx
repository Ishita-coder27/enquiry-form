import React from 'react';
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Table } from "flowbite-react";
import { TableHead, TableBody, TableCell, TableRow, TableHeadCell } from "flowbite-react";
import EnquiryTable from './enquiry/EnquiryTable.jsx';




export default function Enquiry() {

let saveEnquiry = (e) => {
    alert("Enquiry saved successfully!");
    e.preventDefault();
}





  return (
    <div>
      <h1 className='text-[50px] text-center py-6 font-bold'>User Enquiry</h1>

      <div className='grid grid-cols-[30%_auto] gap-10 p-4'>
        <div className='bg-gray-100 p-4'>
          <h2 className='text-[20px] font-bold'>Enquiry Form</h2>

          <form action="" onSubmit={saveEnquiry} className='py-3'>
            <div className='py-3'>
             <Label htmlFor="name" className="!text-black font-medium">
            Your Name
             </Label>

                <TextInput
                       name="name"
                       type="text"
                    placeholder="Enter your name"
                        required
                     className="!placeholder-gray-400"
                       /> </div>

            <div className='py-3'>
              <Label htmlFor="email" className="!text-black font-medium">
                Your Email
              </Label>
              <TextInput
                name="email"
                type="email"
                placeholder="Enter your email"
                required
                className="!placeholder-gray-400"
              />
              </div>

            <div className='py-3'>
              <Label htmlFor="phone" className="!text-black font-medium">
                Your Phone Number
              </Label>
              <TextInput
                name="phone"
                type="text"
                placeholder="Enter your phone number"
                required
                className="!placeholder-gray-400"
              />
              </div>
            <div className='py-3'>
              <Label htmlFor="message" className="!text-black font-medium">
                 Your Message
                 <textarea
                name="message"
                rows="4"
                placeholder="Enter your message"
                required
                className="!placeholder-gray-400 w-full p-2 border border-gray-300 rounded"
                ></textarea>
                </Label>
              
              </div>
            <div className='py-3'>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors w-100% disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Save
                </button>
            </div>


          </form>
        </div>
       
<EnquiryTable />

      </div>
    </div>
  );
}


