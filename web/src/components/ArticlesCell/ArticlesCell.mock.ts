// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  articles: [
    {
      id: 42,
      title: 'test1',
      body: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
      createdAt: new Date().toISOString(),
    },
    {
      id: 43,
      title: 'test3',
      body: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      createdAt: new Date().toISOString(),
    },
    {
      id: 44,
      title: 'test2',
      body: 'cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc',
      createdAt: new Date().toISOString(),
    },
  ],
})
