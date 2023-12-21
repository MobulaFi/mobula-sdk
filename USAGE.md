<!-- Start SDK Example Usage [usage] -->
```typescript
import { Mobula } from "mobula-sdk";

async function run() {
    const sdk = new Mobula();

    const res = await sdk.searchCryptoByName({
        name: "bitcoin",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->