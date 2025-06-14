import React from 'react';
import { Table } from "flowbite-react";     
import { TableHead, TableBody, TableCell, TableRow, TableHeadCell } from "flowbite-react";
import { Label, TextInput } from "flowbite-react";
import { Button } from "flowbite-react";







function EnquiryTable() {
  return (
     <div className='bg-gray-100 p-4'>
            <h2 className='text-[20px] font-bold mb-2'>Enquiry Details</h2>
            <div className="overflow-x-auto">
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>Sr.No.</TableHeadCell>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Email</TableHeadCell>
            <TableHeadCell>Phone No.</TableHeadCell>
            <TableHeadCell>Message</TableHeadCell>
            <TableHeadCell>
              Edit
            </TableHeadCell>
             <TableHeadCell>
             Delete
            </TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody className="divide-y">
          <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              1
            </TableCell>
            <TableCell>Ishita</TableCell>
            <TableCell>singhishita@gmail.com</TableCell>
            <TableCell>1234567890</TableCell>
            <TableCell>Hello</TableCell>
            <TableCell>
              <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                Edit
              </a>

            </TableCell>
            <TableCell>
               <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                Delete
              </a>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
         

        </div>
    );
}
export default EnquiryTable;