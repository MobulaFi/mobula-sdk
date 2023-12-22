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
### Error Handling

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

