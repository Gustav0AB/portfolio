

export const getImage = (file, callback) => {
    var reader = new FileReader();
    reader.onloadend = function () {
        callback(reader.result)
    };
    reader.readAsDataURL(file);
}