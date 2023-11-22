import React from 'react'
import { useState } from 'react';

const Tabs = (props) => {
  const [tabData] = useState([
    {label:'Tab 1', content:'"We suffer more often in imagination than in reality."'},
    {label:'Tab 2', content:'"The only wealth which you will keep forever is the wealth you have given away."'},
    {label:'Tab 3', content:'"You have power over your mind – not outside events. Realize this, and you will find strength."'}
  ])
  const [activeTab, setActiveTab] = useState(0)

  const clickHandler = (e, index) => {
    setActiveTab(index)
  };

  return (
     <div>
    <div className='mt-5 d-flex flex-row'>
      {tabData.map((tab, idx) => (
          <label className='p-2 ps-5 pe-5 d-flex text-center border' onClick={(e) => clickHandler(e, idx)}
            style={{ backgroundColor: idx === activeTab ? 'black' : 'white', color: idx === activeTab ? 'white' : 'black' }}>
            {tab.label}
          </label>
      ))}
        </div>
       <div>
        <p className='p-2 lead border shadow-sm' style={{height:'150px', width:'405.5px' }}>
          {tabData[activeTab].content}
       </p>
       </div>
      </div>
  )
}

export default Tabs

// conditional in loop
//     <div className='border border-1 m-5 d-flex flex-row'>
//       {tabData.map((tab, idx) => (
//         <div className=''>
//           <label className='p-2 ps-5 pe-5 d-flex text-center' onClick={(e) => clickHandler(e, idx)}
//             style={{ backgroundColor: idx === activeTab ? 'black' : 'white', color: idx === activeTab ? 'white' : 'black' }}>
//             {tab.label}
//           </label>
//           {idx === activeTab && (
//             <p className='p-2 lead border' style={{ position: 'absolute', right:'1000px'}}>
//               {tab.content}
//             </p>
//           )}
//         </div>
//       ))}
//     </div>

