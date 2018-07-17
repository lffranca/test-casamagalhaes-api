const {Category} = require('../../models')
const arrayToTree = require('array-to-tree')

const getCategories = async () => {
  const data = await Category.findAll({
    raw: true
  })

  return arrayToTree(data, {
    parentProperty: 'parentId',
    customID: 'id'
  })
}

const updateCategory = async ({id, description}) => {
  const data = await Category.update({description}, {
    where: {id}
  })

  return data
}

const createCategory = async ({description, parentId}) => {
  const data = await Category.create({description, parentId})

  return data
}

const deleteCategory = async (id) => {
  const data = await Category.destroy({
    where: {id}
  })

  return data
}

module.exports = {getCategories, updateCategory, createCategory, deleteCategory}