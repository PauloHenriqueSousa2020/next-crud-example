import * as S from "./styles";

interface TableProps {
  head?: any;
  children: any;
}

export const Table = ({ head, children }: TableProps) => {
  return (
    <S.Container className="containerTable">
      <table className="table">
        <>
          <S.TableHead>
            <tr className="tableRow" data-testid="headtr">
              {head.map((item: any, index: number) => (
                <th
                  className="S.er"
                  key={index}
                >
                  {item.name}
                </th>
              ))}
            </tr>
          </S.TableHead>
          <S.TableBody>{children}</S.TableBody>
        </>
      </table>
    </S.Container>
  );
};