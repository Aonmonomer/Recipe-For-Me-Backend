'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'categories',
      [
        {
          title: 'Lactose Free',
          description:
            'These recipes are free of lactose containing ingredients such as milk, cheese, butter, and cream.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Gluten Free',
          description:
            'These recipes are free of gluten containing ingredients such as wheat, barley, rye, and their byproducts.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Vegetarian',
          description: 'These recipes are free of any meat or meat product.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Vegan',
          description:
            'These recipes are free of any animal products and animal byproducts..',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Kosher',
          description:
            'These recipes are in compliance with Kosher guidelines and contains ingredients that are certified Kosher.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Halal',
          description:
            'These recipes are in compliance with Halal guidelines and contains ingredients that are certified Halal.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Diabetic Friendly',
          description:
            'These recipes follow guidelines set up by the American Diabetes Association®.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Low Sodium',
          description:
            'These recipes follow guidelines set up by the American Heart Association.',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories', null, {})
  }
}
