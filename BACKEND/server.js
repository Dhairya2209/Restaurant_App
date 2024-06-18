import app from "./app.js";



app.listen(process.env.PORT, ()=>{
    console.log(`server runnig on port ${process.env.PORT}`);
});