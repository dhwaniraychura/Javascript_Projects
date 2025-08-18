let choice, menuChoice, price = 0,itemPrice = 0, GST = 0, discount = 0, discountPrice = 0, items = 0, highestPrice = 0, lowestPrice = 120;
do {
    console.log(`==== Welcome to the Cafe ====
    1.Place a Order
    2.View Bill
    3.Apply discount
    4.Change cafe password
    5.View Cafe Report
    0.Exit`);
    choice = parseInt(prompt("Enter Your Choice :"));
    if (choice === 1) {
        do {
            console.log(`==== Welcome to the Cafe Menu ====
           1.Coffee (₹50)
           2.Tea (₹30)
           3.Sandwich (₹80)
           4.Pastry (₹100)
           0.Exit`);
            menuChoice = parseInt(prompt("Enter Your Choice :"));
            if (menuChoice == 1) {
                console.log("Your Coffee has been Ordered Successfully!!!");
                price += 50;
                itemPrice = 50;
                items++;

            }
            else if (menuChoice == 2) {
                console.log("Your Tea has been Ordered Successfully!!!");
                price += 30;
                items++;
                itemPrice = 30;
            }
            else if (menuChoice == 3) {
                console.log("Your Sandwich has been Ordered Successfully!!!");
                price += 80;
                items++;
                itemPrice = 80;
            }
            else if (menuChoice == 4) {
                console.log("Your Pastry has been Ordered Successfully!!!");
                price += 100;
                items++;
                itemPrice = 100;
            }
            else if (menuChoice == 0) {
                console.log("Exit...");
            }
            else {
                console.log("Invalid Choice!!!");
            }
            if (itemPrice > highestPrice) {
                highestPrice = itemPrice;
            }
            if (itemPrice < lowestPrice) {
                lowestPrice = itemPrice;
            }
        } while (menuChoice != 0);

    }
    else if (choice === 2) {
        console.log("=== Your Bill ===");
        console.log(`Subtotal :₹${price}`);
        console.log(`GST (5%) :₹${GST = (0.05 * price).toFixed(2)}`);
        console.log(`Grand Total :₹${(price + parseFloat(GST))}`);
        document.write(`<h2>=== Your Bill ===</h2>`);
        document.write(`<br>Subtotal :₹${price}`);
        document.write(`<br>GST (5%) :₹${GST = (0.05 * price).toFixed(2)}`);
        document.write(`<br>Grand Total :₹${(price + parseFloat(GST))}`);
    }
    else if (choice === 3) {
        if (price > 1000) {
            console.log(`You got 20% discount on your ordered`);
            document.write(`<br>You got 20% discount on your ordered`);
            discount = price * 0.20;
        }
        else if (price > 500) {
            console.log(`You have got 10% on yiour ordered`);
            document.write(`<br>You have got 10% on yiour ordered`);
            discount = price * 0.10;
        }
        console.log(`Original :₹${price}`);
        console.log(`Discount :₹${discount.toFixed(2)}`);
        console.log(`Final :₹${discountPrice = price - discount}`);
        document.write(`<br>Original :₹${price}`);
        document.write(`<br>Discount :₹${discount.toFixed(2)}`);
        document.write(`<br>Final :₹${discountPrice = price - discount}`);
        price = discountPrice;
    }
    else if (choice === 4) {
        var Setpassword = "1234";
        var Oldpassword = prompt("Enter Your Old password :");
        let Newpassword = prompt("Enter Your New password :");
        let Confirmpassword = prompt("Enter Confirm password :");

        if (Setpassword === Oldpassword) {
            if (Newpassword === Confirmpassword) {
                if (Newpassword != Setpassword) {
                    if (Newpassword.length >= 4) {
                        if (/[A-Z]/.test(Newpassword) && /[!@#$%^&*(),.?":{}|<>]/.test(Newpassword) && /[0-9]/.test(Newpassword)) {
                            Setpassword = Newpassword;
                            console.log("Your New Password has been set sucessfully!!");
                            console.log(`Your new password is : ${Setpassword}`);
                        }
                        else {
                            console.log("New Password must contain one character Capital and one special character and one digit...")
                        }
                    }
                    else {
                        console.log("New Password must contain 4 characters or more!!!");
                    }
                }
                else {
                    console.log("Newpassword and Old password must be different!!!");
                }
            }
            else {
                console.log("Newpassword and Confirm password must be same!!!");
            }
        }
        else {
            console.log("Your Old password is not matched!!!");
        }
    }
    else if (choice === 5) {
        if (items === 0) {
            console.log("No Solded Items Yet...");
            document.write(`<h2><br>=== Report===</h2>`);
            document.write("<br>No Solded Items Yet...");
        }
        else {
            console.log(`Total Items Sold :${items}`);
            console.log(`Highest price item :${highestPrice}`);
            console.log(`Lowest price item :${lowestPrice}`);
            console.log(`Average price :${((price) / items)}`);
            document.write("<h2><br>=== Report ===</h2>");
            document.write(`<br>Total Items Sold :${items}`);
            document.write(`<br>Highest price item :${highestPrice}`);
            document.write(`<br>Lowest price item :${lowestPrice}`);
            document.write(`<br>Average price :${((price) / items)}`);
        }
    }
    else if (choice === 0) {
        console.log("Exit...");
    }
    else {
        console.log("Invalid Choice...");
    }
} while (choice != 0);

