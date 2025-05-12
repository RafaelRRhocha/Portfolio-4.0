'use client';

import { FaQuoteLeft } from 'react-icons/fa';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ITestimonial {
  message: string;
}

const testimonialData: Array<ITestimonial> = [
  {
    message: `Rafael é um desenvolvedor que realmente se preocupa com a qualidade do que entrega. Ele não só traduz o design para o código com precisão, mas também se envolve de verdade no processo, sempre questionando, sugerindo e colaborando para chegar na melhor solução.

    É uma pessoa que está sempre atento aos detalhes e buscando entender o contexto do produto. Além disso, sua proatividade e parceria com o time tornam o trabalho muito mais fluido e produtivo. Ter o Rafael no time significa contar com alguém que realmente se importa com a qualidade do que está sendo entregue!`,
  },
  {
    message: `Rafael desempenhou um sua função além do esperado em diversas entregas relevantes. Profissional curioso e interessado com o impacto do seu trabalho para o negócio, se destaca pelo comprometimento e caráter frente aos desafios. Considero o Rafa fora da curva no quesito comunicação e como Product Owner, pude contar com sua colaboração não somente no código, mas também no refinamento de tarefas e User Storys, facilitando o trabalho do time. Ainda que tenha demonstrado positivamente sua adaptabilidade em ambientes de startups, aposto que ele vai voar em contextos mais maduros e estruturados 🚀`,
  },
  {
    message: `Desde o processo seletivo Rafael se destacou entregando mais que o pedido, fazendo perguntas pertinentes e se mostrando interessado em crescer. Foi o primeiro trabalho dele como programador e rapidamente se destacou pela atenção aos detalhes (isso é muito importante para frontend) sendo o favorito da equipe de design quando o assunto é fazer exatamente igual ao figma. E mais, sempre questionando as decisões de design para chegar a um resultado final melhor, mais simples e mais barato! Se adaptou rapidamente a tecnologias que ainda não dominava como Ruby on Rails e Vue.js, e também mostrou muita habilidade com aquelas que já conhecia melhor como React. Esse garoto tem muito potencial pela frente! Sucesso!`,
  },
  {
    message: `Rafael é dedicado, tem facilidade em aprender, tem bom desempenho em grupo, ajuda outras pessoas com dificuldades, e sempre procura se atualizar com tecnologias modernas e é focado em trabalhar e estudar. Recomendo fortemente para empresas que procuram um excelente profissional em Front-end.`,
  },
  {
    message:
      'O Rafael é uma das minhas referências! Excelente desenvolvedor, fera no front-end e um ótimo colega de curso, sempre disposto a ajudar. Sou fã dos fronts dele! Recomendo muito.',
  },
  {
    message:
      'Rafael Rocha é muito técnico e estudioso dedicado. Sempre em busca de novas tecnologias para solucionar desafios do ambiente de tecnologia, recomendo fortemente para todas as empresas que desejam ter em seu quadro de colaboradores, um profissional que faz a diferença e contribui com os resultados positivos.',
  },
  {
    message:
      'Rafael Rocha é um excelente desenvolvedor, fortemente dedicado no seu aprendizado em Front-end. Sempre em busca de novas tecnologias para solucionar problemas e deixar usabilidade do usuário o melhor possível, minha recomendação para todas as empresas que desejam ter um profissional dedicado, focado no seu trabalho e estudo.',
  },
  {
    message:
      'Rafael é um excelente programador, tecnicamente muito bom e dedicado. Recomendo fortemente ele para todas as empresas que desejam ter em seu quadro de colaboradores, um profissional que faz a diferença e contribui com os resultados positivos.',
  },
  {
    message:
      'Se você procura alguém para front-end, ele é a pessoa certa. Bastante ágil e versátil, o Rochinha não vai descansar até ficar satisfeito com o resultado a ser entregue por ele.',
  },
  {
    message:
      'Rafael é meu chará. Determinado e pró-ativo, busca sempre a melhor opção em seus desafios, é dedicado, compromoteido e sabe trabalhar em equipe.',
  },
  {
    message:
      'Rafael é um otimo profissional, receptivo, atento, esforçado alem de ser cheio de vontade de crescer e se auto melhorar.',
  },
];

const FeedbacksSlider = () => {
  return (
    <Swiper
      navigation
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((person, i) => (
        <SwiperSlide key={i}>
          <div className="flex h-full flex-col items-center gap-x-8 px-16 md:flex-row">
            <div className="flex flex-1 flex-col justify-center px-5">
              <div className="mb-4">
                <FaQuoteLeft className="mx-auto text-4xl text-white/20 md:mx-0 xl:text-6xl" />
              </div>

              <div className="text-center md:text-left xl:text-lg">
                {person.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FeedbacksSlider;
