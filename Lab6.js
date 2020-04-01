//Exercise 1
db.Restaurants.find()

// Exercise 2
db.Restaurants.find(
    { "cuisine": {$eq: "Japanese"}},
    { "_id": 1, "cuisine": 1, "name": 1, "city": 1, "restaurant_id": 1}).sort({"restaurant_id": 1}).sort({"restaurant_id": 1})

//Exercise 3
db.Restaurants.find(
    {$and: [{"cuisine": {$eq: "Delicatessen"}},
    {"city": {$ne: "Brooklyn"}}]},
    {"_id": 0, "cuisine": 1, "name": 1, "city": 1}).sort({"name": 1})

//Exercise 4

db.Restaurants.find(
    {$and: [{"cuisine": {$in: ["Bakery", "Chicken", "Hamburgers", "American"]}},
    {"restaurant_id": {$gt: "4000000"}},
    {"city":{ $ne: "Brooklyn"}}]},
    {"_id": 0, "cuisine": 1, "name": 1, "city": 1, "restaurant_id": 1}
    ).sort({"restaurant_id": -1})

//Exercise 5

db.Restaurants.find(
    {$or: [
        {"address.street": /Thai$/},
        {"address.street": /Street$/},
        {"address.zipcode": {$eq: "17988"}}
    ]}
)