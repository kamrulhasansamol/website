import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export default function Success(){
  const router = useRouter();
  const [trxId,setTrxId] = useState("");
  useEffect(()=>{
    if(router.query){ setTrxId(router.query.trx_id || "N/A"); }
  },[router.query]);
  return(
    <div style={{textAlign:"center",marginTop:"100px"}}>
      <h1>✅ Payment Successful</h1>
      <p>Transaction ID: {trxId}</p>
      <p>Your likes will start soon.</p>
    </div>
  );
}