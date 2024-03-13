const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

//CONFIG PARTIALS E HANDLEBARS
const hbs = exphbs.create({
    partialsDir: ["views/partials"],
});
app.engine('handlebars', hbs.engine)

app.set('view engine', 'handlebars')

//CONFIG CSS
app.use(express.static("public"));

//PAGINA INICIAL
app.get('/', function(req, res) {
    res.render('home')
})

//PAGINA LISTA DE PEDIDOS
app.get('/orders', function(req,res){
    const orders = ["Pedido 5200", "Pedido 5201", "Pedido 5202", "Pedido 5203", "Pedido 5204", "Pedido 5205"];
    res.render('orders', {orders: orders})      
})


//PEDIDOS INDIVIDUALIZADOS
app.get('/order', function(req,res){

 // CHAMANDO PEDIDO POR MEIO DE BOTÃO

        // function choiceOrder(){
    //     if(onclick= "Pedido 5200"){
    //         console.log("Pedido 5200")
    //     } 
    // }
    // choiceOrder()


    // function choiceOrder(){
    //     console.log("botão clicado")
    // }
    // choiceOrder()

   
    // function choiceOrder(){
    //     if(choiceOrder == orders[0]){
    //         console.log("5200")
    //     } else {
    //         console.log("erro")
    //     }
    // }
    // choiceOrder()

    
    //PEDIDOS
    const order =
        {
            number: "5200",
            name: "Angela Paes",
            celphone: "(11) 98765-9876",
            size: "4kg",
            flavor: "Abacaxi",
            caketop: "Chocolate",
            dateWithdrawn: "20/03/2024", 
            time: "17:00"
        }
        // {
        //     number: "5201",
        //     name: "Bruna Souza",
        //     celphone: "(11) 97654-4567",
        //     size: "2kg",
        //     flavor: "Coco",
        //     caketop: "Chocolate",
        //     dateWithdrawn: "30/03/2024", 
        //     time: "19:00"
        // },
        // {
        //     number: "5202",
        //     name: "André Lima",
        //     celphone: "(11) 96543-0965",
        //     size: "5kg",
        //     flavor: "leite Ninho",
        //     caketop: "Morango",
        //     dateWithdrawn: "14/03/2024", 
        //     time: "20:00"
        // },
        // {
        //     number: "5203",
        //     name: "Isabele Silva",
        //     celphone: "(11) 97654-3456",
        //     size: "2kg",
        //     flavor: "Doce de Leite",
        //     caketop: "Doce de Leite",
        //     dateWithdrawn: "10/04/2024", 
        //     time: "13:00"
        // },
        // {
        //     number: "5204",
        //     name: "Sabrina Costa",
        //     celphone: "(11) 93564-9854",
        //     size: "4kg",
        //     flavor: "Floresta Negra",
        //     caketop: "Chocolate",
        //     dateWithdrawn: "20/03/2024", 
        //     time: "21:00"
        // },
        // {
        //     number: "5205",
        //     name: "Iara Souza",
        //     celphone: "(11) 97345-8654",
        //     size: "2kg",
        //     flavor: "kitkat",
        //     caketop: "Chocolate",
        //     dateWithdrawn: "19/03/2024", 
        //     time: "18:00"
        // },
        // {
        //     number: "5206",
        //     name: "Mateus Duarte",
        //     celphone: "(11) 97564-9765",
        //     size: "3kg",
        //     flavor: "Sonho de Valsa",
        //     caketop: "Morango",
        //     dateWithdrawn: "04/04/2024", 
        //     time: "19:00"
        // }
    

        res.render('order', {order})      
})

app.listen(5000)



// const order5200 = [
//     {
//         number: "5200",
//         name: "Angela Paes",
//         celphone: "(11) 98765-9876",
//         size: "4kg",
//         flavor: "Abacaxi",
//         caketop: "Chocolate",
//         dateWithdrawn: "20/03/2024", 
//         time: "17:00"
//     }]
//     const order5201 = [
//         {
//             number: "5201",
//             name: "Bruna Souza",
//             celphone: "(11) 97654-4567",
//             size: "2kg",
//             flavor: "Coco",
//             caketop: "Chocolate",
//             dateWithdrawn: "30/03/2024", 
//             time: "19:00"
//         }]
//     const order5202 = [
//         {
//             number: "5202",
//             name: "André Lima",
//             celphone: "(11) 96543-0965",
//             size: "5kg",
//             flavor: "leite Ninho",
//             caketop: "Morango",
//             dateWithdrawn: "14/03/2024", 
//             time: "20:00"
//         }]
//     const order5203 = [
//         {
//             number: "5203",
//             name: "Isabele Silva",
//             celphone: "(11) 97654-3456",
//             size: "2kg",
//             flavor: "Doce de Leite",
//             caketop: "Doce de Leite",
//             dateWithdrawn: "10/04/2024", 
//             time: "13:00"
//         }]
//     const order5204 = [
//         {
//             number: "5204",
//             name: "Sabrina Costa",
//             celphone: "(11) 93564-9854",
//             size: "4kg",
//             flavor: "Floresta Negra",
//             caketop: "Chocolate",
//             dateWithdrawn: "20/03/2024", 
//             time: "21:00"
//         }]
//     const order5205 = [
//         {
//             number: "5205",
//             name: "Iara Souza",
//             celphone: "(11) 97345-8654",
//             size: "2kg",
//             flavor: "kitkat",
//             caketop: "Chocolate",
//             dateWithdrawn: "19/03/2024", 
//             time: "18:00"
//         }]
//     const order5206 = [
//         {
//             number: "5206",
//             name: "Mateus Duarte",
//             celphone: "(11) 97564-9765",
//             size: "3kg",
//             flavor: "Sonho de Valsa",
//             caketop: "Morango",
//             dateWithdrawn: "04/04/2024", 
//             time: "19:00"
//         }]