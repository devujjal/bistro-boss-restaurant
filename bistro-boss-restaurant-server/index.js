const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const port = process.env.PORT || 5000;


//middleware

app.use(cors());
app.use(express.json())



const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.iam7h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        const database = client.db('BistroDB');
        const menus = database.collection('menu');
        const carts = database.collection('carts');

        app.get('/menu', async (req, res) => {
            const page = parseInt(req.query?.page) || 0;
            const size = parseInt(req.query?.size) || 6;

            let query = {};
            if (req.query.category) {
                query = { category: req.query.category };
            }

            try {
                const cursor = menus.find(query).skip(page * size).limit(size);
                const result = await cursor.toArray();
                res.send(result);
            } catch (error) {
                console.error('Error fetching menu:', error);
                res.status(500).send({ error: 'Failed to fetch menu' });
            }
        });


        //Total Menu Items Counts
        app.get('/menu-counts', async (req, res) => {
            let query = {};
            if (req.query.category) {
                query = { category: req.query.category };
            }

            try {
                const result = await menus.countDocuments(query);
                res.send({ result });
            } catch (error) {
                console.error('Error fetching menu counts:', error);
                res.status(500).send({ error: 'Failed to fetch menu counts' });
            }
        });


        //Items access from the carts collection
        app.get('/carts', async (req, res) => {
            try {

                const query = { email: req.query?.email }
                const result = await carts.find(query).toArray();
                res.send(result)

            } catch (error) {
                console.error('Error fetching all carts items:', error);
                res.status(500).send({ error: 'Failed to fetch all carts items' });
            }
        })

        // Items store to the database
        app.post('/carts', async (req, res) => {
            try {
                const itemBody = req.body;
                const result = await carts.insertOne(itemBody);
                res.send(result)

            } catch (error) {
                console.error('Error fetching carts:', error);
                res.status(500).send({ error: 'Failed to fetch carts' });
            }
        })


        //Items delete from database
        app.delete('/carts/:id', async (req, res) => {
            try {
                const id = req.params.id;
                const query = { _id: new ObjectId(id) };
                const result = await carts.deleteOne(query);
                res.send(result)
            } catch (error) {
                console.error('Error fetching carts item delete:', error);
                res.status(500).send({ error: 'Failed to fetch carts item delete' });
            }
        })



        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);




app.get('/', (req, res) => {
    res.send('Bistro Boss is Running!')
})

app.listen(port, () => {
    console.log(`Bistro Boss is Running in ${port}`)
})