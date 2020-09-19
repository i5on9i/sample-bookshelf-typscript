
import knex from 'knex';
import Bookshelf from 'bookshelf';

// Setting up the database connection
const conn: knex = knex({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'jprice',
    charset: 'utf8'
  }
})

export const bookshelf = Bookshelf(conn)

