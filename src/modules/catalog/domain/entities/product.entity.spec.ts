import assert from 'node:assert/strict';
import { test } from 'node:test';

import { Product } from './product.entity';

test('should fail if name is not provided', () => {
  assert.throws(
    () =>
      new Product({
        id: 'cffe-1',
        name: '',
        priceInCents: 1300,
        isActive: true,
      }),
    {
      message: 'Nome não pode ser vazio',
    },
  );
});

test('should fail if price is zero', () => {
  assert.throws(
    () =>
      new Product({
        id: 'cffe-1',
        name: 'Expresso',
        priceInCents: 0,
        isActive: true,
      }),
    {
      message: 'Preço precisa ser maior que zero.',
    },
  );
});

test('should fail if price is less than zero', () => {
  assert.throws(
    () =>
      new Product({
        id: 'cffe-1',
        name: 'Tradicional',
        priceInCents: -100,
        isActive: true,
      }),
    {
      message: 'Preço precisa ser maior que zero.',
    },
  );
});

test('should preserve price after invalid change', () => {
  const coffee = new Product({
    id: 'coffee-1',
    name: 'Expresso',
    priceInCents: 100,
    isActive: true,
  });

  assert.throws(() => coffee.changePrice(-100), {
    message: 'Preço precisa ser maior que zero.',
  });

  assert.equal(coffee.priceInCents, 100);
});

test('should preserve price after invalid change', () => {
  const coffee = new Product({
    id: 'coffee-1',
    name: 'Expresso',
    priceInCents: 100,
    isActive: true,
  });

  assert.throws(() => coffee.changePrice(-100), {
    message: 'Preço precisa ser maior que zero.',
  });

  assert.equal(coffee.priceInCents, 100);
});

test('should throw error if price is decimal', () => {
  assert.throws(
    () =>
      new Product({
        id: 'coffee-1',
        name: 'Expresso',
        priceInCents: 12.5,
        isActive: true,
      }),
    {
      message: 'Preço precisa ser um inteiro.',
    },
  );
});

test('should create a valid product', () => {
  const product = new Product({
    id: 'coffee-1',
    name: 'Expresso',
    priceInCents: 1290,
    isActive: true,
  });

  assert.equal(product.priceInCents, 1290);
  assert.equal(product.isAvailableForSale(), true);
});

test('should update the price of a created product', () => {
  const product = new Product({
    id: 'coffee-1',
    name: 'Expresso Tradicional',
    priceInCents: 1290,
    isActive: true,
  });

  assert.equal(product.priceInCents, 1290);
  assert.equal(product.isAvailableForSale(), true);

  product.changePrice(1500);

  assert.equal(product.priceInCents, 1500);
});
