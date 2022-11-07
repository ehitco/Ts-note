/* Copyright 2022, Aiden. */
/**
 * 单例模式可能是最著名的设计模式之一。它是一种创建模式，因为它确保无论我们尝试实例化一个类多少次，我们都只有一个可用的实例。

处理数据库连接之类的可以单例模式，因为我们希望一次只处理一个，而不必在每个用户请求时重新连接。
 */
class MyDBConn {
    protected static instance: MyDBConn | null = null;
    private id = 0;
    // 构造函数 私有，限制外部实例化
    private constructor() {
        this.id = Math.random();
    }

    public getID(): number {
        return this.id;
    }

    public static getInstance(): MyDBConn {
        if (!MyDBConn.instance) {
            MyDBConn.instance = new MyDBConn();
        }
        return MyDBConn.instance;
    }
}

const connections = [
    MyDBConn.getInstance(),
    MyDBConn.getInstance(),
    MyDBConn.getInstance(),
    MyDBConn.getInstance(),
    MyDBConn.getInstance(),
];

connections.forEach((c) => {
    console.log(c.getID());
});
