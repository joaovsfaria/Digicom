import Image from 'next/image'
import Button from '@/app/ui/button'
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return(
      <div className="flex gap-[94px] items-start h-[560px]">
        <div className="max-w-[300px]">
          <div>
            <div className="flex flex-col gap-4 text-[#6A6D71]">
              <Image
                src="/logo.png"
                alt="Logo"
                width={243}
                height={75}
              />
              <div className='mt-[10px]'>
                <p>Cras vitae sed nisi quam lectus ullamcorper at sagittis. Id venenatis posuere lacus tellus egestas. Felis quam venenatis.</p>
              </div>
              
            </div>
            <h2 className="text-xl font-semibold text-[#2A4E6E] mt-[46px]">REDES SOCIAIS</h2>
            <div className='mt-[15px] flex gap-[22px]'>
              <a className="text-[#2A4E6E]"><FaFacebookF size={32} /></a>
              <a className="text-[#2A4E6E]"><FaInstagram size={32} /></a>
            </div>
          </div>
        </div>
        <div>
          <div className='max-w-[258px]'>
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold text-[#2A4E6E]">CONTATO</h2>
              <div>
                <div className='text-[#6A6D71] space-y-1'>
                  <p>contato@digicominternet.com.br</p>
                  <p>(35)3735-1509</p>
                  <p>(35)99826-7210</p>
                  <p>Rua Dona Alzira Velano, 45 – Jardim América – Alfenas-MG</p>
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-xl font-semibold text-[#2A4E6E] mt-[46px]">MAPA DO SITE</h2>
          <div className='flex space-x-[24px] text-[#6A6D71] mt-[14px]'>
          <p>Arcu auctor</p>
          <p>Morbi tristique</p>
          </div>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-gray-600 font-medium max-w-[229px]">
            Fique por dentro das <span className="font-bold">promoções</span> e novidades!
          </h2>
          <div className="mt-4 flex space-x-2">
            <input
              type="text"
              placeholder="Placeholder"
              className="p-2 w-[229px] rounded-md bg-gray-100 text-gray-500 placeholder-gray-400"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md">
              Cadastrar
            </button>
          </div>
        </div>
      </div>
  )
}