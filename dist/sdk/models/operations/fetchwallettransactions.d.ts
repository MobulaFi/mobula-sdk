import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";
export declare enum Order {
    Asc = "asc",
    Desc = "desc"
}
export declare class FetchWalletTransactionsRequest extends SpeakeasyBase {
    /**
     * Specific asset to filter transactions
     */
    asset?: string;
    /**
     * Blockchains to fetch NFTs from (by default, all) - comma separated, chain ID or chain name
     */
    blockchains?: string;
    /**
     * Start of the timeframe for transactions (timestamp)
     */
    from?: number;
    /**
     * Number of transactions to return per page
     */
    limit?: number;
    /**
     * Number of transactions to skip
     */
    offset?: number;
    order?: Order;
    /**
     * End of the timeframe for transactions (timestamp)
     */
    to?: number;
    /**
     * The user wallet queried
     */
    wallet: string;
}
export declare class FetchWalletTransactionsLastUpdated extends SpeakeasyBase {
    /**
     * Timestamp of the last internal transaction.
     */
    internal?: number;
    /**
     * Timestamp of the last update.
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
export declare class FetchWalletTransactionsData extends SpeakeasyBase {
    lastUpdated?: Record<string, FetchWalletTransactionsLastUpdated>;
    /**
     * Limit value for pagination.
     */
    limit?: number;
    /**
     * Offset value for pagination.
     */
    offset?: number;
    /**
     * Current page number.
     */
    page?: number;
    /**
     * Total number of transactions.
     */
    total?: number;
    transactions?: shared.Transaction[];
}
/**
 * Successful response
 */
export declare class FetchWalletTransactionsResponseBody extends SpeakeasyBase {
    data?: FetchWalletTransactionsData;
}
export declare class FetchWalletTransactionsResponse extends SpeakeasyBase {
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
    object?: FetchWalletTransactionsResponseBody;
}
