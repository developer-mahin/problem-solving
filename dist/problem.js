"use strict";
// problem - 1
/**
 *
 * Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. Print The Final Result.
 *
 */
const filteredPerson = (person) => {
    const female = person.filter((item) => item.gender === "Female");
    const femaleName = female.map((item) => {
        return {
            name: item.name,
        };
    });
    return femaleName;
};
const personData = [
    { name: "Suborna", age: 32, gender: "Female" },
    { name: "Mitu", age: 19, gender: "Female" },
    { name: "Jahanara", age: 42, gender: "Female" },
    { name: "Rakib", age: 57, gender: "Male" },
    { name: "Rony", age: 18, gender: "Male" },
    { name: "Resma", age: 33, gender: "Female" },
    { name: "Maria", age: 74, gender: "Female" },
    { name: "Sifat", age: 62, gender: "Male" },
    { name: "Namira", age: 52, gender: "Female" },
    { name: "Mahir", age: 38, gender: "Male" },
];
const result = filteredPerson(personData);
const bookTitle = (books) => {
    const title = books.map((book) => {
        return {
            title: book.title,
        };
    });
    return title;
};
const booksData = [
    {
        title: "The Hitchhiker's Guide to the Galaxy",
        author: "Douglas Adams",
        year: 1979,
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        year: 1813,
    },
    {
        title: "One Hundred Years of Solitude",
        author: "Gabriel García Márquez",
        year: 1967,
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 2020,
    },
    {
        title: "The Lord of the Rings",
        author: "J. R. R. Tolkien",
        year: 1954,
    },
];
const bookResult = bookTitle(booksData);
// console.log(bookResult);
// problem - 3
/**
 *
 * Write Three Functions: One To Square A Number, One To Double A Number, And One To Add 5 To A Number. Compose These Functions To Create A New Function That Squares A Number, Doubles The Result, And Then Adds 5.
 *
 */
const squareNumber = (number) => {
    const square = Math.pow(number, 2);
    return square;
};
const doubleNumber = (number) => {
    const double = number * 2;
    return double;
};
const addFive = (number) => {
    const add = number + 5;
    return add;
};
const composeFunctions = (number) => {
    const square = squareNumber(number);
    const double = doubleNumber(square);
    const add = addFive(double);
    return add;
};
const threeFunction = composeFunctions(3);
const sortByAscending = (data) => {
    const sort = data.sort((a, b) => a.year - b.year);
    return sort;
};
const cars = [
    { make: "Toyota", model: "Corolla", year: 2020 },
    { make: "Honda", model: "Civic", year: 2019 },
    { make: "Ford", model: "Mustang", year: 2021 },
    { make: "Chevrolet", model: "Malibu", year: 2018 },
    { make: "Tesla", model: "Model 3", year: 2022 },
];
const sortResult = sortByAscending(cars);
// console.log(sortResult)
// problem - 5
/**
 *
 * Write A Function That Searches An Array Of Objects For A Specific Person By Name. If Found, Modify Their Age Property. Print The Updated Array.
 *
 */
const updateData = (data, name) => {
    const find = data.find((item) => item.name === name);
    if (!find) {
        throw new Error("name not found");
    }
    find.age = 32;
    return find;
};
const updateArrayResult = updateData(personData, "Namira");
// console.log(updateArrayResult);
