import { Button, Select } from 'antd';
import Title from 'antd/lib/typography/Title';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './Header.styles';

interface Props {
  title: string;
  type?: 'index' | 'form';
  onAdd?(): void;
  onRefresh?(params?: any): void;
}

export default function Header({ title, type = 'index', onAdd = () => null, onRefresh = () => null }: Props) {
  const navigate = useNavigate();
  const defaultRowsLimit = 10;
  const limits = [
    { value: 10, label: '10' },
    { value: 20, label: '20' },
    { value: 30, label: '30' },
    { value: 40, label: '40' },
    { value: 50, label: '50' },
  ];

  const changeRowLimit = (e: any) => {
    onRefresh({ pageSize: e });
  };

  const onClose = () => {
    navigate('../');
  };

  return (
    <S.Wrapper>
      <Title>{title}</Title>
      <S.SpaceWrapper>
        {type === 'index' && (
          <>
            <Select options={limits} defaultValue={defaultRowsLimit} style={{ width: 120 }} onChange={changeRowLimit} />
            <Button onClick={() => onRefresh()}>Atualizar</Button>
            <Button onClick={() => onAdd()}>Adicionar</Button>
          </>
        )}

        {type === 'form' && <Button onClick={onClose}>Fechar</Button>}
      </S.SpaceWrapper>
    </S.Wrapper>
  );
}
