//Componente = Coisas que se rempetem na aplicação
// o código é reutilizavel

type PropsLoading = {
  isLoading: boolean;
};

export function Loading({ isLoading }: PropsLoading) {
  return <div>{isLoading && <h1>Carregando...</h1>}</div>;
}
