let important=true;
let form=false
function toggleImportant(){
    console.log("clicked");
    if(important){
        $("#iImportant").removeClass("fas").addClass("far");
        important=false;
    }else{
        $("#iImportant").removeClass("far").addClass("fas");
        important=true;
    }
}
function toggleForm(){
    if(form){
        $("form").slideUp(1500);
        $("#btnAdd").text("Add task");
        form=false;
    }else{
        $("form").slideDown(1500);
        $("#btnAdd").text("Hide the form");        
        form=true;
    }
}
function save(){
    console.log("Saving task");
    // get the values from the inputs
    let title=$("#txtTitle").val();
    let date=$("#selDate").val();
    let location=$("#txtLocation").val();
    let priority=$("#selPriority").val();
    let color=$("#selColor").val();
    let collaborator=$("#txtCollaborator").val();
    let description=$("#txtDescription").val();
    // and console log them
    console.log(title,date,location,priority,color,collaborator,description);
    clearForm();
    displayTask(title);
}
function displayTask(title){
    syntax=`
    <div>
        <h6>${title}</h6>
    </div>`;
    $(".pending-tasks").append(syntax);
}
function clearForm(){
    $("#txtTitle").val("");
    $("#selDate").val("");
    $("#txtLocation").val("");
    $("#selPriority").val("");
    $("#selColor").val("");
    $("#txtCollaborator").val("");
    $("#txtDescription").val("");
}
function init(){
    console.log("Calendar System");
    $("form").hide();

    //hook event
    $("#btnAdd").click(toggleForm);    
    $("#iImportant").click(toggleImportant);
    $("#btnSave").click(save);
}

window.onload=init;