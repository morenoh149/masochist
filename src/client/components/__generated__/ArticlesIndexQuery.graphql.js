/**
 * @flow
 * @relayHash af5b0cad6444c110c793fe4a78051c01
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type ArticlesIndexQueryResponse = {| |};
*/


/*
query ArticlesIndexQuery(
  $count: Int!
  $cursor: String
) {
  ...ArticlesIndex
}

fragment ArticlesIndex on Root {
  articles(first: $count, after: $cursor) {
    edges {
      node {
        id
        ...ArticlePreview
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
    ... on ArticleConnection {
      edges {
        cursor
        node {
          __typename
          id
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
}

fragment ArticlePreview on Article {
  description
  title
  url
  ...Tags
  ...When
}

fragment Tags on Tagged {
  tags
}

fragment When on Versioned {
  createdAt
  history {
    url
  }
  updatedAt
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "count",
        "type": "Int!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "cursor",
        "type": "String",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ArticlesIndexQuery",
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "ArticlesIndex",
        "args": null
      }
    ],
    "type": "Root"
  },
  "id": "ArticlesIndexQuery",
  "kind": "Batch",
  "metadata": {},
  "name": "ArticlesIndexQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "count",
        "type": "Int!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "cursor",
        "type": "String",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "ArticlesIndexQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "after",
            "variableName": "cursor",
            "type": "String"
          },
          {
            "kind": "Variable",
            "name": "first",
            "variableName": "count",
            "type": "Int"
          }
        ],
        "concreteType": "ArticleConnection",
        "name": "articles",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "ArticleEdge",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "Article",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "description",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "title",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "url",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "tags",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "createdAt",
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "History",
                    "name": "history",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "url",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "updatedAt",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "endCursor",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "hasNextPage",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "type": "ArticleConnection",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "ArticleEdge",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "cursor",
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "Article",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "__typename",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ]
          }
        ],
        "storageKey": null
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "after",
            "variableName": "cursor",
            "type": "String"
          },
          {
            "kind": "Variable",
            "name": "first",
            "variableName": "count",
            "type": "Int"
          }
        ],
        "handle": "connection",
        "name": "articles",
        "key": "ArticlesIndex_articles",
        "filters": null
      }
    ]
  },
  "text": null
};


if (__DEV__) {
  batch['text'] = "query ArticlesIndexQuery(\n  $count: Int!\n  $cursor: String\n) {\n  ...ArticlesIndex\n}\n\nfragment ArticlesIndex on Root {\n  articles(first: $count, after: $cursor) {\n    edges {\n      node {\n        id\n        ...ArticlePreview\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n    ... on ArticleConnection {\n      edges {\n        cursor\n        node {\n          __typename\n          id\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n}\n\nfragment ArticlePreview on Article {\n  description\n  title\n  url\n  ...Tags\n  ...When\n}\n\nfragment Tags on Tagged {\n  tags\n}\n\nfragment When on Versioned {\n  createdAt\n  history {\n    url\n  }\n  updatedAt\n}\n";
}

module.exports = batch;
