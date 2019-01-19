/* eslint-disable no-undef */
export function spyConsole() {
  let spy = {}

  beforeEach(() => {
    spy.console = jest.spyOn(console, 'error').mockImplementation(() => {})
  })

  afterEach(() => {
    spy.console.mockClear()
  })

  afterAll(() => {
    spy.console.mockRestore()
  })

  return spy
}
