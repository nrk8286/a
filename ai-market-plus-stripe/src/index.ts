// Interface for environment variables
interface Env {
  STRIPE_SECRET_KEY?: string;
  STRIPE_PUBLIC_KEY?: string;
  SUCCESS_URL?: string;
  CANCEL_URL?: string;
}

async function handleCheckout(env: Env): Promise<Response> {
  const stripeSecret = env.STRIPE_SECRET_KEY;
  
  // Validate Stripe key is configured
  if (!stripeSecret) {
    return new Response(JSON.stringify({ error: "Stripe not configured" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }

  const stripeUrl = "https://api.stripe.com/v1/checkout/sessions";
  const successUrl = env.SUCCESS_URL || "https://yourdomain.com/success";
  const cancelUrl = env.CANCEL_URL || "https://yourdomain.com/cancel";

  // More efficient parameter building with object
  const params = {
    "payment_method_types[]": "card",
    "line_items[0][price_data][currency]": "usd",
    "line_items[0][price_data][product_data][name]": "AI Toolkit",
    "line_items[0][price_data][unit_amount]": "2900",
    "line_items[0][quantity]": "1",
    "mode": "payment",
    "success_url": successUrl,
    "cancel_url": cancelUrl
  };

  const formBody = new URLSearchParams(params);

  try {
    const response = await fetch(stripeUrl, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${stripeSecret}`,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: formBody.toString()
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Stripe API error:", errorText);
      return new Response(JSON.stringify({ error: "Payment session creation failed" }), {
        status: response.status,
        headers: { "Content-Type": "application/json" }
      });
    }

    const data = await response.json();
    return new Response(JSON.stringify({ id: data.id }), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Checkout error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}

// Email validation helper
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Read HTML file from public directory (cached at build time)
const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>AI Market Plus</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="https://js.stripe.com/v3/"></script>
  <link href="https://fonts.googleapis.com/css?family=Inter:400,700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Inter', Arial, sans-serif;
      background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
      margin: 0;
      padding: 0;
      color: #222;
    }
    .container {
      max-width: 420px;
      margin: 60px auto;
      background: #fff;
      border-radius: 18px;
      box-shadow: 0 8px 32px rgba(60,60,120,0.12);
      padding: 36px 32px 28px 32px;
      text-align: center;
    }
    .logo {
      width: 72px;
      margin-bottom: 18px;
    }
    .hero-img {
      width: 100%;
      max-width: 320px;
      margin: 0 auto 18px auto;
      border-radius: 12px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.07);
    }
    h1 {
      font-size: 2.1rem;
      margin-bottom: 10px;
      font-weight: 700;
      color: #2a2a6a;
    }
    .subtitle {
      font-size: 1.1rem;
      margin-bottom: 22px;
      color: #555;
    }
    form {
      margin-bottom: 18px;
      display: flex;
      gap: 8px;
      justify-content: center;
    }
    input[type="email"] {
      padding: 10px 12px;
      border: 1px solid #c3cfe2;
      border-radius: 6px;
      font-size: 1rem;
      flex: 1;
    }
    button, .stripe-btn {
      background: linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%);
      color: #fff;
      border: none;
      border-radius: 6px;
      padding: 12px 22px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.2s;
      box-shadow: 0 2px 8px rgba(100,100,200,0.08);
    }
    button:hover, .stripe-btn:hover {
      background: linear-gradient(90deg, #fc5c7d 0%, #6a82fb 100%);
    }
    .features {
      margin: 28px 0 18px 0;
      text-align: left;
    }
    .features li {
      margin-bottom: 8px;
      font-size: 1rem;
      list-style: none;
      padding-left: 0;
      position: relative;
    }
    .features li::before {
      content: "✔";
      color: #6a82fb;
      margin-right: 8px;
      font-size: 1.1em;
    }
    .testimonials {
      margin: 24px 0 0 0;
      font-size: 0.98rem;
      color: #444;
      font-style: italic;
    }
    .footer {
      margin-top: 38px;
      text-align: center;
      color: #888;
      font-size: 0.95rem;
    }
    @media (max-width: 600px) {
      .container {
        padding: 18px 6vw 18px 6vw;
      }
      .hero-img {
        max-width: 90vw;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <img class="logo" src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f916.svg" alt="AI Market Plus Logo" />
    <img class="hero-img" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="AI Tools" />
    <h1>AI Market Plus</h1>
    <div class="subtitle">Automate your hustle. Buy powerful AI tools now.</div>

    <form method="POST" action="/subscribe">
      <input type="email" name="email" placeholder="Enter your email" required />
      <button type="submit">Subscribe</button>
    </form>

    <ul class="features">
      <li>Instant access to premium AI tools</li>
      <li>One-click Stripe checkout</li>
      <li>Affiliate rewards for sharing</li>
      <li>Secure payments &amp; privacy-first</li>
    </ul>

    <div style="margin-top: 24px;">
      <button id="checkout-button" class="stripe-btn">Buy AI Toolkit – $29</button>
    </div>

    <div class="testimonials">
      <p>"The AI Toolkit saved me hours every week!"<br>– Alex, Indie Hacker</p>
      <p>"Super easy checkout and great support."<br>– Jamie, Marketer</p>
    </div>
  </div>
  <div class="footer">
    &copy; 2025 AI Market Plus &middot; <a href="mailto:support@yourdomain.com" style="color:#6a82fb;text-decoration:none;">Contact</a>
  </div>
  <script>
    document.getElementById('checkout-button').addEventListener('click', async () => {
      const res = await fetch('/create-checkout-session', { method: 'POST' });
      const { id } = await res.json();
      const stripe = Stripe('STRIPE_PUBLIC_KEY_PLACEHOLDER'); // Will be replaced by environment variable
      stripe.redirectToCheckout({ sessionId: id });
    });
  </script>
</body>
</html>`;

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    
    // Serve static HTML with caching headers
    if (url.pathname === "/" || url.pathname === "/index.html") {
      // Validate that Stripe public key is configured
      if (!env.STRIPE_PUBLIC_KEY) {
        return new Response("Application not configured. Please set STRIPE_PUBLIC_KEY environment variable.", { 
          status: 500,
          headers: { "Content-Type": "text/plain" }
        });
      }
      
      // Replace placeholder with actual public key from environment
      const html = htmlContent.replace('STRIPE_PUBLIC_KEY_PLACEHOLDER', env.STRIPE_PUBLIC_KEY);
      
      return new Response(html, { 
        headers: { 
          "Content-Type": "text/html",
          "Cache-Control": "public, max-age=3600" // Cache for 1 hour
        } 
      });
    }
    
    // Handle email subscription
    if (url.pathname === "/subscribe" && request.method === "POST") {
      try {
        const formData = await request.formData();
        const email = formData.get("email");
        
        // Validate email
        if (!email || typeof email !== "string") {
          return new Response(JSON.stringify({ error: "Email is required" }), { 
            status: 400,
            headers: { "Content-Type": "application/json" }
          });
        }
        
        if (!isValidEmail(email)) {
          return new Response(JSON.stringify({ error: "Invalid email address" }), { 
            status: 400,
            headers: { "Content-Type": "application/json" }
          });
        }
        
        console.log("New subscriber:", email);
        return new Response(JSON.stringify({ message: "Thanks for subscribing!" }), { 
          status: 200,
          headers: { "Content-Type": "application/json" }
        });
      } catch (error) {
        console.error("Subscribe error:", error);
        return new Response(JSON.stringify({ error: "Failed to process subscription" }), { 
          status: 500,
          headers: { "Content-Type": "application/json" }
        });
      }
    }
    
    // Handle Stripe checkout session creation
    if (url.pathname === "/create-checkout-session" && request.method === "POST") {
      return await handleCheckout(env);
    }
    
    return new Response("Not Found", { status: 404 });
  }
}
