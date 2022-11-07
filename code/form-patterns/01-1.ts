/* Copyright 2022, Aiden. */
/**
 * 对象适配器
 */
interface Target {
    request(): void;
}
// 被适配者
class Adaptee {
    constructor() {}
    // 这是源角色，有自己的的业务逻辑
    public specificRequest(): void {}
}
// 适配器
class Adapter implements Target {
    private adaptee: Adaptee;
    constructor(adaptee: Adaptee) {
        this.adaptee = adaptee;
    }
    public request(): void {
        this.adaptee.specificRequest();
    }
}
// 使用
const target: Target = new Adapter(new Adaptee());
target.request();
