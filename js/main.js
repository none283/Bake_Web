var picNumber = 1;

function resetColor($number) {
    switch ($number) {
        case 0:
            document.getElementById('c-titleHeader1').style.color = "white";
            document.getElementById('c-titleHeader2').style.color = "white";
            document.getElementById('c-titleHeader3').style.color = "white";
            document.getElementById('c-titleHeader4').style.color = "white";
            break;
        case 1:
            document.getElementById('c-titleHeader0').style.color = "white";
            document.getElementById('c-titleHeader2').style.color = "white";
            document.getElementById('c-titleHeader3').style.color = "white";
            document.getElementById('c-titleHeader4').style.color = "white";
            break;
        case 2:
            document.getElementById('c-titleHeader0').style.color = "white";
            document.getElementById('c-titleHeader1').style.color = "white";
            document.getElementById('c-titleHeader3').style.color = "white";
            document.getElementById('c-titleHeader4').style.color = "white";
            break;
        case 3:
            document.getElementById('c-titleHeader0').style.color = "white";
            document.getElementById('c-titleHeader1').style.color = "white";
            document.getElementById('c-titleHeader2').style.color = "white";
            document.getElementById('c-titleHeader4').style.color = "white";
            break;
        case 4:
            document.getElementById('c-titleHeader0').style.color = "white";
            document.getElementById('c-titleHeader1').style.color = "white";
            document.getElementById('c-titleHeader2').style.color = "white";
            document.getElementById('c-titleHeader3').style.color = "white";
            break;
    }
}

document.addEventListener("click", (evt) => {
    var c_titleHeader = [];

    c_titleHeader[0] = document.getElementById('c-titleHeader0');
    c_titleHeader[1] = document.getElementById('c-titleHeader1');
    c_titleHeader[2] = document.getElementById('c-titleHeader2');
    c_titleHeader[3] = document.getElementById('c-titleHeader3');
    c_titleHeader[4] = document.getElementById('c-titleHeader4');

    var circle = [];

    circle[1] = document.getElementById('circle1');
    circle[2] = document.getElementById('circle2');
    circle[3] = document.getElementById('circle3');

    let targetElement = evt.target;

    do {
        if (targetElement == c_titleHeader[0]) {
            document.getElementById('c-titleHeader0').style.color = "#ff0e83";
            resetColor(0);
            return;
        }
        else if (targetElement == c_titleHeader[1]) {
            document.getElementById('c-titleHeader1').style.color = "#ff0e83";
            resetColor(1);
            return;
        }
        else if (targetElement == c_titleHeader[2]) {
            document.getElementById('c-titleHeader2').style.color = "#ff0e83";
            resetColor(2);
            return;
        }
        else if (targetElement == c_titleHeader[3]) {
            document.getElementById('c-titleHeader3').style.color = "#ff0e83";
            resetColor(3);
            return;
        }
        else if (targetElement == c_titleHeader[4]) {
            document.getElementById('c-titleHeader4').style.color = "#ff0e83";
            resetColor(4);
            return;
        }
        else if (targetElement == circle[1]) {
            transformRow2String(1);
            return;
        }
        else if (targetElement == circle[2]) {
            transformRow2String(2);
            return;
        }
        else if (targetElement == circle[3]) {
            transformRow2String(3);
            return;
        }

        targetElement = targetElement.parentNode;
    } while (targetElement);

    resetColor(0);
    resetColor(1);
    resetColor(2);
    resetColor(3);
    resetColor(4);
});

document.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop >= 240) {
        document.getElementsByClassName('c-onTop')[0].style.opacity = "1";
        document.getElementsByClassName('c-onTop')[0].style.transitionDuration = "0.5s";
    }
    else {
        document.getElementsByClassName('c-onTop')[0].style.opacity = "0";
        document.getElementsByClassName('c-onTop')[0].style.transitionDuration = "0.5s";
    }
});

function mouse_Hover($number) {
    switch ($number) {
        case 1:
            document.getElementById('col1__img').style.backgroundImage = "url('./images/icon1pink.png')";
            document.getElementById('col1__img').style.transitionDuration = "0.5s";
            break;
        case 2:
            document.getElementById('col2__img').style.backgroundImage = "url('./images/icon2pink.png')";
            document.getElementById('col2__img').style.transitionDuration = "0.5s";
            break;
        case 3:
            document.getElementById('col3__img').style.backgroundImage = "url('./images/icon3pink.png')";
            document.getElementById('col3__img').style.transitionDuration = "0.5s";
            break;
        case 4:
            document.getElementById('col4__img').style.backgroundImage = "url('./images/icon4pink.png')";
            document.getElementById('col4__img').style.transitionDuration = "0.5s";
            break;
    }

}

function mouse_Out($number) {
    switch ($number) {
        case 1:
            document.getElementById('col1__img').style.backgroundImage = "url('./images/icon1common.png')";
            break;
        case 2:
            document.getElementById('col2__img').style.backgroundImage = "url('./images/icon2common.png')";
            break;
        case 3:
            document.getElementById('col3__img').style.backgroundImage = "url('./images/icon3common.png')";
            break;
        case 4:
            document.getElementById('col4__img').style.backgroundImage = "url('./images/icon4common.png')";
            break;
    }
}

var numberTime = 1;
function transformRow2String($number) {
    switch ($number) {
        case 1:
            document.getElementById('circle1').style.opacity = "1";
            document.getElementById('circle2').style.opacity = "0.5";
            document.getElementById('circle3').style.opacity = "0.5";

            document.getElementById('p-clients__row2String').style.transform = "translateX(0%)";
            break;
        case 2:
            document.getElementById('circle2').style.opacity = "1";
            document.getElementById('circle1').style.opacity = "0.5";
            document.getElementById('circle3').style.opacity = "0.5";
            
            document.getElementById('p-clients__row2String').style.transform = "translateX(-33%)";
            break;
        case 3:
            document.getElementById('circle3').style.opacity = "1";
            document.getElementById('circle1').style.opacity = "0.5";
            document.getElementById('circle2').style.opacity = "0.5";

            document.getElementById('p-clients__row2String').style.transform = "translateX(-66%)";
            break;
    }

    if (numberTime == 3) {
        numberTime = 1;
        return;
    }
    numberTime++;
}

function MyFunction() {
    setInterval(function () {
        transformRow2String(numberTime)
    }, 3000);
}

function onClickIconClose() {
    document.getElementById('c-pictureMenu__1').style.zIndex = "112";
    document.getElementById('c-pictureMenu__2').style.zIndex = "112";
    document.getElementById('c-pictureMenu__3').style.zIndex = "112";
    document.getElementById('c-pictureMenu__4').style.zIndex = "112";
    document.getElementById('c-pictureMenu__5').style.zIndex = "112";
    document.getElementById('c-pictureMenu__6').style.zIndex = "112";

    setTimeout(() => {
        document.getElementById('c-pictureMenu__1').style.opacity = "0";
        document.getElementById('c-pictureMenu__2').style.opacity = "0";
        document.getElementById('c-pictureMenu__3').style.opacity = "0";
        document.getElementById('c-pictureMenu__4').style.opacity = "0";
        document.getElementById('c-pictureMenu__5').style.opacity = "0";
        document.getElementById('c-pictureMenu__6').style.opacity = "0";
    }, 501);

    document.getElementById('c-pictureMenu').style.display = "none";
    document.getElementById('c-pictureMenuCover').style.display = "none";
}

function onClickOpen($number)
{
    var top = 50;

    picNumber = $number;

    document.getElementById('c-pictureMenu').style.display = "flex";
    document.getElementById('c-pictureMenuCover').style.display = "block";

    document.getElementById('c-pictureMenuFooterCover').style.transition = "none";
    document.getElementById('c-pictureMenuBackground').style.transition = "none";
    document.getElementById('c-pictureMenu__leftRight').style.transition = "none";
    document.getElementById('c-pictureMenu__1').style.transition = "none";
    document.getElementById('c-pictureMenu__2').style.transition = "none";
    document.getElementById('c-pictureMenu__3').style.transition = "none";
    document.getElementById('c-pictureMenu__4').style.transition = "none";
    document.getElementById('c-pictureMenu__5').style.transition = "none";
    document.getElementById('c-pictureMenu__6').style.transition = "none";

    document.getElementById('c-pictureMenuFooterCover').style.top = (document.documentElement.scrollTop + top).toString() + "px";
    document.getElementById('c-pictureMenuBackground').style.top = (document.documentElement.scrollTop + top).toString() + "px";
    document.getElementById('c-pictureMenu__leftRight').style.top = (document.documentElement.scrollTop + top).toString() + "px";
    document.getElementById('c-pictureMenu__1').style.top = (document.documentElement.scrollTop + top).toString() + "px";
    document.getElementById('c-pictureMenu__2').style.top = (document.documentElement.scrollTop + top).toString() + "px";
    document.getElementById('c-pictureMenu__3').style.top = (document.documentElement.scrollTop + top).toString() + "px";
    document.getElementById('c-pictureMenu__4').style.top = (document.documentElement.scrollTop + top).toString() + "px";
    document.getElementById('c-pictureMenu__5').style.top = (document.documentElement.scrollTop + top).toString() + "px";
    document.getElementById('c-pictureMenu__6').style.top = (document.documentElement.scrollTop + top).toString() + "px";

    setTimeout(() => {
        document.getElementById('c-pictureMenuFooterCover').style.transition = "0.5s";
        document.getElementById('c-pictureMenuBackground').style.transition = "0.8s";
        document.getElementById('c-pictureMenu__leftRight').style.transition = "1s";
        document.getElementById('c-pictureMenu__1').style.transition = "0.5s";
        document.getElementById('c-pictureMenu__2').style.transition = "0.5s";
        document.getElementById('c-pictureMenu__3').style.transition = "0.5s";
        document.getElementById('c-pictureMenu__4').style.transition = "0.5s";
        document.getElementById('c-pictureMenu__5').style.transition = "0.5s";
        document.getElementById('c-pictureMenu__6').style.transition = "0.5s";
    }, 1);

    setTimeout(() => {
        document.getElementById('c-pictureMenu__leftRight').style.opacity = "1";
        pictureChange(picNumber);
    }, 2);
}

function changeIndex($number)
{
    document.getElementById('c-pictureMenu__1').style.zIndex = "112";
    document.getElementById('c-pictureMenu__2').style.zIndex = "112";
    document.getElementById('c-pictureMenu__3').style.zIndex = "112";
    document.getElementById('c-pictureMenu__4').style.zIndex = "112";
    document.getElementById('c-pictureMenu__5').style.zIndex = "112";
    document.getElementById('c-pictureMenu__6').style.zIndex = "112";

    switch ($number) {
        case 1:
            document.getElementById('c-pictureMenu__1').style.zIndex = "113";
            break;
        case 2:
            document.getElementById('c-pictureMenu__2').style.zIndex = "113";
            break;
        case 3:
            document.getElementById('c-pictureMenu__3').style.zIndex = "113";
            break;
        case 4:
            document.getElementById('c-pictureMenu__4').style.zIndex = "113";
            break;
        case 5:
            document.getElementById('c-pictureMenu__5').style.zIndex = "113";
            break;
        case 6:
            document.getElementById('c-pictureMenu__6').style.zIndex = "113";
            break;
    }
}

function stringOfPictureChange($number)
{
    var Time = 500;

    if($number == 1)
    {
        document.getElementById('c-pictureMenuFooterCover').style.opacity = "0";
        document.getElementById('c-pictureMenuFooterCover').style.width = "800px";

        setTimeout(function()
        {
            document.getElementById('c-pictureMenuFooterCover').style.opacity = "1";
            $('#c-pictureMenuFooter__string').text('Image 1 of 6');
        }, Time)
    }
    else if($number == 2)
    {
        document.getElementById('c-pictureMenuFooterCover').style.opacity = "0";
        document.getElementById('c-pictureMenuFooterCover').style.width = "386px";

        setTimeout(function()
        {
            document.getElementById('c-pictureMenuFooterCover').style.opacity = "1";
            $('#c-pictureMenuFooter__string').text('Image 2 of 6');
        }, Time)
    }
    else if($number == 3)
    {
        document.getElementById('c-pictureMenuFooterCover').style.opacity = "0";
        document.getElementById('c-pictureMenuFooterCover').style.width = "386px";      

        setTimeout(function()
        {
            document.getElementById('c-pictureMenuFooterCover').style.opacity = "1";
            $('#c-pictureMenuFooter__string').text('Image 3 of 6');
        }, Time)
    }
    else if($number == 4)
    {
        document.getElementById('c-pictureMenuFooterCover').style.opacity = "0";
        document.getElementById('c-pictureMenuFooterCover').style.width = "386px";
        
        setTimeout(function()
        {
            document.getElementById('c-pictureMenuFooterCover').style.opacity = "1";
            $('#c-pictureMenuFooter__string').text('Image 4 of 6');
        }, Time)
    }
    else if($number == 5)
    {
        document.getElementById('c-pictureMenuFooterCover').style.opacity = "0";
        document.getElementById('c-pictureMenuFooterCover').style.width = "386px";        

        setTimeout(function()
        {
            document.getElementById('c-pictureMenuFooterCover').style.opacity = "1";
            $('#c-pictureMenuFooter__string').text('Image 5 of 6');
        }, Time)
    }
    if($number == 6)
    {
        document.getElementById('c-pictureMenuFooterCover').style.opacity = "0";
        document.getElementById('c-pictureMenuFooterCover').style.width = "800px";
        
        setTimeout(function()
        {
            document.getElementById('c-pictureMenuFooterCover').style.opacity = "1";
            $('#c-pictureMenuFooter__string').text('Image 6 of 6');
        }, Time)
    }
}

function pictureChange($picNumber) {

    var Time = 500;

    switch ($picNumber) {
        case 1:
            document.getElementById('c-pictureMenuBackground').style.width = "800px";
            document.getElementById('c-pictureMenuBackground').style.height = "503px"; 

            document.getElementById('c-pictureMenu__leftRight').style.width = "800px";

            document.getElementById('c-pictureMenu__2').style.opacity = "0";

            setTimeout(function () {
                document.getElementById('c-pictureMenu__1').style.opacity = "1";                
            }, Time)

            changeIndex(1);
            stringOfPictureChange(1);

            break;

        case 2:
            document.getElementById('c-pictureMenuBackground').style.width = "386px";
            document.getElementById('c-pictureMenuBackground').style.height = "503px";

            document.getElementById('c-pictureMenu__leftRight').style.width = "386px";

            document.getElementById('c-pictureMenu__1').style.opacity = "0";
            document.getElementById('c-pictureMenu__3').style.opacity = "0";

            setTimeout(function () {                
                document.getElementById('c-pictureMenu__2').style.opacity = "1";                
            }, Time)

            changeIndex(2);
            stringOfPictureChange(2);

            break;

        case 3:
            document.getElementById('c-pictureMenuBackground').style.width = "386px";
            document.getElementById('c-pictureMenuBackground').style.height = "503px";

            document.getElementById('c-pictureMenu__leftRight').style.width = "386px";

            document.getElementById('c-pictureMenu__2').style.opacity = "0";            
            document.getElementById('c-pictureMenu__4').style.opacity = "0";

            setTimeout(function () {
                document.getElementById('c-pictureMenu__3').style.opacity = "1";
            }, Time)

            changeIndex(3);
            stringOfPictureChange(3);

            break;

        case 4:            
            document.getElementById('c-pictureMenuBackground').style.width = "386px";
            document.getElementById('c-pictureMenuBackground').style.height = "503px";

            document.getElementById('c-pictureMenu__leftRight').style.width = "386px";

            document.getElementById('c-pictureMenu__3').style.opacity = "0";            
            document.getElementById('c-pictureMenu__5').style.opacity = "0";

            setTimeout(function () {
                document.getElementById('c-pictureMenu__4').style.opacity = "1";
            }, Time)

            changeIndex(4);
            stringOfPictureChange(4);

            break;

        case 5:
            document.getElementById('c-pictureMenuBackground').style.width = "386px";
            document.getElementById('c-pictureMenuBackground').style.height = "503px";

            document.getElementById('c-pictureMenu__leftRight').style.width = "386px";

            document.getElementById('c-pictureMenu__4').style.opacity = "0";
            document.getElementById('c-pictureMenu__6').style.opacity = "0";

            setTimeout(function () {                
                document.getElementById('c-pictureMenu__5').style.opacity = "1";                
            }, Time)

            changeIndex(5);
            stringOfPictureChange(5);

            break;

        case 6:
            document.getElementById('c-pictureMenuBackground').style.width = "800px";
            document.getElementById('c-pictureMenuBackground').style.height = "503px";

            document.getElementById('c-pictureMenu__leftRight').style.width = "800px";

            document.getElementById('c-pictureMenu__5').style.opacity = "0";

            setTimeout(function () {                
                document.getElementById('c-pictureMenu__6').style.opacity = "1";
            }, Time)

            changeIndex(6);
            stringOfPictureChange(6);

            break;
    }
}

function onHoverRightFunction($number, $string) {
    document.getElementById('c-pictureMenu__right').style.opacity = $number;
    document.getElementById('c-pictureMenu__right').style.cursor = $string;
}

function onHoverLeftFunction($number, $string) {
    document.getElementById('c-pictureMenu__left').style.opacity = $number;
    document.getElementById('c-pictureMenu__left').style.cursor = $string;
}

function onHover($number) {
    if (picNumber == 1) {
        onHoverLeftFunction("0", "default");
    }

    if (picNumber == 6) {
        onHoverRightFunction("0", "default");
    }

    if($number == 1 && picNumber != 1)
    {
        onHoverLeftFunction("1", "pointer");
    } 
    else if($number == 2 && picNumber != 6)
    {
        onHoverRightFunction("1", "pointer");    
    }
}

function onClickIconSlideNext() {
    ++picNumber;

    if (picNumber > 6) {
        picNumber = 6;
    }

    pictureChange(picNumber);
}

function onClickIconSlideBack() {
    --picNumber;

    if (picNumber < 1) {
        picNumber = 1;
    }

    pictureChange(picNumber);
}

var menuNumber = 0;
function onClickMenuButton()
{
    if (menuNumber == 0)
    {
        document.getElementById('l-mainMenu').style.height = "241.5px";
        menuNumber = 1;
    }
    else if (menuNumber == 1)
    {
        document.getElementById('l-mainMenu').style.height = "18px";
        menuNumber = 0;
    }
}