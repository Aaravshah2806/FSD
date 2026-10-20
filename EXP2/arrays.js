const flowers = ["Lilly", "Rose", "Sunflower"];

console.log(flowers.includes("Lilly"));

const found = flowers.find(flower => flower.startsWith("c"));
console.log(found);

const upperFlowers = flowers.map(flower => flower.toUpperCase());
console.log(upperFlowers);