const searchBox = document.getElementById('search-box');
const taskContainer = document.getElementById('task-container');



// input box and create todo
searchBox.addEventListener("keyup",(e)=>{
    if(searchBox.value == '' && e.keyCode == 13)
    {
        alert("You must write something");
    }
    else{
        if(e.keyCode===13)
        {
            let li = document.createElement("li");
            li.innerHTML = searchBox.value;
            taskContainer.appendChild(li);

            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);
            searchBox.value = "";
            savaData();
        }
    }
});

// complete task and delete task
taskContainer.addEventListener('click', function(e){

    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        savaData();
    }
    else if(e.target.tagName=== "SPAN"){
        e.target.parentElement.remove();
        savaData();
    }

},false);


// save todo in local file

function savaData()
{
    localStorage.setItem("data",taskContainer.innerHTML);
}

function showTask()
{
    taskContainer.innerHTML = localStorage.getItem("data");
}
showTask();


// task left
var listItems = document.getElementsByTagName("LI");
var count = document.getElementById('count');
var totalListItems = listItems.length;
count.innerHTML = totalListItems;