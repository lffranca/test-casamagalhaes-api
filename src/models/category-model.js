const {Category} = require('../../models')
const arrayToTree = require('array-to-tree')

const getCategories = async () => {
  const data = await Category.findAll({
    raw: true
  })

  console.log(data)

  return arrayToTree(data, {
    parentProperty: 'parentId',
    customID: 'id'
  })
}

module.exports = {getCategories}