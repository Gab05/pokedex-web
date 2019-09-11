import { UrlProvider } from './UrlProvider'

let urlProvider: UrlProvider
let providedUrl: string

describe('UrlProvider', () => {
  beforeEach(() => {
    urlProvider = new UrlProvider()
    providedUrl = ''
  })

  describe('getPokedexCoreUrl', () => {

    describe('when the node environment is development', () => {
      beforeEach(() => {
        // @ts-ignore
        process.env.NODE_ENV = 'development'
        providedUrl = urlProvider.getPokedexCoreUrl()
      })

      it('should return a localhost url', () => {
        expect(providedUrl).toContain('http://localhost:')
      })
    })

    describe('when the node environment is not development', () => {
      beforeEach(() => {
        // @ts-ignore
        process.env.NODE_ENV = 'not dev'
        providedUrl = urlProvider.getPokedexCoreUrl()
      })

      it('should return a remote heroku url', () => {
        expect(providedUrl).toEqual('https://gablalib-pokedex-core.herokuapp.com')
      })
    })
  })
})
