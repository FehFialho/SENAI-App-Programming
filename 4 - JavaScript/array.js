// Vamos criar um array de "emojis" (representando as carinhas coloridas)
const emojis = ["🟩😃", "🟨😃", "🟪😃", "🟦😃", "🟩😃", "🟦😃"];

// 1. map -> transforma cada item do array em outro valor
const mapped = emojis.map(e => e + "✨");
console.log("map:", mapped);

// 2. filter -> retorna apenas os itens que satisfazem a condição
const filtered = emojis.filter(e => e.includes("🟦"));
console.log("filter:", filtered);

// 3. find -> retorna o primeiro elemento que satisfaz a condição
const found = emojis.find(e => e.includes("🟦"));
console.log("find:", found);

// 4. findIndex -> retorna o índice do primeiro que satisfaz a condição
const foundIndex = emojis.findIndex(e => e.includes("🟦"));
console.log("findIndex:", foundIndex);

// 5. indexOf -> retorna o índice do elemento (se existir exatamente no array)
const indexOfItem = emojis.indexOf("🟦😃");
console.log("indexOf:", indexOfItem);

// 6. reduce -> reduz o array a um único valor
const reduced = emojis.reduce((acc, cur) => acc + "❤️" + cur, "🚀");
console.log("reduce:", reduced);