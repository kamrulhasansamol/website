import Link from "next/link";

export default function Home() {
  return (
    <div style={{textAlign:"center",marginTop:"100px"}}>
      <h1>🔥 Free Fire Likes Service</h1>
      <h2>1 Month - 1 UID</h2>
      <h3>Price: 50 BDT</h3>
      <Link href="/order">
        <button style={{padding:"10px 20px",fontSize:"18px"}}>Buy Now</button>
      </Link>
    </div>
  );
}
