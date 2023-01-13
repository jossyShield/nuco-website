import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: 'osb35udj',
  dataset: 'production',
  apiVersion: new Date().toISOString().split('T')[0], // use current UTC date - see "specifying API version"!
//   token: 'sanity-auth-token', // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
})

export default client