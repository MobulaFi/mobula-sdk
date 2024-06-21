import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";
export declare class FetchPairMarketDataRequest extends SpeakeasyBase {
    /**
     * The address of the smart-contract of the pair (or pool, or vault).
     */
    address: string;
    /**
     * The name/address of the asset you want in return
     */
    asset?: any;
    /**
     * Blockchain of the pair (only mandatory for Balancer V2 pairs).
     */
    blockchain?: string;
}
/**
 * OK
 */
export declare class FetchPairMarketDataResponseBody extends SpeakeasyBase {
    data?: shared.Pair;
}
export declare class FetchPairMarketDataResponse extends SpeakeasyBase {
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
    object?: FetchPairMarketDataResponseBody;
}
