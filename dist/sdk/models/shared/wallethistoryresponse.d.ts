import { SpeakeasyBase } from "../../../internal/utils";
export declare class BalanceHistory extends SpeakeasyBase {
}
export declare class WalletHistoryResponseData extends SpeakeasyBase {
    balanceHistory?: BalanceHistory[];
    balanceUsd?: number;
    wallet?: string[];
}
export declare class WalletHistoryResponse extends SpeakeasyBase {
    data?: WalletHistoryResponseData;
}
