const CONFIG = {
  endpoint: {
    auth: {
      login: '/api/user/login/',
      verify: '/api/user/verify/',
    }
  },
  storage: {
    auth: {
      key: 'accessToken',
    },
  },
  breakpoint: {
    mediaPC: '@media (min-width: 768px)',
    mediaSP: '@media (max-width: 767px)',
  },
}

export default CONFIG