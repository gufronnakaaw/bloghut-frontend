module.exports = {
  reactStrictMode: true,
  async rewrites(){
    return [
      {
        source: '/login',
        destination: '/auth/login'
      },
      {
        source: '/register',
        destination: '/auth/register'
      },
      {
        source: '/profile',
        destination: '/user/profile'
      }
    ]
  }
}
