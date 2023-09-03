import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { authUser } from './../../../models/user';

@Component({
	selector: 'app-registro',
	templateUrl: './registro.component.html',
	styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
	registerUser: authUser = {
		email: '',
		password: ''
	};
	constructor(private authService: AuthService) {}

	register(registerUser: authUser) {
		this.authService.register(registerUser.email, registerUser.password);
	}
}
