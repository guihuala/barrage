var span = document.getElementsByClassName("close")[0];

var modal = document.getElementById("myModal");

function showModal(text) {
    modal.style.display = "block";
    document.getElementById("modal-text").innerHTML = text;
}


// 点击关闭按钮隐藏弹出框
span.onclick = function () {
    modal.style.display = "none";
}

// 点击弹出框外部也可以关闭弹出框
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}