/* Some new cashiers started to work at your restaurant.
They are good at taking orders, but they don't know how to capitalize words, or use a space bar!
The kitchen staff expect the items to be in the same order as they appear in the menu.
The menu items are fairly simple, there is no overlap in the names of the items:

1. Burger
2. Fries
3. Chicken
4. Pizza
5. Sandwich
6. Onionrings
7. Milkshake
8. Coke
 */

//Function takes in a string
function getOrder(input) {
  //Create list of menu items
  let menu = ['Burger', 'Fries', 'Chicken', 'Pizza', 'Sandwich', 'Onionrings', 'Milkshake', 'Coke'];
  //Find in the input string of given items that match the menu list
  let items = input.match(/(burger|fries|chicken|pizza|sandwich|onionrings|milkshake|coke)/gi);
  //Map through each and set the first letter to uppercase and split each word
  items = items.map((element) => element.charAt(0).toUpperCase() + element.slice(1));
  //Place in the same order as provided by the menu array
  items = items.sort((a, b) => {
    if (menu.indexOf(a) > menu.indexOf(b)) {
      return 1;
    } else {
      return -1;
    }
  });
  //Returns string a string of the merged items
  return items.join(" ");
}