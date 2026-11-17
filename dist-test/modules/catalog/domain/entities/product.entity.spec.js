"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const strict_1 = __importDefault(require("node:assert/strict"));
const node_test_1 = require("node:test");
const product_entity_1 = require("./product.entity");
(0, node_test_1.test)('should fail if name is not provided', () => {
    strict_1.default.throws(() => new product_entity_1.Product({
        id: 'cffe-1',
        name: '',
        priceInCents: 1300,
        isActive: true,
    }), {
        message: 'Nome não pode ser vazio',
    });
});
(0, node_test_1.test)('should fail if price is zero', () => {
    strict_1.default.throws(() => new product_entity_1.Product({
        id: 'cffe-1',
        name: 'Expresso',
        priceInCents: 0,
        isActive: true,
    }), {
        message: 'Preço precisa ser maior que zero.',
    });
});
(0, node_test_1.test)('should fail if price is less than zero', () => {
    strict_1.default.throws(() => new product_entity_1.Product({
        id: 'cffe-1',
        name: 'Tradicional',
        priceInCents: -100,
        isActive: true,
    }), {
        message: 'Preço precisa ser maior que zero.',
    });
});
(0, node_test_1.test)('should preserve price after invalid change', () => {
    const coffee = new product_entity_1.Product({
        id: 'coffee-1',
        name: 'Expresso',
        priceInCents: 100,
        isActive: true,
    });
    strict_1.default.throws(() => coffee.changePrice(-100), {
        message: 'Preço precisa ser maior que zero.',
    });
    strict_1.default.equal(coffee.priceInCents, 100);
});
(0, node_test_1.test)('should preserve price after invalid change', () => {
    const coffee = new product_entity_1.Product({
        id: 'coffee-1',
        name: 'Expresso',
        priceInCents: 100,
        isActive: true,
    });
    strict_1.default.throws(() => coffee.changePrice(-100), {
        message: 'Preço precisa ser maior que zero.',
    });
    strict_1.default.equal(coffee.priceInCents, 100);
});
(0, node_test_1.test)('should throw error if price is decimal', () => {
    strict_1.default.throws(() => new product_entity_1.Product({
        id: 'coffee-1',
        name: 'Expresso',
        priceInCents: 12.5,
        isActive: true,
    }), {
        message: 'Preço precisa ser um inteiro.',
    });
});
(0, node_test_1.test)('should create a valid product', () => {
    const product = new product_entity_1.Product({
        id: 'coffee-1',
        name: 'Expresso',
        priceInCents: 1290,
        isActive: true,
    });
    strict_1.default.equal(product.priceInCents, 1290);
    strict_1.default.equal(product.isAvailableForSale(), true);
});
(0, node_test_1.test)('should update the price of a created product', () => {
    const product = new product_entity_1.Product({
        id: 'coffee-1',
        name: 'Expresso Tradicional',
        priceInCents: 1290,
        isActive: true,
    });
    strict_1.default.equal(product.priceInCents, 1290);
    strict_1.default.equal(product.isAvailableForSale(), true);
    product.changePrice(1500);
    strict_1.default.equal(product.priceInCents, 1500);
});
//# sourceMappingURL=product.entity.spec.js.map