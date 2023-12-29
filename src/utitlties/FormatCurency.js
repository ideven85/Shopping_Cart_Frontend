const CURRENCY_FORMATTER=
    new Intl.NumberFormat(undefined,
        {currency: "USD",style: "currency"});

export function currencyFormatter(price) {
    return CURRENCY_FORMATTER.format(price);

}