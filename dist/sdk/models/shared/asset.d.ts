import { SpeakeasyBase } from "../../../internal/utils";
export declare class Data extends SpeakeasyBase {
    audit?: string;
    blockchains?: string[];
    chat?: string;
    circulatingSupply?: number;
    circulatingSupplyAddresses?: string[];
    contracts?: string[];
    description?: string;
    discord?: string;
    id?: number;
    kyc?: string;
    liquidity?: number;
    logo?: string;
    marketCap?: number;
    maxSupply?: number;
    name?: string;
    price?: number;
    symbol?: string;
    totalSupply?: number;
    totalSupplyContracts?: string[];
    twitter?: string;
    volume?: number;
    website?: string;
}
export declare class Asset extends SpeakeasyBase {
    data?: Data;
}
