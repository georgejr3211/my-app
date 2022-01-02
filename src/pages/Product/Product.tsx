import Header from '@/components/Header/Header';
import React from 'react';
import * as S from './Product.styles';

export default function Product() {
  const onRefresh = (params?: any) => {
    console.log('call on refresh method', params);
  };
  return (
    <S.Wrapper>
      <Header title="Products" onRefresh={onRefresh} />
    </S.Wrapper>
  );
}
