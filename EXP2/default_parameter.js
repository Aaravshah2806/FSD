const greet = ({name = "Guest", age = "unknown"}) => {
    console.log(`Hello, ${name}! You are ${age} years old.`);
};

greet({name: "ABC", age: 40});
greet({});