import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";
export declare class FetchMultipleAssetMarketDataRequest extends SpeakeasyBase {
    /**
     * Comma separated list of asset names or Ethereum addresses (max 500)
     */
    assets?: string;
    /**
     * Comma separated list of blockchain names
     */
    blockchains?: string;
    /**
     * Comma separated list of symbols
     */
    symbols?: string;
}
export declare class FetchMultipleAssetMarketDataResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Bad request response.
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * Successful response with market data.
     */
    multiDataResponse?: shared.MultiDataResponse;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: AxiosResponse;
}
