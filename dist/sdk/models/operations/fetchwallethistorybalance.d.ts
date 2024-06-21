import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";
export declare class FetchWalletHistoryBalanceRequest extends SpeakeasyBase {
    /**
     * Blockchains to fetch history from (by default, all) - comma separated, chain ID or chain name
     */
    blockchains?: string;
    /**
     * JS Timestamp (miliseconds) of the beginning of the timeframe (if not provided, genesis)
     */
    from?: number;
    /**
     * JS Timestamp (miliseconds) of the end of the timeframe (if not provided, end)
     */
    to?: number;
    /**
     * The user wallet queried
     */
    wallet: string;
}
export declare class FetchWalletHistoryBalanceResponse extends SpeakeasyBase {
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
     * OK
     */
    walletHistoryResponse?: shared.WalletHistoryResponse;
}
