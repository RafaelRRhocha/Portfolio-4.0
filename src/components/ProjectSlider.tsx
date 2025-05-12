'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

interface IProjectSlider {
  images: Array<{
    title: string;
    path: string;
    link: string;
  }>;
}

const workSlides: Array<IProjectSlider> = [
  {
    images: [
      {
        title: 'Portfólio v1',
        path: 'https://cdn.discordapp.com/attachments/1151632434878758912/1371544884284227715/image.png?ex=68238636&is=682234b6&hm=77c602ec17971e6005c8893539dbcb429192db668433952e89aa42878cad46ae&',
        link: 'https://rafaelrocha-portfolio.vercel.app',
      },
      {
        title: 'Portfólio v2',
        path: 'https://cdn.discordapp.com/attachments/1151632434878758912/1371546773704671272/image.png?ex=682387f8&is=68223678&hm=25b0b97a0ac92f2f573c4d709065b55818de960a6b3c4c4f47247e7f8d644eff&',
        link: 'https://rafaelrocha.vercel.app',
      },
      {
        title: 'Quiz Racha Cuca',
        path: 'https://cdn.discordapp.com/attachments/1151632434878758912/1371545329010212874/image.png?ex=682386a0&is=68223520&hm=93564d8a90e9631347d1403364aa91a571fd612601d13cca59bf2190c5286b83&',
        link: 'https://quiz-rafaelrrhocha.vercel.app',
      },
      {
        title: 'Clone Netflix',
        path: 'https://cdn.discordapp.com/attachments/1151632434878758912/1371546380845191289/image.png?ex=6823879b&is=6822361b&hm=e6bdde7fa8592e93c1ea8bd96000fad484a80336fb823d14daea688696603374&',
        link: 'https://clone-netflix-rafaelrrhocha.vercel.app',
      },
    ],
  },
  {
    images: [
      {
        title: 'Pokedex',
        path: 'https://cdn.discordapp.com/attachments/1151632434878758912/1371556394914025473/image.png?ex=682390ee&is=68223f6e&hm=a74da9d2a992c81c5348fd447a89e7d9ddf68c5c96db7907515eaf0073b530eb&',
        link: 'https://rafaelrrhocha.github.io/Projetos/Pokedex/',
      },
      {
        title: 'Lista de Tarefas',
        path: 'https://cdn.discordapp.com/attachments/1151632434878758912/1371556761949179984/image.png?ex=68239146&is=68223fc6&hm=44050a10883c6805cf7d3872188cfb094d9b84fa89bb688f2e9763fdbc508f4c&',
        link: 'https://rafaelrrhocha.github.io/Projetos/03-listaDeTarefas/',
      },
      {
        title: 'Adivinhe a Cor',
        path: 'https://cdn.discordapp.com/attachments/1151632434878758912/1371556888294064328/image.png?ex=68239164&is=68223fe4&hm=6f6a4b12e6e7deab4d1af6c77c253545198d6f524c9c86708bb6c43ccf4bc519&',
        link: 'https://rafaelrrhocha.github.io/Projetos/04-ColorGuess/',
      },
      {
        title: 'Chat Online',
        path: 'https://cdn.discordapp.com/attachments/1151632434878758912/1371558545601986772/image.png?ex=682392ef&is=6822416f&hm=0e6ca4e0c7cfd8c4446127f9c05d1df125c08e87b38c1e5ff0ddfea4e2186220&',
        link: 'https://online-chat-rafaelrrhocha.vercel.app',
      },
    ],
  },
  {
    images: [
      {
        title: 'Bloco de Notas',
        path: 'https://cdn.discordapp.com/attachments/1151632434878758912/1371558665961865349/image.png?ex=6823930c&is=6822418c&hm=a312362217b6871d5b47dfc22b3641c794893e188362929435235bf6d558c635&',
        link: 'https://bloco-de-notas-rafaelrrhocha.vercel.app',
      },
      {
        title: 'Livro de Receitas',
        path: 'https://cdn.discordapp.com/attachments/1151632434878758912/1371558896660910253/image.png?ex=68239343&is=682241c3&hm=5f55427aa842b1dcd04fe4a1173fba0511cab7368fa336f9c3b52abc083bc1f3&',
        link: 'https://recipes-app-rafaelrrhocha.vercel.app/',
      },
      {
        title: 'Cadastro de Clientes',
        path: 'https://cdn.discordapp.com/attachments/1151632434878758912/1371559048192721017/image.png?ex=68239367&is=682241e7&hm=4c257c3d6bffb5c90ea6509f1dd5f18657928c4a0d2b06de14bc794a369aff2d&',
        link: 'https://register-app-rafaelrrhocha.vercel.app',
      },
      {
        title: 'Trybewarts',
        path: 'https://cdn.discordapp.com/attachments/1151632434878758912/1371557009316642886/image.png?ex=68239181&is=68224001&hm=ba9cacd7083b98fa7040bb3280f0ebeacb711447951719c66c91cae97cc07c36&',
        link: 'https://rafaelrrhocha.github.io/Projetos/05-Trybewarts/',
      },
    ],
  },
  {
    images: [
      {
        title: 'Preview Songs',
        path: 'https://cdn.discordapp.com/attachments/1151632434878758912/1371557847267020891/image.png?ex=68239249&is=682240c9&hm=aad565cbb402129b78740d92358dd40f37d8f787254ef12caf531fbd9f7eb8d4&',
        link: 'https://preview-songs-rafaelrrhocha.vercel.app',
      },
      {
        title: 'Carteira de Gastos',
        path: 'https://cdn.discordapp.com/attachments/1151632434878758912/1371558081187549184/image.png?ex=68239280&is=68224100&hm=c1ca5e49cdddaba5578f8cc56a797eaaa179b389ca86a94f9e3962a0ae3dd58e&',
        link: 'https://carteira-de-gastos-rafaelrrhocha.vercel.app',
      },
      {
        title: 'Trivia',
        path: 'https://cdn.discordapp.com/attachments/1151632434878758912/1371558292186337340/image.png?ex=682392b3&is=68224133&hm=479ccfb84b3d5b87731dd1c7bf89480f433299a3b413539bf147d49ac1813fb4&',
        link: 'https://trivia-rafaelrrhocha.vercel.app',
      },
    ],
  },
  {
    images: [
      {
        title: 'Zelda 1986',
        path: 'https://cdn.discordapp.com/attachments/1151632434878758912/1371559183002108166/image.png?ex=68239387&is=68224207&hm=08c66bbd875f91fb999e58c31125b290b4cb818511d0f73368cfe73532efe599&',
        link: 'https://rafaelrrhocha.github.io/Projetos/zelda-1986/',
      },
      {
        title: 'Super Mario',
        path: 'https://cdn.discordapp.com/attachments/1151632434878758912/1371559306885075045/image.png?ex=682393a5&is=68224225&hm=7e6abd7cb2b20e35c38c10c0eeaaeb2303c1a16dc776ba012bf5ba7cdaa5f972&',
        link: 'https://rafaelrrhocha.github.io/Projetos/superMario/',
      },
      {
        title: 'Bomberman',
        path: 'https://cdn.discordapp.com/attachments/1151632434878758912/1371559500150214728/image.png?ex=682393d3&is=68224253&hm=343a8ee161bbba1670cd3e61775d73c1c96aa7260bd0314db88ff35dc9a4d129&',
        link: 'https://rafaelrrhocha.github.io/Projetos/bomberman/',
      },
    ],
  },
];

const ProjectSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {slide.images.map((image, imageI) => (
              <Link
                key={imageI}
                href={image.link}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]"
              >
                <div className="group relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-[#0f1015]/30 shadow-lg transition-all duration-300 hover:shadow-accent/20">
                  <div className="hidden w-full border-b border-accent/20 bg-[#0f1015]/90 p-2 text-center text-sm font-medium tracking-wider text-white/90 transition-all duration-300 group-hover:bg-accent/20 group-hover:text-white lg:block">
                    {image.title}
                  </div>

                  <div className="group relative flex w-full items-center justify-center overflow-hidden">
                    <Image
                      src={image.path}
                      alt={image.title}
                      width={500}
                      height={300}
                      className="w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-[#0f1015] opacity-0 transition-all duration-700 group-hover:opacity-80" />

                    <div className="absolute bottom-0 flex translate-y-full gap-x-2 transition-all duration-300 group-hover:-translate-y-10 group-hover:xl:-translate-y-20">
                      <div className="delay-100">ACESSAR</div>
                      <div className="translate-y-[500%] transition-all delay-150 duration-300 group-hover:translate-y-0">
                        PROJETO
                      </div>
                      <div className="translate-y-[500%] text-xl transition-all delay-150 duration-300 group-hover:translate-y-0">
                        <BsArrowRight aria-hidden />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectSlider;
