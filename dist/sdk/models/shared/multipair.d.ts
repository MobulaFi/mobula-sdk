import { SpeakeasyBase } from "../../../internal/utils";
export declare class Token0 extends SpeakeasyBase {
    address?: string;
    decimals?: number;
    id?: number;
    logo?: string;
    name?: string;
    price?: number;
    priceToken?: number;
    symbol?: string;
}
export declare class Token1 extends SpeakeasyBase {
    address?: string;
    decimals?: number;
    id?: number;
    logo?: string;
    name?: string;
    price?: number;
    priceToken?: number;
    symbol?: string;
}
export declare class MultiPair extends SpeakeasyBase {
    address?: string;
    blockchain?: string;
    exchange?: string;
    factory?: string;
    liquidity?: number;
    price?: number;
    protocol?: string;
    token0?: Token0;
    token1?: Token1;
    volume?: number;
}
