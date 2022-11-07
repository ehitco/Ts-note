/* Copyright 2022, Aiden. */
/**
 * 装饰模式
 * 装饰模式试图在运行时向现有对象添加行为。 从某种意义上说，我们可以将其视为动态继承，因为即使没有创建新类来添加行为，我们也正在创建具有扩展功能的新对象。

这样考虑：假设我们拥有一个带有move方法的Dog类，现在您想扩展其行为，因为我们想要一只超级狗和一只可以游泳的狗。

通常，我们需要在 Dog 类中添加move 行为，然后以两种方式扩展该类，即SuperDog和SwimmingDog类。 但是，如果我们想将两者混合在一起，则必须再次创建一个新类来扩展它们的行为，但是，有更好的方法。

组合让我们可以将自定义行为封装在不同的类中，然后使用该模式通过将原始对象传递给它们的构造函数来创建这些类的新实例。 让我们看一下代码：
 */
abstract class Animal {
    abstract move(): void;
}

abstract class SuperDecorator extends Animal {
    protected comp: Animal;

    constructor(decoratedAnimal: Animal) {
        super();
        this.comp = decoratedAnimal;
    }

    abstract move(): void;
}

class Dog extends Animal {
    public move(): void {
        console.log('Moving the dog...');
    }
}

class SuperAnimal extends SuperDecorator {
    public move(): void {
        console.log('Starts flying...');
        this.comp.move();
        console.log('Landing...');
    }
}

class SwimmingAnimal extends SuperDecorator {
    public move(): void {
        console.log('Jumps into the water...');
        this.comp.move();
    }
}

const dog = new Dog();

console.log('--- Non-decorated attempt: ');
dog.move();

console.log('--- Flying decorator --- ');
const superDog = new SuperAnimal(dog);
superDog.move();

console.log("--- Now let's go swimming --- ");
const swimmingDog = new SwimmingAnimal(dog);
swimmingDog.move();
