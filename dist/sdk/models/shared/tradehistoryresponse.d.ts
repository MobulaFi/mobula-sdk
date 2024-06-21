import { SpeakeasyBase } from "../../../internal/utils";
export declare class TradeHistoryResponseData extends SpeakeasyBase {
    blockchain?: string;
    date?: number;
    hash?: string;
    tokenAmount?: number;
    tokenPrice?: number;
    type?: string;
    valueUsd?: number;
}
export declare class TradeHistoryResponse extends SpeakeasyBase {
    data?: TradeHistoryResponseData[];
}
