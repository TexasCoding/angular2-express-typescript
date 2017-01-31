import * as express from 'express';

class HeroController {

    create(req, res) {
        res.send('hero create method');
    }
    update(req, res) {
        res.send('hero update method');
    }
    delete(req, res) {
        res.send('hero delete method');
    }
    retrieve(req, res) {
        res.send('hero retrieve method');
    }
    findById(req, res) {
        res.send('hero find by ID method');
    }
}

export default HeroController;
