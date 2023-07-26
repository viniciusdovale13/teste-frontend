'use client'
import { FC, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Navbar: FC = () => {
  const router = useRouter();
  const [querySearch, setQuerySearch] = useState<string>('');
  const handleSearch = (event: any) => {
    if(event.key === 'Enter' && querySearch.trim() !== '') {
      setQuerySearch('');
      router.push(`/search?query=${querySearch}`);
    }
  }
  return (
    <header>
      <div className="navbar bg-base-100 container">
        <div className="flex-1">
          <Link href='/' className='btn btn-ghost normal-case text-xl'>
            Marvel
          </Link>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              value={querySearch}
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
              onChange={(e => setQuerySearch(e.target.value))} 
              onKeyDown={handleSearch}
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar;