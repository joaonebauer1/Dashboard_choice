//-------------- PRATICAL LESSON SESSION ----------------
function praticalLessonInfo(){
    $.ajax({
        url: 'http://localhost:1616/api/GetPraticalLessonInfo',
        contentType:'application/json',
        method: 'GET',
        dataType: 'json',
        success: function (data) {                        
            $('#qualified-lesson')[0].innerText = parseFloat(data.qualifiedLesson).toLocaleString("pt-BR", { style: "decimal"}) + ' Aprovadas';        
            $('#contingency-lesson')[0].innerText = parseFloat(data.contingencyLesson).toLocaleString("pt-BR", { style: "decimal"}) + ' Contingentes';
            $('#performed-lesson')[0].innerText = parseFloat(data.performedLesson).toLocaleString("pt-BR", { style: "decimal"}) + ' Agendadas';
            $('#canceled-lesson')[0].innerText = parseFloat(data.canceledLesson).toLocaleString("pt-BR", { style: "decimal"}) + ' Canceladas';            
        }               
    });
}
//-------------- END PRATICAL LESSON SESSION ----------------

//-------------- THEORETICAL LESSON SESSION ----------------
function theoreticalLessonInfo(){
    $.ajax({
        url: 'http://localhost:1616/api/GetTheoreticalLessonInfo',
        contentType:'application/json',
        method: 'GET',
        dataType: 'json',
        success: function (data) {                        
            $('#student-planned')[0].innerText = parseFloat(data.realTimeStudentPlanned).toLocaleString("pt-BR", { style: "decimal"}) + ' Alunos agendados';        
            $('#student-present')[0].innerText = parseFloat(data.realTimeStudentAttending).toLocaleString("pt-BR", { style: "decimal"}) + ' Alunos presentes';
            $('#planned-lesson')[0].innerText = parseFloat(data.plannedLesson).toLocaleString("pt-BR", { style: "decimal"}) + ' Agendadas';
            $('#completed-lesson')[0].innerText = parseFloat(data.completedLesson).toLocaleString("pt-BR", { style: "decimal"}) + ' Canceladas';            
        }               
    });
}
//-------------- END THEORETICAL LESSON SESSION ----------------

//-------------- HARDWARE KITS SESSION ----------------
function hardwareKitsInfo(){
    $.ajax({
        url: 'http://localhost:1616/api/GetHardwareKitsInfo',
        contentType:'application/json',
        method: 'GET',
        dataType: 'json',
        success: function (data) {                        
            $('#pratical-kit')[0].innerText = parseFloat(data.praticalInstalledKits).toLocaleString("pt-BR", { style: "decimal"});        
            $('#theoretical-kit')[0].innerText = parseFloat(data.theoreticalInstalledKits).toLocaleString("pt-BR", { style: "decimal"});            
        }               
    });
}
//-------------- END HARDWARE KITS SESSION ----------------

//-------------- MAIN PROCESS ----------------
$(document).ready(function() {
       praticalLessonInfo();
       theoreticalLessonInfo();
       hardwareKitsInfo();
});
//-------------- MAIN PROCESS ----------------