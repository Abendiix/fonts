/*
MIT License

Copyright (c) 2024 Abendiix

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

var page = document.getElementById("page");

var elementsToChangeArray = document.getElementsByClassName("changeableColor");

window.onload = (event) => {
    if(localStorage.getItem("mode") == "clear")
    {
        changeToClearMode();
    }
    else if (localStorage.getItem("mode") == "dark")
    {
        changeToDarkMode();
    }
    else
    {
        localStorage.setItem("mode", "clear");
    }
};

function filterClear(item)
{
    item.style.filter = "invert(0%) sepia(5%) saturate(4170%) hue-rotate(82deg) brightness(118%) contrast(84%)";
}

function filterDark(item)
{
    item.style.filter = "invert(99%) sepia(8%) saturate(1%) hue-rotate(316deg) brightness(110%) contrast(84%)";
}

function changeToClearMode()
{
    localStorage.setItem("mode", "clear");
    page.style.backgroundColor = "rgb(255, 255, 255)";
    page.style.color = "rgb(20, 20, 20)";
    document.getElementById("cc0").style.color = "rgb(20, 20, 20)";
    document.getElementById("fontAwe").style.color = "rgb(20, 20, 20)";

    for (var i = 0; i < elementsToChangeArray.length; i++)
    {
        filterClear(elementsToChangeArray.item(i));
    }
}

function changeToDarkMode()
{
    localStorage.setItem("mode", "dark");
    page.style.backgroundColor = "rgb(30, 30, 30)";
    page.style.color = "rgb(235, 235, 235)";
    document.getElementById("cc0").style.color = "rgb(235, 235, 235)";
    document.getElementById("fontAwe").style.color = "rgb(235, 235, 235)";

    for (var i = 0; i < elementsToChangeArray.length; i++)
    {
        filterDark(elementsToChangeArray.item(i));
    }
}