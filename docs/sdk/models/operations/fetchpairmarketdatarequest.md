# FetchPairMarketDataRequest


## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `address`                                                          | *string*                                                           | :heavy_check_mark:                                                 | The address of the smart-contract of the pair (or pool, or vault). | 0x6488f911c6cd86c289aa319c5a826dcf8f1ca065                         |
| `asset`                                                            | *any*                                                              | :heavy_minus_sign:                                                 | The name/address of the asset you want in return                   | Tether                                                             |
| `blockchain`                                                       | *string*                                                           | :heavy_minus_sign:                                                 | Blockchain of the pair (only mandatory for Balancer V2 pairs).     | Mantle                                                             |