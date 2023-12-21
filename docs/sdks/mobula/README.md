# Mobula SDK


## Overview

Mobula: A tool that allows the user to fetch real-time data for all crypto metrics.

### Available Operations

* [searchCryptoByName](#searchcryptobyname)
* [fetchAllCryptoDetails](#fetchallcryptodetails) - Get all crypto data with extra fields as needed
* [fetchAssetMarketData](#fetchassetmarketdata) - Get the market metrics for any asset
* [fetchAssetMarketHistory](#fetchassetmarkethistory) - Get the market metrics of an asset over a given timeframe
* [fetchAssetMetadata](#fetchassetmetadata)
* [fetchAssetTradeHistory](#fetchassettradehistory) - Retrieve trade history for a given asset.
* [fetchMultipleAssetMarketData](#fetchmultipleassetmarketdata)
* [fetchPairMarketData](#fetchpairmarketdata) - Get the market metrics for any DEX pair
* [fetchPairsMarketData](#fetchpairsmarketdata) - Fetch all DEX pairs from a specific asset
* [fetchSwapQuote](#fetchswapquote) - Swap
* [fetchWalletHistoryBalance](#fetchwallethistorybalance) - Get the historical balance of any EVM-compatible wallets, at any time
* [fetchWalletHoldings](#fetchwalletholdings) - Fetch Wallet Portfolio
* [fetchWalletNFTs](#fetchwalletnfts) - Get Portfolio
* [fetchWalletTransactions](#fetchwallettransactions) - Fetch Wallet Transactions

## searchCryptoByName

### Example Usage

```typescript
import { Mobula } from "mobula-sdk";

async function run() {
  const sdk = new Mobula();

  const res = await sdk.searchCryptoByName({
    name: "bitcoin",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.SearchCryptoByNameRequest](../../sdk/models/operations/searchcryptobynamerequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.SearchCryptoByNameResponse](../../sdk/models/operations/searchcryptobynameresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## fetchAllCryptoDetails

Get all crypto data with extra fields as needed

### Example Usage

```typescript
import { Mobula } from "mobula-sdk";

async function run() {
  const sdk = new Mobula();

  const res = await sdk.fetchAllCryptoDetails({
    fields: "blockchains,contracts",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.FetchAllCryptoDetailsRequest](../../sdk/models/operations/fetchallcryptodetailsrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.FetchAllCryptoDetailsResponse](../../sdk/models/operations/fetchallcryptodetailsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## fetchAssetMarketData

Get the market metrics for any asset

### Example Usage

```typescript
import { Mobula } from "mobula-sdk";

async function run() {
  const sdk = new Mobula();

  const res = await sdk.fetchAssetMarketData({
    asset: "Bitcoin",
    symbol: "BTC",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.FetchAssetMarketDataRequest](../../sdk/models/operations/fetchassetmarketdatarequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.FetchAssetMarketDataResponse](../../sdk/models/operations/fetchassetmarketdataresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## fetchAssetMarketHistory

Get the market metrics of an asset over a given timeframe

### Example Usage

```typescript
import { Mobula } from "mobula-sdk";

async function run() {
  const sdk = new Mobula();

  const res = await sdk.fetchAssetMarketHistory({
    asset: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.FetchAssetMarketHistoryRequest](../../sdk/models/operations/fetchassetmarkethistoryrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.FetchAssetMarketHistoryResponse](../../sdk/models/operations/fetchassetmarkethistoryresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## fetchAssetMetadata

### Example Usage

```typescript
import { Mobula } from "mobula-sdk";

async function run() {
  const sdk = new Mobula();

  const res = await sdk.fetchAssetMetadata({
    asset: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.FetchAssetMetadataRequest](../../sdk/models/operations/fetchassetmetadatarequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.FetchAssetMetadataResponse](../../sdk/models/operations/fetchassetmetadataresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## fetchAssetTradeHistory

Retrieve trade history for a given asset.

### Example Usage

```typescript
import { Mobula } from "mobula-sdk";

async function run() {
  const sdk = new Mobula();

  const res = await sdk.fetchAssetTradeHistory({
    asset: "string",
    maxResults: 20,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.FetchAssetTradeHistoryRequest](../../sdk/models/operations/fetchassettradehistoryrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.FetchAssetTradeHistoryResponse](../../sdk/models/operations/fetchassettradehistoryresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## fetchMultipleAssetMarketData

### Example Usage

```typescript
import { Mobula } from "mobula-sdk";

async function run() {
  const sdk = new Mobula();

  const res = await sdk.fetchMultipleAssetMarketData({});

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.FetchMultipleAssetMarketDataRequest](../../sdk/models/operations/fetchmultipleassetmarketdatarequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.FetchMultipleAssetMarketDataResponse](../../sdk/models/operations/fetchmultipleassetmarketdataresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## fetchPairMarketData

Get the market metrics for any DEX pair

### Example Usage

```typescript
import { Mobula } from "mobula-sdk";

async function run() {
  const sdk = new Mobula();

  const res = await sdk.fetchPairMarketData({
    address: "0x6488f911c6cd86c289aa319c5a826dcf8f1ca065",
    asset: "Tether",
    blockchain: "Mantle",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.FetchPairMarketDataRequest](../../sdk/models/operations/fetchpairmarketdatarequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.FetchPairMarketDataResponse](../../sdk/models/operations/fetchpairmarketdataresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## fetchPairsMarketData

Fetch all DEX pairs from a specific asset

### Example Usage

```typescript
import { Mobula } from "mobula-sdk";

async function run() {
  const sdk = new Mobula();

  const res = await sdk.fetchPairsMarketData({
    asset: "Bitcoin",
    offset: 0,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.FetchPairsMarketDataRequest](../../sdk/models/operations/fetchpairsmarketdatarequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.FetchPairsMarketDataResponse](../../sdk/models/operations/fetchpairsmarketdataresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## fetchSwapQuote

Swap

### Example Usage

```typescript
import { Mobula } from "mobula-sdk";
import { TypeT } from "mobula-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new Mobula();

  const res = await sdk.fetchSwapQuote({
    amount: 39020329732097,
    chain: "Ethereum",
    fromAddress: "0xbb663a119193cA68512c351b0fdfDEB9c22Dc416",
    fromToken: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    receiver: "0xbb663a119193cA68512c351b0fdfDEB9c22Dc416",
    slippage: 0.5,
    toToken: "0xc944e90c64b2c07662a292be6244bdf05cda44a7",
    type: TypeT.Best,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.FetchSwapQuoteRequest](../../sdk/models/operations/fetchswapquoterequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.FetchSwapQuoteResponse](../../sdk/models/operations/fetchswapquoteresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## fetchWalletHistoryBalance

Get the historical balance of any EVM-compatible wallets, at any time

### Example Usage

```typescript
import { Mobula } from "mobula-sdk";

async function run() {
  const sdk = new Mobula();

  const res = await sdk.fetchWalletHistoryBalance({
    blockchains: "56,Ethereum",
    wallet: "0xf23b38099188fd5892346104bBEF2F1c11D10244",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.FetchWalletHistoryBalanceRequest](../../sdk/models/operations/fetchwallethistorybalancerequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.FetchWalletHistoryBalanceResponse](../../sdk/models/operations/fetchwallethistorybalanceresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## fetchWalletHoldings

Get the portfolio of holdings from any EVM-compatible wallets, at any time

### Example Usage

```typescript
import { Mobula } from "mobula-sdk";

async function run() {
  const sdk = new Mobula();

  const res = await sdk.fetchWalletHoldings({
    blockchains: "56,Ethereum",
    wallet: "0xf23b38099188fd5892346104bBEF2F1c11D10244",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.FetchWalletHoldingsRequest](../../sdk/models/operations/fetchwalletholdingsrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.FetchWalletHoldingsResponse](../../sdk/models/operations/fetchwalletholdingsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## fetchWalletNFTs

Get Portfolio

### Example Usage

```typescript
import { Mobula } from "mobula-sdk";

async function run() {
  const sdk = new Mobula();

  const res = await sdk.fetchWalletNFTs({
    blockchains: "56,Ethereum",
    wallet: "0x554efD74C693999bABf7CC0f5646D465A31b32CB",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.FetchWalletNFTsRequest](../../sdk/models/operations/fetchwalletnftsrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.FetchWalletNFTsResponse](../../sdk/models/operations/fetchwalletnftsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## fetchWalletTransactions

Retrieve all transactions for a specified wallet within a given timeframe.

### Example Usage

```typescript
import { Mobula } from "mobula-sdk";
import { Order } from "mobula-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new Mobula();

  const res = await sdk.fetchWalletTransactions({
    blockchains: "56,Ethereum",
    wallet: "0xd99cB89A20822B0448936DF4f36803778CA5a003",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.FetchWalletTransactionsRequest](../../sdk/models/operations/fetchwallettransactionsrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.FetchWalletTransactionsResponse](../../sdk/models/operations/fetchwallettransactionsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
