let array_of_form_data = [
    ["Owen", "Testing Form Entry", "123", "321", " Test Comment here! Hi!"]
]

function SubmitPress(){
    let name = document.getElementById("name_input");
    let title = document.getElementById("title_input");
    let rank1 = document.getElementById("rank1");
    let rank2 = document.getElementById("rank2");
    let comment = document.getElementById("comments_input");
    
    const data_array = 
    [name.value, title.value, rank1.value, rank2.value, comment.textContent];

    array_of_form_data.push(data_array);
    console.log("index current is " + array_of_form_data.length)
    //console.log(array_of_form_data[])
    UpdateForm_ReceiverList(array_of_form_data.length - 1);
}

function UpdateForm_ReceiverList(index_num){
    const listitem = document.createElement("li");
    const node = document.createTextNode(array_of_form_data[index_num][0]);
    listitem.appendChild(node);
    const element = document.getElementById("left-lesserhalf");
    listitem.id = index_num;
    listitem.onclick = function() {
        ClickedForm_ReceivedItem(this);
    }
    element.appendChild(listitem)
}

function ClickedForm_ReceivedItem(item) {
    console.log("clicked " + item.id);
    let entry_data = array_of_form_data[item.id];
    document.getElementById("received_name").innerHTML 
    = "Name : " + entry_data[0];
    document.getElementById("received_title").innerHTML 
    = "Title : " + entry_data[1];
    document.getElementById("received_rank1").innerHTML 
    = "Rank 1 : " + entry_data[2];
    document.getElementById("received_rank2").innerHTML 
    = "Rank 2 : " + entry_data[3];
    document.getElementById("received_comments").innerHTML 
    = "Comment : " + entry_data[4];
}