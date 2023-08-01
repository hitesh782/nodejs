const app = require('./routes-tut')

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`server is listing on port ${PORT}`);
})