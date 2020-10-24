import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github.</Title>

      <Form>
        <input placeholder="Digite o nome do repositório " />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/57605630?s=460&u=405fc739a67a260aff0fa391c4de313a0433c362&v=4"
            alt="Tarcio Rocha"
          />
          <div>
            <strong>tarcio11 / mysql-comandos</strong>
            <p>Uma série de comandos para se virar no MySQL.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/57605630?s=460&u=405fc739a67a260aff0fa391c4de313a0433c362&v=4"
            alt="Tarcio Rocha"
          />
          <div>
            <strong>tarcio11 / mysql-comandos</strong>
            <p>Uma série de comandos para se virar no MySQL.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/57605630?s=460&u=405fc739a67a260aff0fa391c4de313a0433c362&v=4"
            alt="Tarcio Rocha"
          />
          <div>
            <strong>tarcio11 / mysql-comandos</strong>
            <p>Uma série de comandos para se virar no MySQL.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
