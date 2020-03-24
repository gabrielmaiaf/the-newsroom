module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/topnews': { page: '/topnews' },
      '/topnews/coronavirus': { page: '/topnews/[topic]', query: 'coronavirus' },
      '/topnews/italy': { page: '/topnews/[topic]', query: 'italy' },
      '/topnews/ireland': { page: '/topnews/[topic]', query: 'ireland' }
    }
  }
}