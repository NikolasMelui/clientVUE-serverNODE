module.exports = {
  port: process.env.PORT || 8081,
  mailSender: {
    user: 'nikolasmelui@gmail.com',
    pass: 'Nikolaspassword1'
  },
  db: {
    database: process.env.DB_NAME || 'samitcom',
    user: process.env.DB_USER || 'samitcom',
    password: process.env.DB_PASS || 'samitcom',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './samitcom.sqlite'
    } 
  }
};