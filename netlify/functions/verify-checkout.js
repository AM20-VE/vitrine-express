const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
exports.handler = async (event) => {
    const sessionId = event.queryStringParameters.session_id;
    if (!sessionId) {
        return { statusCode: 400, body: JSON.stringify({ paid: false }) };
    }
    try {
        const session = await stripe.checkout.sessions.retrieve(sessionId);
        return {
            statusCode: 200,
            body: JSON.stringify({ paid: session.payment_status === 'paid' })
        };
    } catch (e) {
        return { statusCode: 500, body: JSON.stringify({ error: e.message }) };
    }
};