///// Global variables /////
let id;
let myValue;
let allLocations = [];
let allDepartments = [];

//Preloader

$("#sort").on('click', function () {
    sortTable(2);
})
search();
getSelectedID();

///// ----------------------------- READ ------------------------- /////


$(document).ready(function () {
   setTimeout(function() {
       $('body').removeClass('notLoaded');
       $("#preloader").addClass("d-none");
   }, 3000);
        
        

    
    $("#cardTopLeft").html("Employees");


    $.getJSON("libs/php/getAll.php", function (result) {

        head = `<tr>
                    <th scope='col' class='text-align-end p-2'>
                        <input type='checkbox' class='select-all invisible'>
                    </th>
                    <th scope='col' class='text-align-end p-2 lname'>Last Name</th>
                    <th scope='col' class='text-align-end p-2'>FirstName</th>
                    <th scope='col' class='text-align-end p-2 d-none d-sm-table-cell'>Email</th>
                    <th scope='col' class='text-align-end p-2 d-none d-md-table-cell'>Department</th>
                    <th scope='col' class='text-align-end p-2 d-none d-lg-table-cell'>Location</th>
                    <th scope='col' class='text-align-end p-2 d-none d-lg-table-cell'>Job Title</th>
                </tr>`;
        $(".tablehead").append(head);

        for (let i = 0; i < result.data.length; i++) {

            body = `<tr class='employees'>
                        <td class='d-none'>${result.data[i]['id']}</td>
                        <td>
                            <input type='radio' class='custom-control-input'>
                        </td>
                        <td class='l'>${result.data[i]['lastName']}</td>
                        <td class='f'>${result.data[i]['firstName']}</td>
                        <td class='d-none d-sm-table-cell'>${result.data[i]['email']}</td>
                        <td class='d-none d-md-table-cell'>${result.data[i]['department']}</td>
                        <td class='d-none d-lg-table-cell'>${result.data[i]['location']}</td>
                        <td class='d-none d-lg-table-cell'>${result.data[i]['jobTitle']}</td>
                    </tr>`
            $(".tablebody").append(body);

        }

        sortTable(2);
        //selectAll();

    })

});

$("#sortByFirstName").on('click', function () {
    $('.tablehead').html('');
    $('.tablebody').html('');
    $("#cardTopLeft").html("Employees");
    $.getJSON("libs/php/getAll.php", function (result) {

        head = `<tr>
                    <th scope='col' class='text-align-end p-2 '>
                        <input type='radio' class='select-all invisible'>
                    </th>
                    <th scope='col' class='text-align-end p-2 fname'>First Name</th>
                    <th scope='col' class='text-align-end p-2'>Last Name</th>
                    <th scope='col' class='text-align-end p-2 d-none d-sm-table-cell'>Email</th>
                    <th scope='col' class='text-align-end p-2 d-none d-md-table-cell'>Department</th>
                    <th scope='col' class='text-align-end p-2 d-none d-lg-table-cell'>Location</th>
                    <th scope='col' class='text-align-end p-2 d-none d-lg-table-cell'>Job Title</th>
                </tr>`;
        $(".tablehead").append(head);



        for (let i = 0; i < result.data.length; i++) {
            body = `<tr>
                        <td class='d-none'>${result.data[i]['id']}</td>
                        <td>
                            <input type='radio' class='custom-control-input select'>
                        </td>
                        <td class='f'>${result.data[i]['firstName']}</td>
                        <td class='l'>${result.data[i]['lastName']}</td>
                        <td class='d-none d-sm-table-cell'>${result.data[i]['email']}</td>
                        <td class='d-none d-md-table-cell'>${result.data[i]['department']}</td>
                        <td class='d-none d-lg-table-cell'>${result.data[i]['location']}</td>
                        <td class='d-none d-lg-table-cell'>${result.data[i]['jobTitle']}</td>
                    </tr>`;
            $(".tablebody").append(body);
        }

        sortTable(2);
        //selectAll();
    })
})

$("#sortByLastName").on('click', function () {
    $('.tablehead').html('');
    $('.tablebody').html('');
    $("#cardTopLeft").html("Employees");

    $.getJSON("libs/php/getAll.php", function (result) {

        head = `<tr>
                    <th scope='col' class='text-align-end p-2'>
                        <input type='radio' class='select-all invisible'>
                    </th>
                    <th scope='col' class='text-align-end p-2 lname'>Last Name</th>
                    <th scope='col' class='text-align-end p-2'>First Name</th>
                    <th scope='col' class='text-align-end p-2 d-none d-sm-table-cell'>Email</th>
                    <th scope='col' class='text-align-end p-2 d-none d-md-table-cell'>Department</th>
                    <th scope='col' class='text-align-end p-2 d-none d-lg-table-cell'>Location</th>
                    <th scope='col' class='text-align-end p-2 d-none d-lg-table-cell'>Job Title</th>
                </tr>`;
        $(".tablehead").append(head);


        //selectAll();


        for (let i = 0; i < result.data.length; i++) {
            body = `<tr>
                        <td class='d-none'>${result.data[i]['id']}</td>
                        <td>
                            <input type='radio' class='custom-control-input select'>
                        </td>
                        <td class='l'>${result.data[i]['lastName']}</td>
                        <td class='f'>${result.data[i]['firstName']}</td>
                        <td class='d-none d-sm-table-cell'>${result.data[i]['email']}</td>
                        <td class='d-none d-md-table-cell'>${result.data[i]['department']}</td>
                        <td class='d-none d-lg-table-cell'>${result.data[i]['location']}</td>
                        <td class='d-none d-lg-table-cell'>${result.data[i]['jobTitle']}</td>
                    </tr>`;
            $(".tablebody").append(body);
        }

        sortTable(2);

    })
})

$("#sortByDepartment").on('click', function () {
    $('.tablehead').html('');
    $('.tablebody').html('');
    $("#cardTopLeft").html("Employees");

    $.getJSON("libs/php/getAll.php", function (result) {

        head = `<tr>
                    <th scope='col' class='text-align-end p-2>
                        <input type='radio' class='select-all invisible'>
                    </th>
                    <th scope='col' class='text-align-end p-2 depart'>Department</th>
                    <th scope='col' class='text-align-end p-2'>Last Name</th>
                    <th scope='col' class='text-align-end p-2 d-none d-sm-table-cell'>First Name</th>
                    <th scope='col' class='text-align-end p-2 d-none d-md-table-cell'>Email</th>
                    <th scope='col' class='text-align-end p-2 d-none d-lg-table-cell'>Location</th>
                    <th scope='col' class='text-align-end p-2 d-none d-lg-table-cell'>Job Title</th>
                </tr>`;
        $(".tablehead").append(head);

        selectAll();



        for (let i = 0; i < result.data.length; i++) {
            body = `<tr>
                        <td class='d-none'>${result.data[i]['id']}</td>
                        <td>
                            <input type='radio' class='custom-control-input select'>
                        </td>
                        <td>${result.data[i]['department']}</td>
                        <td class='l'>${result.data[i]['lastName']}</td>
                        <td class='d-none d-sm-table-cell f'>${result.data[i]['firstName']}</td>
                        <td class='d-none d-md-table-cell'>${result.data[i]['email']}</td>
                        <td class='d-none d-lg-table-cell'>${result.data[i]['location']}</td>
                        <td class='d-none d-lg-table-cell'>${result.data[i]['jobTitle']}</td>
                    </tr>`;
            $(".tablebody").append(body);
        }

        sortTable(2);

    })
})

$("#sortByLocation").on('click', function () {
    $('.tablehead').html('');
    $('.tablebody').html('');
    $("#cardTopLeft").html("Employees");

    $.getJSON("libs/php/getAll.php", function (result) {


        head = `<tr>
                    <th scope='col' class='text-align-end p-2'>
                        <input type='radio' class='select-all invisible'>
                    </th>
                    <th scope='col' class='text-align-end p-2 location'>Location</th>
                    <th scope='col' class='text-align-end p-2'>Last Name</th>
                    <th scope='col' class='text-align-end p-2 d-none d-sm-table-cell'>First Name</th>
                    <th scope='col' class='text-align-end p-2 d-none d-md-table-cell'>Email</th>
                    <th scope='col' class='text-align-end p-2 d-none d-lg-table-cell'>Department</th>
                    <th scope='col' class='text-align-end p-2 d-none d-lg-table-cell'>Job Title</th>
                </tr>`;
        $(".tablehead").append(head);

        selectAll();



        for (let i = 0; i < result.data.length; i++) {
            body = `<tr>
                        <td class='d-none'>${result.data[i]['id']}</td>
                        <td>
                            <input type='radio' class='custom-control-input select'>
                        </td>
                        <td>${result.data[i]['location']}</td>
                        <td class='l'>${result.data[i]['lastName']}</td>
                        <td class='d-none d-sm-table-cell f'>${result.data[i]['firstName']}</td>
                        <td class='d-none d-md-table-cell'>${result.data[i]['email']}</td>
                        <td class='d-none d-lg-table-cell'>${result.data[i]['department']}</td>
                        <td class='d-none d-lg-table-cell'>${result.data[i]['jobTitle']}</td>
                    </tr>`;
            $(".tablebody").append(body);

        }

        sortTable(2);

    })
})

$("#sortByEmail").on('click', function () {
    $('.tablehead').html('');
    $('.tablebody').html('');
    $("#cardTopLeft").html("Employees");
    $.getJSON("libs/php/getAll.php", function (result) {


        head = `<tr>
                    <th scope='col' class='text-align-end p-2'>
                        <input type='radio' class='select-all invisible'>
                    </th>
                    <th scope='col' class='text-align-end p-2 email'>Email</th>
                    <th scope='col' class='text-align-end p-2'>Last Name</th>
                    <th scope='col' class='text-align-end p-2 d-none d-sm-table-cell'>First Name</th>
                    <th scope='col' class='text-align-end p-2 d-none d-md-table-cell'>Department</th>
                    <th scope='col' class='text-align-end p-2 d-none d-lg-table-cell'>Location</th>
                    <th scope='col' class='text-align-end p-2 d-none d-lg-table-cell'>Job Title</th>
                    </tr>`;
        $(".tablehead").append(head);

        //selectAll();


        for (let i = 0; i < result.data.length; i++) {
            body = `<tr>
                        <td class='d-none'>${result.data[i]['id']}</td>
                        <td>
                            <input type='radio' class='custom-control-input select'>
                        </td>
                        <td>${result.data[i]['email']}</td>
                        <td class='l'>${result.data[i]['lastName']}</td>
                        <td class='d-none d-sm-table-cell f'>${result.data[i]['firstName']}</td>
                        <td class='d-none d-md-table-cell'>${result.data[i]['department']}</td>
                        <td class='d-none d-lg-table-cell'>${result.data[i]['location']}</td>
                        <td class='d-none d-lg-table-cell'>${result.data[i]['jobTitle']}</td>
                    </tr>`;
            $(".tablebody").append(body);

        }

        sortTable(2);

    })
})

$("#sortByJobTitle").on('click', function () {
    $('.tablehead').html('');
    $('.tablebody').html('');
    $("#cardTopLeft").html("Employees");
    $.getJSON("libs/php/getAll.php", function (result) {


        head = `<tr>
                    <th scope='col' class='text-align-end p-2'>
                        <input type='radio' class='select-all invisible'>
                    </th>
                    <th scope='col' class='text-align-end p-2 jobTitle'>Job Title</th>
                    <th scope='col' class='text-align-end p-2'>Last Name</th>
                    <th scope='col' class='text-align-end p-2 d-none d-sm-table-cell'>First Name</th>
                    <th scope ='col'class ='text-align-end p-2 d-none d-lg-table-cell'>Email</th>
                    <th scope='col' class='text-align-end p-2 d-none d-md-table-cell'>Department</th>
                    <th scope='col' class='text-align-end p-2 d-none d-lg-table-cell'>Location</th>
                </tr>`;
        $(".tablehead").append(head);

        //selectAll();


        for (let i = 0; i < result.data.length; i++) {
            body = `<tr>
                        <td class='d-none'>${result.data[i]['id']}</td>
                        <td>
                            <input type='radio' class='custom-control-input select'>
                        </td>
                        <td>${result.data[i]['jobTitle']}</td>
                        <td class='l'>${result.data[i]['lastName']}</td>
                        <td class='d-none d-sm-table-cell f'>${result.data[i]['firstName']}</td>
                        <td class='d-none d-lg-table-cell'>${result.data[i]['email']}</td>
                        <td class='d-none d-md-table-cell'>${result.data[i]['department']}</td>
                        <td class='d-none d-lg-table-cell'>${result.data[i]['location']}</td>
                    </tr>`;
            $(".tablebody").append(body);

        }

        sortTable(2);

    })
})

$("#filterByEmployees").on('click', function () {
    console.log("button works");
    filterByEmployee();
    $("#navbarDropdown").removeClass('d-none');
})

function filterByEmployee() {
    $("#tbl").addClass('table-hover');
    $('.tablehead').html('');
    $('.tablebody').html('');
    $('.departmentNestedTableHead').html('');
    $('.departmentNestedTableBody').html('');
    $("#cardTopLeft").html("Employees");


    $.getJSON("libs/php/getAll.php", function (result) {

        head = `<tr>
                    <th scope='col' class='text-align-end p-2'>
                        <input type='radio' class='select-all invisible'>
                    </th>
                    <th scope='col' class='text-align-end p-2 lname'>Last Name</th>
                    <th scope='col' class='text-align-end p-2'>First Name</th>
                    <th scope='col' class='text-align-end p-2 d-none d-sm-table-cell'>Email</th>
                    <th scope='col' class='text-align-end p-2 d-none d-md-table-cell'>Department</th>
                    <th scope='col' class='text-align-end p-2 d-none d-lg-table-cell'>Location</th>
                </tr>`;
        $(".tablehead").append(head);

        for (let i = 0; i < result.data.length; i++) {
            body = `<tr class='employees'>
                        <td class='d-none'>${result.data[i]['id']}</td>
                        <td>
                            <input type='radio' class='custom-control-input select'>
                            </td>
                            <td class='l'>${result.data[i]['lastName']}</td>
                            <td class='f'>${result.data[i]['firstName']}</td>
                            <td class='d-none d-sm-table-cell'>${result.data[i]['email']}</td>
                            <td class='d-none d-md-table-cell'>${result.data[i]['department']}</td>
                            <td class='d-none d-lg-table-cell'>${result.data[i]['location']}</td>
                            <td class='d-none d-lg-table-cell'>${result.data[i]['jobTitle']}</td>
                        </tr>`;
            $(".tablebody").append(body);
        }

        sortTable(2);
        //selectAll();
    })
}


$("#filterByDepartment").on('click', function () {
    filterByDepartment();
    $("#navbarDropdown").addClass('d-none');
})

function filterByDepartment() {
    $('.tablehead').html('');
    $('.tablebody').html('');
    $('.departmentNestedTableHead').html('');
    $('.departmentNestedTableBody').html('');
    $("#cardTopLeft").html("Departments");
    $("#tbl").removeClass('table-hover');

    $.getJSON("libs/php/getAllDepartments.php", function (result) {

        for (let i = 0; i < result.data.length; i++) {

            body = `<tr data-bs-toggle='collapse' data-bs-target='#collapse${result.data[i]['departmentID']}' class='accordion-toggle departments'>
                        <td class='d-none'>${result.data[i]['departmentID']}</td>
                        <td><input type='radio' class='custom-control-input select'></td>
                        <td class='dep'>${result.data[i]['department']} - ${result.data[i]['location']}</td>
                    </tr>
                    <tr data-bs-parent='#tablebody' class='accordion-collapse collapse hide' id='collapse${result.data[i]['departmentID']}'>
                        <td colspan='3'>
                            <table colspan='3' class='departmentNestedTable table table-responsive table-striped table-hover table-light col-12'>
                                <thead class='departmentNestedTableHead' id='accordion-head${result.data[i]['departmentID']}'>
                                </thead>
                                <tbody class='departmentNestedTableBody' id='accordion-body${result.data[i]['departmentID']}'>
                                </tbody>
                            </table>
                        </td>
                    </tr>`


            $("#tablebody").append(body);
            getPersonnelByDepartment(result.data[i]['departmentID']);

        }

    })
}


function getPersonnelByDepartment(id) {


    $.ajax({
        url: 'libs/php/getPersonnelByDepartment.php',
        type: 'POST',
        dataType: 'json',
        data: {
            id: id
        },
        success: function (result) {


            head = `<tr>
                        <th scope='col' class='text-align-end p-2'>
                            <input type='radio' class='custom-control-input select invisible'>
                        </th>
                        <th scope='col' class='text-align-end p-2'>Last Name</th>
                        <th scope='col' class='text-align-end p-2'>First Name</th>
                        <th scope='col' class='text-align-end p-2 d-none d-md-table-cell'>Email</th>
                    </tr>`;
            $("#accordion-head" + id).append(head);

            for (let i = 0; i < result.data.length; i++) {


                body = `<tr class='employees'><td class='d-none'>${result.data[i]['id']}</td>
                            <td>
                                <input type='radio' class='custom-control-input select'>
                            </td>
                            <td scope='col' class='text-align-end p-2'>${result.data[i]['lastName']}</td>
                            <td scope='col' class='text-align-end p-2'>${result.data[i]['firstName']}</td>
                            <td scope='col' class='text-align-end p-2 d-none d-md-table-cell'>${result.data[i]['email']}</td>
                        <tr>`

                $("#accordion-body" + id).append(body);

            }

        }
    })
}

$("#filterByLocation").on('click', function () {
    filterByLocation();
    $("#navbarDropdown").addClass('d-none');
})

function filterByLocation() {
    $('.tablehead').html('');
    $('.tablebody').html('');
    $('.departmentNestedTableHead').html('');
    $('.departmentNestedTableBody').html('');
    $("#cardTopLeft").html("Locations");
    $("#tbl").removeClass('table-hover')

    $.getJSON("libs/php/getAllLocations.php", function (result) {

        for (let i = 0; i < result.data.length; i++) {

            body = `<tr data-bs-toggle='collapse' data-bs-target='#collapse${result.data[i]['id']}' class='accordion-toggle locations'>
                        <td class='d-none'>${result.data[i]['id']}</td>
                        <td><input type='radio' class='custom-control-input select'></td>
                        <td class='loc'>${result.data[i]['name']}</td>
                    </tr>
                    <tr data-bs-parent='#tablebody' class='accordion-collapse collapse hide' id='collapse${result.data[i]['id']}'>
                        <td colspan='3'>
                            <table colspan='3' class='locationNestedTable table table-responsive table-striped  table-light col-12'>
                                <thead class='locationNestedTableHead' id='accordion-head${result.data[i]['id']}'>
                                </thead>
                                <tbody class='locationNestedTableBody' id='accordion-body${result.data[i]['id']}'>
                                </tbody>
                            </table>
                        </td>
                    </tr>`


            $("#tablebody").append(body);
            //getPersonnelByLocation(result.data[i]['id']);
            getDepartmentsByLocation(result.data[i]['id']);

        }

    })

}

function getDepartmentsByLocation(id) {
    $.ajax({
        url: 'libs/php/getDepartmentsByLocation.php',
        type: 'POST',
        dataType: 'json',
        data: {
            id: id
        },
        success: function (result) {
            console.log(result);
            for (let i = 0; i < result.data.length; i++) {
                body = `<tr data-bs-toggle='collapse' data-bs-target='#collapse2${result.data[i]['id']}' class='accordion-toggle departments'>
                        <td class='d-none'>${result.data[i]['id']}</td>
                        <td><input type='radio' class='custom-control-input select'></td>
                        <td class='dep'>${result.data[i]['name']}</td>
                    </tr>
                    <tr data-bs-parent='#accordion-body${id}' class='accordion-collapse collapse hide' id='collapse2${result.data[i]['id']}'>
                        <td colspan='3'>
                            <table colspan='3' class='departmentNestedTable table table-responsive table-striped table-hover table-light col-12'>
                                <thead class='departmentNestedTableHead' id='accordion-head2${result.data[i]['id']}'>
                                </thead>
                                <tbody class='departmentNestedTableBody' id='accordion-body2${result.data[i]['id']}'>
                                </tbody>
                            </table>
                        </td>
                    </tr>`
                $("#accordion-body" + id).append(body);
                getPersonnelByDepartment2(result.data[i]['id']);
            }
        }
    })
}

function getPersonnelByDepartment2(id) {


    $.ajax({
        url: 'libs/php/getPersonnelByDepartment.php',
        type: 'POST',
        dataType: 'json',
        data: {
            id: id
        },
        success: function (result) {


            head = `<tr>
                        <th scope='col' class='text-align-end p-2'>
                            <input type='radio' class='custom-control-input select invisible'>
                        </th>
                        <th scope='col' class='text-align-end p-2'>Last Name</th>
                        <th scope='col' class='text-align-end p-2'>First Name</th>
                        <th scope='col' class='text-align-end p-2 d-none d-md-table-cell'>Email</th>
                    </tr>`;
            $("#accordion-head2" + id).append(head);

            for (let i = 0; i < result.data.length; i++) {


                body = `<tr class='employees'><td class='d-none'>${result.data[i]['id']}</td>
                            <td>
                                <input type='radio' class='custom-control-input select'>
                            </td>
                            <td scope='col' class='text-align-end p-2 l'>${result.data[i]['lastName']}</td>
                            <td scope='col' class='text-align-end p-2 f'>${result.data[i]['firstName']}</td>
                            <td scope='col' class='text-align-end p-2 d-none d-md-table-cell'>${result.data[i]['email']}</td>
                        <tr>`

                $("#accordion-body2" + id).append(body);

            }

        }
    })
}

function selectAll() {
    $('.select-all').click(function () {
        let checked = this.checked;
        $('input[type="checkbox"]').each(function () {
            this.checked = checked;
        });
    })
}


function search() {
    $("#myInput").on("keyup", function () {
        let value = $(this).val().toLowerCase();
        $("#tbl tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
}






function getAllLocations() {

    $.getJSON("libs/php/getAllLocations.php", function (result) {
        //console.log(result);
        for (let i = 0; i < result.data.length; i++) {
            allLocations.push(result.data[i]['name']);
            let option = '<option class="location" value="' + result.data[i]['id'] + '">' + result.data[i]['name'] + '</option>';
            $("#selectLocation").append(option);

        }
    })
};

function getAllLocations2() {

    $.getJSON("libs/php/getAllLocations.php", function (result) {

        for (let i = 0; i < result.data.length; i++) {
            allLocations.push(result.data[i]['name']);
            let option = '<option class="location" value="' + result.data[i]['id'] + '">' + result.data[i]['name'] + '</option>';
            $("#selectLocation2").append(option);

        }
    })
};

function getAllDepartmentsAddEmployee() {
    $.getJSON("libs/php/getAllDepartments.php", function (result) {
        //console.log(result);
        for (let i = 0; i < result.data.length; i++) {
            allDepartments.push(result.data[i]['department']);
            let option = '<option class="location" value="' + result.data[i]['departmentID'] + '">' + result.data[i]['department'] + ' - ' + result.data[i]['location'] + '</option>';
            $("#addEmployeeSelectDepartment").append(option);

        }
    })
};

function getAllDepartmentsEditEmployee() {
    $.getJSON("libs/php/getAllDepartments.php", function (result) {
        //console.log(result)
        for (let i = 0; i < result.data.length; i++) {

            let option = '<option class="location" value="' + result.data[i]['departmentID'] + '">' + result.data[i]['department'] + ' - ' + result.data[i]['location'] + '</option>';

            $("#editEmployeeSelectDepartment").append(option);
            $("#editEmployeeSelectDepartment option[value='" + myValue + "']").attr('selected', 'selected');

        }

    })
};

///// ----------------------------- CREATE ------------------------- /////
///// Insert new department /////
$("#saveDepartmentForm").on('submit', function (e) {
    e.preventDefault();
    e.stopPropagation();
    //getAllLocations();
    let departmentName = $("#departmentInput").val();
    let locationID = $("#selectLocation option:selected").attr("value");
    //console.log(locationID)
    if (departmentName == "" || allDepartments.includes(capitalize(departmentName))) {
        $("#something-wrong-modal").modal('show');
    } else {
        insertDepartment(capitalize(departmentName), locationID);
        $("#departmentModal").modal('hide');

    }
})

$("#addDepartment").on('click', function () {
    $("#departmentInput").val('');
    $("#selectLocation").empty();
    getAllLocations();

})


function insertDepartment(name, locationID) {
    $.ajax({
        url: 'libs/php/insertDepartment.php',
        type: 'POST',
        dataType: 'json',
        data: {
            name: name,
            locationID: locationID
        },
        success: function (result) {
            if (result) {
                $("#success-add-modal").modal('show');
                filterByDepartment();
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(errorThrown);
            $("#something-wrong-modal").modal('show');
        }

    })
}


///// Insert new location /////
$("#saveLocationForm").on('submit', function (e) {
    e.preventDefault();
    e.stopPropagation();


    let locationName = $("#locationInput").val();
    if (locationName == "" || allLocations.includes(capitalize(locationName))) {
        $("#something-wrong-modal").modal('show');

    } else {
        insertLocation(capitalize(locationName));


    }

})

$("#addLocation").on('click', function () {
    $("#locationInput").val('');
    getAllLocations();
    //console.log(allLocations);
})

function insertLocation(name) {
    $.ajax({
        url: 'libs/php/insertLocation.php',
        type: 'POST',
        dataType: 'json',
        data: {
            name: name,
        },
        success: function (result) {
            if (result) {
                $("#locationModal").modal('hide');
                $("#success-add-modal").modal('show');
                filterByLocation();
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(errorThrown);
            $("#something-wrong-modal").modal('show');
        }

    })
}

///// Insert new employee /////
$("#saveEmployeeForm").on('submit', function (e) {
    e.preventDefault();
    //e.stopPropagation();

    let fName = $("#newEmployeeFirstName").val();
    //console.log(fName);
    let lName = $("#newEmployeeLastName").val();
    //console.log(lName);
    let jobTitle = $("#newEmployeeJobTitle").val();
    //console.log(job_title);
    let e_mail = $("#newEmployeeEmail").val();
    //console.log(e_mail);
    let departmentId = $("#addEmployeeSelectDepartment option:selected").attr("value");
    //console.log(departmentId);
    insertEmployee(capitalize(fName), capitalize(lName), capitalize(jobTitle), e_mail, departmentId);
    $("#employeeModal").modal('hide');

})

$("#addEmployee").on('click', function () {
    $("#addEmployeeSelectDepartment").empty();
    $("#newEmployeeFirstName").val('');
    $("#newEmployeeLastName").val('');
    $("#newEmployeeJobTitle").val('');
    $("#newEmployeeEmail").val('');
    getAllDepartmentsAddEmployee();
})

function insertEmployee(firstName, lastName, jobTitle, email, departmentID) {
    $.ajax({
        url: 'libs/php/insertEmployee.php',
        type: 'POST',
        dataType: 'json',
        data: {
            firstName: firstName,
            lastName: lastName,
            jobTitle: jobTitle,
            email: email,
            departmentID: departmentID
        },
        success: function (result) {
            $("#success-add-modal").modal('show');
            filterByEmployee();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(errorThrown);
            $("#something-wrong-modal").modal('show');
        }
    })
}

///// ----------------------------- UPDATE ------------------------- /////

///// Update Employee /////

$("#updateEmployeeForm").on('submit', function (e) {
    e.preventDefault();
    e.stopPropagation();
    editEmployee(capitalize($("#editFirstName").val()), capitalize($("#editLastName").val()), capitalize($("#editJobTitle").val()), $("#editEmail").val(), $("#editEmployeeSelectDepartment").val(), $("#editId").val());
    $("#editEmployeeModal").modal('hide');

})

function getEmployeeByID(employeeId) {
    $.ajax({
        url: 'libs/php/getPersonnelByID.php',
        type: 'POST',
        dataType: 'json',
        data: {
            employeeId: employeeId
        },
        success: function (result) {
            //console.log(result)
            $("#editId").val(result.data[0]['id']);
            $("#editDeaprtmentId").val(result.data[0]['departmentId']);
            $("#editJobTitle").val(result.data[0]['jobTitle']);
            $("#editFirstName").val(result.data[0]['firstName']);
            $("#editLastName").val(result.data[0]['lastName']);
            $("#editEmail").val(result.data[0]['email']);
            myValue = result.data[0]['departmentId'];




        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(errorThrown);
        }
    })
}

function editEmployee(firstName, lastName, jobTitle, email, departmentID, id) {
    $.ajax({
        url: 'libs/php/editPersonnel.php',
        type: 'POST',
        dataType: 'json',
        data: {

            firstName: firstName,
            lastName: lastName,
            jobTitle: jobTitle,
            email: email,
            departmentID: departmentID,
            id: id
        },
        success: function (result) {
            $("#success-add-modal").modal('show');
            filterByEmployee();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(errorThrown);
        }
    })
}

///// Update Department /////


$("#updateDepartmentForm").on('submit', function (e) {
    e.preventDefault();
    e.stopPropagation();
    let locID = $("#selectLocation2 option:selected").attr("value");
    editDepartment(capitalize($("#departmentName").val()), locID, $("#department-id").val());
    $("#editDepartmentModal").modal('hide');

})

function getDepartmentByID(id) {
    $.ajax({
        url: 'libs/php/getDepartmentByID.php',
        type: 'POST',
        dataType: 'json',
        data: {
            id: id
        },
        success: function (result) {
            //console.log(result)
            $("#department-id").val(result.data[0]['id']);
            $("#selectLocation2").val(result.data[0]['locationId']);
            $("#departmentName").val(result.data[0]['name']);

        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(errorThrown);
        }
    })
}

function editDepartment(name, locationID, id) {
    $.ajax({
        url: 'libs/php/editDepartment.php',
        type: 'POST',
        dataType: 'json',
        data: {

            name: name,
            locationID: locationID,
            id: id



        },
        success: function (result) {
            $("#success-add-modal").modal('show');
            filterByDepartment();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(errorThrown);
        }
    })
}

///// Update Location /////


$("#updateLocationForm").on('submit', function (e) {
    e.preventDefault();
    e.stopPropagation();

    editLocation(capitalize($("#locationName").val()), $("#location-id").val());

    $("#editLocationModal").modal('hide');

})

function getLocationByID(id) {
    $.ajax({
        url: 'libs/php/getLocationByID.php',
        type: 'POST',
        dataType: 'json',
        data: {
            id: id
        },
        success: function (result) {

            $("#location-id").val(result.data[0]['id']);
            $("#locationName").val(result.data[0]['name']);

        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(errorThrown);
        }
    })
}

function editLocation(name, locationid) {
    $.ajax({
        url: 'libs/php/editLocation.php',
        type: 'POST',
        dataType: 'json',
        data: {
            name: name,
            locationid: locationid
        },
        success: function (result) {
            $("#success-add-modal").modal('show');
            filterByLocation();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(errorThrown);
        }
    })
}

///// ----------------------------- DELETE ------------------------- /////
///// Delete employee /////
$("#deleteEmployeeButton").on('click', function () {
    deleteEmployee(id);

})

function deleteEmployee(id) {
    $.ajax({
        url: 'libs/php/deletePersonnelByID.php',
        type: 'POST',
        dataType: 'json',
        data: {
            id: id
        },
        success: function (result) {
            $("#success-delete-modal").modal('show');
            filterByEmployee();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(errorThrown);
            $("#error-delete-modal").modal('show');
        }
    })
}

///// Delete department /////
$("#deleteDepartmentButton").on('click', function () {
    deleteDepartment(id);
})


function deleteDepartment(id) {
    $.ajax({
        url: 'libs/php/deleteDepartmentByID.php',
        type: 'POST',
        dataType: 'json',
        data: {
            id: id
        },
        success: function (result) {
            $("#success-delete-modal").modal('show');
            filterByDepartment();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(errorThrown);
            $("#error-delete-modal").modal('show');
        }
    })
}

///// Delete location /////
$("#deleteLocationButton").on('click', function () {
    deleteLocation(id);

})


function deleteLocation(id) {
    $.ajax({
        url: 'libs/php/deleteLocationByID.php',
        type: 'POST',
        dataType: 'json',
        data: {
            id: id
        },
        success: function (result) {
            $("#success-delete-modal").modal('show');
            filterByLocation();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(errorThrown);
            $("#error-delete-modal").modal('show');
        }
    })
}
/* Utility functions */

function getSelectedID() {

    $('main').on('click', '.employees', e => {
        $('input[type="radio"]').prop('checked', false);
        id = e.currentTarget.firstElementChild.textContent;
        //console.log("An employee was selected");
        $(e.currentTarget).children('td').children('input').prop('checked', true);

        $("#edit").attr('data-bs-target', '#editEmployeeModal');
        $("#editEmployeeSelectDepartment").empty();
        getAllDepartmentsEditEmployee();
        getEmployeeByID(id);
        $("#delete").attr('data-bs-target', '#deleteEmployeeModal');
        $("#employeeToDelete").html($(e.currentTarget).children('td.f').html() + " " + $(e.currentTarget).children('td.l').html());


    })

    $('main').on('click', '.departments', e => {
        $('input[type="radio"]').prop('checked', false);
        id = e.currentTarget.firstElementChild.textContent;
        console.log("A department was selected");
        $(e.currentTarget).children('td').children('input').prop('checked', true);
        $("#edit").attr('data-bs-target', '#editDepartmentModal');
        $("#selectLocation2").empty();
        getAllLocations2();
        getDepartmentByID(id);
        $("#departmentToDelete").html($(e.currentTarget).children('td.dep').html());
        $("#departmentNotToDelete").html($(e.currentTarget).children('td.dep').html());
        $.ajax({
            url: 'libs/php/getPersonnelCount.php',
            type: 'POST',
            dataType: 'json',
            data: {
                id: id
            },
            success: function (result) {
                console.log(result);
                if (result.data[0]['pc'] == 0) {
                    $("#delete").attr('data-bs-target', '#deleteDepartmentModal');
                } else {
                    $("#delete").attr('data-bs-target', '#cannot-delete-department-modal');
                }
            }
        })
    })

    $('main').on('click', '.locations', e => {
        $('input[type="radio"]').prop('checked', false);
        id = e.currentTarget.firstElementChild.textContent;
        //console.log("A location was selected");
        $(e.currentTarget).children('td').children('input').prop('checked', true);
        $("#edit").attr('data-bs-target', '#editLocationModal');
        getLocationByID(id);
        $("#locationToDelete").html($(e.currentTarget).children('td.loc').html());
        $("#locationNotToDelete").html($(e.currentTarget).children('td.loc').html());
        $.ajax({
            url: 'libs/php/getDepartmentsCount.php',
            type: 'POST',
            dataType: 'json',
            data: {
                id: id
            },
            success: function (result) {
                if (result.data[0]['pc'] == 0) {
                    $("#delete").attr('data-bs-target', '#deleteLocationModal');
                } else {
                    $("#delete").attr('data-bs-target', '#cannot-delete-location-modal');
                }

            }
        })

    })
}

$('#tablebody tr').click(function () {
    $(this).children('td').children('input').prop('checked', true);

    $('#tablebody tr').removeClass('selected');
    $(this).toggleClass('selected');

});


function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("tbl");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /* Loop through all table rows (except the
        first, which contains table headers): */
        for (i = 1; i < (rows.length - 1); i++) {
            // Start by saying there should be no switching:
            shouldSwitch = false;
            /* Get the two elements you want to compare,
            one from current row and one from the next: */
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            /* Check if the two rows should switch place,
            based on the direction, asc or desc: */
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark that a switch has been done: */
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            // Each time a switch is done, increase this count by 1:
            switchcount++;
        } else {
            /* If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again. */
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}

function capitalize(str) {
    return str.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()
 
 