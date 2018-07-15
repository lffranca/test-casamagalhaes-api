'use strict';
module.exports = (sequelize, DataTypes) => {
  var Category = sequelize.define('Category', {
    description: DataTypes.STRING
  }, {});
  Category.associate = function(models) {
    Category.hasMany( Category, { as: 'childs', hierarchy: true } )
    Category.belongsTo( Category, { as: 'parent', hierarchy: true } )
  };
  return Category;
};