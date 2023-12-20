# SDK


## Overview

Mobula: A tool that allows the user to fetch real-time data for all crypto metrics.

### Available Operations

* [searchCryptoByName](#searchcryptobyname)
* [fetchWalletNFTs](#fetchwalletnfts) - Get Portfolio
* [fetchAllCryptoDetails](#fetchallcryptodetails) - Get all crypto data with extra fields as needed
* [fetchAssetMarketData](#fetchassetmarketdata) - Get the market metrics for any asset
* [fetchPairMarketData](#fetchpairmarketdata) - Get the market metrics for any DEX pair
* [fetchPairsMarketData](#fetchpairsmarketdata) - Fetch all DEX pairs from a specific asset
* [fetchAssetMarketHistory](#fetchassetmarkethistory) - Get the market metrics of an asset over a given timeframe
* [fetchMultipleAssetMarketData](#fetchmultipleassetmarketdata)
* [fetchAssetTradeHistory](#fetchassettradehistory) - Retrieve trade history for a given asset.
* [fetchAssetMetadata](#fetchassetmetadata)
* [fetchSwapQuote](#fetchswapquote) - Swap
* [fetchWalletHistoryBalance](#fetchwallethistorybalance) - Get the historical balance of any EVM-compatible wallets, at any time
* [fetchWalletHoldings](#fetchwalletholdings) - Fetch Wallet Portfolio
* [fetchWalletTransactions](#fetchwallettransactions) - Fetch Wallet Transactions

## searchCryptoByName

### Example Usage

```typescript
import { SDK } from "openapi";

async function run() {
  const sdk = new SDK();

  const name = "bitcoin";
  
  const res = await sdk.searchCryptoByName(name);

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                                                                                         | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Name or symbol (or starting name/symbol) of the asset                                                                                                                          | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise<[operations.SearchCryptoByNameResponse](../../models/operations/searchcryptobynameresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## fetchWalletNFTs

Get Portfolio

### Example Usage

```typescript
import { SDK } from "openapi";

async function run() {
  const sdk = new SDK();

  const wallet = "0x554efD74C693999bABf7CC0f5646D465A31b32CB";
  const force = false;
  const blockchains = "56,Ethereum";
  
  const res = await sdk.fetchWalletNFTs(wallet, force, blockchains);

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `wallet`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Wallet address or ENS or Mobula username                                                                                                                                       | [object Object]                                                                                                                                                                |
| `force`                                                                                                                                                                        | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Will force a new on-chain data fetch                                                                                                                                           |                                                                                                                                                                                |
| `blockchains`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Blockchains to fetch NFTs from (by default, all) - comma separated, chain ID or chain name                                                                                     | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise<[operations.FetchWalletNFTsResponse](../../models/operations/fetchwalletnftsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## fetchAllCryptoDetails

Get all crypto data with extra fields as needed

### Example Usage

```typescript
import { SDK } from "openapi";

async function run() {
  const sdk = new SDK();

  const fields = "blockchains,contracts";
  
  const res = await sdk.fetchAllCryptoDetails(fields);

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `fields`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Extra fields needed                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise<[operations.FetchAllCryptoDetailsResponse](../../models/operations/fetchallcryptodetailsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## fetchAssetMarketData

Get the market metrics for any asset

### Example Usage

```typescript
import { SDK } from "openapi";

async function run() {
  const sdk = new SDK();

  const asset = "Bitcoin";
  const blockchain = "string";
  const symbol = "BTC";
  
  const res = await sdk.fetchAssetMarketData(asset, blockchain, symbol);

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `asset`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The asset you want to target - asset name only works for assets listed on Mobula.                                                                                              | [object Object]                                                                                                                                                                |
| `blockchain`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Blockchain of the asset - only mandatory if asset is sent as smart-contract.                                                                                                   |                                                                                                                                                                                |
| `symbol`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Symbol of the asset - only mandatory if no asset name/contract is provided                                                                                                     | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise<[operations.FetchAssetMarketDataResponse](../../models/operations/fetchassetmarketdataresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## fetchPairMarketData

Get the market metrics for any DEX pair

### Example Usage

```typescript
import { SDK } from "openapi";

async function run() {
  const sdk = new SDK();

  const address = "0x6488f911c6cd86c289aa319c5a826dcf8f1ca065";
  const blockchain = "Mantle";
  const asset = "string";
  
  const res = await sdk.fetchPairMarketData(address, blockchain, asset);

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `address`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The address of the smart-contract of the pair (or pool, or vault).                                                                                                             | [object Object]                                                                                                                                                                |
| `blockchain`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Blockchain of the pair (only mandatory for Balancer V2 pairs).                                                                                                                 | [object Object]                                                                                                                                                                |
| `asset`                                                                                                                                                                        | *any*                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                             | The name/address of the asset you want in return                                                                                                                               | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise<[operations.FetchPairMarketDataResponse](../../models/operations/fetchpairmarketdataresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## fetchPairsMarketData

Fetch all DEX pairs from a specific asset

### Example Usage

```typescript
import { SDK } from "openapi";

async function run() {
  const sdk = new SDK();

  const asset = "Bitcoin";
  const blockchain = "string";
  const offset = 0;
  
  const res = await sdk.fetchPairsMarketData(asset, blockchain, offset);

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `asset`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The asset you want to target - asset name only works for assets listed on Mobula.                                                                                              | [object Object]                                                                                                                                                                |
| `blockchain`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Blockchain of the asset - only mandatory if asset is sent as smart-contract.                                                                                                   |                                                                                                                                                                                |
| `offset`                                                                                                                                                                       | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The offset of the results                                                                                                                                                      | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise<[operations.FetchPairsMarketDataResponse](../../models/operations/fetchpairsmarketdataresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## fetchAssetMarketHistory

Get the market metrics of an asset over a given timeframe

### Example Usage

```typescript
import { SDK } from "openapi";

async function run() {
  const sdk = new SDK();

  const asset = "string";
  const blockchain = "string";
  const from = 20596;
  const to = 65038;
  
  const res = await sdk.fetchAssetMarketHistory(asset, blockchain, from, to);

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `asset`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The asset you want to target - asset name only works for assets listed on Mobula.                                                                                              |
| `blockchain`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Blockchain of the asset - only mandatory if asset is sent as smart-contract.                                                                                                   |
| `from`                                                                                                                                                                         | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | JS Timestamp (milliseconds) of the beginning of the timeframe (if not provided, genesis)                                                                                       |
| `to`                                                                                                                                                                           | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | JS Timestamp (milliseconds) of the end of the timeframe (if not provided, end)                                                                                                 |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.FetchAssetMarketHistoryResponse](../../models/operations/fetchassetmarkethistoryresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## fetchMultipleAssetMarketData

### Example Usage

```typescript
import { SDK } from "openapi";

async function run() {
  const sdk = new SDK();

  const assets = "string";
  const blockchains = "string";
  const symbols = "string";
  
  const res = await sdk.fetchMultipleAssetMarketData(assets, blockchains, symbols);

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `assets`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Comma separated list of asset names or Ethereum addresses (max 500)                                                                                                            |
| `blockchains`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Comma separated list of blockchain names                                                                                                                                       |
| `symbols`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Comma separated list of symbols                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.FetchMultipleAssetMarketDataResponse](../../models/operations/fetchmultipleassetmarketdataresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400                  | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |

## fetchAssetTradeHistory

Retrieve trade history for a given asset.

### Example Usage

```typescript
import { SDK } from "openapi";

async function run() {
  const sdk = new SDK();

  const asset = "string";
  const maxResults = 20;
  
  const res = await sdk.fetchAssetTradeHistory(asset, maxResults);

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `asset`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Asset name or contract address to retrieve trade history for.                                                                                                                  |                                                                                                                                                                                |
| `maxResults`                                                                                                                                                                   | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Maximum number of results to return.                                                                                                                                           | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise<[operations.FetchAssetTradeHistoryResponse](../../models/operations/fetchassettradehistoryresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400                  | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |

## fetchAssetMetadata

### Example Usage

```typescript
import { SDK } from "openapi";

async function run() {
  const sdk = new SDK();

  const asset = "string";
  const blockchain = "string";
  
  const res = await sdk.fetchAssetMetadata(asset, blockchain);

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `asset`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Name or contract address of the asset                                                                                                                                          |
| `blockchain`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Blockchain of the asset                                                                                                                                                        |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.FetchAssetMetadataResponse](../../models/operations/fetchassetmetadataresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## fetchSwapQuote

Swap

### Example Usage

```typescript
import { SDK } from "openapi";
import { TypeT } from "openapi/models/operations";

async function run() {
  const sdk = new SDK();

  const res = await sdk.fetchSwapQuote({
    chain: "Ethereum",
    receiver: "0xbb663a119193cA68512c351b0fdfDEB9c22Dc416",
    fromToken: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    toToken: "0xc944e90c64b2c07662a292be6244bdf05cda44a7",
    fromAddress: "0xbb663a119193cA68512c351b0fdfDEB9c22Dc416",
    amount: 39020329732097,
    slippage: 0.5,
    type: TypeT.Best,
  });

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.FetchSwapQuoteRequest](../../models/operations/fetchswapquoterequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.FetchSwapQuoteResponse](../../models/operations/fetchswapquoteresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## fetchWalletHistoryBalance

Get the historical balance of any EVM-compatible wallets, at any time

### Example Usage

```typescript
import { SDK } from "openapi";

async function run() {
  const sdk = new SDK();

  const wallet = "0xf23b38099188fd5892346104bBEF2F1c11D10244";
  const from = 691038;
  const to = 234489;
  const blockchains = "56,Ethereum";
  
  const res = await sdk.fetchWalletHistoryBalance(wallet, from, to, blockchains);

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `wallet`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The user wallet queried                                                                                                                                                        | [object Object]                                                                                                                                                                |
| `from`                                                                                                                                                                         | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | JS Timestamp (miliseconds) of the beginning of the timeframe (if not provided, genesis)                                                                                        |                                                                                                                                                                                |
| `to`                                                                                                                                                                           | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | JS Timestamp (miliseconds) of the end of the timeframe (if not provided, end)                                                                                                  |                                                                                                                                                                                |
| `blockchains`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Blockchains to fetch history from (by default, all) - comma separated, chain ID or chain name                                                                                  | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise<[operations.FetchWalletHistoryBalanceResponse](../../models/operations/fetchwallethistorybalanceresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## fetchWalletHoldings

Get the portfolio of holdings from any EVM-compatible wallets, at any time

### Example Usage

```typescript
import { SDK } from "openapi";

async function run() {
  const sdk = new SDK();

  const wallet = "0xf23b38099188fd5892346104bBEF2F1c11D10244";
  const blockchains = "56,Ethereum";
  const cache = false;
  const stale = 4038;
  
  const res = await sdk.fetchWalletHoldings(wallet, blockchains, cache, stale);

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `wallet`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The user wallet queried                                                                                                                                                        | [object Object]                                                                                                                                                                |
| `blockchains`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Blockchains to fetch holdings from (by default, all) - comma separated, chain ID or chain name                                                                                 | [object Object]                                                                                                                                                                |
| `cache`                                                                                                                                                                        | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Will use cached data if available                                                                                                                                              |                                                                                                                                                                                |
| `stale`                                                                                                                                                                        | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Amount of seconds after which the cache is considered stale (default 5min)                                                                                                     |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise<[operations.FetchWalletHoldingsResponse](../../models/operations/fetchwalletholdingsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## fetchWalletTransactions

Retrieve all transactions for a specified wallet within a given timeframe.

### Example Usage

```typescript
import { SDK } from "openapi";
import { Order } from "openapi/models/operations";

async function run() {
  const sdk = new SDK();

  const res = await sdk.fetchWalletTransactions({
    wallet: "0xd99cB89A20822B0448936DF4f36803778CA5a003",
    blockchains: "56,Ethereum",
  });

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.FetchWalletTransactionsRequest](../../models/operations/fetchwallettransactionsrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.FetchWalletTransactionsResponse](../../models/operations/fetchwallettransactionsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
