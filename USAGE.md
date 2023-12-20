<!-- Start SDK Example Usage [usage] -->
```typescript
import { SDK } from "openapi";

async function run() {
    const sdk = new SDK();

    const name = "bitcoin";

    const res = await sdk.searchCryptoByName(name);

    if (res?.statusCode !== 200) {
        throw new Error("Unexpected status code: " + res?.statusCode || "-");
    }

    // handle response
}

run();

```
<!-- End SDK Example Usage [usage] -->