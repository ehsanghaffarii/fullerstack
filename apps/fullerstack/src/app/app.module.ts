import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AuthInterceptor, AuthModule } from '@fullerstack/ngx-auth';
import { CachifyInterceptor } from '@fullerstack/ngx-cachify';
import { ConfigModule } from '@fullerstack/ngx-config';
import { GqlInterceptor } from '@fullerstack/ngx-gql';
import { GqlModule } from '@fullerstack/ngx-gql';
import { I18nModule } from '@fullerstack/ngx-i18n';
import { JwtModule } from '@fullerstack/ngx-jwt';
import { LAYOUT_STATE_KEY, LayoutModule } from '@fullerstack/ngx-layout';
import { LoggerModule } from '@fullerstack/ngx-logger';
import { MaterialModule } from '@fullerstack/ngx-material';
import { MsgModule } from '@fullerstack/ngx-msg';
import { SharedModule } from '@fullerstack/ngx-shared';
import { UixModule } from '@fullerstack/ngx-uix';
import { UserModule } from '@fullerstack/ngx-user';
import { ValidationService } from '@fullerstack/ngx-util';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsModule } from '@ngxs/store';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileUpdateComponent } from './pages/user/profile-update.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    AppComponent,
    ProfileUpdateComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    RouterModule.forRoot(AppRoutes),
    NgxsModule.forRoot([], { developmentMode: !environment.production }),
    NgxsReduxDevtoolsPluginModule.forRoot({ disabled: environment.production }),
    NgxsLoggerPluginModule.forRoot({ logger: console, collapsed: false }),
    NgxsStoragePluginModule.forRoot({
      key: [LAYOUT_STATE_KEY],
    }),
    ConfigModule.forRoot(environment),
    LoggerModule,
    JwtModule,
    MsgModule,
    SharedModule,
    GqlModule,
    I18nModule.forRoot(),
    AuthModule,
    UserModule,
    UixModule,
    LayoutModule,
  ],
  providers: [
    ValidationService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: CachifyInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: GqlInterceptor, multi: true },
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
