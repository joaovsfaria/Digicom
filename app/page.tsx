'use client'

import Navbar from '@/app/ui/navbar';
import Button from '@/app/ui/button'
import Image from 'next/image';
import Card from '@/app/ui/card';
import ContactForm from '@/app/ui/form';
import Footer from '@/app/ui/footer';

export default function HomePage() {
  return (
    <main className="relative flex flex-col columns-1 min-h-screen space-y-10">
        <div className="flex flex-col">
          <Navbar />
        </div>
        
        <div
        className="flex flex-col justify-center items-center text-center shadow-lg space-y-5 h-96 w-full bg-no-repeat bg-center bg-cover bg-[url('/banner.png')]">
        
        <div className="text-[#F26409] font-bold">
          <h1>NÃO PERCA TEMPO</h1>
        </div>

        <div className="font-bold text-[#2A4E6E]">
          <span className="text-6xl">80 MEGA POR R$69,90</span>
        </div>

        <div className="text-gray-500">
          Tecnologia de ponta com o melhor atendimento da região!
        </div>
        <Button />
      </div>
      <div className="flex flex-col justify-center items-center text-center space-y-6 text-[#2C3643]">
        <h1 className="text-2xl">Confira nossos planos e vantagens:</h1>

        <div className="flex gap-16">
          <Card 
            title="80MB"
            description="Para navegar à vontade na internet, redes sociais e curtir suas páginas preferidas."
            price="69"
            decimals='90'
            main={false}
          />
          <Card 
            title="220MB"
            description="Para você que quer tranquilidade em seu trabalho, estudo e diversão."
            price="89"
            decimals="90"
            main={true}
          />
          <Card 
            title="420MB"
            description="Melhor experiência em GAMES - Seus Jogos sem LAG e pra conectar toda a família."
            price="139"
            decimals="99"
            main={false}
          />
        </div>

        <div className="border-b-2 text-[#2A4E6E] border-[#2A4E6E]">
          Ver todos os planos
        </div>
      </div>
      <div className="bg-transparent flex justify-center items-center bg-cover !mt-[180px] !mb-[220px] max-h-[589px] bg-no-repeat bg-[url('/background.png')]">
        <div className="w-full max-w-7xl h-[860px]">
          <div className="py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className='flex flex-col gap-8 mt-[70px] items-center'>
                <div className="relative bg-white p-11 rounded-xl shadow-2xl mx-auto flex flex-col items-center justify-center text-left h-[375px] w-[588px]">
                  <h2 className="text-3xl font-semibold mb-4 text-[#6A6D71] leading-tight">
                    Elementum non dui amet
                  </h2>
                  <p className="text-[#6A6D71] mb-6 text-lg">
                    Sed volutpat nec nunc facilisis. Volutpat rhoncus sit id felis parturient nibh. Leo pulvinar netus purus non nec ut. Donec amet feugiat.
                  </p>
                </div>
                <div className="relative h-[375px] w-[588px]">
                  <Image
                    src="/img-2.png"
                    alt="Data visualization"
                    className="rounded-lg shadow-md w-full object-cover"
                    width={588}
                    height={375}
                  />
                </div>
              </div>
              <div className='flex flex-col gap-8 items-center'>
                <div className="relative h-[375px] w-[588px]">
                  <Image
                    src="/img-1.png"
                    alt="People working"
                    className="rounded-lg shadow-md w-full object-cover"
                    width={588}
                    height={375}
                  />
                </div>
                <div className="relative bg-white p-11 rounded-xl shadow-lg mx-auto flex flex-col items-start justify-center text-left h-[375px] w-[588px]">
                  <h2 className="text-3xl font-semibold mb-4 text-[#6A6D71] leading-tight">
                    In sed fames gravida purus velit
                  </h2>
                  <p className="text-[#6A6D71] mb-6 text-lg">
                    Vulputate quis a nulla vitae malesuada. Ac gravida auctor cras elit. Integer ut sed erat viverra vitae.
                  </p>
                  <a
                    href="#"
                    className="bg-orange-500 text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-orange-600 transition-colors"
                  >
                    Conheça os planos rurais
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ContactForm />
      </div>
      <div className="flex items-center justify-center">
        <div className="border-t-2 w-full max-w-[1440px]"></div>
      </div>
      <div className='flex items-center justify-center !mt-[100px]'>
        <Footer />
      </div>
    </main>
  )
}

