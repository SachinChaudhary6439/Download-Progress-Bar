let bar = document.querySelector(".bar");
let percent = document.querySelector("#percent");
let count = 0;
let interval = setInterval(function(){
if(count<=100){ 
percent.textContent = count + "%";
bar.style.width = percent.textContent;
count++;
}
else{
  document.querySelector("h2").textContent = "Downloaded";
  clearInterval(interval);
}

},30);

