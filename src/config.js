module.exports = {
  siteTitle: 'Piotr Napierala | Full Stack Developer',
  siteDescription:
    "Piotr Napierala is a passionate full-stack developer, that's enjoying building impactful applications and solving difficult problems.",
  siteKeywords:
    'Piotr Napierala, web developer, frontend engineer, full stack, javascript, freelance, user experience, blockchain, react, web design',
  siteUrl: 'https://piotrnap.com',
  siteLanguage: 'en_US',
  name: 'Piotr Napierala',
  location: 'Belgium',
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
      name: 'GitLab',
      url: 'https://gitlab.com/piotr.napierala94',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/piotr-napierala-038661135/',
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/channel/UCjQS5rdafvKW72D4uM_-MUQ',
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
