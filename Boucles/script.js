//-----------------------------exercice 1-----------------------------
let nbr = [1, 2, 3, 4];

function allItems(sequence) {
    let i = 0;
    let element;
    while (i < sequence.length) {
        element = sequence[i];
        i++;
        console.log(element);


    }
}
//display(nbr)

//-----------------------------exercice 2-----------------------------
let nbr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function first10Items(sequence2) {
    let i = 0;
    while (i < sequence2.length) {
        if (i < 10) {
            console.log(sequence2[i]);
        }
        i++;
    }
}
//first10Items(nbr2)

//-----------------------------exercice 3-----------------------------

let tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 0 , -1, -2 ]

function lastitems(nbr3) {
    let i = tab.length - 10
    while (i < tab.length) {
        console.log(tab[i])
        i++
    }
}
//lastitems(tab)

//-----------------------------exercice 4-----------------------------
function objectPlusOne(nb4) {
    let i = 0;
    while (i < nb4.length) {
        nb4[i] += 1
        i++;
    }
    console.log(nb4);
}
//objectPlusOne(tab)

//-----------------------------exercice 5-----------------------------
function evenOrOdd(nb5) {
    let i = 0
    while (i < nb5.length) {
        if (nb5[i] % 2 === 0) {
            console.log(nb5[i] + " even")
        } else {
            console.log(nb5[i] + " odd")
        }
        i++
    }
}
//evenOrOdd(tab)

//-----------------------------exercice 6-----------------------------

function sumArray(nb6) {
    let i = 0
    let sum = 0
    while (i < nb6.length) {
        sum += nb6[i]
        i++
    }
    console.log(sum)
}
//sumArray(tab)

//-----------------------------exercice 7-----------------------------

function returnEven(nb7) {
    let i = 0
    let nbEven = 0
    while (i < nb7.length) {
        if (nb7[i] % 2 === 0) {
            nbEven++
        }
        i++
    }
    console.log(nbEven)
    return nbEven
}
//returnEven(tab)

//-----------------------------exercice 8-----------------------------

function theLargest(nb8) {
    let i = 0
    let largest = 0
    while (i < nb8.length) {
        if (nb8[i] > largest) {
            largest = nb8[i]
        }
        i++
    }
    console.log(largest)
    return largest
}
//theLargest(tab)

//-----------------------------exercice 9-----------------------------

function theLargestAndSmallest(nb9){
    let i = 0
    let largest = nb9[0]
    let smallest = nb9[0]
    while ( i < nb9.length) {
        if (nb9[i] > largest) {
            largest = nb9[i]
        }
        if ( nb9[i] < smallest) {
            smallest = nb9[i]
        }
        i++
    }
    console.log("The largest = " + largest)
    console.log("The smallest = " + smallest)
}
//theLargestAndSmallest(tab)

//-----------------------------exercice 10-----------------------------

function ascendingOrderTrueOrFalse(nb10){
    let i = 0
    while (i < nb10.length) {

    }
}