export interface UserDataType {
	name: string;
	email: string;
	avatarUrl: string;
}

export interface SignUpData {
	name: string;
	email: string;
	password: string;
	accountType: string;
	imageUrl: string;
}

export interface LoginData {
	email: string,
	password: string,
};

export interface ConfirmCode {
	code: string,
	token: string
}


export interface SendCodeResponse {
	token: { token: string } | null;
	errorMessage?: string;
}

export interface ErrorMessage {
	message: string;
}
