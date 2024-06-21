import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";
export declare class FetchWalletHoldingsRequest extends SpeakeasyBase {
    /**
     * Blockchains to fetch holdings from (by default, all) - comma separated, chain ID or chain name
     */
    blockchains?: string;
    /**
     * Will use cached data if available
     */
    cache?: boolean;
    /**
     * Amount of seconds after which the cache is considered stale (default 5min)
     */
    stale?: number;
    /**
     * The user wallet queried
     */
    wallet: string;
}
export declare class CrossChainBalances extends SpeakeasyBase {
    address?: string;
    balance?: number;
    balanceRaw?: string;
    chainId?: number;
}
export declare class Assets extends SpeakeasyBase {
    asset?: shared.Asset;
    crossChainBalances?: Record<string, CrossChainBalances>;
    /**
     * Estimated balance of the asset in the wallet.
     */
    estimatedBalance?: number;
    /**
     * Current price of the asset.
     */
    price?: number;
    /**
     * Token balance of the asset in the wallet.
     */
    tokenBalance?: number;
}
export declare class FetchWalletHoldingsData extends SpeakeasyBase {
    assets?: Assets[];
    /**
     * Total balance of the wallet in USD.
     */
    totalWalletBalance?: number;
    /**
     * Wallet address queried.
     */
    wallet?: string;
}
export declare class LastUpdated extends SpeakeasyBase {
    /**
     * Timestamp of the last internal transaction.
     */
    internal?: number;
    /**
     * Timestamp of the last update
     */
    lastUpdated?: number;
    /**
     * Timestamp of the last normal transaction.
     */
    normal?: number;
    /**
     * Timestamp of the last token transaction.
     */
    token?: number;
}
/**
 * Successful response
 */
export declare class FetchWalletHoldingsResponseBody extends SpeakeasyBase {
    data?: FetchWalletHoldingsData;
    lastUpdated?: Record<string, LastUpdated>;
}
export declare class FetchWalletHoldingsResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: AxiosResponse;
    /**
     * Successful response
     */
    object?: FetchWalletHoldingsResponseBody;
}
