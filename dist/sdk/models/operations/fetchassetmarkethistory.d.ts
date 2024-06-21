import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";
export declare class FetchAssetMarketHistoryRequest extends SpeakeasyBase {
    /**
     * The asset you want to target - asset name only works for assets listed on Mobula.
     */
    asset: string;
    /**
     * Blockchain of the asset - only mandatory if asset is sent as smart-contract.
     */
    blockchain?: string;
    /**
     * JS Timestamp (milliseconds) of the beginning of the timeframe (if not provided, genesis)
     */
    from?: number;
    /**
     * JS Timestamp (milliseconds) of the end of the timeframe (if not provided, end)
     */
    to?: number;
}
export declare class FetchAssetMarketHistoryResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * OK
     */
    marketHistoryResponse?: shared.MarketHistoryResponse;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: AxiosResponse;
}
