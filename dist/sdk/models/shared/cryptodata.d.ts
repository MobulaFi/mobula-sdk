import { SpeakeasyBase } from "../../../internal/utils";
export declare class CryptoData extends SpeakeasyBase {
  /**
   * The blockchains on which the cryptocurrency exists
   */
  blockchains?: string[];
  /**
   * The contracts associated with the cryptocurrency
   */
  contracts?: string[];
  /**
   * The unique identifier of the cryptocurrency
   */
  id?: number;
  /**
   * Liquidity
   */
  liquidity?: number;
  /**
   * Logo
   */
  logo?: string;
  /**
   * Market cap
   */
  marketCap?: number;
  /**
   * The name of the cryptocurrency
   */
  name?: string;
  /**
   * Price
   */
  price?: number;
  /**
   * Price change 1h
   */
  priceChange1h?: number;
  /**
   * Price change 1y
   */
  priceChange1y?: number;
  /**
   * Price change 24h
   */
  priceChange24h?: number;
  /**
   * Price change 30d
   */
  priceChange30d?: number;
  /**
   * Price change 7d
   */
  priceChange7d?: number;
  /**
   * The symbol of the cryptocurrency
   */
  symbol?: string;

  decimals?: number[];
}
