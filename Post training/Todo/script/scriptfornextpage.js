

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function loadTasks() {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
}


function showTaskDetails(key){
    const tasks = loadTasks();
    const task = tasks.find(t => t.key === key);

    if (!task) {
        $('#taskDetails').html('<div class="alert alert-danger">Task not found.</div>');
        return;

    }

    $('#taskDetails').html(`
        <div class="card-body">
            <div class="row">
                
                <div class="col-md-8">
                    <h3>UID: ${task.key}</h3>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><strong>Type:</strong> ${task.type}</li>
                        <li class="list-group-item"><strong>Summary:</strong> ${task.summary}</li>
                        <li class="list-group-item"><strong>Assignee:</strong> ${task.assignee}</li>
                        <li class="list-group-item"><strong>Status:</strong> ${task.status}</li>
                    </ul>
                </div>
            </div>
        </div>
    `);
}


$(function(){
    const key=getQueryParam('key');
    showTaskDetails(key);

    $('#backToTaskList').on('click',function(){
        window.close();

        setTimeout(function(){
            window.location.href='index.html';
        },100);
    });
});



