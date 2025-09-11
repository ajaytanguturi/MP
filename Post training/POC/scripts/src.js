$(document).ready(function () {
    let name, email;
     
    let userArray = [];
    let globaleditIndex = -1;

    function renderDataOnPageLoad(){
        const userDatastr=localStorage.getItem("userData");
        if(userDatastr){
            userArray=JSON.parse(userDatastr);
            renderData();
        } else{
            console.log("NO data is Present");
        }
    }

    renderDataOnPageLoad();

    $("#userForm").submit(function (e) {
        e.preventDefault();
        name = $("#name").val();
        email = $("#email").val();
        console.log(name, email);
        if (globaleditIndex !== -1) {
            //edit action
            userArray[globaleditIndex] = { name: name, email: email }
            renderData();
            globaleditIndex=-1;

        } else {
            //add action
            userArray.push({ name: name, email: email })
            renderData();
        }

        localStorage.setItem("userData", JSON.stringify(userArray));

        this.reset();
    });

    function renderData() {
        const tbody = $("#userTable tbody");

        tbody.empty();

        userArray.forEach((user, index) => {
            tbody.append(
                `
            <tr>
                <td>
                    ${user.name}
                </td>
                <td>
                    ${user.email}
                </td>
                <td>
                    <button class="editBtn" data-idx="${index}">Edit</button>
                    <button class="deleteBtn" data-idx="${index}">Delete</button>
            </tr>
            `
            );

        });
    }


    $("#userTable").on("click", ".editBtn", function () {
        const editIndex = $(this).data("idx");
        globaleditIndex = editIndex;
        console.log(editIndex);
        let userData = userArray[editIndex];
        $("#name").val(userData.name);
        $("#email").val(userData.email);
    });

    $("#userTable").on("click", ".deleteBtn", function () {
        const deleteIndex = $(this).data("idx");
        userArray.splice(deleteIndex, 1);
        renderData();
    });



})