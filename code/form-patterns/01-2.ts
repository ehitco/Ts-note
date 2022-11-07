/* Copyright 2022, Aiden. */
/**
 * 接口适配器
 */
interface Adaptee {
    operation1(): void;
    operation2(): void;
}

abstract class AbsAdapter implements Adaptee {
    public operation1(): void {}
    public operation2(): void {}
}

class UseClass extends AbsAdapter {
    public operation1(): void {} // 重写该类
}
