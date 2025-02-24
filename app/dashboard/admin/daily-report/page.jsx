// "use client";

// import { getDailyVisitReports } from "@/api/file_action";
// import { useState, useEffect } from "react";
// import { useUserState } from "../../store";

// export default function DailyVisitTable() {
//   const userState = useUserState();
//   const [reports, setReports] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchReports = async () => {
//     setLoading(true);
//     try {
//       const token = await userState.user.getIdToken();
//       const result = await getDailyVisitReports(token);
//       // const res=JSON?.parse(result)
//       console.log(JSON?.parse(result?.reports));

//       if (result?.success) {
//         setReports(JSON?.parse(result?.reports));
//       }
//     } catch (error) {
//       console.error("Error fetching reports:", error);
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchReports();
//   }, []);

//   return (
//     <div className="mt-8 p-6">
//       <h2 className="text-xl font-semibold mb-4">Submitted Reports</h2>
//       {loading ? (
//         <p>Loading reports...</p>
//       ) : (
//         <div className="overflow-x-auto rounded-xl border">
//           <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-xl">
//             <thead>
//               <tr className="bg-gray-100 border-b">
//                 <th className="px-4 py-2">Customer</th>
//                 <th className="px-4 py-2">Loan Type</th>
//                 <th className="px-4 py-2">Visit Purpose</th>
//                 <th className="px-4 py-2">Outcome</th>
//                 <th className="px-4 py-2">Follow-Up Date</th>
//               </tr>
//             </thead>
//             <tbody>
//               {
//                 [...Object.keys(reports)]?.map((key) => (
//                   <tr key={key} className="border-b">
//                     <td className="px-4 py-2">{reports[key]?.customerName}</td>
//                     <td className="px-4 py-2">{reports[key].loanType}</td>
//                     <td className="px-4 py-2">{reports[key].visitPurpose}</td>
//                     <td className="px-4 py-2">{reports[key].outcome}</td>
//                     <td className="px-4 py-2">{reports[key].followUpDate}</td>
//                   </tr>
//                 ))
//               }
//               {/* {reports.length > 0 ? ( */}

//               {/* ) */}
//               {/* : (
//                 <tr>
//                   <td colSpan="5" className="text-center py-4">No reports found.</td>
//                 </tr>
//               )} */}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }















"use client";

import { getDailyVisitReports } from "@/api/file_action";
import { useState, useEffect } from "react";
import { useUserState } from "../../store";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function DailyVisitTable() {
  const userState = useUserState();
  const [reports, setReports] = useState();
  const [loading, setLoading] = useState(true);
  console.log(reports);

  // Fetch Reports
  const fetchReports = async () => {
    setLoading(true);
    try {
      const token = await userState.user.getIdToken();
      const result = await getDailyVisitReports(token);
      if (result?.success) {
        setReports(JSON.parse(result.reports));
      } else {
        setReports(null);
      }
    } catch (error) {
      console.error("Error fetching reports:", error);
      setReports(null);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchReports();
  }, []);

  return (
    <div className="mt-8 p-6">
      <h2 className="text-xl font-semibold mb-4">Submitted Reports</h2>
      {loading ? (
        <p>Loading reports...</p>
      ) : reports ? (
        <div className="overflow-x-auto rounded-xl border">
          <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-xl">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="px-2 py-2 text-sm">Customer Name</th>
                <th className="px-2 py-2 text-sm">Contact Number</th>
                <th className="px-2 py-2 text-sm">WhatsApp</th>
                <th className="px-2 py-2 text-sm">Email</th>
                <th className="px-2 py-2 text-sm">Product Type</th>
                <th className="px-2 py-2 text-sm">Next Meeting Date</th>
                <th className="px-2 py-2 text-sm">Remarks</th>
                <th className="px-2 py-2 text-sm">Submitted On</th>
              </tr>
            </thead>
            <tbody>
              {
                [...Object.keys(reports)]?.map((key) => {
                  console.log(key);

                  return (
                    <tr key={key} className="border-b">
                      <td className="px-2 py-2 text-sm">{reports[key]?.customerName || "-"}</td>
                      <td className="px-2 py-2 text-sm">{reports[key]?.contactNumber || "-"}</td>
                      <td className="px-2 py-2 text-sm">{reports[key]?.whatsappNumber || "-"}</td>
                      <td className="px-2 py-2 text-sm">{reports[key]?.email || "-"}</td>
                      <td className="px-2 py-2 text-sm">{reports[key]?.productType || "-"}</td>
                      <td className="px-2 py-2 text-sm">{reports[key]?.nextMeetingDate || "-"}</td>
                      <td className="px-2 py-2 text-sm">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild className="cursor-grab">
                              <span className="line-clamp-1">{reports[key]?.remarks || "-"}</span>
                            </TooltipTrigger>
                            <TooltipContent>
                              {reports[key]?.remarks || "-"}
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </td>
                      <td className="px-2 py-2 text-sm">{reports[key]?.formSubmitDate || "-"}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center py-4">No reports found.</p>
      )}
    </div>
  );
}

