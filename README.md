# discover
A subgraph for dapps which are put on https://dap.ps to be curated by community. Currently hosted at https://thegraph.com/explorer/subgraph/nanspro/discover

## Installation
```
yarn install
yarn codegen
yarn deploy
```

## Example Query
Get metadata of latest 5 dapps
``` graphql
{
  dappMetas(first: 5) {
    id
    ipfsHash
    hash
    status
    details {
      id
      name
      description
      url
      uploader
      image
      category
      dateAdded
    }
  }
}
```


Get first 10 dapps
``` graphql
{
dappMetas(first: 10) {
    id
    ipfsHash
    hash
    details {
      id
    }
  }
}
```

Get first 10 dapp's details (not all just few like name, uploader, id)
``` graphql
{
details(first: 5) {
	 id
	 identifier {
	   id
	 }
	 name
	 uploader
  }
}