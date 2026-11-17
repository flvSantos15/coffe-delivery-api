"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    _id;
    _name;
    _description;
    _priceInCents;
    _isActive;
    constructor(props) {
        this._id = props.id;
        this._name = props.name;
        this._description = props.description ?? null;
        this._priceInCents = props.priceInCents;
        this._isActive = props.isActive;
        this.validatePrice(props.priceInCents);
        this.validate();
    }
    validate() {
        if (!this._id || this._id.trim() === '')
            throw new Error('Id é obrigatório');
        if (!this._name || this._name.trim() === '')
            throw new Error('Nome não pode ser vazio');
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get priceInCents() {
        return this._priceInCents;
    }
    get description() {
        return this._description;
    }
    isAvailableForSale() {
        return this._isActive;
    }
    changePrice(newPriceInCents) {
        this.validatePrice(newPriceInCents);
        this._priceInCents = newPriceInCents;
    }
    validatePrice(price) {
        if (!Number.isSafeInteger(price)) {
            throw new Error('Preço precisa ser um inteiro.');
        }
        if (price <= 0) {
            throw new Error('Preço precisa ser maior que zero.');
        }
    }
}
exports.Product = Product;
//# sourceMappingURL=product.entity.js.map