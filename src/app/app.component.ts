import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  personne = {
  nom : 'Mohamed IDBRAHIM',
  tel : '06050303315',
  adresse:{
    ville:'kenitra',
    code: 12000
  }

  }
  
  
  viewCourse = "Laravel";
  isSelected : boolean =true;
  
  post = {
    title: "lorem ipsum",
    isFavorite: true
  };
  //course = ['Laravel','Angular','Symfony'];
 courses;
  onFavoriteChanged(args){
    console.log("favorite changed",args)
  };

  addCourse(){
  
    this.courses.push({id: 7, title: "Vuex"});
  }
  removeCourse(course){
  let index = this.courses.indexOf(course);
  this.courses.splice(index,1);
  }

  editCourse(course){
   course.title = "UPDATED"; 
    }

    onLoad(){
      this.courses = [
        { id: 1, title: "Laravel"     },
        { id: 2, title: "symfony"     },
        { id: 3, title: "spring boot" },
        { id: 4, title: "Vue JS"      },
        { id: 5, title: "Deno Js"     },
        { id: 6, title: "React Js"    },
      ];
    }

    onTrack(index, course){
      return course ? course.id: undefined;

    }
    myFavorite(){
        this.isSelected =  !this.isSelected;      
    }
}
