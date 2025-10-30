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
  h2.textContent = "Download Completed"
  clearInterval(interval);
}

},30);
