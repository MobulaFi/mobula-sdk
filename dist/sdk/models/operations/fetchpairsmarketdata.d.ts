import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";
export declare class FetchPairsMarketDataRequest extends SpeakeasyBase {
    /**
     * The asset you want to target - asset name only works for assets listed on Mobula.
     */
    asset: string;
    /**
     * Blockchain of the asset - only mandatory if asset is sent as smart-contract.
     */
    blockchain?: string;
    /**
     * The offset of the results
     */
    offset?: number;
}
export declare class Data extends SpeakeasyBase {
    pairs?: shared.MultiPair[];
}
/**
 * OK
 */
export declare class FetchPairsMarketDataResponseBody extends SpeakeasyBase {
    data?: Data;
}
export declare class FetchPairsMarketDataResponse extends SpeakeasyBase {
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
    object?: FetchPairsMarketDataResponseBody;
}
