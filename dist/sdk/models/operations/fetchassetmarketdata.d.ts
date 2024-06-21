import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class FetchAssetMarketDataRequest extends SpeakeasyBase {
    /**
     * The asset you want to target - asset name only works for assets listed on Mobula.
     */
    asset?: string;
    /**
     * Blockchain of the asset - only mandatory if asset is sent as smart-contract.
     */
    blockchain?: string;
    /**
     * Symbol of the asset - only mandatory if no asset name/contract is provided
     */
    symbol?: string;
}
/**
 * OK
 */
export declare class FetchAssetMarketDataResponseBody extends SpeakeasyBase {
    data?: Record<string, any>;
}
export declare class FetchAssetMarketDataResponse extends SpeakeasyBase {
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
    object?: FetchAssetMarketDataResponseBody;
}
