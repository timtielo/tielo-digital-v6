// Configuration file for webhook URLs and related settings
export const WEBHOOK_CONFIG = {
  URLS: {
    ANALYSIS: 'https://hook.eu2.make.com/6bx1n368l3a5ni1aoy72eay5eoq7mxqy',
    GUIDE: 'https://hook.eu2.make.com/43oheln26w9i7ehgdrlecxnlve5clpm2'
  },
  
  FORM_TYPES: {
    GUIDE: 'guide',
    ANALYSIS: 'analysis'
  } as const
} as const;