import { customAlphabet } from 'nanoid';

const FACTORY_ADDRESS = process.env.CONTRACT_NAME;
const CUSTOMER_PREFIX_KEY = 'near.loyalty-program.customer.prefix.';
const MERCHANT_ID_KEY = 'near.loyalty-program.merchant.id';

const nanoid = customAlphabet(
    '0123456789abcdefghijklmnopqrstuvwxyz',
    13,
  );

export function getCustomerPrefix() {
    const prefix = CUSTOMER_PREFIX_KEY + getMerchantId();
    if (getItemFromLocalStorage(prefix) === null) {
        localStorage.setItem(prefix, nanoid());
    } 
    
    return getItemFromLocalStorage(prefix);
}

function getItemFromLocalStorage(key) {
    return localStorage.getItem(key);
}

export function getMerchantId() {
    if (getItemFromLocalStorage(MERCHANT_ID_KEY) == null) {
        throw Error("You need to log in first as a merchant.")
    }
    return getItemFromLocalStorage(MERCHANT_ID_KEY);
}

export function setMerchantId(merchantAccountId) {
    // trimming network suffix
    const merchantId = merchantAccountId.slice(0, -8);
    localStorage.setItem(MERCHANT_ID_KEY, merchantId);
}

export function getManagerContract() {
    const merchant = getMerchantId();
    return merchant + "-manager." + FACTORY_ADDRESS;
}

export function getFtContract() {
    const merchant = getMerchantId();
    return merchant + "-ft." + FACTORY_ADDRESS;
}

export function getMerchantAddress() {
    const merchant = getMerchantId();
    return merchant + ".testnet";
}
