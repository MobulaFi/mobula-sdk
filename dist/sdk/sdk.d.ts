import * as utils from "../internal/utils";
import * as operations from "../sdk/models/operations";
import * as shared from "../sdk/models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.mobula.io/api/1"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    apiKeyAuth?: string;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: utils.RetryConfig;
};
export declare class SDKConfiguration {
    defaultClient: AxiosInstance;
    security?: shared.Security | (() => Promise<shared.Security>);
    serverURL: string;
    serverDefaults: any;
    language: string;
    openapiDocVersion: string;
    sdkVersion: string;
    genVersion: string;
    userAgent: string;
    retryConfig?: utils.RetryConfig;
    constructor(init?: Partial<SDKConfiguration>);
}
/**
 * Mobula: A tool that allows the user to fetch real-time data for all crypto metrics.
 */
export declare class Mobula {
    private sdkConfiguration;
    constructor(props?: SDKProps);
    searchCryptoByName(req: operations.SearchCryptoByNameRequest, config?: AxiosRequestConfig): Promise<operations.SearchCryptoByNameResponse>;
    /**
     * Get all crypto data with extra fields as needed
     */
    fetchAllCryptoDetails(req: operations.FetchAllCryptoDetailsRequest, config?: AxiosRequestConfig): Promise<operations.FetchAllCryptoDetailsResponse>;
    /**
     * Get the market metrics for any asset
     */
    fetchAssetMarketData(req: operations.FetchAssetMarketDataRequest, config?: AxiosRequestConfig): Promise<operations.FetchAssetMarketDataResponse>;
    /**
     * Get the market metrics of an asset over a given timeframe
     */
    fetchAssetMarketHistory(req: operations.FetchAssetMarketHistoryRequest, config?: AxiosRequestConfig): Promise<operations.FetchAssetMarketHistoryResponse>;
    fetchAssetMetadata(req: operations.FetchAssetMetadataRequest, config?: AxiosRequestConfig): Promise<operations.FetchAssetMetadataResponse>;
    /**
     * Retrieve trade history for a given asset.
     */
    fetchAssetTradeHistory(req: operations.FetchAssetTradeHistoryRequest, config?: AxiosRequestConfig): Promise<operations.FetchAssetTradeHistoryResponse>;
    fetchMultipleAssetMarketData(req: operations.FetchMultipleAssetMarketDataRequest, config?: AxiosRequestConfig): Promise<operations.FetchMultipleAssetMarketDataResponse>;
    /**
     * Get the market metrics for any DEX pair
     */
    fetchPairMarketData(req: operations.FetchPairMarketDataRequest, config?: AxiosRequestConfig): Promise<operations.FetchPairMarketDataResponse>;
    /**
     * Fetch all DEX pairs from a specific asset
     */
    fetchPairsMarketData(req: operations.FetchPairsMarketDataRequest, config?: AxiosRequestConfig): Promise<operations.FetchPairsMarketDataResponse>;
    /**
     * Get the historical balance of any EVM-compatible wallets, at any time
     */
    fetchWalletHistoryBalance(req: operations.FetchWalletHistoryBalanceRequest, config?: AxiosRequestConfig): Promise<operations.FetchWalletHistoryBalanceResponse>;
    /**
     * Fetch Wallet Portfolio
     *
     * @remarks
     * Get the portfolio of holdings from any EVM-compatible wallets, at any time
     */
    fetchWalletHoldings(req: operations.FetchWalletHoldingsRequest, config?: AxiosRequestConfig): Promise<operations.FetchWalletHoldingsResponse>;
    /**
     * Get Portfolio
     */
    fetchWalletNFTs(req: operations.FetchWalletNFTsRequest, config?: AxiosRequestConfig): Promise<operations.FetchWalletNFTsResponse>;
    /**
     * Fetch Wallet Transactions
     *
     * @remarks
     * Retrieve all transactions for a specified wallet within a given timeframe.
     */
    fetchWalletTransactions(req: operations.FetchWalletTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.FetchWalletTransactionsResponse>;
}
