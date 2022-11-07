/* Copyright 2022, HST. */
interface Product {
    pName: string;
    getName(): void;
}

// 具体产品一
class ConcreteProduct1 implements Product {
    pName = '篮球';
    constructor() {}
    getName(): void {
        console.log(this.pName);
    }
}

// 具体产品二
class ConcreteProduct2 implements Product {
    pName = '足球';
    constructor() {}
    getName(): void {
        console.log(this.pName);
    }
}
type pType = '1' | '2';
// 简单工厂
class SimpleFactory {
    public static createProduct(type: pType): Product {
        let product = new ConcreteProduct1();
        if (type === '1') {
            product = new ConcreteProduct1();
        } else if (type === '2') {
            product = new ConcreteProduct2();
        }

        return product;
    }
}

// 使用
const product = SimpleFactory.createProduct('2').getName();
