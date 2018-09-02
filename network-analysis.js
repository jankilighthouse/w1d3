var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  },
};

function getName (uid){
  console.log(uid)
  return data[uid].name
}


function whoDoIFollow(me){
  // console.log(me)
  let list = me.name + " follows: " + getName(me.follows[0])
  for (i = 1; i < me.follows.length; i++){
    list += ", " + getName(me.follows[i])
    // console.log(me)
    // data[me.follows[i]].FollowedBy.push(me.parent)
  }
    console.log(list)
}