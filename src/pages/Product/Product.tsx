import Header from '@/components/Header/Header';
import { Table } from 'antd';
import React, { useEffect, useReducer } from 'react';

import * as S from './Product.styles';
import * as ProductService from './Product.service';
import { InitialState, Params } from './Product.types';
import { useNavigate } from 'react-router-dom';

export default function Product() {
  const navigate = useNavigate();
  const [state, setState] = useReducer((s: InitialState, changeState: InitialState) => ({ ...s, ...changeState }), {
    dataSource: [],
    pagination: {
      current: 1,
      pageSize: 10,
    },
    loading: false,
    total: 0,
  });

  const columns = [
    { title: 'Id', key: 'id', dataIndex: 'id', width: 100 },
    { title: 'Descrição', key: 'descricao', dataIndex: 'descricao' },
  ];

  const onRefresh = async (params?: Params) => {
    setState({ loading: true });
    if (params?.pageSize) setState({ pagination: { pageSize: params.pageSize } });
    const [dataSource, total] = await ProductService.getAll(params);
    setState({ dataSource, total, loading: false });
  };

  const onAdd = () => {
    navigate('./new');
    console.log('call on add method');
  };

  useEffect(() => {
    onRefresh();
  }, []);

  return (
    <S.Wrapper direction="vertical">
      <Header title="Products" onRefresh={onRefresh} onAdd={onAdd} />
      <Table
        data-testid="Table"
        rowKey={(record) => record.id}
        pagination={state.pagination}
        loading={state.loading}
        dataSource={state.dataSource}
        columns={columns}
        onChange={onRefresh}
        scroll={{ y: 550 }}
      />
    </S.Wrapper>
  );
}
