import { SpeakeasyBase } from "../../../internal/utils";
import { AssetTransaction } from "./assettransaction";
export declare class Transaction extends SpeakeasyBase {
    amount?: number;
    amountUsd?: number;
    asset?: AssetTransaction;
    blockchain?: string;
    from?: string;
    hash?: string;
    methodId?: string;
    timestamp?: number;
    to?: string;
    txCost?: number;
    type?: string;
}
