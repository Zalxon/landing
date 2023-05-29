import Stripe from 'stripe'
import rateLimit from '../../utils/rate-limit'

const MIN_AMOUNT = 5
const MAX_AMOUNT = 999
const CURRENCY = 'usd'

const limiter = rateLimit({
  interval: 60 * 60 * 1000, // 60 minutes
  uniqueTokenPerInterval: 100, // Max 100 users per hour
})

async function recaptchaHandler(response) {
  if (!response) {
    return {
      success: false,
      statusCode: 400,
      message: 'Recaptcha response missing',
    }
  }

  const result = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${response}`,
    {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      referrerPolicy: 'no-referrer',
    }
  )
  const { success, 'error-codes': errorCodes } = await result.json()

  return { success }
}

async function checkoutHandler(amount) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

  // Validate the amount that was passed from the client.
  if (!(amount >= MIN_AMOUNT && amount <= MAX_AMOUNT)) {
    return { success: false, statusCode: 400, message: 'Invalid amount' }
  }

  // {
  //   name: 'Donation',
  //   description: 'Donation to Zalxon',
  //   amount: amount * 100, // Stripe accepts amount in cents
  //   currency: CURRENCY,
  //   quantity: 1,
  // },

  // Create Checkout Sessions from body params.
  // const params = {
  //   submit_type: 'donate',
  //   payment_method_types: ['card'],
  //   billing_address_collection: 'required',
  //   line_items: transformedItems,
  //   success_url: 'https://zalxon.com/thanks',
  //   cancel_url: 'https://zalxon.com/donate',
  // }


  // Create Checkout Sessions from body params.
  let product = {
    name: 'Donation',
    description: 'Donation to Zalxon',
    // images: [],
  }
  const params = {
    submit_type: 'donate',
    payment_method_types: ['card'],
    billing_address_collection: 'required',
    line_items: [{
      // ...product,
      // amount: amount * 100, // Stripe accepts amount in cents
      // currency: CURRENCY,
      price_data: {
        currency: CURRENCY,
        unit_amount: amount * 100,
        product_data: product,
      },
      quantity: 1,
    }],
    mode: 'payment',
    success_url: `${process.env.BASE_URL}/thanks`,
    cancel_url: `${process.env.BASE_URL}/donate`,
  };

  const checkoutSession = await stripe.checkout.sessions.create(params)
  return { success: true, checkoutSession }
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { recaptcha, amount } = req.body
    try {
      const recaptchaResult = await recaptchaHandler(recaptcha)
      if (!recaptchaResult.success) {
        res.status(400).json({ statusCode: 400, message: 'Recaptcha failed' })
        return
      }

      try {
        await limiter.check(res, 10, req.headers['x-forwarded-for']) // 10 requests per hour per IP
      } catch {
        res
          .status(429)
          .json({ statusCode: 429, message: 'Rate limit exceeded' })
        return
      }

      const { success, statusCode, message, checkoutSession } =
        await checkoutHandler(amount, req, res)
      if (!success) {
        res.status(statusCode).json({ statusCode, message })
        return
      }

      res.status(200).json(checkoutSession)
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message })
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}
