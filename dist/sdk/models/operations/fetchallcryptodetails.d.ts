import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";
export declare class FetchAllCryptoDetailsRequest extends SpeakeasyBase {
    /**
     * Extra fields needed
     */
    fields?: string;
}
/**
 * OK
 */
export declare class FetchAllCryptoDetailsResponseBody extends SpeakeasyBase {
    data?: shared.CryptoData[];
}
export declare class FetchAllCryptoDetailsResponse extends SpeakeasyBase {
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
    object?: FetchAllCryptoDetailsResponseBody;
}
