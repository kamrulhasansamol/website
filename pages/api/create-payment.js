export default async function handler(req,res){
  const { uid } = req.body;
  try {
    const response = await fetch("https://api.zinipay.com/v1/payment/create",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "Authorization":"Bearer YOUR_ZINIPAY_API_KEY"
      },
      body:JSON.stringify({
        amount: 50,
        currency: "BDT",
        metadata: { uid },
        redirect_url: "https://yourdomain.vercel.app/success",
        cancel_url: "https://yourdomain.vercel.app"
      })
    });
    const data = await response.json();
    res.status(200).json({ payment_url: data.payment_url });
  } catch (err) {
    res.status(500).json({ error: "Payment creation failed" });
  }
}