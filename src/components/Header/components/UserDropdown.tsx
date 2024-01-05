'use client';

import { FC } from 'react';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from '@nextui-org/dropdown';
import { Button } from '@nextui-org/button';
import { User } from '@nextui-org/user';

import { useAuth } from 'src/context/Auth';
import Link from 'next/link';
import { toCreatTopic, toProfileSetting, toUser } from 'src/utils/paths';

const disabledKeys = ['user'];

const UserDropdown: FC = () => {
  const { user, logOut } = useAuth();

  return (
    <Dropdown
      radius="sm"
      classNames={{
        content: 'p-0 border-small border-divider bg-background',
      }}
    >
      <DropdownTrigger>
        <Button
          color="primary"
          variant="light"
          className="min-w-[6rem] overflow-hidden truncate px-2 text-foreground max-sm:min-w-[2rem] max-sm:px-0 sm:flex"
        >
          <User
            name={user?.name}
            avatarProps={{
              src: user?.photoURL ?? '',
              size: 'sm',
              className: 'min-w-[2rem]',
            }}
            className="justify-start overflow-hidden"
            classNames={{
              name: 'truncate w-full max-sm:hidden',
              wrapper: 'overflow-hidden w-full',
            }}
          />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        disabledKeys={disabledKeys}
        aria-label="Custom item styles"
        className="p-3"
        itemClasses={{
          base: [
            'rounded-md',
            'text-default-500',
            'transition-opacity',
            'data-[hover=true]:text-foreground',
            'data-[hover=true]:bg-default-100',
            'dark:data-[hover=true]:bg-default-50',
            'data-[selectable=true]:focus:bg-default-50',
            'data-[pressed=true]:opacity-70',
            'data-[focus-visible=true]:ring-default-500',
          ],
        }}
      >
        <DropdownSection aria-label="Profile & Actions" showDivider>
          <DropdownItem
            isReadOnly
            key="user"
            textValue="user"
            className="opacity-100"
          >
            <User
              name={user?.name}
              avatarProps={{
                src: user?.photoURL ?? '',
                size: 'sm',
              }}
            />
          </DropdownItem>
          <DropdownItem key="profile" textValue="profile">
            <Link href={toUser(user?.uid || '')}>
              <div>Profile</div>
            </Link>
          </DropdownItem>
          <DropdownItem key="topicCreate" textValue="topicCreate">
            <Link href={toCreatTopic()}>
              <div>Create topic</div>
            </Link>
          </DropdownItem>
          <DropdownItem key="settings" textValue="settings">
            <Link href={toProfileSetting()}>
              <div>Settings</div>
            </Link>
          </DropdownItem>
        </DropdownSection>
        <DropdownSection aria-label="Help & Feedback">
          <DropdownItem key="logout" textValue="logout" onClick={logOut}>
            <span className="text-danger">Log Out</span>
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};

export default UserDropdown;