import { Params } from './Product.types';

export const getAll = (params?: Params): Promise<[any, number]> => {
  const data = [];

  for (let i = 0; i < 100; i += 1) {
    data.push({ id: i + 1, descricao: `any description ${i + 1}` });
  }

  if (params?.pageSize) data.filter((item, i) => i < Number(params.pageSize));

  return Promise.resolve([data, data.length]);
};
