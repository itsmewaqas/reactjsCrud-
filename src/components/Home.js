import React, { useState, useEffect } from 'react';

function Home() {

  useEffect((props) => {
  }, [])


  return (
    <div className='container'>
      Welcome...
    </div>
  );
}

export default Home;





// import { useState } from "react";

// export default function Home() {
//   const [giftCard, setGiftCard] = useState(
//     {
//         firstName: "Jennifer",
//         lastName: "Smith",
//         text: "Free dinner for 4 guests",
//         valid: true,
//         instructions: "To use your coupon, click the button below.",
//     }
//   );

//   function spendGiftCard() {

//   }

//   return (
//     <div style={{padding: '40px'}}>
//       <h1>
//         Gift Card Page
//       </h1>
//       <h2>
//         Customer: {giftCard.firstName} {giftCard.lastName}
//       </h2>
//       <h3>
//         {giftCard.text}
//       </h3>
//       <p>
//         {giftCard.instructions}
//       </p>
//       {
//         giftCard.valid && (
//           <button onClick={spendGiftCard}>
//             Spend Gift Card
//           </button>
//         )
//       }
//     </div>
//   );
// }






// import { useState, useEffect, useRef } from "react";
// export default function Home() {
//   const [day, setDay] = useState("Monday");
//   const prevDay = usePrevious(day);
//   const getNextDay = () => {
//     if (day === "Monday") {
//       setDay("Tuesday")
//     } else if (day === "Tuesday") {
//       setDay("Wednesday")
//     } else if (day === "Wednesday") {
//       setDay("Thursday")
//     } else if (day === "Thursday") {
//       setDay("Friday")
//     } else if (day === "Friday") {
//       setDay("Monday")
//     }
//   }
//   return (
//     <div style={{padding: "40px"}}>
//       <h1>
//         Today is: {day}<br />
//         {
//           prevDay && (
//             <span>Previous work day was: {prevDay}</span>
//           )
//         }
//       </h1>
//       <button onClick={getNextDay}>
//         Get next day
//       </button>
//     </div>
//   );
// }
// function usePrevious(val) {
//   const ref = useRef();
//   useEffect(() => {
//     ref.current = val;
//   }, [val]);
//   return ref.current;
// }
