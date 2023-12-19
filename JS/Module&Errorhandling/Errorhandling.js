//without try catch
let couponcodestatus = (couponcode) => {
  if (couponcode == "") console.log(`Coupon Code cannot be empty!!!`);
  else if (isNaN(couponcode)) console.log(`Invalid Coupon Code!!!`);
  else
    console.log(
      `Your entered coupon code ${couponcode} is activated, Enjoy Prime Subscription!!!`
    );
};

let couponcode = prompt(`Enter the 4 digit coupon code`);
couponcodestatus(couponcode);

//with try catch
let couponcodestatus1 = (couponcode1) => {
  try {
    if (couponcode1 == "") throw `Coupon Code cannot be empty!!!`;
    else if (isNaN(couponcode1)) throw `Invalid Coupon Code!!!`;
    else
      return `Your entered coupon code ${couponcode1} is activated, Enjoy Prime Subscription!!!`;
  } catch (err) {
    return err;
  }
};

let couponcode1 = prompt(`Enter the 4 digit coupon code`);
console.log(couponcodestatus1(couponcode1));

//finally{} -> if try catch (if error occurs or not)execute or not, finally will execute.
