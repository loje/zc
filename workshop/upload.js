window.onload = function () {
// Import image
    var inputImage = document.getElementById('inputImage');
    var URL = window.URL || window.webkitURL;
    var blobURL;

    if (URL) {
        inputImage.onchange = function () {
            var files = this.files;
            var file;

            if (cropper && files && files.length) {
                file = files[0];

                if (/^image\/\w+/.test(file.type)) {
                    blobURL = URL.createObjectURL(file);
                    cropper.reset().replace(blobURL);
                } else {
                    window.alert('Please choose an image file.');
                }
            }
            $(inputImage).find("img").hide();
        };
    } else {
        inputImage.disabled = true;
        inputImage.parentNode.className += ' disabled';
    }
}