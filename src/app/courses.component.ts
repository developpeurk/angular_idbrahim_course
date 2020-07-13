import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
             <div class="container">
                 <ul class="list-group">
                    <li class="list-group-item">Titre: {{ course.titre | lowercase | uppercase }}</li>
                    <li class="list-group-item">Note: {{ course.avis | number:'2.1-1' }}</li>
                    <li class="list-group-item">Eleves: {{ course.participants }}</li>
                    <li class="list-group-item">prix: {{ course.prix | currency:'MAD':'symbol' :'3.1-1'}}</li>
                    <li class="list-group-item">date de publication: {{ course.publicationDate | date: 'dd-MM-yyyy' }}</li>

    
          `
         
})

export class CoursesComponent{
    course = {
        titre: 'Formation complète sur Angular',
        avis: '4.9762',
        participants: 136,
        prix: 950.38,
        publicationDate: new Date(2017,11,21)
    }

}