import { Header } from '@/components/Header';
import { Main } from '@/components/Main';

export default function Home() {
    return (
        <div>
            <Header className='mb-[22px] sticky top-0 z-10 w-full h-[74px] mobm:h-[85px] sm:h-[103px] bg-[#1D5B43] flex flex-col items-center justify-center px-4 py-2 '></Header>
            <Main className='content flex flex-col items-center gap-[22px] mobm:gap-5 lg:gap-[110px]' />
        </div>
    );
}
