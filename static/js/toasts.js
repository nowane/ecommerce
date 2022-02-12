let option = {
    autohide: true,
};

const toastElList = [].slice.call(document.querySelectorAll('.toast'));
const toastList = toastElList.map(function (toastEl) {
    return new bootstrap.Toast(toastEl, option);
});
toastList.forEach(toast => toast.show());