import assert from 'node:assert/strict'
import { test } from 'node:test'

import { Product } from './product.entity'

test('should fail if name is not provided', () => {
  const coffe = new Product({
    id: 'cffe-1',
    name: '',
    priceInCents: 1300,
    isActive: true
  })

  assert.rejects(async () => {
    throw new TypeError('Nome não pode ser vazio')
  })
})

test('should fail if price is zero', () => {
  const coffe = new Product({
    id: 'cffe-1',
    name: '',
    priceInCents: 0,
    isActive: true
  })

  assert.rejects(async () => {
    throw new TypeError('Preço precisa ser maior que zero.')
  })
})

test('should fail if price is less than zero', () => {
  const coffe = new Product({
    id: 'cffe-1',
    name: '',
    priceInCents: -100,
    isActive: true
  })

  assert.rejects(async () => {
    throw new TypeError('Preço precisa ser maior que zero.')
  })
})

// testar a mudanca de preco
test('should fail if the price is changed to less than zero', () => {
  const coffe = new Product({
    id: 'cffe-1',
    name: '',
    priceInCents: 100,
    isActive: true
  })

  coffe.changePrice(-100)

  assert.rejects(async () => {
    throw new TypeError('Preço precisa ser maior que zero.')
  })
})

test('should create a valid product', () => {
  const product = new Product({
    id: 'coffee-1',
    name: 'Expresso',
    priceInCents: 1290,
    isActive: true,
  })

  assert.equal(product.priceInCents, 1290)
  assert.equal(product.isAvailableForSale(), true)
})