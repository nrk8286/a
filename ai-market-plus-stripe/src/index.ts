async function handleCheckout() {
  const stripeSecret = "sk_test_your_secret_key"; // Replace with your real Stripe secret key
  const stripeUrl = "https://api.stripe.com/v1/checkout/sessions";

  const formBody = new URLSearchParams();
  formBody.append("payment_method_types[]", "card");
  formBody.append("line_items[0][price_data][currency]", "usd");
  formBody.append("line_items[0][price_data][product_data][name]", "AI Toolkit");
  formBody.append("line_items[0][price_data][unit_amount]", "2900");
  formBody.append("line_items[0][quantity]", "1");
  formBody.append("mode", "payment");
  formBody.append("success_url", "https://yourdomain.com/success");
  formBody.append("cancel_url", "https://yourdomain.com/cancel");

  const response = await fetch(stripeUrl, {
    method: "POST",
    headers: {
      "Authorization": "Bearer " + stripeSecret,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: formBody.toString()
  });

  const data = await response.json();
  return new Response(JSON.stringify({ id: data.id }), {
    headers: { "Content-Type": "application/json" }
  });
}

export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === "/" || url.pathname === "/index.html") {
      const html = await fetch("https://raw.githubusercontent.com/cloudflare/templates/main/index.html").then(r => r.text());
      return new Response(html, { headers: { "Content-Type": "text/html" } });
    }
    if (url.pathname === "/subscribe" && request.method === "POST") {
      const formData = await request.formData();
      const email = formData.get("email");
      console.log("New subscriber:", email);
      return new Response("Thanks for subscribing!", { status: 200 });
    }
    if (url.pathname === "/create-checkout-session" && request.method === "POST") {
      return await handleCheckout();
    }
    return new Response("Not Found", { status: 404 });
  }
}
