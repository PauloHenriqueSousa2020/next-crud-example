interface LoadingProps {
  loading: boolean;
  children: any;
};


export const Loading = ({ loading, children }: LoadingProps) => {
  return <>{loading ? <p>Carregando...</p> : children} </>;
};