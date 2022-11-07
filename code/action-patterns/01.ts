/* Copyright 2022, Aiden. */
/**
 * 观察者模式
 */
interface AbstractSubject {
    registerObserver(observer: Observer): void;
    remove(observer: Observer): void;
    notifyObservers(): void;
}

class ConcreteSubject implements AbstractSubject {
    private observers: Array<Observer>;

    constructor() {
        this.observers = [];
    }

    public registerObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    public remove(observer: Observer): void {
        const observerIndex = this.observers.findIndex((value) => {
            return value == observer;
        });

        observerIndex >= 0 && this.observers.splice(observerIndex, 1);
    }

    public notifyObservers(): void {
        this.observers.forEach((observer) => observer.update());
    }
}

interface Observer {
    update(): void;
}

class ConcreteObserver1 implements Observer {
    public update(): void {
        console.log('已经执行更新操作1，值为');
    }
}
class ConcreteObserver2 implements Observer {
    public update(): void {
        console.log('已经执行更新操作2，值为');
    }
}

function main() {
    const subject: AbstractSubject = new ConcreteSubject();
    const observer1: Observer = new ConcreteObserver1();
    const observer2: Observer = new ConcreteObserver2();

    subject.registerObserver(observer1);
    subject.registerObserver(observer2);

    subject.notifyObservers();
}

main();
