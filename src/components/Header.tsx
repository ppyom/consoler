import Logo from "./Logo";
import MenuBar from "./MenuBar";

const Header = () => {
	return (
		<header className="w-full bg-zinc-300 flex justify-center px-2 py-2">
			<div className="w-full max-w-screen-xl flex justify-between">
				<Logo />
				<MenuBar />
			</div>
		</header>
	);
}

export default Header;