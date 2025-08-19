import Script from 'next/script'

interface FacebookPixelProps {
  pixelId: string
}

export default function FacebookPixel({ pixelId }: FacebookPixelProps) {
  if (!pixelId) {
    console.warn('Facebook Pixel: No pixel ID provided')
    return null
  }

  return (
    <>
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${pixelId}');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        <img 
          height="1" 
          width="1" 
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  )
}

// Event tracking helper functions
export const trackFBEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName, parameters)
  }
}

export const trackFBCustomEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('trackCustom', eventName, parameters)
  }
}

// Common Facebook Pixel events
export const fbPixelEvents = {
  viewContent: (content: { content_name: string; content_category?: string; value?: number; currency?: string }) => {
    trackFBEvent('ViewContent', content)
  },
  
  search: (searchString: string) => {
    trackFBEvent('Search', { search_string: searchString })
  },
  
  addToCart: (item: { content_name: string; content_type?: string; value?: number; currency?: string }) => {
    trackFBEvent('AddToCart', item)
  },
  
  initiateCheckout: (value?: number, currency: string = 'USD') => {
    trackFBEvent('InitiateCheckout', { value, currency })
  },
  
  purchase: (value: number, currency: string = 'USD', content_name?: string) => {
    trackFBEvent('Purchase', { value, currency, content_name })
  },
  
  lead: (content_name?: string) => {
    trackFBEvent('Lead', { content_name })
  },
  
  completeRegistration: (content_name?: string, status?: string) => {
    trackFBEvent('CompleteRegistration', { content_name, status })
  },
  
  contact: () => {
    trackFBEvent('Contact')
  },
  
  customizeProduct: (content_name: string) => {
    trackFBEvent('CustomizeProduct', { content_name })
  },
  
  findLocation: () => {
    trackFBEvent('FindLocation')
  },
  
  schedule: () => {
    trackFBEvent('Schedule')
  },
  
  startTrial: (value?: number, currency: string = 'USD', predicted_ltv?: number) => {
    trackFBEvent('StartTrial', { value, currency, predicted_ltv })
  },
  
  submitApplication: (content_name?: string) => {
    trackFBEvent('SubmitApplication', { content_name })
  },
  
  subscribe: (value?: number, currency: string = 'USD', predicted_ltv?: number) => {
    trackFBEvent('Subscribe', { value, currency, predicted_ltv })
  }
}
