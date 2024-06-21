import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";
export declare class SearchCryptoByNameRequest extends SpeakeasyBase {
    /**
     * Name or symbol (or starting name/symbol) of the asset
     */
    name?: string;
}
/**
 * OK
 */
export declare class SearchCryptoByNameResponseBody extends SpeakeasyBase {
    data?: shared.SearchCryptoData[];
}
export declare class SearchCryptoByNameResponse extends SpeakeasyBase {
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
    object?: SearchCryptoByNameResponseBody;
}
