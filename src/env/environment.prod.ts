export const environment = {
  appVersion: require('../../package.json').version,
  appurl:'https://epcx.iordanov.info',
  production: true,
  abreviation: 'PD',
  services: {
    url: {
      auth: 'https://ws.epcx.iordanov.info/',
      book: 'https://ws.epcx.iordanov.info/book/',
    },
    domains: {
      iordanovInfo: 'epcx.ws.iordanov.info',
    }
  },
  googleanalitics: {
    gaTagId: 'G-KXR6TFBBQX',
    gaTag: 'KXR6TFBBQX',
  },
  adsense: {
    adClientId: 'client=ca-pub-9836419746300792',
    show: true,
  },
  yllix: {
    clientId: 455632,
  },
  aads: {
    clientId: 448273,
  },
  adsprovider: 'yllix',
};
