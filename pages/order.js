import { useState } from "react";
export default function Order() {
  const [uid,setUid] = useState("");
  const pay = async () => {
    if(!uid){ alert("Please enter your UID"); return; }
    const res = await fetch("/api/create-payment",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({uid})
    });
    const data = await res.json();
    window.location.href = data.payment_url;
  }
  return (
    <div style={{textAlign:"center",marginTop:"100px"}}>
      <h2>Enter Your Free Fire UID</h2>
      <input
        value={uid}
        onChange={(e)=>setUid(e.target.value)}
        placeholder="Free Fire UID"
        style={{padding:"5px", fontSize:"16px"}}
      />
      <br/><br/>
      <button onClick={pay} style={{padding:"10px 20px", fontSize:"16px"}}>Proceed To Payment</button>
    </div>
  );
}