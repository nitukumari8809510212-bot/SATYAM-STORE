async function pay(amount){

const res = await fetch("http://localhost:5000/api/orders/create-order",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({amount})
});

const order = await res.json();

const options = {

key:"YOUR_KEY_ID",
amount:order.amount,
currency:"INR",
order_id:order.id,

handler:function(response){
alert("Payment Successful");
console.log(response);
}

};

const rzp = new Razorpay(options);
rzp.open();

}