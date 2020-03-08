
"use strict"

require('dotenv').config();

const {
    Client
} = require('pg');

const client = new Client({
    user: 'user',
    password: 'pass',
    host: 'localhost',
    port: 5432,
    database: 'db'
});

client.connect();

async function createNewPersonTable() {
    try {
        await client.connect()
        const table = await client.query(
            `CREATE TABLE IF NOT EXISTS
        newPerson(
          id SERIAL primary key,
          name varchar(50),
          password varchar(50),
          email varchar(50)
          username varchar(50)
        );`
        )
    } catch (err) {
        console.log(`here\'s the ${err}`)
    } finally {
        await client.end()
        console.log('SUCCESSFULL DISCONNECTION')
    }
}

async function createNewOrderTable() {
    try {
        await client.connect()
        const table = await client.query(
            `CREATE TABLE IF NOT EXISTS
            newOrder(
                id SERIAL primary key,
            );
            `
            )

    } catch (err) {
        console.log(`here\'s the ${err}`)
    } finally {
        await client.end()
        console.log('SUCCESSFULL DISCONNECTION')
    }
}

const newReg = async(name, password, email, username) => {
    try {
        await client.connect()
        const query = await client.query(
            `INSERT INTO newPerson
                (name, password, email, username) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`, [name, password, email, username]
        )
        return query.rows[0].id;
    } catch (err) {
        console.log(`here\'s the ${err}`)
    } finally {
        await client.end()
        console.log('SUCCESSFULL DISCONNECTION')
    }
}

const addOrder = async() => {
    try {
        await client.connect()
        const query = await client.query(
                `INSERT INTO newPerson
                    (name, password, email, username) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`, [name, password, email, username]
            )
        return query.rows[0].id;
    } catch (err) {
        console.log(`here\'s the ${err}`)
    } finally {
        await client.end()
        console.log('SUCCESSFULL DISCONNECTION')
    }
}

const formRecomendation = async() => {
    try {
        await client.connect()
        const query = await client.query(
            `insert into newPerson
            (name, email, meassge) VALUES ($1, $2, $3) RETURNING *`, [name, email, meassge]
            )
    } catch (err) {
        console.log(`here\'s the ${err}`);
    } finally {
        await client.end()
        console.log('SUCCESSFULL DISCONNECTION')
    }
}
