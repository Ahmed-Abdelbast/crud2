

var nameInput=document.getElementById("nameInput");
var siteInput=document.getElementById("siteInput");

var array=[];
if(localStorage.getItem("sites") !=null){
    array=JSON.parse(localStorage.getItem("sites"));
    display();
};
var Myindex;
function addBookmark(){
    var sites={
        name:nameInput.value,
        link:siteInput.value,
    };
    
    if(validateURL()){
        array.push(sites);
        localStorage.setItem("sites",JSON.stringify(array));
        display();   
        clearInputField();      
    }
    else{
        Swal.fire({
            title: "validation URL",
            text: "Your URL must start with 'https://' and include '.com'",
            icon: "question"
          });
    }
    
    

};
function display(){
    cartona =``;
    for(var i=0;i<array.length;i++){
        cartona+=`
        
                 <div class="element row py-2">
                    <div class="column col-3">${i+1}</div>
                    <div class="column col-3">${array[i].name}</div>
                    <div class="column col-3">
                        <a href="${array[i].link}"><button class="btn btn-success"><i class="fa-regular fa-eye"></i> Visit</button></a>
                    </div>
                    <div class="column col-3">
                        <button onclick="deleteSite(${i})" class="btn btn-danger"><i class="fa-solid fa-trash-can"></i> Dlete</button>
                    </div>
    
                </div>
        `;
    };
    document.getElementById("containCard").innerHTML=cartona;
}
function deleteSite(index){
    array.splice(index,1);
    localStorage.setItem("sites",JSON.stringify(array));
    display();
}
function clearInputField(){
    nameInput.value="";
    siteInput.value="";  
}
function validateName(){
    
    // if(JSON.stringify(array).includes(nameInput.value)){
    //     document.getElementById("validationName").innerHTML=`
    //     <p class="border-top border-danger text-center text-danger border-1">This Bookmark already exists</p>
    //     `;

        
    //     if(nameInput.value===""){
    //         document.getElementById("validationName").innerHTML=`<p ></p> `;
            
    //     }
    // }
    // else{
        
    //     document.getElementById("validationName").innerHTML=`<p ></p> `;
        
    // }
    if(JSON.stringify(array).includes(nameInput.value) || nameInput.value ===""){
        document.getElementById("nameInput").classList.add("is-invali");d


    }
    else{
        document.getElementById("nameInput").classList.add("is-valid"); 
    }
};


function validateURL(){
    var regex = /^(https:\/\/www.google.com)$/;
    return regex.test(siteInput.value);
}


