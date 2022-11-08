// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

// If you would like to take a look at the inputs that are passed into these functions, please
// feel free to check out the data.js file.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function (fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function (numbers) {
  var count = 0;

  _.each(numbers, function (number, index) {
    if (number % 5 === 0) {
      count += 1;
    }
  });

  return count;
};

// use _.each to build an array containing only tweets belonging to a specified user.

// I - tweets (array of tweet objects), user.
// O - Array of tweets belonging to a specific user.
// C - None.
// E - None.

var getUserTweets = function(tweets, user) {
  var result = [];

  _.each(tweets, function(tweet) {
    if (tweet.user === user) {
      result.push(tweet);
    }
  });

  return result;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
// I - Fruits array, targetFruit string.
// O - Array with specified fruit string.
// C - Should not create new array.
// E - None listed.
var onlyOneFruit = function (fruits, targetFruit) {

  var desiredFruit = _.filter(fruits, function(fruit) {
    return fruit === targetFruit;
  });

  return desiredFruit;
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
// I - fruits array, letter ('P').
// O - array of fruits starting with letter 'P'.
// C - Should not create new array.
// E - None listed.
var startsWith = function (fruits, letter) {
  var result = _.filter(fruits, function(fruit) {
    return fruit[0] === letter;
  });

  return result;
};

// return a filtered array containing only cookie-type desserts.
// I - desserts (array of dessert objects).
// O - array with dessert objects where type is cookie.
// C - None.
// E - None.
var cookiesOnly = function (desserts) {
  var cookies = _.filter(desserts, function(dessert) {
    return dessert.type === 'cookie';
  });

  return cookies;
};

// rebuild the getUserTweets function from above with _.filter instead
// I - tweets array of tweet objects, user string.
// O - array of tweet objects for the given user.
// C - should not create a new array.
// E - none listed.
var filterUserTweets = function(tweets, user) {
  var result = _.filter(tweets, function(tweet) {
    return tweet.user === user;
  });

  return result;
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
// I - fruits (array of strings).
// O - new array with all strings to upper case.
// C - Should not create new array.
// E - None listed.
var upperCaseFruits = function (fruits) {
  var cappedFruits = _.map(fruits, function(fruit) {
    return fruit.toUpperCase();
  });

  return cappedFruits;
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
// I - array of dessert objects.
// O - returns array of objects that have 'glutenFree' property with boolean value.
// C - should not create new array.
// E - none listed.

var glutenFree = function (desserts) {
  var result = _.map(desserts, function(dessert) {
    var ingredientList = dessert.ingredients;

    if (ingredientList.indexOf('flour') === -1) {
      dessert['glutenFree'] = true;
    } else {
      dessert['glutenFree'] = false;
    }

    return dessert;
  });

  return result;
};

// given an array of tweet objects, return a new array of strings
// containing only the message properties.

// I - tweets (array of tweet objects).
// O - array of strings with message properties.
// C - none listed.
// E - none listed.
var allUserMessages = function(tweets) {
  var result = _.map(tweets, function(tweet) {
    return tweet.message;
  });

  return result;
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/

// I - groceries array of item objects.
// O - array of grocery items with a new property 'salePrice'.
// C - none listed.
// E - none listed.
var applyCoupon = function (groceries, coupon) {
  var saleItems = _.map(groceries, function(item) {
    var priceAmount = Number(item.price.slice(1)).toFixed(2) * 100; // 1210
    var newPrice = priceAmount * (1 - coupon); // 1210 * .8
    item['salePrice'] = '$' + (newPrice / 100).toFixed(2);
    return item;
  });

  return saleItems;
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
// I - products (array of objects).
// O - total price of all products (number).
// C -
// E -
var sumTotal = function (products) {
  var totalPrice = _.reduce(products, function(memo, item) {
    return memo + Number(item.price.slice(1));
  }, 0);

  return totalPrice;
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }

// I - desserts (array of dessert objects)
// O - object with dessertType key and count of dessertType value.
// C - none listed.
// E - none listed.
var dessertCategories = function (desserts) {
  _.reduce(desserts, function(memo, dessert) {
    var dessertType = dessert.type;
    console.log(result, memo, dessert);

    if (result[dessertType] === undefined) {
      result[dessertType] = 1;
    } else {
      result[dessertType] += 1;
    }
  }, result = {});

  return result;
};

// return an object with the proper count of all user messages
/*
 example output:
  var tweetCountPerUser = countMessagesPerUser(tweets);
  {
    "douglascalhoun": 5,
    "mracus": 6,
    "shawndrost": 5,
    "sharksforcheap": 3
  }
*/

// I - tweets (array of tweet objects).
// O - object with user as key, and count of user messages as value.
// C - use _.reduce
// E - none listed.
var countMessagesPerUser = function(tweets) {
  _.reduce(tweets, function(memo, tweet) {
    var username = tweet.user;

    if (result[username] === undefined) {
      result[username] = 1;
    } else {
      result[username] += 1;
    }
  }, result = {});

  return result;
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!

// I - movies (array of movie objects)
// O - array with movies that came out between 1990 and 2000.
// C - use array as accumulator (don't push to external array)
// E - none listed.

var ninetiesKid = function (movies) {
  _.reduce(movies, function(memo, movie) {
    if (movie.releaseYear > 1990 && movie.releaseYear < 2000) {
      result.push(movie.title);
    }
  }, result = []);

  return result;
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function (movies, timeLimit) {

};
