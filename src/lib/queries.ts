import { gql } from '@apollo/client'

export const GET_FEATURED_PRODUCTS = gql`
  query GetFeaturedProducts {
    featuredProducts {
      id
      name
      description
      price
      image
      category
    }
  }
`