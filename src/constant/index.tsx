export const breakpoints = {
    "(max-width: 640px)": {
        slides: {
            perView: 2.5,
            spacing: 10,
        },
    },
    "(min-width: 641px) and (max-width: 1024px)": {
        slides: {
            perView: 3.5,
            spacing: 12,
        },
    },
    "(min-width: 1025px) and (max-width: 1300px)": {
        slides: {
            perView: 4.5,
            spacing: 12,
        },
    },
    "(min-width: 1300px)": {
        slides: {
            perView: 5.5,
            spacing: 15,
        },
    },
}
export const navLinks = [
    { label: "المــنتجـــات", path: "/products" },
    { label: "إتصل بـــنا", path: "https://wa.me/201234567890" }, // ← رقمك بعد مفتاح الدولة بدون "+" مثلاً 20 لمصر
];
export const CURRENCY= "ILS"