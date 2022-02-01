import { useEffect, useCallback, useState } from "react";

import moment from "moment";

import { Layout, Loading, Table, Header } from "components";
import DragonServices from "services/DragonService/DragonServices";

import * as S from "./sytles";

const Home = () => {
  const [dragons, setDragons] = useState([]);
  const [loading, setLoading] = useState(true);

  const getDragonList = useCallback(async () => {
    const { data } = await DragonServices.findAll().finally(() => { setLoading(false) });
    setDragons(data);
  }, []);

  useEffect(() => {
    getDragonList();
  }, [getDragonList]);

  const handleEdit = (e: { stopPropagation: () => void; }, id: number) => {
    e.stopPropagation();
    window.location.href = `create_edit?id=${id}`
  }

  return (
    <Layout>
      <S.Container>
        <Loading loading={loading}>
          <div className="headerWrapper">
            <Header title="LISTAGEM" />
            <S.Button onClick={() => { window.location.href = "create_edit" }}>Adicionar</S.Button>
          </div>
          <Table head={[{ name: "Dragão" }, { name: "Tipo" }, { name: "Criado em" }]}>
            {dragons.map((dragon: any) => (
              <tr
                key={dragon?.id}
                className="is-detailsLink"
                onClick={() => { window.location.href = `detail?id=${dragon?.id}` }}
              >
                <td>{dragon?.name}</td>
                <td>{dragon?.type}</td>
                <td className="projectListLastTd">{moment(dragon?.createdAt).format("DD/MM/YYYY")}</td>
                <td className="editLabel"   >
                <S.Button onClick={(e) => {handleEdit(e, dragon?.id)}}>Editar</S.Button>
                </td>
              </tr>
            ))}
          </Table>
        </Loading>
      </S.Container>
    </Layout>
  )
};

export default Home;