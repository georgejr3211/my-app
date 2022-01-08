export type InitialState = {
  dataSource?: any[];
  loading?: boolean;
  pagination?: {
    current?: number;
    pageSize?: number;
  };
  total?: number;
};

export type Params = {
  pageSize?: number;
};
