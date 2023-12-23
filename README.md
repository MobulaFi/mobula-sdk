![cover](https://i.imgur.com/8evrRT0.png)

# Getting Started with Mobula API SDK

Mobula empowers builders with top-tier APIs for market data, wallet data & DeFi quotes. Industry-leading coverage & granularity, SQL queries, and high flexibility.

## 📑 Table of Contents

- [Introduction](#-introduction)
- [Generate API Key](#-generate-api-key)
- [Installation](#-installation)
- [Documentation](#-documentation)
- [Upgrade](#-upgrade)
- [Support](#-support)

## 🌟 Introduction

With the Mobula API SDK, you can seamlessly integrate real-time crypto metrics into your projects. Whether you're building a new crypto dashboard or just exploring the world of cryptocurrencies, Mobula API SDK has got you covered.

## 🔑 Generate API Key

For an enhanced experience, acquire an API key. Generate your key and select a plan fitting your project [here](https://docs.mobula.fi/api-reference/authentification).

<!-- Start  Installation [installation] -->
## 📦 Installation

### NPM

```bash
npm mobula-sdk
```
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Mobula } from "mobula-sdk";
import { Order } from "mobula-sdk/dist/sdk/models/operations";

async function run() {
    const sdk = new Mobula({
        apiKeyAuth: "<YOUR_API_KEY_HERE>",
    });

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
<!-- End SDK Example Usage [usage] -->

## 📚 Documentation

- [Getting Started](https://docs.mobula.fi/sdk/introduction)
  
### Index
* [searchCryptoByName](docs/sdks/mobula/README.md#searchcryptobyname) - Search crypto data with asset name
* [fetchAllCryptoDetails](docs/sdks/mobula/README.md#fetchallcryptodetails) - Get all crypto data with extra fields as needed
* [fetchAssetMarketData](docs/sdks/mobula/README.md#fetchassetmarketdata) - Get the market metrics for any asset
* [fetchAssetMarketHistory](docs/sdks/mobula/README.md#fetchassetmarkethistory) - Get the market metrics of an asset over a given timeframe
* [fetchAssetMetadata](docs/sdks/mobula/README.md#fetchassetmetadata) - Get the metadata of an asset.
* [fetchAssetTradeHistory](docs/sdks/mobula/README.md#fetchassettradehistory) - Retrieve trade history for a given asset
* [fetchMultipleAssetMarketData](docs/sdks/mobula/README.md#fetchmultipleassetmarketdata) - Get the market metrics for multiple assets at one time
* [fetchPairMarketData](docs/sdks/mobula/README.md#fetchpairmarketdata) - Get the market metrics for any DEX pair
* [fetchPairsMarketData](docs/sdks/mobula/README.md#fetchpairsmarketdata) - Fetch all DEX pairs from a specific asset
* [fetchWalletHistoryBalance](docs/sdks/mobula/README.md#fetchwallethistorybalance) - Get the historical balance of any EVM-compatible wallets, at any time
* [fetchWalletHoldings](docs/sdks/mobula/README.md#fetchwalletholdings) - Fetch wallet holdings 
* [fetchWalletNFTs](docs/sdks/mobula/README.md#fetchwalletnfts) - Fetch wallet NFTs
* [fetchWalletTransactions](docs/sdks/mobula/README.md#fetchwallettransactions) - Fetch Wallet Transactions
<!-- End Available Resources and Operations [operations] -->

<!-- Start Error Handling [errors] -->
## Error Handling

Handling errors in this SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

Example

```typescript
import { Mobula } from "mobula-sdk";

async function run() {
    const sdk = new Mobula({
        apiKeyAuth: "<YOUR_API_KEY_HERE>",
    });

    let res;
    try {
        res = await sdk.searchCryptoByName({
            name: "bitcoin",
        });
    } catch (err) {
        if (err instanceof errors.SDKError) {
            console.error(err); // handle exception
            throw err;
        }
    }

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Error Handling [errors] -->

## 🔄 Upgrade

Upgrade plans:

| Plan       | Credits/month | Support                                      | Price/month | Link                                                         |
| ---------- | ------------- | -------------------------------------------- | ----------- | ------------------------------------------------------------ |
| Free       | 300,000       | 24/7 support on Telegram, Discord, and Slack | $0          | [Link](https://docs.mobula.fi/api-reference/introduction)    |
| Premium    | 1,500,000     | 24/7 support on Telegram, Discord, and Slack | $250        | [Upgrade now](https://admin.mobula.fi/)                      |
| Advanced   | 5,000,000     | 24/7 support on Telegram, Discord, and Slack | $750        | [Upgrade now](https://admin.mobula.fi/)                      |
| Enterprise | Unlimited     | 24/7 support, custom endpoints, 99.9% SLA    | from $750   | [Contact us](https://t.me/MobulaPartnerBot?start=Enterprise) |

## 📞 Support

Need assistance? Contact our support bot on [Telegram: Bot Support](https://t.me/MobulaPartnerBot?start=Mobula_SDK_Support_Github)

---

Crafted with 💙 by Mobula for builders like you


<!-- No SDK Installation -->
<!-- No SDK Example Usage -->
<!-- No SDK Available Operations -->
<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.mobula.io/api/1` | None |

#### Example

```typescript
import { Mobula } from "mobula-sdk";

async function run() {
    const sdk = new Mobula({
        serverIdx: 0,
        apiKeyAuth: "<YOUR_API_KEY_HERE>",
    });

    const res = await sdk.searchCryptoByName({
        name: "bitcoin",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Mobula } from "mobula-sdk";

async function run() {
    const sdk = new Mobula({
        serverURL: "https://api.mobula.io/api/1",
        apiKeyAuth: "<YOUR_API_KEY_HERE>",
    });

    const res = await sdk.searchCryptoByName({
        name: "bitcoin",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The Typescript SDK makes API calls using the [axios](https://axios-http.com/docs/intro) HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.

For example, you could specify a header for every request that your sdk makes as follows:

```typescript
import { mobula-sdk } from "Mobula";
import axios from "axios";

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})

const sdk = new Mobula({defaultClient: httpClient});
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type         | Scheme       |
| ------------ | ------------ | ------------ |
| `apiKeyAuth` | apiKey       | API key      |

To authenticate with the API the `apiKeyAuth` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Mobula } from "mobula-sdk";

async function run() {
    const sdk = new Mobula({
        apiKeyAuth: "<YOUR_API_KEY_HERE>",
    });

    const res = await sdk.searchCryptoByName({
        name: "bitcoin",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Authentication [security] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->


