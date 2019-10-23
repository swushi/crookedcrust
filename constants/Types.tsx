interface User {
  email: string;
}

interface Pizza {
  name: string
  toppings: Array<string>
  glutenFree?: boolean
  size?: string
}

interface Hoagie {
  name: string
}

interface Appetizer {
  name: string
}

interface Menu {
  pizzas: Array<Pizza>
  hoagies: Array<Hoagie>
  appetizers: Array<Appetizer>
}

interface Order {
  items: Array<any>
  totalPrice: number
  tax: number
  time: string
}
