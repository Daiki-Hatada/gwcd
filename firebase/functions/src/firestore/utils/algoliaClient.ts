import algoliasearch from 'algoliasearch'

export const getClient = () => {
  const { ALGOLIA_APP_ID, ALGOLIA_WRITE_API_KEY } = process.env
  if (typeof ALGOLIA_APP_ID !== 'string' || typeof ALGOLIA_WRITE_API_KEY !== 'string') {
    throw new Error(
      `${Object.keys({ ALGOLIA_APP_ID })[0]} and ${
        Object.keys({ ALGOLIA_WRITE_API_KEY })[0]
      } are not properly configured.`,
    )
  }
  return algoliasearch(ALGOLIA_APP_ID, ALGOLIA_WRITE_API_KEY)
}
