const {response, request} = require('express');
const dataMapper = require('../dataMapper.js');



const mainController = {
    homePage: async (req,res) => {
        try {
            const coffee = await dataMapper.getLastcoffee();
            res.render('accueil', {coffee} )
        } catch (error) {
            console.error('Erreur sur la  homePage:', error);
            res.status(500).send('Internal Server Error');
        }
    },

    cataloguePage: async (req,res) => {
        try {
        const coffee = await dataMapper.getAllcoffee();
        const category = await dataMapper.getAllcategory();
        res.render('catalogue', {coffee, category} )
        } catch (error) {
        console.error('Erreur sur la  homePage:', error);
        res.status(500).send('Internal Server Error');  
        }
    },
    
    catalogueCategory: async(req,res) => {
        const category = req.query.category;
        try {
        let coffee
        if (category) {
        coffee = await dataMapper.getCoffeebyCategory(category)    
        } else {
        coffee = await dataMapper.getAllcoffee()   
        }    
        res.render('catalogue',{coffee : coffee, category} )
        } catch (error) {
        console.error('Erreur sur la  homePage:', error);
        res.status(500).send('Internal Server Error');  
            }
        },

    détailPage: async(req,res) => {
        try {
        const id = Number(req.params.id);
        const coffee = await dataMapper.getCoffe(id);    
        /* console.log(coffee) */
        res.render('detail',{coffee} )
        } catch (error) {
        console.error('Erreur sur la  homePage:', error);
        res.status(500).send('Internal Server Error');  
        }
    },


    whoAreUs (req,res) {
        try {
            res.render('qui_sommes_nous')
        } catch (error) {
            console.error('Erreur sur la  homePage:', error);
            res.status(500).send('Internal Server Error');  
        }
    },




}










module.exports = mainController;