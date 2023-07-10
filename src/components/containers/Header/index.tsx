import { SignOutButton } from './components/SignOutButton';
import { UserInfo } from './components/UserInfo';

export function Header() {

  return (
    <header className='border-b border-b-zinc-100 shadow-sm bg-zinc-50'>
      <div className='flex justify-between items-center gap-4 px-2.5 py-4 max-w-[1360px] m-auto'>
        <h1
          className='text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 bg-clip-text text-transparent'
        >
          NextAuth
        </h1>

        <div className='flex items-center gap-3'>
          <UserInfo />

          <SignOutButton />
        </div>
      </div>
    </header>
  );
}