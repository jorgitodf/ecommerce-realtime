'use strict'

const OrderHook = exports = module.exports = {}

OrderHook.updateValues = async (modelInstance) => {
  model.$sideLoaded.subtotal = await model.items().getSum('subtotal')
  model.$sideLoaded.qty_items = await model.items().getSum('quantity')
  model.$sideLoaded.discount = await model.discounts().getSum('discount')
  model.total = ($sideLoaded.subtotal - $sideLoaded.discount)
}

OrderHook.updateupdateCollectionValuesValues = async (modelInstance) => {
  for (let model of models) {
    model = await OrderHook.updateValues(model)
  }
}
