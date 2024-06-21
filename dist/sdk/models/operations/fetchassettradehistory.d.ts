import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";
export declare class FetchAssetTradeHistoryRequest extends SpeakeasyBase {
    /**
     * Asset name or contract address to retrieve trade history for.
     */
    asset: string;
    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
}
export declare class FetchAssetTradeHistoryResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Bad request (e.g., missing asset parameter)
     */
    errorResponse?: shared.ErrorResponse;
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
    tradeHistoryResponse?: shared.TradeHistoryResponse;
}
