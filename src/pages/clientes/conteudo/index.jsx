import './styles.css'

export default function Conteudo() {
  return (
    <>
      <section className="pet-hero">
        <div className="pet-hero__content">
          <p className="pet-hero__eyebrow">Pet shop e cuidados</p>
          <h1>Cuidado, saúde e carinho para quem está sempre ao seu lado</h1>
          <p>
            Banho e tosa, alimentação selecionada e orientação para manter cães e gatos
            saudáveis em todas as fases da vida.
          </p>
          <a className="pet-hero__button" href="#contato">Agendar atendimento</a>
        </div>
      </section>

      <section className="pet-section" id="servicos">
        <div className="pet-section__heading">
          <p className="pet-section__eyebrow">Para o bem-estar</p>
          <h2>Nossos Serviços e Produtos</h2>
          <p>Soluções práticas para o dia a dia do seu pet.</p>
        </div>
        <div className="pet-services">
          <article className="pet-card">
            <span className="pet-card__number">01</span>
            <h3>Banho e Tosa</h3>
            <p>Atendimento tranquilo com produtos adequados ao tipo de pelagem e pele de cada animal.</p>
          </article>
          <article className="pet-card">
            <span className="pet-card__number">02</span>
            <h3>Rações e Petiscos</h3>
            <p>Opções para filhotes, adultos, idosos e dietas específicas, sempre com procedência.</p>
          </article>
          <article className="pet-card">
            <span className="pet-card__number">03</span>
            <h3>Farmácia e Higiene</h3>
            <p>Antipulgas, vermífugos e itens de higiene pensados para segurança e conforto em casa.</p>
          </article>
        </div>
      </section>

      <section className="pet-section pet-section--tinted" id="dicas">
        <div className="pet-section__heading">
          <p className="pet-section__eyebrow">Cuidados no dia a dia</p>
          <h2>Guia Rápido de Cuidados</h2>
        </div>
        <ul className="pet-tips">
          <li><strong>Água fresca sempre disponível</strong><span>Troque a água diariamente e higienize os utensílios.</span></li>
          <li><strong>Vacinação e prevenção em dia</strong><span>Mantenha a carteirinha atualizada e siga orientações veterinárias.</span></li>
          <li><strong>Estímulo físico e mental</strong><span>Passeios, brinquedos seguros e momentos de interação reduzem a ansiedade.</span></li>
          <li><strong>Adaptação gradual</strong><span>Introduza rações e novos produtos aos poucos para evitar desconfortos.</span></li>
        </ul>
      </section>

      <section className="pet-section" id="contato">
        <div className="pet-section__heading">
          <p className="pet-section__eyebrow">Estamos aqui</p>
          <h2>Atendimento e Localização</h2>
        </div>
        <div className="pet-contact">
          <div><span>Endereço</span><strong>Rua Exemplo, 123 — Centro<br />Sua Cidade - UF</strong></div>
          <div><span>Horário</span><strong>Segunda a sexta: 8h às 18h<br />Sábado: 8h às 14h</strong></div>
          <div><span>Contato</span><strong>(00) 00000-0000<br />contato@companheirofiel.com.br</strong></div>
        </div>
      </section>
    </>
  )
}