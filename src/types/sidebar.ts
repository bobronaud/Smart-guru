export interface ReviewDateType {
	icon: any;
	nameCourse: string;
	category: string;
	name: string;
	review: string;
	role: string;
	rating: number;
}
export interface AccountOption{
	value:number,
	label:string
}
export interface AccountStatusOption{
	value:number,
	label:string
}
export interface UserDataType {
	photo: any;
	login: string;
	email: string;
	password: string;
}

export interface SideBarProps {
	isAdd?: boolean;
	isEdit?: boolean;
	isEditProfile?: boolean;
	isOpen: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	accounts?:AccountOption[];
	statuses?:AccountStatusOption[];
	data: Partial<ReviewDateType & UserDataType>;
}