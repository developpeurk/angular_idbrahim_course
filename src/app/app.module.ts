import { FavoriteComponent } from './favorite.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmailService } from './email.service';
import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { ResumePipe } from './resume.pipe';
import { FavoritesComponent } from './favorites/favorites.component';
import { PanelComponent } from './panel/panel.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    ResumePipe,
    FavoriteComponent,
    FavoritesComponent,
    PanelComponent,
    InputFormatDirective,
    ContactFormComponent,
    SignupFormComponent,
    PostsComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [CoursesService,EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
