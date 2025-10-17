export type ContentReceiveT<T> = {
  data: T;

  meta: {
    pagination: string;
  };
};
