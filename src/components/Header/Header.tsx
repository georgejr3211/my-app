import Title from 'antd/lib/typography/Title';
import React from 'react';
import * as S from './Header.styles';

interface Props {
  title: string;
  onAdd?(): void;
  onRefresh?(params?: any): void;
}

export default function Header({ title, onAdd = () => null, onRefresh = () => null }: Props) {
  const defaultRowsLimit = 10;

  const changeRowLimit = (e: any) => {
    onRefresh({ limit: +e.target.value });
  };

  return (
    <S.Wrapper>
      <Title>{title}</Title>
      <select aria-label="show-limit-rows" defaultValue={defaultRowsLimit} onChange={changeRowLimit}>
        <option aria-label="row-option" value={10}>
          10
        </option>
        <option aria-label="row-option" value={20}>
          20
        </option>
        <option aria-label="row-option" value={30}>
          30
        </option>
        <option aria-label="row-option" value={40}>
          40
        </option>
        <option aria-label="row-option" value={50}>
          50
        </option>
      </select>
      <button type="button" onClick={() => onRefresh()}>
        Atualizar
      </button>
      <button type="button" onClick={() => onAdd()}>
        Adicionar
      </button>
    </S.Wrapper>
  );
}
