import fetch from "node-fetch";

// Telegram bot info
const TELEGRAM_BOT_TOKEN = "8317702406:AAGWrpiN9WThAKFLNP2BaAT5AgDNY0c8yzU";
const TELEGRAM_CHAT_ID = "6262468884";

export default async function handler(req,res){
  if(req.method !== "POST") return res.status(405).send("Method Not Allowed");

  const { trx_id, status, metadata, amount } = req.body;

  if(status === "success"){
    // Get UID from metadata (if your ZiniPay link supports metadata)
    let uid = metadata?.uid || "UID not provided";

    // Optional: fallback from localStorage (if webhook doesn't get metadata)
    // You may need to implement server session to map user to UID

    const msg = `🔥 New Order Received 🔥\nUID: ${uid}\nAmount: ${amount} BDT\nTransaction ID: ${trx_id}`;

    try{
      await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: msg
        })
      });
    }catch(e){
      console.error("Telegram send error:", e);
    }

    // Optional: save order in database here
  }

  res.status(200).send("OK");
}
