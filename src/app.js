const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();

app.use(express.json());

const client = new MongoClient("mongodb+srv://<Cluster0>:<789456123asdf>@cluster0.hhojxlj.mongodb.net/?appName=Cluster0");

async function start() {

    await client.connect();

    console.log("MongoDB connected");

    const db = client.db("onlineShopping");
    const orders = db.collection("orders");


    // 1. Display all orders
    app.get("/orders", async (req, res) => {

        const data = await orders.find().toArray();

        res.json(data);
    });


    // 2. Update order status
    app.put("/orders/:id", async (req, res) => {

        const id = req.params.id;

        await orders.updateOne(
            { orderId: id },
            { $set: { orderStatus: req.body.orderStatus } }
        );

        res.send("Order status updated");
    });


    app.listen(3000, () => {
        console.log("Server running on port 3000");
    });
}

start();