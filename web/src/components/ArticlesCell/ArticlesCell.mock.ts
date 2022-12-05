// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  articles: [
    {
      id: 42,
      title: 'test',
      body: 'test body',
      createdAt: new Date().toISOString(),
    },
    {
      id: 43,
      title: 'test',
      body: 'test body',
      createdAt: new Date().toISOString(),
    },
    {
      id: 44,
      title: 'test',
      body: 'test body',
      createdAt: new Date().toISOString(),
    },
  ],
})
