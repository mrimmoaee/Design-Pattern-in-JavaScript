class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  hasAccess() {
    return this.name === "Bob";
  }
}

const users = [new User(1, "Bob"), new User(2, "John")];

function getUser(id) {
  return users.find((user) => user.id === id);
}

function printUser(id) {
  const user = getUser(id);

  /* ----------------------------------------------------------------------------------------------------------------------- */
  /*        when project will be bigger, each time guest name need to be changed if there is any new name come in future.    */
  /* ----------------------------------------------------------------------------------------------------------------------- */

  /* ----------------------------------------------------------------------------------------------------------------------- */
  /*       Null value need to check every time    */
  /* ----------------------------------------------------------------------------------------------------------------------- */

  let name = "Guest";
  if (user != null && user.name != null) name = user.name;
  console.log("Hello" + name);

  if (user != null && user.hasAccess != null && user.hasAccess()) {
    console.log("You have access");
  } else {
    console.log("You are not allowed here");
  }
}
