db.user.insertMany([
  {
    user_id: "Int32",
    user_name: "Varchar255",
    user_role: "Varchar255", // admin/master, sale or customer
    name: "Varchar255", // full name
    email: "Varchar255",
    address: "Varchar255",
    tel: "Int32",
  }
]);

db.product.insertMany([
  {
    product_id: "Int32",
    name: "Varchar255",
    brand: "Varchar255",
    desc: "Varchar255",
    price: "Double",
    quantity: "Int32",
    timestamp: {
      date_created: "Date",
      date_update: "Date",
    },
  }
]);

db.order.insertMany([
  {
    order_id: "Int32",
    user_id: "Int32",
    total_price: "Double",
    status: "Varchar255", // Open, Payment or Complete
    product_item:{
      product_id: "Int32",
      price_at_purchase: "Double",
      quantity: "Int32"
    },
    timestamp: {
      date_created: "Date",
      date_update: "Date",
    },
  }
]);

db.maintenance.insertMany([
  {
    maintenance_id: "Int32",
    user_id: "Int32", // User rold === customer
    order_id: "Int32",
    status: "Varchar255", // Open, Payment or Complete
    timestamp: {
      date_created: "Date",
      date_update: "Date",
    },
  }
]);