
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

interface SidebarItemProps {
    href: string;
    icon: string;
  }

const SidebarItem = ({ href, icon}: SidebarItemProps) => {
  const router = usePathname();
  const isActive = router === href;

  return (
    <Link legacyBehavior href={href}>
      <a className={`${isActive ? 'opacity-100' : 'opacity-50'}`}>
        <img src={icon} className={'h-16 w-16 flex justify-center my-5 opac'} alt="" />
      </a>
    </Link>
  );
};

export default SidebarItem;