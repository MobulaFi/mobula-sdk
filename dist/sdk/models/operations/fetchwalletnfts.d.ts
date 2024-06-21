import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class FetchWalletNFTsRequest extends SpeakeasyBase {
    /**
     * Blockchains to fetch NFTs from (by default, all) - comma separated, chain ID or chain name
     */
    blockchains?: string;
    /**
     * Will force a new on-chain data fetch
     */
    force?: boolean;
    /**
     * Wallet address or ENS or Mobula username
     */
    wallet?: string;
}
export declare class FetchWalletNFTsData extends SpeakeasyBase {
    amount?: string;
    contractType?: string;
    metadata?: string;
    name?: string;
    symbol?: string;
    tokenAddress?: string;
    tokenHash?: string;
    tokenId?: string;
    tokenUri?: string;
}
/**
 * A list of NFTs in the queried wallet
 */
export declare class FetchWalletNFTsResponseBody extends SpeakeasyBase {
    data?: FetchWalletNFTsData[];
}
export declare class FetchWalletNFTsResponse extends SpeakeasyBase {
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
     * A list of NFTs in the queried wallet
     */
    object?: FetchWalletNFTsResponseBody;
}
