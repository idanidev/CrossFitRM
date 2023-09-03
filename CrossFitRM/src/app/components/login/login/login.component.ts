import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { authUser } from '../../../models/user';
import { AuthService } from '../../../services/auth.service';
import { ThemeService } from '../../../services/theme.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent {
	loginUser: authUser = {
		email: '',
		password: ''
	};
	constructor(
		private authService: AuthService,
		@Inject(DOCUMENT) private document: Document,
		private themeService: ThemeService
	) {
		let theme = window.localStorage.getItem('theme');
		if (theme) {
			this.themeSelection = theme == 'dark' ? true : false;
			this.changeTheme(this.themeSelection);
		}
	}

	login(loginUser: authUser) {
		this.authService.login(loginUser.email, loginUser.password);
	}

	themeSelection: boolean = false;

	changeTheme(state: boolean) {
		let theme = state ? 'dark' : 'light';
		window.localStorage.setItem('theme', theme);
		let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;
		themeLink.href = 'md' + theme + 'indigo' + '.css';
	}
}
