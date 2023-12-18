//Promise Methods
const friendsreached1 = new Promise((resolve, reject) => {
    let reached_or_not = true;
    if(reached_or_not) setTimeout(resolve,3000,"Partha Reached the Goa Beach!");
    else reject("Partha have not reached Yet!");
});

const friendsreached2 = new Promise((resolve, reject) => {
    let reached_or_not = true;
    if(reached_or_not) setTimeout(resolve,2000,"Suresh Reached the Goa Beach!");
    else reject("Suresh have not reached Yet!");
});

const friendsreached3 = new Promise((resolve, reject) => {
    let reached_or_not = true;
    if(reached_or_not) setTimeout(resolve,5000,"JP Reached the Goa Beach!");
    else reject("JP have not reached Yet!");
});

//Promise.all()
Promise.all([friendsreached1, friendsreached2, friendsreached3])
       .then((reached) => console.log(reached))
       .catch((not_reached) => console.log(not_reached));

//Promise.allSettled()
Promise.allSettled([friendsreached1, friendsreached2, friendsreached3])
       .then((reached) => console.log(reached))
       .catch((not_reached) => console.log(not_reached));

//Promise.any()
Promise.any([friendsreached1, friendsreached2, friendsreached3])
       .then((reached) => console.log(reached))
       .catch((not_reached) => console.log(not_reached));

//Promise.race()
Promise.race([friendsreached1, friendsreached2, friendsreached3])
       .then((reached) => console.log(reached))
       .catch((not_reached) => console.log(not_reached));