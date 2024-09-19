/* eslint-disable @next/next/no-img-element */
'use client';
import Script from 'next/script';
import { useSearchParams } from 'next/navigation';
import sha256 from 'crypto-js/sha256';
import { facebookEventName, IFacebbokCAPITrackerProps, IFacebookPixelTrackerProps, IFacebookTrackerProps } from './types';

export const TriggerFacebookPixelsEventTracker = ({ event, eventID, userData }: IFacebookPixelTrackerProps) => {
  if (typeof window === 'undefined') return;
  //@ts-ignore
  window.fbq('track', event, userData, { eventID });
};



export const triggerFacebookTracker = (data: IFacebookTrackerProps) => {
  const { phone, email, first_name, last_name, event_name, timestamp, ip_address, clickID } = data;
  const hashedPhoneNumberWithoutPlusAndSpaces = sha256(phone.replace(/[+\s]/g, '')).toString();
  const hashedLowerCaseEmailWithputWhiteSpaces = sha256(email.trim().toLowerCase()).toString();
  const requestBody = {
    event: {
      name: event_name,
      time: timestamp,
      clickID,
    },
    userData: {
      em: hashedLowerCaseEmailWithputWhiteSpaces,
      ph: hashedPhoneNumberWithoutPlusAndSpaces,
      fn: sha256(first_name).toString(),
      ln: sha256(last_name).toString(),
      client_ip_address: ip_address,
    },
  };
  TriggerFacebookPixelsEventTracker({
    event: event_name,
    eventID: timestamp,
    userData: requestBody.userData,
  });
};

const FacebookTracker = () => {
  const timestamp = Math.floor(Date.now() / 1000).toString();
  const searchParams = useSearchParams();
  const clickID = searchParams.get('fbclid')?.toString() ?? timestamp;
  return (
    <>
      <Script
        id="facebook-pixel-id"
        strategy={'lazyOnload'}
      >
        {`!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}', {'external_id': '${clickID}'});
            fbq('track', '${facebookEventName.pageView}', {} , {eventID: '${timestamp}'});`}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          alt=''
          style={{
            display: 'none',
          }}
          src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}&ev=${facebookEventName.pageView}&eid=${timestamp}&noscript=1`}
        />
      </noscript>
    </>
  );
};

export default FacebookTracker;
