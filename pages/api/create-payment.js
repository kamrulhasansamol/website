export default async function handler(req,res){
  const { uid } = req.body;
  try {
    const response = await fetch("https://api.zinipay.com/v1/payment/create",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "Authorization":"Bearer 318d94ca6dd65f7ecf7ef6c30ea41b71df7447afe73aae94"
      },
      body:JSON.stringify({
        amount: 50,
        currency: "BDT",
        metadata: { uid },
        redirect_url: "https://website-henna-theta-59.vercel.app/success",
        cancel_url: "https://website-henna-theta-59.vercel.app"
      })
    });
    const data = await response.json();
    res.status(200).json({ payment_url: data.payment_url });
  } catch (err) {
    res.status(500).json({ error: "Payment creation failed" });
  }

}

