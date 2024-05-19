const items = [
    {
        name: "chocolate",
        price: 1200,
    },
    {
        name: "juice",
        price: 1000,
    },
];
async function getItems(req, res) {
    res.json(items);
}

export default getItems;
