/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { objectToClass, SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export enum Order {
    Asc = "asc",
    Desc = "desc",
}

export class FetchWalletTransactionsRequest extends SpeakeasyBase {
    /**
     * Specific asset to filter transactions
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=asset" })
    asset?: string;

    /**
     * Blockchains to fetch NFTs from (by default, all) - comma separated, chain ID or chain name
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=blockchains" })
    blockchains?: string;

    /**
     * Start of the timeframe for transactions (timestamp)
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" })
    from?: number;

    /**
     * Number of transactions to return per page
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
    limit?: number;

    /**
     * Number of transactions to skip
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
    offset?: number;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" })
    order?: Order;

    /**
     * End of the timeframe for transactions (timestamp)
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" })
    to?: number;

    /**
     * The user wallet queried
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=wallet" })
    wallet: string;
}

export class FetchWalletTransactionsLastUpdated extends SpeakeasyBase {
    /**
     * Timestamp of the last internal transaction.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "internal" })
    internal?: number;

    /**
     * Timestamp of the last update.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "last_updated" })
    lastUpdated?: number;

    /**
     * Timestamp of the last normal transaction.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "normal" })
    normal?: number;

    /**
     * Timestamp of the last token transaction.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "token" })
    token?: number;
}

export class FetchWalletTransactionsData extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: FetchWalletTransactionsLastUpdated })
    @Expose({ name: "lastUpdated" })
    @Transform(
        ({ value }) => {
            const obj: Record<string, FetchWalletTransactionsLastUpdated> = {};
            for (const key in value) {
                obj[key] = objectToClass(value[key], FetchWalletTransactionsLastUpdated);
            }
            return obj;
        },
        { toClassOnly: true }
    )
    lastUpdated?: Record<string, FetchWalletTransactionsLastUpdated>;

    /**
     * Limit value for pagination.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "limit" })
    limit?: number;

    /**
     * Offset value for pagination.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "offset" })
    offset?: number;

    /**
     * Current page number.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "page" })
    page?: number;

    /**
     * Total number of transactions.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "total" })
    total?: number;

    @SpeakeasyMetadata({ elemType: shared.Transaction })
    @Expose({ name: "transactions" })
    @Type(() => shared.Transaction)
    transactions?: shared.Transaction[];
}

/**
 * Successful response
 */
export class FetchWalletTransactionsResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => FetchWalletTransactionsData)
    data?: FetchWalletTransactionsData;
}

export class FetchWalletTransactionsResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;

    /**
     * Successful response
     */
    @SpeakeasyMetadata()
    object?: FetchWalletTransactionsResponseBody;
}