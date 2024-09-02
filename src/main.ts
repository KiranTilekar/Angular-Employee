import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient} from '@angular/common/http';
import { withFetch } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ApiService } from '../src/app/services/api.service';
import { HttpClientModule } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    { provide: CommonModule, useClass: CommonModule },
    ApiService
  ],
}).catch((err) => console.error(err));
