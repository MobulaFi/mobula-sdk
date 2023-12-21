<!-- Start SDK Example Usage [usage] -->
```typescript
import { Mobula } from "mobula-sdk";
import { Order } from "mobula-sdk/dist/sdk/models/operations";

async function run() {
    const sdk = new Mobula();

    const res = await sdk.fetchWalletTransactions({
        blockchains: "56,Ethereum",
        wallet: "0xd99cB89A20822B0448936DF4f36803778CA5a003",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->