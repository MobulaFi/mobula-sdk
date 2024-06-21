import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";
export declare class FetchAssetMetadataRequest extends SpeakeasyBase {
    /**
     * Name or contract address of the asset
     */
    asset: string;
    /**
     * Blockchain of the asset
     */
    blockchain?: string;
}
export declare class FetchAssetMetadataResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    asset?: shared.Asset;
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
}
