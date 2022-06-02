import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import {fetch_user_api, user_api_data, error_data} from "../../features/user/api/constants"
import { render, screen } from '../../utils/test-utils'
import Users from '../Users'

export const handlers = [
    rest.get(fetch_user_api, (req, res, ctx) => {
      return res(ctx.json(user_api_data), ctx.delay(150))
    })
  ]

const server = setupServer(...handlers)

// Enable API mocking before tests.
beforeAll(() => server.listen())

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers())

// Disable API mocking after the tests are done.
afterAll(() => server.close())

test('fetches & receives users data on App.js', async () => {
    render(<Users />)

    expect(screen.getByText(/loading/i)).toBeInTheDocument()
    expect(await screen.findByText(`User Name : ${user_api_data[0].username}`)).toBeInTheDocument()

  })


test('fetches & failed  users data on App.js', async () => {
  server.use(
    // Runtime request handler override for the "GET /book/:bookId".
    rest.get(fetch_user_api, (req, res, ctx) => {
      return res(ctx.json(error_data), ctx.status(401))
    }),
  )
  render(<Users />)
  expect(await screen.findByText(error_data)).toBeInTheDocument()

})