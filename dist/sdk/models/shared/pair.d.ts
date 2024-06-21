import { SpeakeasyBase } from "../../../internal/utils";
export declare class PairToken0 extends SpeakeasyBase {
    address?: string;
    name?: string;
    price?: number;
    priceToken?: number;
}
export declare class PairToken1 extends SpeakeasyBase {
    address?: string;
    name?: string;
    price?: number;
    priceToken?: number;
}
export declare class Pair extends SpeakeasyBase {
    token0?: PairToken0;
    token1?: PairToken1;
}
