module.exports = {
  siteTitle: 'Piotr Napierala | Frontend Developer',
  siteDescription:
    'Piotr Napierala is a passionate front-end web developer, who is enjoying building beautiful websites, applications and everything around it.',
  siteKeywords:
    'Piotr Napierala, web developer, frontend engineer, javascript, belgium, user experience, react, web design',
  siteUrl: 'https://piotrnap.com',
  siteLanguage: 'en_US',
  name: 'Piotr Napierala',
  location: 'Arendonk, Belgium',
  email: 'piotr.napierala94@gmail.com',
  github: 'https://github.com/PiotrNap',
  googleAnalyticsID: 'process.env.GOOGLE_ANALYTICS_TRACKING_ID' || 'none',
  googleVerification: 'process.env.GOOGLE.SITE.VERIFICATION' || 'none',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/PiotrNap',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/piotr-napierala-038661135/',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=100002893912719',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/piotrnap94/',
    },
  ],
  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    gold: '#e6a52b',
    blue: '#112554',
    darkBlue: '#0b1129',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
