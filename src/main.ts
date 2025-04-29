import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { PostListComponent } from './app/components/post-list/post-list.component';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: PostListComponent }
    ]),
    provideHttpClient() // <-- Important for HttpClient!
  ]
});
