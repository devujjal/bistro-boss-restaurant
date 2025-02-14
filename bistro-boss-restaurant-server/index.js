const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const stripe = require('stripe')(process.env.PAYMENT_SEC_KEY)
let cookieParser = require('cookie-parser')
const port = process.env.PORT || 5000;



const options = {
    origin: ['http://localhost:5173'],
    credentials: true
}


//middleware

app.use(cors(options));
app.use(express.json());
app.use(cookieParser())



//VerifyToken with async fuction

/* const verifyJwtAsync = (token, secret) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                reject(err); // Reject with the error
            } else {
                resolve(decoded);
            }
        });
    });
};

const verifyToken = async (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({ message: "Unauthorized Access" }); // Use .json()
        }

        await verifyJwtAsync(token, process.env.ACCESS_TOKEN); // No need to store decoded if not used later

        next(); // Only call next() if verification is successful

    } catch (err) {
        console.error("Token Verification Error:", err); // Log the error for debugging
        return res.status(401).json({ message: "Unauthorized Access" }); // Same message for all errors
    }
}; */





//JWT Middleware
const verifyToken = (req, res, next) => {
    const token = req.cookies.token
    if (!token) {
        return res.status(401).send({ message: "Unauthorized Access" })
    }

    jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: "Unauthorized Access" })
        }

        req.decoded = decoded;
        next();
    })
}




const { MongoClient, ServerApiVersion, ObjectId, ClientSession } = require('mongodb');
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
        const users = database.collection('users');
        const menus = database.collection('menu');
        const carts = database.collection('carts');
        const payments = database.collection('payments');

        app.post('/jwt', async (req, res) => {
            const userEmail = req.body;
            const token = jwt.sign(userEmail, process.env.ACCESS_TOKEN, { expiresIn: "1d" });
            res.cookie('token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
                maxAge: 24 * 60 * 60 * 1000,
                path: '/'
            })

            res.send({ message: true })
        })


        app.post('/jwt-signout', async (req, res) => {
            res.clearCookie('token', {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
                maxAge: 0,
                path: '/'
            })

            res.send({ message: 'Cookie cleared successfully' })
        })



        //VerifyAdmin middleware
        const verifyAdmin = async (req, res, next) => {
            try {
                const email = req.decoded?.email;
                const query = { email: email };
                const user = await users.findOne(query);
                const isAdmin = user?.role === 'admin';

                if (!isAdmin) {
                    return res.status(401).send({ message: 'Unauthorized Access' });
                }

                next();
            } catch (error) {
                console.error('Error in verifyAdmin middleware:', error);
                res.status(500).send({ message: 'Internal Server Error' });
            }
        };



        // All users data Access
        app.get('/users', verifyToken, verifyAdmin, async (req, res) => {

            const cursor = users.find();
            const result = await cursor.toArray();
            res.send(result)
        })


        // Check if the user role is Admin
        app.get('/user/admin/:email', verifyToken, async (req, res) => {
            const email = req.params?.email; // Access email from route params
            if (email !== req.decoded?.email) {
                return res.status(403).send({ message: 'Forbidden Access' });
            }

            try {
                const query = { email: email };
                const user = await users.findOne(query);
                let admin = false;

                if (user) {
                    admin = user?.role === 'admin'; // Check if the user role is 'admin'
                }

                res.send({ admin });
            } catch (error) {
                console.error('Error verifying admin user role:', error);
                res.status(500).send({ error: 'Failed to verify admin user role' });
            }
        });




        // User data save in DB
        app.post('/users', async (req, res) => {
            try {
                const body = req.body;

                const query = { email: body?.email };
                const isExsit = await users.findOne(query);
                if (isExsit) {
                    return res.send({ message: 'user already exsit', insertedId: null })
                }

                const result = await users.insertOne(body);
                res.send(result)
            } catch (error) {
                console.error('Error storing user:', error);
                res.status(500).send({ error: 'Failed to store users' });
            }
        })


        // Users role updated
        app.patch('/users/admin/:id', verifyToken, verifyAdmin, async (req, res) => {
            try {
                const id = req.params.id;
                const filter = { _id: new ObjectId(id) };
                const updatedDoc = {
                    $set: {
                        role: 'admin'
                    }
                }
                const result = await users.updateOne(filter, updatedDoc);
                res.send(result)
            } catch (error) {
                console.error('Error update the user role:', error);
                res.status(500).send({ error: 'Failed to update the user role' });
            }
        })


        // Delete the user
        app.delete('/users/:id', verifyToken, async (req, res) => {
            try {
                const id = req.params.id;
                const query = { _id: new ObjectId(id) };
                const result = await users.deleteOne(query);
                res.send(result)
            } catch (error) {
                console.error('Error delete a user:', error);
                res.status(500).send({ error: 'Failed to delete a user' });
            }
        })



        app.get('/menu', async (req, res) => {

            try {
                const page = parseInt(req.query?.page);
                const size = parseInt(req.query?.size);

                let query = {};
                if (req.query.category) {
                    query = { category: req.query.category };
                }

                const cursor = menus.find(query).skip(page * size).limit(size);
                const result = await cursor.toArray();
                res.send(result);
            } catch (error) {
                console.error('Error fetching menu:', error);
                res.status(500).send({ error: 'Failed to fetch menu' });
            }
        });

        //Get Individual Item
        app.get('/menu/:id', async (req, res) => {
            try {
                const id = req.params.id;
                const query = { _id: new ObjectId(id) }
                const result = await menus.findOne(query);
                res.send(result);
            } catch (error) {
                console.error('Error fetching individual item:', error);
                res.status(500).send({ error: 'Internal Server Error' });
            }
        })


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


        // item added
        app.post('/menu', verifyToken, verifyAdmin, async (req, res) => {
            try {
                const item = req.body;
                const doc = {
                    name: item.name,
                    recipe: item.recipe,
                    image: item.image,
                    category: item.category,
                    price: item.price
                }

                const result = await menus.insertOne(doc) // we could insert the item variable directly instead of doc;
                res.send(result)

            } catch (error) {
                console.error('Error fetching add item:', error);
                res.status(500).send({ error: 'Internal Server Error' });
            }
        })


        //Update Individual Item
        app.patch('/menu/:id', verifyToken, verifyAdmin, async (req, res) => {
            try {
                const id = req.params.id;
                const item = req.body;
                const filter = { _id: new ObjectId(id) };
                const updatedDoc = {
                    $set: {
                        name: item?.name,
                        recipe: item?.recipe,
                        image: item?.image,
                        category: item?.category,
                        price: item?.price
                    }
                };
                const result = await menus.updateOne(filter, updatedDoc);
                res.send(result)
            } catch (error) {
                console.error('Error fetching updated item:', error);
                res.status(500).send({ error: 'Internal Server Error' });
            }
        })



        // item delete
        app.delete('/menu/:id', async (req, res) => {
            try {
                const id = req.params.id;
                const query = { _id: new ObjectId(id) };
                const result = await menus.deleteOne(query);
                res.send(result)
            } catch (error) {
                console.error('Error fetching delte item:', error);
                res.status(500).send({ error: 'Internal Server Error' });
            }
        })


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


        app.get('/payments/:email', verifyToken, async (req, res) => {
            try {
                const email = req.params.email;
                console.log(email)
                const query = { email: email };
                const result = await payments.find(query).toArray();
                res.send(result)

            } catch (error) {
                console.error('Error fetching all payments by individual payment history:', error);
                res.status(500).send({ error: 'Internal Server Error' });
            }
        })


        app.post('/payments', async (req, res) => {
            try {
                const body = req.body;

                const query = {
                    _id: {
                        $in: body.cartIds.map(id => new ObjectId(id))
                    }
                };

                const result = await payments.insertOne(body);

                const deleteResult = await carts.deleteMany(query);

                res.send({ result, deleteResult });
            } catch (error) {
                console.error('Error processing payment:', error);
                res.status(500).send({ error: 'Internal Server Error' });
            }
        });





        // Dashboard Analytic
        app.get('/analytic', verifyToken, verifyAdmin, async (req, res) => {
            try {
                const products = await menus.estimatedDocumentCount();
                const orders = await payments.estimatedDocumentCount();
                const customers = await users.estimatedDocumentCount();
                const finalRevenue = await payments.aggregate([
                    {
                        $group: { _id: null, totalAmount: { $sum: '$price' } }
                    }
                ]).toArray();

                const chartData = await payments.aggregate([
                    {
                        $unwind: '$itemIds'
                    },
                    {
                        $lookup: {
                            from: 'menu',
                            localField: 'itemIds',
                            foreignField: '_id',
                            as: 'menus'
                        }
                    },
                    {
                        $unwind: '$menus'
                    },
                    {
                        $group: {
                            _id: '$menus.category',
                            quantity: { $sum: 1 },
                            totalAmount: { $sum: '$menus.price' }
                        }
                    }
                ]).toArray()


                res.send({ products, orders, customers, finalRevenue, chartData })
                // res.send({ chartData })

            } catch (error) {
                console.error('Error send analytic:', error);
                res.status(500).send({ error: 'Internal Server Error' });
            }
        })


        //user analytic
        app.get('/user-analytic/:email', verifyToken, async (req, res) => {
            try {
                const tokenEmail = req.decoded?.email;
                const email = req.params.email;

                if (tokenEmail != email) {
                    return res.status(403).send({ message: 'Forbidden Access' })
                }

                const query = { email: email };
                const payment = await payments.aggregate([
                    {
                        $match: query
                    },
                    {
                        $group: {
                            _id: null,
                            paymentDone: { $sum: 1 }
                        }
                    }
                ]).toArray();


                const purchaseOrder = await payments.aggregate([
                    {
                        $match: query
                    },
                    {
                        $unwind: '$itemIds'
                    },
                    {
                        $group: {
                            _id: null,
                            purchaseOrderDone: { $sum: 1 }
                        }
                    }
                ]).toArray();

                res.send({ payment, purchaseOrder })

            } catch (error) {
                res.status(500).send({ error: 'Faild to fetch student-analytic data' });
            }
        })





        // Create a PaymentIntent
        app.post('/create-payment-intent', async (req, res) => {
            try {
                const { price } = req.body;

                const totalAmount = parseFloat(price * 100)

                const paymentIntent = await stripe.paymentIntents.create({
                    amount: totalAmount,
                    currency: 'usd',
                    payment_method_types: ['card'],
                });

                res.send({ clientSecret: paymentIntent.client_secret });
            } catch (error) {
                console.error('Error creating PaymentIntent:', error);
                res.status(500).send({ error: 'Internal Server Error' });
            }

        });




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