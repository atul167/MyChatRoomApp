// Anything related to join/ leave/ get all users is here

const users = [];

function userJoin(id, username, room) {
  const user = { id, username, room };
  users.push(user);
  return user;
}
function getCurrentUser(id) {
  return users.find((user) => user.id === id);
}

function userLeave(id) {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    // const p = users.splice(index, 1)[0];
    //   if (p)
    //       console.log(p);
    // else
    //     console.log(2);

    /*[
  { id: 'nm42rOC7CiFAn5qCAAAD', username: 'asfa', room: 'J' }
] this is example of p 
 */
    return users.splice(index, 1)[0];
  }
}

function getRoomUsers(room) {
  return users.filter((user) => user.room === room);
}

module.exports = {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers,
};
