
const { Model } = require('objection');
const knex = require('../config/db')


Model.knex(knex);

class Order extends Model {
    static tableName = 'meal';

    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                id: { type: 'integer' },
                name: { type: 'string' },
                price: { type: 'integer' },
                description: { type: 'string' },
                is_vegetarian: { type: 'boolean' },
                created_at: { type: 'string' },
                updated_at: { type: 'string' }
            }
        };
    };
  }

  module.exports = Order;