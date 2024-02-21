export interface HeadMetaType {
  host: string;
  language: string;
  title: string;
  description: string;
  shareImage: string;
  appIconImage: string;
  favIconImage: string;
}

export const getDefaultHeadMetaData = (): HeadMetaType => {
  return {
    host: '',
    language: 'en_NZ',
    title: 'React Next Demo',
    description: `Description`,
    shareImage: 'assets/share/share.jpg', // relative path based on host from env file
    appIconImage: '/assets/share/app-icon.png', // absolute path
    favIconImage: '/assets/share/fav-icon.png', // absolute path
  };
};

export const GTM_ID = '';
