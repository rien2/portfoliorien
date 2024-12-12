import ProfileImage from './header/ProfileImage';
import HeaderText from './header/HeaderText';
import ScrollButton from './header/ScrollButton';

export default function Header() {
  return (
    <header className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-3xl mx-auto text-center">
        <ProfileImage />
        <HeaderText />
        <ScrollButton />
      </div>
    </header>
  );
}