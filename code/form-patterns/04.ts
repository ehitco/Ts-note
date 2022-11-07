/* Copyright 2022, Aiden. */
/**
 * Composite(组合模式)
 * 我们可以将product 放入Box中，也可以将Box放入其他Box中，这是组合的经典示例。因为我们要实现的是获得完整的交付价格，因此需要在大box里添加每个元素的价格(包括每个小box的价格)。
 */
interface IProduct {
    getName(): string;
    getPrice(): number;
}

class Product implements IProduct {
    private price: number;
    private name: string;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    public getPrice(): number {
        return this.price;
    }

    public getName(): string {
        return this.name;
    }
}

class Box implements IProduct {
    private products: IProduct[] = [];

    contructor() {
        this.products = [];
    }

    public getName(): string {
        return 'A box with ' + this.products.length + ' products';
    }

    add(p: IProduct): void {
        console.log('Adding a ', p.getName(), 'to the box');
        this.products.push(p);
    }

    getPrice(): number {
        return this.products.reduce((curr: number, b: IProduct) => curr + b.getPrice(), 0);
    }
}

//Using the code...
const box1 = new Box();
box1.add(new Product('Bubble gum', 0.5));
box1.add(new Product('Samsung Note 20', 1005));

const box2 = new Box();
box2.add(new Product('Samsung TV 20in', 300));
box2.add(new Product('Samsung TV 50in', 800));

box1.add(box2);

console.log('Total price: ', box1.getPrice());
