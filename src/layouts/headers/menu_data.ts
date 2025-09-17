interface DataType {
	id: number;
	title: string;
	link: string;
	has_dropdown?: boolean;
	sub_menus?: {
		link: string;
		title: string;
	}[];
	primary_button?: boolean;
}
// menu data
const menu_data: DataType[] = [
	
	{
		id: 2,
		title: "About",
		link: "/about",
		has_dropdown: false,
	},
	{
		id: 3,
		title: "services",
		link: "/service",
		has_dropdown: false,
	},
	{
		id: 4,
		title: "Projects",
		link: "#",
		has_dropdown: false,
		
	},
	
	{
		id: 6,
		title: "Contact",
		link: "/contact",
		has_dropdown: false,
		primary_button: true,
	},
];
export default menu_data;
