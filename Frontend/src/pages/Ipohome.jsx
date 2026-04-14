import React, {useState} from 'react';
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from '@/components/dashboard/AppSidebar';
import Topbar from '@/components/dashboard/Topbar';

const Ipohome = () => {

  const [companyName, setCompanyName] = useState('Vodafone Idea');
  const [priceBand, setPriceBand] = useState('Not Issued');
  const [openDate, setOpenDate] = useState('Not Issued');
  const [closeDate, setCloseDate] = useState('Not Issued');
  const [issueSize, setIssueSize] = useState('2300 Cr.');
  const [issueType, setIssueType] = useState('Not Issued');
  const [listingDateInitial, setListingDateInitial] = useState('Not Issued');
  const [status, setStatus] = useState('Not Issued');
  const [ipoPrice, setIpoPrice] = useState('₹ 383');
  const [listingPrice, setListingPrice] = useState('₹ 435');
  const [listingGain, setListingGain] = useState('13.58 %');
  const [listingDateActual, setListingDateActual] = useState('2024-05-30');
  const [cmp, setCmp] = useState('₹ 410');
  const [currentReturn, setCurrentReturn] = useState('7.05 %');
  const [rhpLink, setRhpLink] = useState(''); // This input is editable
  const [drhpLink, setDrhpLink] = useState(''); // This input is editable

  return (
    <>
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <SidebarInset className="flex-1">
          <Topbar />
      <script src="https://cdn.tailwindcss.com"></script>
      <div className="flex min-h-screen bg-gray-100 font-sans antialiased">

        {/* Main Content */}
        <main className="flex-1 flex flex-col p-4">

          {/* Upcoming IPO Information Section */}
          <section className="bg-white p-6 rounded-lg shadow-sm flex-1">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 mb-6 border-b border-gray-200">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Upcoming IPO Information</h2>
                <p className="text-gray-500 text-sm">Manage your IPO Details</p>
              </div>
              <div className="flex mt-4 md:mt-0 space-x-3">
                <button className="px-6 py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-md">Register</button>
                <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md font-semibold hover:bg-gray-300 transition-colors duration-200 border border-gray-300">Cancel</button>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex flex-row justify-around ">
              {/* Tabs */}
              <div className="flex border-r mr-20 border-gray-200 flex-col justify-start w-fit">
                <button className="py-2 px-4 text-blue-600 font-semibold border-b-2 border-blue-600 focus:outline-blue-200">IPO Information</button>
                <button className="py-2 px-4 text-gray-600 font-semibold hover:text-blue-600 focus:outline-none">IPO Info</button>
              </div>

              {/* IPO Information Form */}
              <div className="space-y-6 ml-5 w-full">
                <h3 className="text-xl font-bold text-gray-800">IPO Information</h3>
                <p className="text-gray-500 text-sm mb-4">Enter IPO Details</p>

                {/* Company Logo Upload */}
                <div className="flex flex-row items-center space-y-4 md:space-y-0 md:space-x-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <label className="text-gray-700 font-semibold w-full md:w-auto">Company Logo</label>
                  <div className="flex items-center space-x-4 w-full md:w-auto">
                    <img src="https://placehold.co/50x50/e0e0e0/333333?text=Logo" alt="Company Logo" className="w-12 h-12 rounded-lg object-cover border border-gray-300" />
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800">NSE India</p>
                      <p className="text-gray-500 text-sm">Tech Lead</p>
                      <p className="text-gray-500 text-sm">Pune</p>
                    </div>
                  </div>
                  <div className="flex space-x-3 ml-auto w-full md:w-auto justify-end md:justify-start">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600 transition-colors duration-200">Upload Logo</button>
                    <button className="px-4 py-2 bg-red-500 text-white rounded-md text-sm hover:bg-red-600 transition-colors duration-200">Delete</button>
                  </div>
                </div>

                {/* Form Rows */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Company Name */}
                  <div>
                    <label htmlFor="companyName" className="block text-gray-700 font-semibold mb-2">Company Name</label>
                    <input type="text" id="companyName" value="Vodafone Idea" readOnly className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700" />
                  </div>
                  {/* Price Band */}
                  <div>
                    <label htmlFor="priceBand" className="block text-gray-700 font-semibold mb-2">Price Band</label>
                    <input type="text" id="priceBand" value="Not Issued" readOnly className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700" />
                  </div>
                  {/* Open */}
                  <div>
                    <label htmlFor="open" className="block text-gray-700 font-semibold mb-2">Open</label>
                    <input type="text" id="open" value="Not Issued" readOnly className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700" />
                  </div>
                  {/* Close */}
                  <div>
                    <label htmlFor="close" className="block text-gray-700 font-semibold mb-2">Close</label>
                    <input type="text" id="close" value="Not Issued" readOnly className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700" />
                  </div>
                  {/* Issue Size */}
                  <div>
                    <label htmlFor="issueSize" className="block text-gray-700 font-semibold mb-2">Issue Size</label>
                    <input type="text" id="issueSize" value="2300 Cr." readOnly className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700" />
                  </div>
                  {/* Issue Type */}
                  <div>
                    <label htmlFor="issueType" className="block text-gray-700 font-semibold mb-2">Issue Type</label>
                    <select id="issueType" value="Not Issued" readOnly className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700 appearance-none pr-8">
                      <option>Not Issued</option>
                    </select>
                  </div>
                  {/* Listing Date (Initial) */}
                  <div>
                    <label htmlFor="listingDateInitial" className="block text-gray-700 font-semibold mb-2">LISTING DATE</label>
                    <input type="date" id="listingDateInitial" value="Not Issued" readOnly className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700" />
                  </div>
                  {/* Status */}
                  <div>
                    <label htmlFor="status" className="block text-gray-700 font-semibold mb-2">Status</label>
                    <select id="status" value="Not Issued" readOnly className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700 appearance-none pr-8">
                      <option>Not Issued</option>
                    </select>
                  </div>
                </div>

                <h4 className="text-lg font-bold text-gray-800 mt-6 mb-4">NEW LISTED IPO DETAILS (WHEN IPO GET LISTED)</h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* IPO Price */}
                  <div>
                    <label htmlFor="ipoPrice" className="block text-gray-700 font-semibold mb-2">IPO PRICE</label>
                    <input type="text" id="ipoPrice" value="₹ 383" readOnly className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700" />
                  </div>
                  {/* Listing Price */}
                  <div>
                    <label htmlFor="listingPrice" className="block text-gray-700 font-semibold mb-2">LISTING PRICE</label>
                    <input type="text" id="listingPrice" value="₹ 435" readOnly className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700" />
                  </div>
                  {/* Listing Gain */}
                  <div>
                    <label htmlFor="listingGain" className="block text-gray-700 font-semibold mb-2">LISTING GAIN</label>
                    <input type="text" id="listingGain" value="13.58 %" readOnly className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700" />
                  </div>
                  {/* Listing Date (Actual) */}
                  <div>
                    <label htmlFor="listingDateActual" className="block text-gray-700 font-semibold mb-2">LISTING DATE</label>
                    <input type="text" id="listingDateActual" value="2024-05-30" readOnly className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700" />
                  </div>
                  {/* CMP */}
                  <div>
                    <label htmlFor="cmp" className="block text-gray-700 font-semibold mb-2">CMP</label>
                    <input type="text" id="cmp" value="₹ 410" readOnly className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700" />
                  </div>
                  {/* Current Return */}
                  <div>
                    <label htmlFor="currentReturn" className="block text-gray-700 font-semibold mb-2">CURRENT RETURN</label>
                    <input type="text" id="currentReturn" value="7.05 %" readOnly className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700" />
                  </div>
                  {/* RHP */}
                  <div>
                    <label htmlFor="rhp" className="block text-gray-700 font-semibold mb-2">RHP</label>
                    <input type="text" id="rhp" placeholder="Enter RHP PDF Link" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  {/* DRHP */}
                  <div>
                    <label htmlFor="drhp" className="block text-gray-700 font-semibold mb-2">DRHP</label>
                    <input type="text" id="drhp" placeholder="Enter DRHP PDF Link" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
         
      </div>
      </SidebarInset>
      </div>
    </SidebarProvider>
    </>
  );
};

export default Ipohome;