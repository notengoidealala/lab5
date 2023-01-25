$(".ButtonAgregar").click(TodoAgregar)

function TodoAgregar(e){
    e.preventDefault()
    let todo = $("#newText").val()
    $(".Lista").append(`<li class="lis"> <p class="itemShop">${todo}</p><button class="checar" type="text"> ${"check"} </button> <button class="del" type="text"> ${"delete"} </button><br></li>`)
}

$(document).on('click', '.del', function() {
    $(this).parent().remove();
});

$(".Lista").on("click", ".checar", function(){
    $(this).siblings(".itemShop").toggleClass("chec")
})

