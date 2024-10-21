import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (
        <header className="text-grey">
            <nav className="container mx-auto flex justify-between items-center py-5 font-bold ">
            <div className="text-2xl font-bold">
                <Link href="/" className="hover:text-[#6A6D71]">
                    <Image
                    src="/logo.png"   
                    alt="My Logo"   
                    width={171}        
                    height={53}       
                    />
                </Link>
            </div>
            
            <ul className="flex space-x-6">
                <li>
                    <Link href="/" className="text-[#2A4E6E] hover:text-[#F26409]">
                    Home
                    </Link>
                </li>
                <li>
                    <Link href="/sobre" className="text-[#6A6D71] hover:text-[#F26409]">
                    Sobre nós
                    </Link>
                </li>
                <li>
                    <Link href="/servicos" className="text-[#6A6D71] hover:text-[#F26409]">
                    Nossos planos
                    </Link>
                </li>
                <li>
                    <Link href="/contato" className="text-[#6A6D71] hover:text-[#F26409]">
                    Contato
                    </Link>
                </li>
                <li>
                <Link href="/" className="border border-[#F26409] text-[#F26409] text-bold bg-white hover:bg-[#F26409] hover:text-white px-6 py-5 text-lg rounded-2xl">
                    Área do cliente
                </Link>
                </li>
            </ul>
            </nav>
        </header>
    )
}
