var indexValue = 1;
showImg(indexValue);
function btm_Slide(e) { showImg(indexValue = e); }
function sides_Slide(e) { showImg(indexValue += e); }

function showImg(e) {
    let i;
    const img = document.querySelectorAll('img');
    const sliders = document.querySelectorAll('btn-Sliders span');
    if (e > img.length) { indexValue = 1 }
    if (e < 1) { indexValue = img.length }

    for (i = 0; i < img.length; i++) {

        img[i].style.display = "none";
        img[indexValue - 1].style.display = "block";

    }
    for (i = 0; i < sliders.length; i++) {

        sliders[i].style.display = "block";
    }



}