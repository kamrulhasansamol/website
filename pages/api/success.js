import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Success(){
  const router = useRouter();
  const [trxId,setTrxId] = useState("");
  const [status,setStatus] = useState("");

  useEffect(()=>{
    const { trx_id, status } = router.query;
    if(trx_id) setTrxId(trx_id);
    if(status) setStatus(status);
  },[router.query]);

  return(
    <div style={{textAlign:"center",marginTop:"100px"}}>
      <h1>{status==="success"?"✅ Payment Successful":"❌ Payment Failed"}</h1>
      <p>Transaction ID: {trxId||"N/A"}</p>
      <p>Your likes will start soon.</p>
    </div>
  );
}
