import { SpeakeasyBase } from "../../../internal/utils";
export declare class MarketHistoryResponseData extends SpeakeasyBase {
    priceHistory?: Record<string, any>[];
}
export declare class MarketHistoryResponse extends SpeakeasyBase {
    data?: MarketHistoryResponseData;
}
