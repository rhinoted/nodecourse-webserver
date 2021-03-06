const express= require('express');
const hbs=require('hbs');
const port= process.env.PORT || 3000;
var app= express();
// app.use((req,res,next) => {
//   res.render ('maintenance.hbs');
// });
hbs.registerHelper('myDate',()=>{
  return new Date().getFullYear();
});
hbs.registerHelper('screamIt',(text)=>{
  return text.toUpperCase();
})
hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine','hbs');
app.use(express.static('/public'));


app.get('/',(req,res)=>{
  res.render('index.hbs',{
    pageTitle:'index',
    welcomeMessage:'You are welcome mister!'
  });


});

app.get('/about',(req,res)=>{
res.render('about.hbs',{
  pageTitle:'About Page',
});

});

app.get('/projects',(req,res)=>{
res.render('projects.hbs',{
  pageTitle:'My portfolio',
});

});


app.listen(port);
