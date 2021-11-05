// ---------- ARRAYS ----------

//1
// var storeStudentNamesLiteral = []

//2
// var storeStudentNamesObject = { [] }

//3
// var stringArray = ["abc" , "xyz" , "ABC" , "XYZ"]
// alert (stringArray)
//4 
// // var numbersArray = [123 , 456 , 789 , 101]
// alert (numbersArray)

//5
// var booleanArray = [true , false]
// alert (booleanArray)
//6 
// var mixedArray = ["abc" , 123 , true , "mixed"]
// alert (mixedArray)

//7
// var pakQualifications = ["SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil.", "PhD"]

// document.write ("<h1>Qualifications</h1> <br />")
// document.write ("1) " , pakQualifications[0] , "<br/>" )
// document.write ("2) " , pakQualifications[1] , "<br/>" )
// document.write ("3) " , pakQualifications[2] , "<br/>" )
// document.write ("4) " , pakQualifications[3] , "<br/>" )
// document.write ("5) " , pakQualifications[4] , "<br/>" )
// document.write ("6) " , pakQualifications[5] , "<br/>" )
// document.write ("7) " , pakQualifications[6] , "<br/>" )
// document.write ("8) " , pakQualifications[7] , "<br/>" )

//8
// var studentNames = ["Ali" , "Ahmed" , "Aryan"]
// var studentMarks = [250 , 320 , 380]
// var totalMarks = 500

// console.log (studentNames[0])


// document.write (("Score of ")  , studentNames[0] , " is " , studentMarks[0] ,  ", Percentage " , studentMarks[0] / totalMarks * 100 , "% <br />")
// document.write (("Score of ")  , studentNames[1] , " is " , studentMarks[1] ,  ", Percentage " , studentMarks[1] / totalMarks * 100 , "% <br />" )
// document.write (("Score of ")  , studentNames[2] , " is " , studentMarks[2] ,  ", Percentage " , studentMarks[2] / totalMarks * 100 , "% <br />")

//9

// var colorNames = [" Blue " , "Yellow " , "Red " , "Green "]


// document.write (colorNames)

//a
// var beggingAddColor = prompt ("Blue , Yellow, Red , Green \rWhat color do you want to add at the beginning of this color group?" )

// colorNames.unshift(beggingAddColor)
// document.write (colorNames)

//b
// var updatedArray = prompt ("Blue , Yellow, Red , Green \rWhat color do you want to add at the beginning of this color group?" )

// colorNames.push(updatedArray)
// document.write (colorNames)

//c
// colorNames.unshift("pink " , "purple")
// document.write(colorNames)

//d
// colorNames.shift()
// document.write (colorNames)

//e
// colorNames.pop()
// document.write(colorNames)

//f
// var askIndex = +prompt ("Blue , Yellow, Red , Green \rAt which index you want to add a color?")
// var askColor = prompt ("Blue , Yellow, Red , Green \rWhich color?")

// colorNames.splice(askIndex , 0 , askColor )
// document.write (colorNames)

//g
// var askIndex = +prompt ("Blue , Yellow, Red , Green \rAt which index you want to add a color?")
// var askColor = +prompt ("Blue , Yellow, Red , Green \rWhich color?")

// colorNames.splice(askIndex , askColor )
// document.write (colorNames)

//10
// var studentScore = [220,120,420,380]
// document.write (studentScore)

// document.write (
//     "<br /> Order student score =  " ,
//     studentScore.sort(function(a,b) {return a-b})
// )

//11
// var cityNames = ["karachi" , "quetta" , "islamabad" , "lahore" , "peshawar"]
// document.write ("<h1>Cities</h1>" , cityNames)

// var selectedCities = cityNames.slice(1 , 3)

// document.write ("<h1>Selected Cities</h1>" , selectedCities)

//12
// var arr = ["This" , "is", "my", "cat"]
// arr.join()
// document.write (arr)


// ---------- ARRAYS AND LOOP ----------

//1
// var multiArray = [
//     []
// ]


//2
// var matrix = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ]

// for (var i = 0 ;i < 3 ; i++) {
//     for (var b=0; b<3; b++) {
//         document.write (matrix[i][b] + " ")
//     }
//     document.write ("<br />")
// }

//3
// for (var a = 1; a <= 10; a++){
//     document.write (a , "<br />")
// }

//4
// var tableNumber = +prompt ("Enter Table Number")
// var tabelLength = +prompt ("Enter Table Length")

// for (var a = 1 ; a <= tabelLength ; a++){
//     document.write (tableNumber , " x " , a , " = " ,tableNumber * a  , "<br>")
// }


//5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"]

// for (a = 0 ; a <= 0 ; a++){
//     document.write (fruits[0] + "<br>" )
//     document.write (fruits[1] + "<br>" )
//     document.write (fruits[2] + "<br>" )
//     document.write (fruits[3] + "<br>" )
//     document.write (fruits[4] + "<br>" )
// }

//6
// document.write ("Counting: ")
// for (var a = 1; a <= 15; a++){
//     document.write (a , ",")
// }
// document.write ("<br>")

// document.write ("Reverse Counting: ")
// for (var b = 15;  b-- ;){
//     document.write (b , ",")
// }
// document.write ("<br>")

// document.write ("Even: ")
// for (var a = 1; a <= 20; a++ ){
//     document.write (a * 2 , ",")
// }
// document.write ("<br>")


//7
// var A = ["cake", "apple pie", "cookie", "chips", "patties"]
// var availability = ["Available" , "Unavailable"]

// var items = prompt("What do you want to order?")

// if (items == A){
//     document.write ("The " , items , " is " , availability[0] )
// } else{
//     document.write ("The " , items , " is " , availability[1])
// }

//8
// var numbers = [24, 53, 78, 91, 12]
// document.write (numbers)
// document.write ( "<br>Highest Number -- " , Math.max(24, 53, 78, 91, 12))

//9
// var num = [24, 53, 78, 91, 12]
// document.write (num)

// document.write("<br>The smallest number is -- " , Math.min(24, 53, 78, 91, 12))

//10
// for ( var a = 1; a <= 20 ; a++){
//     document.write (a*5 , ",")
// }
