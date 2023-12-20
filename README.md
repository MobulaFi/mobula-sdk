# openapi

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


## 🏗 **Welcome to your new SDK!** 🏗

It has been generated successfully based on your OpenAPI spec. However, it is not yet ready for production use. Here are some next steps:
- [ ] 🛠 Make your SDK feel handcrafted by [customizing it](https://www.speakeasyapi.dev/docs/customize-sdks)
- [ ] ♻️ Refine your SDK quickly by iterating locally with the [Speakeasy CLI](https://github.com/speakeasy-api/speakeasy)
- [ ] 🎁 Publish your SDK to package managers by [configuring automatic publishing](https://www.speakeasyapi.dev/docs/productionize-sdks/publish-sdks)
- [ ] ✨ When ready to productionize, delete this section from the README

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add https://github.com/anouci/mobula-api-sdk
```

### Yarn

```bash
yarn add https://github.com/anouci/mobula-api-sdk
```
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

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
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [SDK](docs/sdks/sdk/README.md)

* [searchCryptoByName](docs/sdks/sdk/README.md#searchcryptobyname)
* [fetchWalletNFTs](docs/sdks/sdk/README.md#fetchwalletnfts) - Get Portfolio
* [fetchAllCryptoDetails](docs/sdks/sdk/README.md#fetchallcryptodetails) - Get all crypto data with extra fields as needed
* [fetchAssetMarketData](docs/sdks/sdk/README.md#fetchassetmarketdata) - Get the market metrics for any asset
* [fetchPairMarketData](docs/sdks/sdk/README.md#fetchpairmarketdata) - Get the market metrics for any DEX pair
* [fetchPairsMarketData](docs/sdks/sdk/README.md#fetchpairsmarketdata) - Fetch all DEX pairs from a specific asset
* [fetchAssetMarketHistory](docs/sdks/sdk/README.md#fetchassetmarkethistory) - Get the market metrics of an asset over a given timeframe
* [fetchMultipleAssetMarketData](docs/sdks/sdk/README.md#fetchmultipleassetmarketdata)
* [fetchAssetTradeHistory](docs/sdks/sdk/README.md#fetchassettradehistory) - Retrieve trade history for a given asset.
* [fetchAssetMetadata](docs/sdks/sdk/README.md#fetchassetmetadata)
* [fetchSwapQuote](docs/sdks/sdk/README.md#fetchswapquote) - Swap
* [fetchWalletHistoryBalance](docs/sdks/sdk/README.md#fetchwallethistorybalance) - Get the historical balance of any EVM-compatible wallets, at any time
* [fetchWalletHoldings](docs/sdks/sdk/README.md#fetchwalletholdings) - Fetch Wallet Portfolio
* [fetchWalletTransactions](docs/sdks/sdk/README.md#fetchwallettransactions) - Fetch Wallet Transactions
<!-- End Available Resources and Operations [operations] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400                  | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |

Example

```typescript
import { SDK } from "openapi";
import * as errors from "openapi/models/errors";

async function run() {
    const sdk = new SDK();

    const assets = "string";
    const blockchains = "string";
    const symbols = "string";

    const res = await sdk
        .fetchMultipleAssetMarketData(assets, blockchains, symbols)
        .catch((err) => {
            if (err instanceof errors.ErrorResponse) {
                console.error(err); // handle exception
                return null;
            } else {
                throw err;
            }
        });

    if (res?.statusCode !== 200) {
        throw new Error("Unexpected status code: " + res?.statusCode || "-");
    }

    // handle response
}

run();

```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.mobula.io/api/1` | None |




### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { SDK } from "openapi";
import { HTTPClient } from "openapi/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000);
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new SDK({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
