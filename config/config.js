require('dotenv').config()
module.exports = {
  development: {
    database: 'recipes_for_me',
    dialect: 'postgres'
  },
  test: {
    database: 'recipes_for_me_test',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
