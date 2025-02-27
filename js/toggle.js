document.getElementById('addmoney').style.display = "block";
document.getElementById('cashout').style.display = "none";
document.getElementById('transfer').style.display = "none";
document.getElementById('bonus').style.display = "none";
document.getElementById('bill-pay').style.display = "none";


document.getElementById('add-money-box').addEventListener('click', function(){
    document.getElementById('addmoney').style.display = "block";
    document.getElementById('cashout').style.display = "none";
    document.getElementById('transfer').style.display = "none";
    document.getElementById('bonus').style.display = "none";
    document.getElementById('bill-pay').style.display = "none";
});
document.getElementById('cash-Out').addEventListener('click', function(){
    document.getElementById('cashout').style.display = "block";
    document.getElementById('addmoney').style.display = "none";
    document.getElementById('bonus').style.display = "none";
    document.getElementById('bill-pay').style.display = "none";
    document.getElementById('transfer').style.display = "none";
});
document.getElementById('transfer-box').addEventListener('click', function(){
    document.getElementById('transfer').style.display = "block";
    document.getElementById('addmoney').style.display = "none";
    document.getElementById('bonus').style.display = "none";
    document.getElementById('bill-pay').style.display = "none";
    document.getElementById('cashout').style.display = "none";
});
document.getElementById('bill-box').addEventListener('click', function(){
    document.getElementById('bill-pay').style.display = "block";
    document.getElementById('addmoney').style.display = "none";
    document.getElementById('bonus').style.display = "none";
    document.getElementById('transfer').style.display = "none";
    document.getElementById('cashout').style.display = "none";
});
document.getElementById('get-bonus').addEventListener('click', function(){
    document.getElementById('bonus').style.display = "block";
    document.getElementById('addmoney').style.display = "none";
    document.getElementById('bill-pay').style.display = "none";
    document.getElementById('transfer').style.display = "none";
    document.getElementById('cashout').style.display = "none";
});
document.getElementById('Logout-btn').addEventListener('click', function(){
    window.location.href = "./index.html"
})

