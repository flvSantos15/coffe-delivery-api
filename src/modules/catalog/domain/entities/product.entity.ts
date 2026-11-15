type ProductContructorProps = {
  id: string
  name: string
  description?: string | null
  priceInCents: number
  isActive: boolean
}

export class Product {
  private _id: string
  private _name: string
  private _description: string | null
  private _priceInCents: number
  private _isActive: boolean

  constructor(props: ProductContructorProps) {
    this._id = props.id
    this._name = props.name
    this._description = props.description ?? null
    this._priceInCents = props.priceInCents
    this._isActive = props.isActive

    this.validatePrice(props.priceInCents)
    this.validate()
  }

  private validate() {
    if (!this._id) throw new Error("Id é obrigatório")
    if (!this._name || this._name.trim() === "") throw new Error("Nome não pode ser vazio")
  }

  get id(): string {
    return this._id
  }
  get name(): string {
    return this._name
  }
  get priceInCents(): number {
    return this._priceInCents
  }
  get description(): string | null {
    return this._description
  }

  isAvailableForSale(): boolean {
    return this._isActive
  }

  changePrice(newPriceInCents: number) {
    this.validatePrice(newPriceInCents)

    this._priceInCents = newPriceInCents
  }

  private validatePrice(price: number): void {
    if (!Number.isSafeInteger(price)) {
      throw new Error('Preço precisa ser um inteiro.')
    }

    if (price <= 0) {
      throw new Error('Preço precisa ser maior que zero.')
    }
  }
}
