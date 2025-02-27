document.getElementById('addmoney').addEventListener('click', function(){
    document.getElementById('addmoney').style.display = "block";
    document.getElementById('cashout').style.display = "none";
});
document.getElementById('cashout').addEventListener('click', function(){
    document.getElementById('addmoney').style.display = "none";
    document.getElementById('cashout').style.display = "block";
});