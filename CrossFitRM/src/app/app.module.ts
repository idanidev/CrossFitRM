import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { environment } from '../enviroment/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login/login.component';
import { RegistroComponent } from './components/login/registro/registro.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
	declarations: [AppComponent, NavbarComponent, LoginComponent, RegistroComponent, HomeComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		InputSwitchModule,
		FormsModule,
		ToggleButtonModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireAuthModule,
		AngularFirestoreModule,
		CheckboxModule,
		ButtonModule,
		InputTextModule,
		ToastModule,
		MessagesModule,
		BrowserAnimationsModule,
		MessageModule
	],
	providers: [MessageService],
	bootstrap: [AppComponent]
})
export class AppModule {}
