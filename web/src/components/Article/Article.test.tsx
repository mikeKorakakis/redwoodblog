import { render } from '@redwoodjs/testing/web'

import Article from './Article'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

// generate article mock
const article = {
  id: 1,
  title: 'Test Article',
  body: 'Test Body',
  createdAt: '2021-01-01T00:00:00.000Z',
}

describe('Article', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Article article={article} />)
    }).not.toThrow()
  })
})
