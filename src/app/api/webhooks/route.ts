import { verifyWebhook } from '@clerk/nextjs/webhooks'

export async function POST(req) {
  try {
    const evt = await verifyWebhook(req)

    const { id } = evt.data
    const eventType = evt.type
    if (evt.type === 'user.created') {
        console.log('user created')
    }

    if(evt.type ==='user.updated'){
        console.log('user updated');
    }
    
    if(evt.type ==='user.deleted'){
        console.log('user deleted');
    }

    return new Response('Webhook received', { status: 200 })
  } catch (err) {
    console.error('Error verifying webhook:', err)
    return new Response('Error verifying webhook', { status: 400 })
  }
}