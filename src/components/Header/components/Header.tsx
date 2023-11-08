import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/navbar';
import { FC } from 'react';
import Link from 'next/link';
import UserLayout from './UserLayout';
import ThemeSwitcher from 'src/components/ThemeSwitcher';
import { Avatar } from '@nextui-org/avatar';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { dataHeader } from './data';
import { Search } from 'src/assets/icons';

const Header: FC = () => {
  return (
    <Navbar isBordered classNames={{ wrapper: 'max-w-[1920px]' }}>
      <NavbarContent justify="start">
        <NavbarMenuToggle className="sm:hidden" />
        <NavbarBrand>
          <Link
            href="/"
            className="inline-flex items-center gap-1 font-bold text-inherit"
          >
            <Avatar
              size="md"
              src="https://assets.stickpng.com/images/6002f95551c2ec00048c6c70.png"
            />
            Funfy
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="center" className="hidden w-[100%] px-20 sm:flex">
        <Input
          startContent={<Search />}
          variant="flat"
          placeholder="Find topic, or post"
        />
        <Button color="primary">Create Post</Button>
      </NavbarContent>

      <NavbarContent justify="end" className="gap-2">
        <ThemeSwitcher />
        <UserLayout />
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <Input
            startContent={<Search />}
            variant="flat"
            placeholder="Find topic, or post"
          />
        </NavbarMenuItem>
        {dataHeader.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link href="/">{item}</Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;