import { gql } from "@apollo/client";

export const SEARCH = gql`
  query codeByCode($code: String!) {
    codeByCode(code: $code) {
      inform
    }
  }
`;
