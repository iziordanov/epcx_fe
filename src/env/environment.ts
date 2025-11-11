// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  appVersion: require('../../package.json').version + '-core',
  appurl:'http://localhost:4312',
  production: false,
  abreviation: 'L',
  services: {
    url: {
      auth: 'https://ws.epcx.iordanov.info/',
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
