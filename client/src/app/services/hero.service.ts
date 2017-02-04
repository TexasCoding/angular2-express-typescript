/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */

import { Injectable } from '@angular/core';

import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Hero } from '../models/hero';

@Injectable()
export class HeroService {

    private heroesUrl = 'http://localhost:3000/api/heros';  // URL to web api

    constructor(private http: Http) { }

    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    getHero(id: string) {
        return this.http.get(this.heroesUrl + '/' + id)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    save(hero: Hero): Promise<Hero> {
        if (hero._id) {
            return this.put(hero);
        }
        return this.post(hero);
    }

    private post(hero: Hero): Promise<Hero> {
        const headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http
            .post(this.heroesUrl, JSON.stringify(hero), { headers: headers })
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    private put(hero: Hero) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        const url = `${this.heroesUrl}/${hero._id}`;

        return this.http
            .put(url, JSON.stringify(hero), { headers: headers })
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    delete(hero: Hero) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        const url = `${this.heroesUrl}/${hero._id}`;

        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
