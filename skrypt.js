//document.write("<p>Witaj świecie!</p>");

console.log("Jakiś text");

// KOMENTARZ JEDNOLINIOWY
/*
KOMENTARZ WIELOLINIOWY
KOMENTARZ WIELOLINIOWY
*/

var a; //DEKLARACJA ZMIENNEJ a (STARSZA METODA)

a = 12; //PRZYPISANIE LICZBY 12 DO ZMIENNEJ a

//document.write(a); // WYŚWIETLENIE WARTOŚCI ZMIENNEJ a

let b = 13; //DEKLARACJA ZMIENNEJ b I PRZYPISANIE WARTOŚCI

//document.write("<br>Zmienna b ma wartość: " + b); // "+" ŁĄCZENIE CIĄGÓW (KONKATENACJA)

const pi = 3.14;
let c = 2, d = 3, wynik;

wynik = c + d; //DODAWANIE ZMIENNYCH NUMERYCZNYCH

//document.write("<br>");
//document.write("Wynik dodawania liczby " + c + " oraz liczby " + d + " wynosi <strong>" + wynik + "</strong>");

wynik = d-c;
wynik = c*d;
wynik = c/d;

//INKREMENTACJA, DEKREMENTACJA
c++; // TO JEST TO SAMO, CO c = c + 1 //INKREMENTACJA
c--; // TO JEST TO SAMO, CO c = c - 1 //DEKREMANTACJA

//document.write("<br>");
//document.write("<br>");

// alert("TO JEST ALERT");

let e = prompt("Podaj pierwszą liczbę");
let f = prompt("Podaj drugą liczbę");
e = parseInt(e); // ZMIANA TYPU WPROWADZONYCH DANYCH NA LICZBĘ CAŁKOWITĄ
f = parseInt(f);
wynik = e + f;
//document.write("Wynik dodawania liczby " + e + " oraz liczby " + f + " wynosi <strong>" + wynik + "</strong>");

const kontener = document.getElementById("kontener");
kontener.insertAdjacentHTML('beforeend', '<br>Wynik dodawania liczby ' + e + ' oraz liczby ' + f + ' wynosi <strong>' + wynik + '</strong>');