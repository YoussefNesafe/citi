export enum eventType {
  pageView = 'PAGE_VIEW',
  signUp = 'SIGN_UP',
}
export enum facebookEventName {
  pageView = 'PageView',
  signUp = 'SubmitApplication',
}
export interface IBaseMarketingProps {
  user_email: string;
  user_phone_number: string;
  ip_address: string;
  event_type: eventType;
  timestamp: string;
}

export interface ISnapchatConfigProps extends IBaseMarketingProps {
  client_dedup_id: string;
  uuid_c1: string;
  click_id: string;
}

export interface IRequestSnapchatCAPIBody {
  hashed_email?: string;
  hashed_phone_number?: string;
  event_type: eventType;
  client_dedup_id?: string;
  timestamp: string;
  uuid_c1?: string;
  click_id: string;
}

export interface ISnapchatTrackerProps {
  user_hashed_email: string;
  user_hashed_phone_number: string;
  ip_address: string;
  event_type: eventType;
  timestamp: string;
  client_dedup_id: string;
  uuid_c1: string;
  click_id: string;
}

// FaceBook Types

export interface IFacebookUserDataProps {
  em: string;
  ph: string;
  fn: string;
  ln: string;
  client_ip_address: string;
}

export interface IFacebookPixelTrackerProps {
  event: facebookEventName;
  eventID: string;
  userData: IFacebookUserDataProps;
}

export interface IFacebbokCAPITrackerProps {
  event: {
    name: facebookEventName;
    time: string;
    clickID: string;
  };
  userData?: IFacebookUserDataProps;
}

export interface IFacebookTrackerProps {
  event_name: facebookEventName;
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
  timestamp: string;
  ip_address: string;
  clickID: string;
}
